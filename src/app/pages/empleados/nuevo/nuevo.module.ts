import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRoutingModule } from './nuevo-routing.module';
import { NuevoComponent } from './nuevo.component';
import { EmpleadoFormModule } from 'src/app/shared/components/empleado-form/empleado-form.module';


@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    EmpleadoFormModule
  ]
})
export class NuevoModule { }
