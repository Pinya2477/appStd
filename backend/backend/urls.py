
from django.contrib import admin
from django.urls import path, include
from std import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'std', views.StdViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    
]
