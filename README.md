# Library_Management_Syatem

-----------------------
# Backend
-----------------------

1) Creare a virtual anvironment of python in backend folder using below command.
python -m venv venv

2) Activate the virtual environment
venv\Scripts\activate

3)Install all python packages present in requirements.txt file using below command.
pip install -r requirements.txt

4)Run Django server at default port localhost:8000
python manage.py runserver

-----------------------
# Database Connection
-----------------------
1) Create a database named as library

2) I have used below credentials in my database you can change as per your local database.
'NAME': 'library',
'HOST': 'localhost',
'USER': 'root',
'PASSWORD': 'root'

-----------------------
# Backend APIs
-----------------------
1)Get All Books
api url -> http://localhost:8000/api/books/
It can retrive all book records presend in database.

2)Add New Book
api url -> http://localhost:8000/api/books/create/
It is post call used to add new book record in database.

3)Edit Book
api url -> http://localhost:8000/api/books/<int:pk>/
It is put call used to edit perticular book based on its id field present in database.

4)Delete Book
api url -> http://localhost:8000/api/books/<int:pk>/
It is delete call used to remove perticular book based on its id field present in database.

5)Signup User
api url -> http://localhost:8000/api/signup/
It is used to create new user and saved its username and password(hash format) in database.

6)Login User
api url -> http://localhost:8000/api/login/
It is used to login perticular user base on its credentials provided in response.
It protect to add duplicate records store in database based on username(email).






