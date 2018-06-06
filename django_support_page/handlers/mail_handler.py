from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context


def mail_handler(subject, body, from_name, from_email, data, files,
                 fail_silently, request):
    send_to = getattr(settings, "DJANGO_SUPPORT_EMAIL_TO", None)
    # TEST
    if not send_to:
        raise Exception(
            """Please add DJANGO_SUPPORT_EMAIL_TO to your settings.py,
                 It should contain a list of email addresses to send support
                 email to.""")
    textemail = get_template("django_support_page/emails/email.txt")
    htmlemail = get_template("django_support_page/emails/email_html.txt")
    data = [(k, data[k]) for k in sorted(data.keys())]
    context = Context(dict(data=data, body=body, from_name=from_name,
                           from_email=from_email))
    text_content = textemail.render(context)
    html_content = htmlemail.render(context)
    msg = EmailMultiAlternatives(subject, text_content, from_email, send_to)
    msg.attach_alternative(html_content, "text/html")
    msg.send()
