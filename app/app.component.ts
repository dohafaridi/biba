import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*others', name: 'Others', redirectTo: ['Home'] },
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent { }