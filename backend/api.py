from rest_framework import viewsets
from rest_framework import permissions
from backend.serializers import UserSerializer
from backend.models import User

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]