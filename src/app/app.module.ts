import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';  //import changes
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabindingComponent } from './databind/databinding/databinding.component';
import { ClassStyleComponent } from './ClassStyle/class-style/class-style.component';
import { EventComponent } from './EventBinding/event/event.component';
import { TwoWayComponent } from './TwoWayBinding/two-way/two-way.component';
import { UsersServiceService } from './users-service.service';
import { CommentComponent } from './components/comment/comment.component';
import { TodosComponent } from './components/todos/todos.component';
import { InterpolationComponent } from './databind/interpolation/interpolation.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BlogComponent,
    RegisterComponent,
    DatabindingComponent,
    ClassStyleComponent,
    EventComponent,
    TwoWayComponent,
    CommentComponent,
    TodosComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, //changes
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
