import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: BookListComponent },
    { path: 'add-book', component: AddBookComponent},
    { path: 'signup-user', component: SignupUserComponent},
    { path: 'login-user', component: LoginUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [BookListComponent, AddBookComponent, SignupUserComponent, LoginUserComponent]