from django import forms
from handlers import init_support_handlers

support_handlers = init_support_handlers()

class SupportForm(forms.Form):
    name = forms.CharField(max_length=255)
    email = forms.EmailField(max_length=100)
    subject = forms.CharField(max_length=100)
    body = forms.CharField(widget=forms.TextInput())

    def save(self, data=None, name=None, files=None, request=None,
                fail_silently=False):

        client_info = self.collect_client_info(request)
        for handler in support_handlers:
            handler(from_name=self.cleaned_data["name"],
                    from_email=self.cleaned_data["email"],
                    subject=self.cleaned_data["subject"],
                    body=self.cleaned_data["body"], data=None,
                    fail_silently=fail_silently, files=None, request=None)

    def collect_client_info(self, request):
        client_info = {}
        client_info["REMOTE_ADDR"] = request.META.get("REMOTE_ADDR", None)
        client_info["REMOTE_HOST"] = request.META.get("REMOTE_HOST", None)
        client_info["REMOTE_USER"] = request.META.get("REMOTE_USER", None)
        client_info["USER"] = request.user.username
        #if not anonymous...
        return client_info
