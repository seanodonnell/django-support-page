from django.conf.urls.defaults import *

urlpatterns = patterns('',
    (r'^support/', include("django_support_page.urls")),
)

