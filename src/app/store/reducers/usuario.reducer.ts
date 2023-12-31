import { createReducer, on } from '@ngrx/store';
import { errorLoadUser, loadUser, successLoadUser } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuarioState {
    id: string,
    user: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(loadUser, (state,{id}) => (
        { ...state, 
            loading: true,
            id: id
        })),
    on(successLoadUser, (state,{user}) => (
        { 
            ...state, 
            loading:false,
            loaded: true,
            error:null,
            user:{...user}
        
        })),
    on(errorLoadUser, (state,{payload}) => (
        { 
            ...state, 
            loading: false,
            loaded:false,
            error: {
                url:payload.url,
                name: payload.name,
                message: payload.message
            }
        
        })),

);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}