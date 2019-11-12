from django.urls import path
from .views import CharList, CharDetail

urlpatterns = [
    path('chars', CharList.as_view()),
    path('chars/<int:pk>', CharDetail.as_view())
]