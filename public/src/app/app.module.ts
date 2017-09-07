import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './users-list/user.service';
import { UserComponent } from './users-list/user/user.component';
import { TopicService } from './topics-list/topic.service';
import { TopicComponent } from './topics-list/topic/topic.component';
import { UserPostsComponent } from './users-list/user/user-posts/user-posts.component';
import { UserTopicsComponent } from './users-list/user/user-topics/user-topics.component';

const appRoutes: Routes = [
  {path: 'topics', component: TopicsListComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'topic/:id', component: TopicComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    UsersListComponent,
    UserComponent,
    TopicComponent,
    UserPostsComponent,
    UserTopicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  providers: [
    UserService,
    TopicService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
