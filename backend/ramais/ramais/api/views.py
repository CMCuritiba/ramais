# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token 
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import generics
from rest_framework.filters import OrderingFilter, SearchFilter

from django_filters.rest_framework import DjangoFilterBackend

from ..util.auth import CUDPermission
from .models import Ramal
from .models import SetorFuncionarioRamal
from .serializers import RamalSerializer
from .serializers import SetorFuncionarioRamalSerializer
from consumer.lib import helper

'''
class HelloView(APIView):
    #permission_classes = [CUDPermission,]
    permission_classes = (IsAuthenticated,)
    authentication_classes = [TokenAuthentication, ]

    def get(self, request):
        #print(request.user.username)
        #print(request.data)
        #token = Token.objects.get_or_create(user=request.user)
        #print(token[0].created)
        content = {'zacatoken': 'Hihihihi Didi !!!'}
        return Response(content)
'''
class RamalViewSet( 
                    mixins.CreateModelMixin,
                    mixins.ListModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):

    permission_classes = (CUDPermission,)
    authentication_classes = [TokenAuthentication, ]
    queryset = Ramal.objects.all()
    serializer_class = RamalSerializer

class SetorFuncionarioRamalListView(generics.ListAPIView):

    permission_classes = (CUDPermission,)
    authentication_classes = [TokenAuthentication, ]                    
    serializer_class = SetorFuncionarioRamalSerializer    
    queryset = SetorFuncionarioRamal.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filter_fields = ('set_nome', 'pes_nome', )
    ordering_fields = ('set_nome', 'pes_nome', )