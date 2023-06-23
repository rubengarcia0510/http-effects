import { createReducer, on } from '@ngrx/store';
import { errorLoadUsers, loadUsers, successLoadUsers } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuariosState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: boolean
}

export const initialState: UsuariosState = {
   users: [],
   loaded: false,
   loading: false,
   error: null
}

const _usuariosReducer = createReducer(initialState,

    on(loadUsers, state => ({ ...state, loading: true})),
    on(successLoadUsers, (state,{users}) => (
        { 
            ...state, 
            loading:false,
            loaded: true,
            users:[...users]
        
        })),
    on(errorLoadUsers, (state,{payload}) => (
        { 
            ...state, 
            loading: false,
            loaded:false,
            error: payload
        
        })),

);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}