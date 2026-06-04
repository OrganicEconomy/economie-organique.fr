AUTHOR = 'Suipotryot'
SITENAME = "L'économie organique"
SITEURL = ""

PATH = "content"

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'fr'

THEME = "./pelican-themes/pico-organique"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ('X/Twitter (@HommesPropres)', 'https://x.com/HommesPropres'),
    ("Another social link", "#"),
)

PLUGINS = []

DEFAULT_PAGINATION = 10

STATIC_PATHS = ['images', 'scripts', 'css']

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
