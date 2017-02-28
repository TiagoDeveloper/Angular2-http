import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PessoaService {

  private url: string = 'http://localhost:3000/api/Pessoas';


  constructor(private http: Http) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get(this.url)
                .map(this.tratamentoJson);
  }

  deletePessoa(id: number): Observable<Pessoa> {
    let url = `${this.url}/${id}`;
    return this.http.delete(url)
                .map(this.tratamentoJson);
  }
  getPessoa(id: number): Observable<Pessoa> {
    let url = `${this.url}/${id}`;
    return this.http.get(url)
                .map(this.tratamentoJson);
  }


  addPessoa (pessoa: any): Observable<Pessoa> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, pessoa, options)
                    .map(this.tratamentoJson);
  }

  private tratamentoJson(resp: Response): any { 
    let body = resp.json();
    return body || {};
  }

}
