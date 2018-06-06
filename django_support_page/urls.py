from django.urls import path

from django_support_page import views

urlpatterns = [
    path('/', views.support_page, name="support_index"),
    path('sent/', views.support_form_sent, name="support_sent"),
]
