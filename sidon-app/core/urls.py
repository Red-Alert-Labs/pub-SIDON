from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('requirements', views.RequirementsGroupView)
router.register('commoncriteria', views.CommonCriteriaView)


urlpatterns = [
    path('', include(router.urls)),
    path('user/', views.CurrentUserView.as_view()),
    path('scan/', views.ScanView.as_view()),
]
