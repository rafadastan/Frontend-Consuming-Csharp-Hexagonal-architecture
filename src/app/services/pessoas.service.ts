import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  resource: string = environment.apiUrl + "/pessoas";

  constructor(
    private httpClient: HttpClient
  ) { }

  post(data: any){
    return this.httpClient.post(this.resource, data);
  }

  put(data: any){
    return this.httpClient.put(this.resource, data);
  }

  delete(id: string){
    return this.httpClient.delete(this.resource + "/" + id);
  }

  getById(id: string){
    return this.httpClient.get(this.resource + "/" + id);
  }

  getAll() {
    return this.httpClient.get(this.resource);
  }
  
}
