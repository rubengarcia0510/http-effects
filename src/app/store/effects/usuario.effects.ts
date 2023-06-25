import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions'
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuariosService } from "src/app/services/usuarios.service";
import { of } from "rxjs";

@Injectable()
export class UsuarioEffects{

    

    constructor(
        private actions$:Actions,
        private userService: UsuariosService
    ){}

    cargarUsuario$  = createEffect(() => {
        return this.actions$.pipe(
                ofType(userActions.loadUser),
                /** An EMPTY observable only emits completion. Replace with your own observable stream */
                mergeMap(
                    (action) => this.userService.getUser(action.id)
                                .pipe( 
                                    map( user => userActions.successLoadUser({user})),
                                    catchError( error => of(userActions.errorLoadUser({payload:error})))
                                )
                )
                );
    });

}