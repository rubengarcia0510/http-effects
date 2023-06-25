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

  usuario: Usuario = undefined
  loading:boolean=false
  error:any

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>
    ) { }

  ngOnInit(): void {

    this.store.select('user')
          .subscribe(data=>{
            console.log(data)
            this.usuario = data.user
            this.loading = data.loading
            this.error = data.error
          })

    this.route.params.subscribe(data => 
          this.store.dispatch(loadUser({id:data.id}))
      )
  }

}
