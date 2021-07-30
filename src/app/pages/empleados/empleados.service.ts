import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/shared/models/empleado.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  

  empleados!: Observable<Empleado[]>; 

  private empleadosCollection: AngularFirestoreCollection<Empleado>;

  constructor(private readonly afs: AngularFirestore) {
    this.empleadosCollection = afs.collection<Empleado>('empleados');
    this.getEmpleados();

   }


   onDeleteEmpleados(empId: string): Promise<void> {
     return new Promise(async (resolve, reject) => {
       try {
         const result = await this.empleadosCollection.doc(empId).delete();
         resolve(result);
         
       } catch (err) {
         reject(err.message);
         
       }
       
     });
   }
   onSaveEmpleados(empleado: Empleado, empId:string) : Promise<void>{
    return new Promise(async (resolve, reject) => {

      try {
        const id  = empId || this.afs.createId();
        const data = {id, ...empleado};
        const result = await this.empleadosCollection.doc(id).set(data);
        resolve(result);
        
      } catch (err) {
        reject(err.message);
        
      }
   });

  
}
  
   private getEmpleados(): void {
     this.empleados = this.empleadosCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Empleado))
     );
   }

}

