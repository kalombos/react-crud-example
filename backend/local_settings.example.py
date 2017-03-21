import os

DEBUG = True
ALLOWED_HOSTS = [
    '.localhost',
    '*'
]
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'crud',
        'USER': 'postgres',
        'PASSWORD': 'root',
        'HOST': 'localhost',
        'PORT': '5432',
        'TEST_CHARSET': 'utf8',
    }
}

CORS_ORIGIN_ALLOW_ALL = True
