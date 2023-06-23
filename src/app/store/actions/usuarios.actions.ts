import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsers = createAction('[Users Component] cargarUsuarios');
export const successLoadUsers = createAction(
    '[Users Component] successLoadUsers',
    props<{users: Usuario[]}>()
    );

export const errorLoadUsers = createAction(
        '[Users Component] errorLoadUsers',
        props<{payload: any}>()
        );