import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  private url:string = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.url+'/users?page=2')
                    .pipe(
                        map( resp=> resp['data'])
                    )
  }

  getUser(id: string):Observable<any> {
    return this.http.get(this.url+'/users/'+id)
        .pipe(
            map( resp=> resp['data'])
        )
}
}
