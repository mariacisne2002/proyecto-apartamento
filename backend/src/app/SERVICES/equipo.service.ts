import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class tipodeapartamento {
  
  url='/api';

  constructor(private http: HttpClient) { }

//get equipos consulta todo
getApartamentos()
{
  return this.http.get(this.url);
}

//get un Equipo
getUnApartamentos(id:string){
  return this.http.get(this.url+'/'+id);
}

 //agregar equipo
 addApartamento(apartamento:any)
 {
   return this.http.post(this.url, apartamento);
 }

 //eliminar
 deleteApartamento(id:string){
return this.http.delete(this.url+id);

 }

 //modificar
 editEquipo(id:string, apartamento:apartamento){
return this.http.put(this.url+'/' + id,  apartamento);
 }
}

export interface apartamento{
id_apartamento?: string;
nombre?: string;
precio?: string;
categoria?: string;

}
