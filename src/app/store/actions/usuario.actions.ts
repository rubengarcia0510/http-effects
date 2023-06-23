import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUser = createAction(
    '[User Component] loadUser',
    props<{id:string}>());
export const successLoadUser = createAction(
    '[User Component] successLoadUser',
    props<{user: Usuario}>()
    );

export const errorLoadUser = createAction(
        '[User Component] errorLoadUser',
        props<{payload: any}>()
        );