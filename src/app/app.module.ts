import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasConsultaComponent } from './pessoas-consulta/pessoas-consulta.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: 'pessoas-cadastro', component: PessoasCadastroComponent},
  {path: 'pessoas-consulta', component: PessoasConsultaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PessoasCadastroComponent,
    PessoasConsultaComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
