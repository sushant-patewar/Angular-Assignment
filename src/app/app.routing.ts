import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';

export const AppRoutes: Routes = [
    { path: '', component: LogoutComponent },
    { path: 'users', component: UsersComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LogoutComponent },

];