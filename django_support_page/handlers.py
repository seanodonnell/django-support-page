from django.conf import settings
from django.core import exceptions
from django.core.mail import send_mail
from django.utils.importlib import import_module

def init_support_handlers():
    handler_paths = getattr(settings, "SUPPORT_PAGE_HANDLERS",
                                ["django_support_page.handlers.mail_handler"])
    handlers = []

    for handler_path in handler_paths:
        try:
            h_module, h_funcname = handler_path.rsplit('.', 1)
        except ValueError:
            raise exceptions.ImproperlyConfigured(
                '%s isn\'t a django_support_page handler' % handler_path)

        try:
            mod = import_module(h_module)
        except ImportError, e:
            msg = 'Error importing django_support_page handler %s: "%s"'
            raise exceptions.ImproperlyConfigured(msg % (h_module, e))

        try:
            h_func = getattr(mod, h_funcname)
        except AttributeError:
            raise exceptions.ImproperlyConfigured('django_support_page handle "%s" does not define a "%s" function' % (h_module, h_funcname))

        handlers.append(h_func)
    return handlers

def mail_handler(subject, body, from_name, from_email, data, files,
                    fail_silently, request):
    send_to = getattr(settings, "DJANGO_SUPPORT_EMAIL_TO", None)
    #TEST
    if not send_to:
        raise Exception(
            """Please add DJANGO_SUPPORT_EMAIL_TO to your settings.py,
                 It should contain a list of email addresses to send support
                 email to.""")
    body += "\r\n\r\n*******************************\r\n"
    body += "  BROWSER DATA  \r\n"
    body += "*******************************\r\n"
    for k in sorted(data.keys()):
        body += "%s  : %s\r\n" %(k, data[k])
    #TEST
    send_mail(subject, body, from_email, send_to, fail_silently=fail_silently)


