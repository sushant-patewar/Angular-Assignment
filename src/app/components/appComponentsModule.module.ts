import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AppMaterialModule } from '../appMaterialModule.module';
//import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppMaterialModule,
    ],
    exports: [
    ],
    declarations: [
        UsersComponent,
        ProfileComponent,
        LogoutComponent,
    ]
})
export class AppComponentModule { }