import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private userService:UsuariosService) { }

  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe(users=>{
          console.log(users)
          this.usuarios = users
        })
  }

}
