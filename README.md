# economie-organique.fr

## Install

On linux mint :
```
apt install python3
apt install python3-pip
apt install python3.12-venv
source venv/bin/activate
pip3 install pelican
pip3 install "pelican[markdown]"
```

## Run it

First, build it :
```
source venv/bin/activate
pelican
```

Then run it :
```
pelican -l
```

Or, better, both auto-regenerate and serve : 
```
pelican --autoreload --listen
```

now you can see the site on 127.0.0.1:8000

## Windows

Under windows, I do :
```
python3 -m pelican --autoreload --listen
```

## Deploy

The site is manually copied to the `OrganicEconomy.github.io` repo (a sibling
folder) — there is no CI. Requires Node.js.

1. Build the webapp (in `organic-webapp`) :
   ```
   npm run build
   ```
2. Copy the build into `content/app/` and regenerate the site with the
   production config :
   ```
   npm run buildSite
   ```
3. Copy `output/` into `OrganicEconomy.github.io` (nothing is committed —
   review the diff it prints) :
   ```
   npm run pushToGithub
   ```
4. In `OrganicEconomy.github.io`, review, commit and push.

Both `buildSite` and `pushToGithub` replace the destination folder's content
to exactly match the source (deleting anything no longer there), instead of
only adding/overwriting — see `tools/replace-dir-contents.mjs`.