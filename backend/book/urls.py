from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name='index'),

    # Auth
    path('signup/', views.signupuser, name='signupuser'),
    path('login/', views.loginuser, name='loginuser'),
    path('logout/', views.logoutuser, name='logoutuser'),

    # Book
    path('addBook/', views.addBook, name='addBook'),
    path('editBookForm/<int:book_id>', views.editBookForm, name='editBookForm'),
    path('editBook', views.editBook, name='editBook'),
    path('deleteBook/<int:book_id>', views.deleteBook, name='deleteBook'),

]