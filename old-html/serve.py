import http.server
import socketserver
import os
import urllib.parse

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Decode URL path
        parsed_path = urllib.parse.urlparse(self.path).path
        local_path = self.translate_path(parsed_path)
        
        # If the requested path is not a file and doesn't end with .html
        if not os.path.exists(local_path) and not local_path.endswith('.html'):
            # Check if an .html version exists
            if os.path.exists(local_path + '.html'):
                # Append .html to the path so the SimpleHTTPRequestHandler can serve it
                self.path = parsed_path + '.html'
                if urllib.parse.urlparse(self.path).query:
                    self.path += '?' + urllib.parse.urlparse(self.path).query

        return super().do_GET()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    print("This custom server automatically appends .html to extensionless URLs (like /insights -> /insights.html)")
    httpd.serve_forever()
