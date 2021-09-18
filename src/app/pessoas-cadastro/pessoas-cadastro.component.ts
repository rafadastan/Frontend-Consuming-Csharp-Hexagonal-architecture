import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  message: string = "";
 
  constructor(
    private pessoasService: PessoasService //injeção de dependência
  ) { }
 
  formCadastro = new FormGroup({
    primeiroNome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
 
  get form(): any {
    return this.formCadastro.controls;
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
 
    this.message = "Realizando cadastro, por favor aguarde...";
 
    this.pessoasService.post(this.formCadastro.value)
      .subscribe( //capturar o promisse da API
        (data: any) => {
          this.message = data.message;
          this.formCadastro.reset();
        },
        (e) => {
          this.message = e.error.message;
        }
      )
  }

}
