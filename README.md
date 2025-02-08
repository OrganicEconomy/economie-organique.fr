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

now you can see the site on 127.0.0.1:8000
