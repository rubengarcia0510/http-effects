import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => 
          this.store.dispatch(loadUser({id:data.id}))
      )
  }

}
