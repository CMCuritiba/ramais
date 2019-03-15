# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from django.views.generic import TemplateView
from django.contrib.messages.views import SuccessMessageMixin
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
from . import views

router =  routers.DefaultRouter()
router.register('ramais', views.RamalViewSet)

urlpatterns = [
    #path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('ramal/', include(router.urls)),
    path('listagem/', views.SetorFuncionarioRamalListView.as_view(), name='test-list'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
