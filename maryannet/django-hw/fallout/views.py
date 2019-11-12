from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Char
from .serializers import CharSerializer

# Create your views here.
class CharList(ListCreateAPIView):
    queryset = Char.objects.all()
    serializer_class = CharSerializer


class CharDetail(RetrieveUpdateDestroyAPIView):
    queryset = Char.objects.all()
    serializer_class = CharSerializer