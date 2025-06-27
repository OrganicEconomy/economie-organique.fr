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
pip3 install "pelican-share-post"
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
