import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private userService:UsuariosService) { }

  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe(data=>{
          console.log(data)
        })
  }

}
