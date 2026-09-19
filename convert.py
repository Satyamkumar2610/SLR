import os
import re
from pathlib import Path

def style_to_react(style_str):
    # Very basic style converter for simple inline styles found in these files
    # E.g. margin-top: 8px; color: var(--color-white); -> marginTop: "8px", color: "var(--color-white)"
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    react_styles = []
    for part in parts:
        if ':' not in part: continue
        k, v = part.split(':', 1)
        k = k.strip()
        v = v.strip().replace('"', "'")
        # camelCase the key unless it's a CSS variable
        if k.startswith('--'):
            react_k = f'"{k}"'
        else:
            react_k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        
        # If value is purely numeric, we could leave it as a number, but string is safe
        react_styles.append(f'{react_k}: "{v}"')
    
    if any('"' + k + '"' in k for k in react_styles if k.startswith('"--')):
        # Has CSS variables, needs 'as React.CSSProperties'
        return '{{' + ', '.join(react_styles) + '} as React.CSSProperties}'
    return '{{' + ', '.join(react_styles) + '}}'

def html_to_jsx(html):
    # Remove DOCTYPE, html, head, script
    html = re.sub(r'<!DOCTYPE html>', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<html[^>]*>|</html>', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<head>.*?</head>', '', html, flags=re.IGNORECASE|re.DOTALL)
    html = re.sub(r'<script.*?</script>', '', html, flags=re.IGNORECASE|re.DOTALL)
    
    # Remove nav and footer
    html = re.sub(r'<nav[^>]*>.*?</nav>', '', html, flags=re.IGNORECASE|re.DOTALL)
    html = re.sub(r'<div class="stage-container"[^>]*>\s*<footer[^>]*>.*?</footer>\s*</div>', '', html, flags=re.IGNORECASE|re.DOTALL)
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, flags=re.IGNORECASE|re.DOTALL)
    if body_match:
        html = body_match.group(1)
        
    # Replace class with className
    html = re.sub(r'\bclass="', 'className="', html)
    
    # Replace for with htmlFor
    html = re.sub(r'\bfor="', 'htmlFor="', html)
    
    # Self-closing tags
    html = re.sub(r'<(img|br|hr|input|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', html, flags=re.IGNORECASE)
    
    # Replace inline styles
    def style_replacer(match):
        return f'style={style_to_react(match.group(1))}'
    
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    # Fix HTML comments to JSX comments
    html = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', html, flags=re.DOTALL)
    
    return html.strip()

def process_files():
    old_html_dir = Path("old-html")
    app_dir = Path("src/app")
    
    for file_path in old_html_dir.glob("*.html"):
        if file_path.name == "index.html": continue
        
        name = file_path.stem
        content = file_path.read_text(encoding='utf-8')
        
        jsx_content = html_to_jsx(content)
        
        # Create directory
        page_dir = app_dir / name
        page_dir.mkdir(parents=True, exist_ok=True)
        
        # Write page.tsx
        out_content = f"""import Link from "next/link";

export default function {name.replace('-', ' ').title().replace(' ', '')}Page() {{
  return (
    <main>
      {jsx_content}
    </main>
  );
}}
"""
        (page_dir / "page.tsx").write_text(out_content, encoding='utf-8')
        print(f"Created {page_dir}/page.tsx")

if __name__ == "__main__":
    process_files()
