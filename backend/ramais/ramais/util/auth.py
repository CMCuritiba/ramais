# -*- coding: utf-8 -*-

from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.permissions import BasePermission
from rest_framework import exceptions

class CUDPermission(BasePermission):
    def has_permission(self, request, view):
        username = request.user.username
        if username == 'nosfe':
            return True
        else:
            return False
        return True