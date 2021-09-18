import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-pessoas-consulta',
  templateUrl: './pessoas-consulta.component.html',
  styleUrls: ['./pessoas-consulta.component.css']
})
export class PessoasConsultaComponent implements OnInit {
 
  pessoas: any[] = []; //lista de pessoas
  page = 1; //utilizado na pagina
 
  message_exclusao: string = "";
  message_edicao: string = "";
 
  constructor(
    private pessoasService: PessoasService
  ) { }
 
  formEdicao = new FormGroup({
    id: new FormControl(''),
    primeiroNome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
 
  get form(): any {
    return this.formEdicao.controls;
  }
 
  ngOnInit(): void {
 
    this.pessoasService.getAll()
      .subscribe(
        (data) => {
          this.pessoas = data as any[];
        },
        (e) => {
          console.log(e.error);
        }
      )
  }
 
  excluirPessoa(id: string): void {
 
    if (confirm('Deseja realmente excluir o registro?')) {
 
      this.pessoasService.delete(id)
        .subscribe(
          (data: any) => {
 
            this.message_exclusao = data.message;
            this.ngOnInit();
          },
          (e) => {
            console.log(e.error);
          }
        )
    }
  }
 
  obterPessoa(id: string) : void {
 
    this.message_edicao = "";
    this.message_exclusao = "";
 
    this.pessoasService.getById(id)
        .subscribe(
          (data: any) => {
 
            this.formEdicao.controls.id.setValue(data.id);
            this.formEdicao.controls.primeiroNome.setValue(data.primeiroNome);
            this.formEdicao.controls.sobrenome.setValue(data.sobrenome);
            this.formEdicao.controls.email.setValue(data.email);            
          },
          (e) => {
            console.log(e.error);
          }
        )
 
  }
 
  onSubmit(): void {
 
    this.message_edicao = "Salvando os dados, por favor aguarde...";
 
    this.pessoasService.put(this.formEdicao.value)
      .subscribe( //capturar o promisse da API
        (data: any) => {
          this.message_edicao = data.message;
          this.ngOnInit();
        },
        (e) => {
          console.log(e.error);
        }
      )
  }
 
  //função para paginar os dados
  handlePageChange(event: any): void {
    this.page = event;
  }
 
}
