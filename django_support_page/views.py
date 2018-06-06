from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext

from .forms import SupportForm


def support_page(request, form_class=SupportForm,
                 template_name='django_support_page/support_form.html',
                 success_url=None, extra_context=None, fail_silently=False):
    """
    Displays the support page and handles the form action

    By default, use the template ''django_support_page/support_form.html'';
    to change this, pass the name of a template as the keyword argument
    ''template_name''.

    **Optional arguments**

    ''form_class''
        Allows an alternate form class to be passed to the view, any
        replacement form class must take the arguments fail_silently, and
        request, in that order. See the forms documentation for details.

    ''template_name''
        A custom template to use

    ''success_url''
        The url to send the user to after the form has been sent, defaults to
        the support_sent view

    ''extra_context''
        A dictionary of variables to add to the template context. Any callable
        object in this dictionary will be called to produce the end result
        which appears in the context.

    ''fail_silently''
        Should an error be raised if one or more of the handlers fail to send.
        Defaults to False.

    **Context:**

    ''form''
        The form object to display

    Any extra variables supplied in the ''extra_context'' argument (see above).

    **Template:**

    django_support_page/support_form.html or ''template_name'' keyword
    argument.

    """
    if success_url is None:
        success_url = reverse('support_sent')
    if request.method == 'POST':
        form = form_class(data=request.POST, files=request.FILES)
        if form.is_valid():
            # TEST failure url
            form.save(fail_silently=fail_silently, request=request)
            return HttpResponseRedirect(success_url)
    else:
        form = form_class()
    data = dict(form=form)
    if extra_context is None:
        extra_context = {}
    for key, value in list(extra_context.items()):
        data[key] = callable(value) and value() or value

    return render_to_response(template_name, data,
                              context_instance=RequestContext(request))


def support_form_sent(request,
                      template_name='django_support_page/form_sent.html',
                      extra_context=None):
    """
    Displays a message informing the user that their message has been sent

    By default, use the template ''django_support_page/form_sent.html'';
    to change this, pass the name of a template as the keyword argument
    ''template_name''.

    **Optional arguments**

    ''template_name''
        A custom template to use

    ''extra_context''
        A dictionary of variables to add to the template context. Any callable
        object in this dictionary will be called to produce the end result
        which appears in the context.

    **Context:**

    Any extra variables supplied in the ''extra_context'' argument (see above).

    **Template:**

    django_support_page/form_sent.html or ''template_name'' keyword
    argument.

    """
    data = {}
    if extra_context is None:
        extra_context = {}
    for key, value in list(extra_context.items()):
        data[key] = callable(value) and value() or value

    return render_to_response(template_name, data,
                              context_instance=RequestContext(request))
