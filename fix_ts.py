import os
import re
from pathlib import Path

def fix_files():
    app_dir = Path("src/app")
    for file_path in app_dir.glob("**/*.tsx"):
        content = file_path.read_text(encoding='utf-8')
        
        # completely remove onsubmit="..."
        content = re.sub(r'\bonsubmit="([^"]*)"', '', content)
        
        # fix string to number for tabindex, rows, cols
        def fix_num_attr(match):
            attr = match.group(1)
            val = match.group(2)
            if attr.lower() == 'tabindex':
                attr = 'tabIndex'
            return f'{attr}={{{val}}}'
            
        content = re.sub(r'\b(rows|cols|tabindex|tabIndex)="(\d+)"', fix_num_attr, content)
        
        file_path.write_text(content, encoding='utf-8')
        print(f"Fixed {file_path}")

if __name__ == "__main__":
    fix_files()
