from django.conf.urls.defaults import *
from django.views.generic.simple import direct_to_template
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', direct_to_template, {"template":"index.html"}),
    (r'^support/', include("django_support_page.urls")),
)
