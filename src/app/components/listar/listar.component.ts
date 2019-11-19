import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  developers:any[]=[]

  constructor(private service:MiServicioService) {
    this.service.traerTodos()
    .subscribe(data => {
      this.developers = data['developers'];
      console.log(data);
    });
   }

  ngOnInit() {
  }

}
