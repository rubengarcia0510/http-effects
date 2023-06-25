import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading:boolean = false;
  error : any;

  constructor(
    private userService:UsuariosService,
    private store:Store<AppState>
    ) { }

  ngOnInit(): void {

    this.store.select('users')
        .subscribe( data=> {
          this.usuarios = data.users
          this.loading = data.loading
          this.error = data.error
        } )

    this.store.dispatch(loadUsers())
    /*
    this.userService.getUsers()
        .subscribe(users=>{
          console.log(users)
          this.usuarios = users
        })*/
  }
  

}
