import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { FormDataServiceService } from '../../services/form-data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  
  constructor(
    private formService: FormDataServiceService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  especialistas=[{name: "Dr Carlos Matiz"},{name: " Dr Rafael Enrique Conde Camacho"},{name: "Dr Juan Pablo Rodríguez Gallego"}
  ]

  estados=[{estado:"En tramite"},{estado:"Asignada"}
  ]

  estado:any;
  doctor:any;
  users: any[]=[];

  ngOnInit(): void {
    
    this.formService.getDataFromSheet().subscribe(
      data=>{
        this.users = data;
        this.users.forEach(element =>{
            this.addProcedure(element);
            console.log(element);
        })
      }
    )

  }

  cites = this.fb.group({
    procedure: this.fb.array([])
  })

  get procedure() {
    return this.cites.get('procedure') as FormArray;
  }

  

  addProcedure(procedure: any): void {
      procedure = this.fb.group({
      identificadorCita: [procedure.identificadorCita],
      nombre: [procedure.nombre],
      apellido: [procedure.apellido],
      identificacionUsuario: [procedure.identificacionUsuario],
      entidadServicios: [procedure.entidadServicios],
      url: [procedure.url],
      fecha: [procedure.fecha],
      horaConsulta: [procedure.horaConsulta],
      estado: [procedure.estado],
      nombreEspecialista: [procedure.nombreEspecialista]
    });

    this.procedure.push(procedure);

  }


  getdataform(name: any){
    const value = this.procedure.at(name) as FormControl;
    console.log(value.value);
    
    this.formService.putData(value.value,name).subscribe(
      resp=>{
        if(resp){
          console.log(true)
          this.viewSnakbar("Actualizado")
        }
      }
    );
    
    
  }

  viewSnakbar(mensaje: string){
    this.snackBar.open(mensaje, 'Ok!',{
      duration: 2500
    });
  }
}
