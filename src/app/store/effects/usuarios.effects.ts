import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions'
import { map, mergeMap, tap } from "rxjs/operators";
import { UsuariosService } from "src/app/services/usuarios.service";

@Injectable()
export class UsuariosEffects{

    

    constructor(
        private actions$:Actions,
        private userService: UsuariosService
    ){}

    cargarUsuarios$  = createEffect(() => {
        return this.actions$.pipe(
                ofType(usersActions.loadUsers),
                /** An EMPTY observable only emits completion. Replace with your own observable stream */
                tap(data => console.log("flow de la data del efecto : ",data)),
                mergeMap(
                    () => this.userService.getUsers()
                                .pipe( 
                                    tap( data => console.log("datos del servicio : ",data)),
                                    map( users => usersActions.successLoadUsers({users}))
                                )
                )
                );
    });

}