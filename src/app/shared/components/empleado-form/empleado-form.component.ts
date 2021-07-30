import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/pages/empleados/empleados.service';
import { Empleado } from '../../models/empleado.interface';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss']
})
export class EmpleadoFormComponent implements OnInit {

  empleado : Empleado ;
  empleadoForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router : Router, private fb:FormBuilder, private empleadosSvc: EmpleadosService) { 
  const navigation = this.router.getCurrentNavigation();
   this.empleado = navigation?.extras?.state?.value;
   this.initForm();
  }

  ngOnInit(): void {

    if(typeof this.empleado === 'undefined'){
      this.router.navigate(['nuevo']);
    }
    else{
      this.empleadoForm.patchValue(this.empleado);
    }
  }
  onSave():void{
    console.log('Saved', this.empleadoForm.value);
    if (this.empleadoForm.valid){
      const empleado = this.empleadoForm.value;
      const empleadoId = this.empleado?.id || '';
      this.empleadosSvc.onSaveEmpleados(empleado, empleadoId);
      this.empleadoForm.reset();
      alert('Empleado Actualizado!');
    }
    
  }
  onGoToBackToList(): void{
    this.router.navigate(['listado']);
  }

  private initForm() : void {
    this.empleadoForm = this.fb.group({
      Nombre: ['',[Validators.required]],
      Apellido: ['',[Validators.required]],
      Email: ['',[Validators.required,Validators.pattern(this.isEmail)]],
      FechadeIngreso: ['',[Validators.required]],
    })
  }
  

}
