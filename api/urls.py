
from django.conf.urls import url, include
from api import views


urlpatterns = [
    url('^items/$', views.ItemsView.as_view(), name='items'),
    url('^items/(?P<pk>\d+)/$', views.ItemView.as_view(), name='item'),
]
