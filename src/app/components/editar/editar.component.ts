import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MiServicioService } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editar = this.fb.group({
    id: [''],
    nombre: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]],
    apellido: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]],
    edad: ['', [Validators.required]],
    especialidad: ['', Validators.required],
    descripcion: ['', [Validators.required]]
  })

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private service: MiServicioService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.service.traerUno(params['id'])
          .subscribe(data => {
            this.editar.setValue(data['developer']);
          }, err => router.navigateByUrl('/listar'));
      })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.editar(this.editar.value)
    .subscribe(data => this.router.navigate(['/listar']));
  }

  redirect($event) {
    $event.preventDefault();
    this.router.navigate(['/listar']);
  }
}
