# Installation in your existing GitHub repository

**Do not delete or replace your existing app files.** This package does not contain the app's original JavaScript and HTML.

1. Download and unzip this package.
2. Copy the three PNG files from `icons/` into the matching icon folder in your repository (or into a new `icons/` folder).
3. Open your existing `manifest.webmanifest`. Update its icon paths only if needed, for example:
   ```json
   {
     "icons": [
       { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
       { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
     ]
   }
   ```
   Preserve other manifest fields such as `name`, `start_url`, `scope`, and `display`.
4. For the full visual theme, add `dark-luxury-theme.css` to your existing project and link it from the current `index.html`, or carefully append its contents to the end of the existing stylesheet. Do not remove the existing CSS or JavaScript.
5. Commit/push changes and wait for GitHub Pages to publish.
6. Open the site in the phone browser first. Then close and reopen the installed app. Do not clear site storage; that may remove locally stored data.

## To create a fully integrated, ready-to-upload project ZIP
Upload your **current repository ZIP** here (download it from GitHub using Code → Download ZIP). I can then merge the redesign into the actual current files, update the manifest and cache version safely, and return a single integrated ZIP without replacing the app logic.
