from django.contrib.auth.models import User, Group
from rest_framework import viewsets

from IdleRagnarok.model import Chars, Guilds
from IdleRagnarok.serializers import UserSerializer, GroupSerializer, \
    CharsSerializer, GuildsSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class CharsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Chars.objects.filter(account_id=2000002)
    serializer_class = CharsSerializer


class GuildsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Guilds.objects.all()
    serializer_class = GuildsSerializer
