from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token 

class Command(BaseCommand):
    help = 'Cria os usuários de leitura e gravação e os seus tokens'

    def handle(self, *args, **options):
        try:
            zaca_user = User.objects.create_user('zaca', password='zaca')
            nosfe_user = User.objects.create_user('nosfe', password='nosfe')
            token_zaca = Token.objects.get_or_create(user=zaca_user)
            token_nosfe = Token.objects.get_or_create(user=nosfe_user)
            self.stdout.write(self.style.SUCCESS('Usuários e seus tokens criados com sucesso.'))
        except Exception as e:
            self.stdout.write(self.style.ERROR('Erro ao criar usuários e seus tokens. ' + e))