import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'wall', component: WallComponent },
  { path: 'post/:postId', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
