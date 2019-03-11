# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token 
from ..util.auth import CUDPermission

class HelloView(APIView):
    permission_classes = [CUDPermission,]
    authentication_classes = [TokenAuthentication, ]

    def get(self, request):
        #print(request.user.username)
        #print(request.data)
        #token = Token.objects.get_or_create(user=request.user)
        #print(token[0].created)
        content = {'zacatoken': 'Hihihihi Didi !!!'}
        return Response(content)