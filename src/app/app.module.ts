import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthserviceService } from './authservice.service';
import { GetPostsService } from './get-posts.service';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorHandlerComponent, ErrorHandlerModalComponent } from './error-handler/error-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent,
    LogoutComponent,
    PostDetailComponent,
    ErrorHandlerComponent,
    ErrorHandlerModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AuthserviceService,
    GetPostsService,
    ErrorHandlerComponent
  ],
  entryComponents: [
    ErrorHandlerModalComponent,
    ErrorHandlerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
