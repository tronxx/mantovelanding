import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, lastValueFrom, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  config: any;
  yaleiconfig = false;
  constructor(private http: HttpClient) { 
    const ya = this.leerconfig();
  }

  async leerconfig () {
    this.config = await lastValueFrom(this.http.get<any>('/assets/config.json'));
    this.yaleiconfig = true;
  }

  async getUrl() {
    if(!this.yaleiconfig) {
        await this.leerconfig();
    }
    return this.config.url;
  }

  enviacorreo(data: string) {
    const misdatos = JSON.parse(data);
    const msghtml = misdatos.message;
    const asunto = "Datos de Contacto Meridiano 60";
    const mihtml = `
    <html><table border="1" color="gray">
    <tr><td>Nombre</td><td>${misdatos.name}</td></tr>
    <tr><td>Teléfono</td><td>${misdatos.phone}</td></tr>
    <tr><td>Email</td><td>${misdatos.email}</td></tr>
    <tr><td>Email</td><td>${misdatos.company}</td></tr>
    <tr><td>Observaciones</td><td>${misdatos.message}</td></tr>
    </table></html>
    `;
    
    const url = this.config.url;
    //const url = "http://mdscartera.ddns.net/ventas.php";

    const postData = {
      modo: "email",
      destino: this.config.correocontacto,
      asunto: btoa(asunto),
      msghtml: btoa(mihtml)
    };
    const headers=  {
      'content-type': 'application/json; charset=utf-8',
    }
    const body = JSON.stringify(postData);
    console.log("url", url, "body", body, "destino", this.config.correocontacto, "Datos", data);
    return( this.http.post(url, body, {'headers':headers}) );

  }
}
