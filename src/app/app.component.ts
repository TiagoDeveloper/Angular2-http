import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  pessoas: Pessoa[];
  pessoa: Pessoa;
  constructor(private pessoaService: PessoaService) {}

  getPessoas() {
    this.pessoaService.getPessoas()
                      .subscribe(
                        pessoas => this.pessoas = pessoas
                    );
  }

  getPessoa() {
    this.pessoaService.getPessoa(3)
                      .subscribe(
                        pessoa => this.pessoa = pessoa
                    );
  }
  deletePessoa() {
    this.pessoaService.deletePessoa(7)
                      .subscribe(
                        pessoa => this.pessoa = pessoa
                    );
  }

  addPessoa(p: Pessoa) {

    let pessoa = { 'nome':p.nome, 'idade':p.idade };
    
    this.pessoaService.addPessoa(pessoa)
                      .subscribe(
                        pessoa => pessoa = pessoa
                    );
  }

  ngOnInit(): void {
      this.pessoa = new Pessoa(0,'',0);
    this.getPessoa();
    this.getPessoas();
   
  } 


}
