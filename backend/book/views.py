from django.shortcuts import redirect, render
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from .models import Book
from .forms import AddBookForm
from .models import Book

# Create your views here.


def index(request):
    books = Book.objects.all()
    return render(request, 'index.html', {'books':books})

def signupuser(request):
    if request.method == 'GET':
        return render(request, 'signupuser.html', {'form':UserCreationForm()})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('index')
            except IntegrityError:
                return render(request, 'signupuser.html', {'form':UserCreationForm(), 'error':'That username has already been taken. Please choose a new username'})
        else:
            return render(request, 'signupuser.html', {'form':UserCreationForm(), 'error':'Passwords did not match'})

def loginuser(request):
    if request.method == 'GET':
        return render(request, 'loginuser.html', {'form':AuthenticationForm()})
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'loginuser.html', {'form':AuthenticationForm(), 'error':'Username and password did not match'})
        else:
            login(request, user)
            return redirect('index')

@login_required
def logoutuser(request):
    if request.method == 'POST':
        logout(request)
        return redirect('index')


@login_required
def addBook(request):
    if request.method == 'GET':
        return render(request, 'addbook.html', {'form':AddBookForm()})
    else:
        try:
            form = AddBookForm(request.POST)
            newbook = form.save(commit=False)
            newbook.user = request.user
            newbook.save()
            return redirect('index')
        except ValueError:
            return render(request, 'addbook.html', {'form':AddBookForm(), 'error':'Bad data passed in. Try again.'})

@login_required
def editBookForm(request, book_id):
    book = Book.objects.get(pk=book_id)
    return render(request, 'editbookform.html', {'book':book})

@login_required
def editBook(request):
    if request.method == "POST":
        id = request.POST.get('id')
        title = request.POST.get('title')
        author = request.POST.get('author')
        category = request.POST.get('category')
        publication = request.POST.get('publication')
        publication_date = request.POST.get('publication_date')
        price = request.POST.get('price')
        try:
            #get old info
            book = Book.objects.get(pk=id)
            book.id = id
            book.title = title
            book.author = author
            book.category = category
            book.publication = publication
            book.publication_date = publication_date
            book.price = price
            book.save()
            return redirect('index')
        except ValueError:
            return render(request, 'editbookform.html', {'error':'Bad data passed in. Try again.'})

@login_required
def deleteBook(request, book_id):
    book = Book.objects.get(pk=book_id)
    book.delete()
    return redirect('index')