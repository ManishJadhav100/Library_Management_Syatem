from django.urls import path
from . import views

urlpatterns = [
    # Books
    path('books/<int:pk>/', views.BookRetrieveUpdateDestroy.as_view()),
    path('books/create/', views.BookCreateList.as_view()),
    path('books/', views.BookList.as_view()),

    # Auth
    path('signup/', views.signup),
    path('login/', views.login),
]