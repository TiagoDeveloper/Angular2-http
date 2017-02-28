import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

    pessoas: Pessoa[];
    pessoa: Pessoa;
    inscricao: Subscription;
    erro: string;

  constructor(
    private pessoaService: PessoaService,
    private router: Router
    ) {}

  getPessoas() {
    this.pessoaService.getPessoas()
                      .subscribe(
                        pessoas => this.pessoas = pessoas
                    );

  }

  getPessoa() {
    this.pessoaService.getPessoa(3)
                      .subscribe(
                        pessoa => this.pessoa = pessoa,
                        teste => console.log("teste: ",teste,"blablablablablablablablablabla")
                    );
  }
  deletePessoa(id: number) {
      this.inscricao = this.pessoaService.deletePessoa(id)
                      .subscribe(
                        teste1 => console.log("deleta: ", teste1),
                        teste => console.log("deleta: ", teste)
                    );
  }

  addPessoa(p: Pessoa) {

    let person = { 'nome':p.nome, 'idade':p.idade };
    
    this.pessoaService.addPessoa(person)
                      .subscribe(
                        () => this.getPessoas()
                    );
  }

  ngOnInit(): void {
      this.pessoa = new Pessoa(0,'',0);
    this.getPessoa();
    this.getPessoas();
   
  }

  onDelete(): void {
    //this.addPessoa(new Pessoa(0,'Michelle',25));
     console.log('on delete');
    this.deletePessoa(4);
    //this.getPessoa();
    
  }
 
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
