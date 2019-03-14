# -*- coding: utf-8 -*-

from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework import permissions
from rest_framework import exceptions

class CUDPermission(permissions.IsAuthenticated):
    def has_permission(self, request, view):

        if request.method in permissions.SAFE_METHODS:
            return True
        username = request.user.username
        if username == 'nosfe':
            return True
        else:
            return False