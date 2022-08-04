import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { InputBoxModule } from '../Core/input-box/input-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputBoxModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule { }
