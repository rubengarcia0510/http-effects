import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions'
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuariosService } from "src/app/services/usuarios.service";
import { of } from "rxjs";

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
                mergeMap(
                    () => this.userService.getUsers()
                                .pipe( 
                                    map( users => usersActions.successLoadUsers({users})),
                                    catchError( error => of(usersActions.errorLoadUsers({payload:error})))
                                )
                )
                );
    });

}