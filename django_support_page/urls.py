from django.conf.urls.defaults import *

urlpatterns = patterns('django_support_page.views',
    url(r'^$', 'support_page', name="support_index"),
    url(r'^sent/$', 'support_form_sent', name="support_sent"),
)
