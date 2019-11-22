import { Component, OnInit } from '@angular/core';
import { MiServicioService, developer } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  developers: developer[] = []
  filtro:developer[] = [];
  id:number;
  criterio: string = "";

  constructor(private service: MiServicioService) {
    this.service.traerTodos()
      .subscribe(data => {
        this.developers = data['developers'];
        this.filtro = this.developers;
        console.log(data);
      });

      localStorage.setItem('id','2');
      this.id= Number(localStorage.getItem('id'));

  }

  ngOnInit() {
  }

  eliminar(id: number) {
    this.service.eliminar(id)
      .subscribe(data => {
        this.service.traerTodos()
          .subscribe(developers => {
            this.filtro = developers['developers'];
            this.developers = this.filtro;
          })
      })
  }

  filtrar(value) {

   if(value != 'Todos'){
      this.filtro = [];
      this.developers.forEach(developer =>{
        if(developer.especialidad == value){
          this.filtro.push(developer);
        }
      })
   }else{
     this.filtro = this.developers;
   }

  }

}
