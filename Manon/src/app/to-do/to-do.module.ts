import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoPageRoutingModule } from './to-do-routing.module';

import { ToDoPage } from './to-do.page';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ToDoPage]
})
export class ToDoPageModule {}
