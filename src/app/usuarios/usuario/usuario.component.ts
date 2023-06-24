import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>
    ) { }

  ngOnInit(): void {

    this.store.select('user')
          .subscribe(user=>this.usuario = user.user)

    this.route.params.subscribe(data => 
          this.store.dispatch(loadUser({id:data.id}))
      )
  }

}
