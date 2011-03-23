from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext

from forms import SupportForm


def support_page(request, form_class=SupportForm,
                 template_name='django_support_page/support_form.html',
                 success_url=None, extra_context=None, fail_silently=False):
    if success_url is None:
        success_url = reverse('support_sent')
    if request.method == 'POST':
        form = form_class(data=request.POST, files=request.FILES)
        if form.is_valid():
            #TEST failure url
            form.save(fail_silently=fail_silently, request=request)
            return HttpResponseRedirect(success_url)
    else:
        form = form_class()
    data = dict(form=form)
    if extra_context is None:
        extra_context = {}
    data.update(extra_context)
    #for key, value in extra_context.items():
    #    context[key] = callable(value) and value() or value

    return render_to_response(template_name, data,
                              context_instance=RequestContext(request))

def support_form_sent(request,
                        template_name='django_support_page/form_sent.html',
                        extra_context=None):
    if extra_context is None:
        extra_context = {}
    return render_to_response(template_name,extra_context,
                                context_instance=RequestContext(request))
