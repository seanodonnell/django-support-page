from django.conf import settings
from django.core.mail import send_mail

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


