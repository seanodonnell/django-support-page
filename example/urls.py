from django.conf.urls.defaults import *
from django.conf import settings
from django.views.generic.simple import direct_to_template
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', direct_to_template, {"template":"index.html"}),
    (r'^support/', include("django_support_page.urls")),
)

if settings.DEBUG:
        urlpatterns += patterns('django.contrib.staticfiles.views',
                url(r'^static/(?P<path>.*)$', 'serve'),
                    )
