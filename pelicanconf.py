AUTHOR = 'Suipotryot'
SITENAME = "Économie organique"
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

STATIC_PATHS = ['images', 'scripts', 'css', 'downloads', 'app']

# Pelican's content reader scans every .html file under content/ looking for
# an article/page (metadata in a <meta> tag) — including the built webapp's
# own index.html in content/app/, which has none and gets skipped, silently
# dropping it from the static copy. No hand-authored .html content exists on
# this site (everything else is Markdown), so disabling the HTML reader
# entirely is safe and leaves STATIC_PATHS' plain file copying unaffected.
READERS = {'html': None}

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

