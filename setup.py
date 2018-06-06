import os
import sys

try:
    from setuptools import setup, find_packages
except:
    from distutils.core import setup

LONG_DESCRIPTION = """
A resusable django app to provide a support request page that automatically detects and reports information about the end users browser.
"""

setup(
    name = "django-support-page",
    version = "0.1",
    description = 'django support page',
    long_description = LONG_DESCRIPTION,
    author = "Sean O'Donnell",
    author_email = "sean@odonnell.nu",
    url = "https://github.com/seanodonnell/django-support-page",
    py_modules = ["django_support_page"],
    keywords = 'django',
    classifiers=[
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Framework :: Django",
        "Environment :: Web Environment",
    ],
    zip_safe = False,
    packages = ['django_support_page'],
    include_package_data=True,
)
