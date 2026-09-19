import os
import re
from pathlib import Path

def fix_files():
    app_dir = Path("src/app")
    for file_path in app_dir.glob("**/*.tsx"):
        content = file_path.read_text(encoding='utf-8')
        
        # fix the malformed style tag
        # The previous run produced: style={"--thread-len": "1280"} as React.CSSProperties}
        # We need to change it to: style={{ "--thread-len": "1280" } as React.CSSProperties}
        content = re.sub(r'style=\{"(--[^"]*)":\s*"([^"]*)"\}\s*as\s*React\.CSSProperties\}', r'style={{ "\1": "\2" } as React.CSSProperties}', content)
        
        file_path.write_text(content, encoding='utf-8')
        print(f"Fixed {file_path}")

if __name__ == "__main__":
    fix_files()
