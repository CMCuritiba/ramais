# -*- coding: utf-8 -*-
from .base import *  # noqa

"""
Production Configurations
"""

ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=['*', ])
# END SITE CONFIGURATION

INSTALLED_APPS += ['gunicorn', ]

STATIC_ROOT = '/var/www/html/ramais/static'

MEDIA_ROOT = '/var/www/html/ramais/media'

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "console": {
            "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
        "file" : {
            "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
    },
    "handlers": {
        "console": {
            "level": "INFO",
            "class": "logging.StreamHandler",
            "formatter": "console",
        },
        "file" : {
            "level": "INFO",
            "class": "logging.FileHandler",
            "filename": "votacao.log",
            "formatter": "file",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": "ERROR",  
            "propagate": True,
        },
         'django.request': {
            'handlers': ['console'],
            'level': 'ERROR',
            'propagate': False,
        },
        "": {
            "handlers": ["console", "file"],
            "level": "INFO",  
            "propagate": True,
        },
    },
}