from django.shortcuts import render
from .serialization import RegisterUserSerialization
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import User
from rest_framework.simplejwt.tokens import RefreshToken, TokenError

# Create your views here.


class RegisterUser(generics.CreateAPIView):
    serializer_class = RegisterUserSerialization

    def post(self, request):
        
        serializer = RegisterUserSerialization(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)