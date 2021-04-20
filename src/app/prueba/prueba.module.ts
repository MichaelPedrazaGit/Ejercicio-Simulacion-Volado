import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaPageRoutingModule } from './prueba-routing.module';

import { PruebaPage } from './prueba.page';
import { InputCarlosComponent } from '../input-carlos/input-carlos.component';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaPageRoutingModule
  ],
  declarations: [PruebaPage, InputCarlosComponent, HomePage]
})
export class PruebaPageModule {}
