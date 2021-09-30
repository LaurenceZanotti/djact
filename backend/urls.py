from rest_framework import routers, urlpatterns
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet, 'users')

urlpatterns = router.urls