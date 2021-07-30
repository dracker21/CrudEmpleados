import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Empleado } from 'src/app/shared/models/empleado.interface';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  
  empleado : Empleado;

  navigationExtras: NavigationExtras = {
    state:{
      Value: null
    }
  };
  
 
  constructor(private router:Router, private empleadosSvc: EmpleadosService) {
  const navigation = this.router.getCurrentNavigation();
  this.empleado = navigation?.extras?.state?.value;

   }

  ngOnInit(): void {
    if(typeof this.empleado === 'undefined'){
      this.router.navigate(['listado']);
    }
  }


  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.empleado;
    this.router.navigate(['editar'], this.navigationExtras);
  }

  onGoToBackToList(): void{
    this.router.navigate(['listado']);

  }

 
}
