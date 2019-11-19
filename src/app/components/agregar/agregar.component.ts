import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  agregar = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern("[a-zA-ZñÑ ]+")]],
    apellido: ['',[Validators.required,Validators.pattern("[a-zA-ZñÑ ]+")]],
    edad:['',[Validators.required]],
    especialidad: ['backend',[Validators.required]],
    descripcion: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.agregar.value);
    this.router.navigate(['/listar']);
  }

  redirect($event){
    $event.preventDefault();
    this.router.navigate(['/listar']);
  }
}
