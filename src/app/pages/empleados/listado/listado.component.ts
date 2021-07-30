import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
  
})
export class ListadoComponent implements OnInit {

  empleados$ = this.empleadosSvc.empleados;
  navigationExtras: NavigationExtras = {  
    state:{
      value: null
    }

  };


  constructor(private router: Router, private empleadosSvc: EmpleadosService) {

  }

  ngOnInit(): void {
  }
    
    onGoToEdit(item: any): void {
      this.navigationExtras.state!.value = item;
      this.router.navigate(['editar'], this.navigationExtras);
    }
    onGoToSee(item: any): void {
      this.navigationExtras.state!.value = item;
      this.router.navigate(['detalles'], this.navigationExtras);

    }
   async onGoToDelete(empId: any): Promise<void> {
      try {
        
        await this.empleadosSvc.onDeleteEmpleados(empId);
        alert('Registro Eliminado!');        
      } catch (err) {
        console.log(err);
        
      }
      
            
    }



}
