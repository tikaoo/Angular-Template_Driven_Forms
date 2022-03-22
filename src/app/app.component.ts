import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
 
  name:string='';
  sobrenome:string ='';
  email:string='';
  userName:string='';
  cpf:string='';
  celular:string='';
  endereco:string='';
  complemento:string='';
  senha1:string='';
  senha2:string='';
  telefone:any []=[];

constructor( private snack : MatSnackBar){}

cel(){
  this.telefone.push([this.telefone])
}

submit():void{
if(this.senha1===this.senha2 || this.senha1 ==='' || this.senha2 ==='' ){
  this.snack.open('Senhas diferente,verifique!', 'Fechar')
}else {
  this.snack.open('Cadastrado realizado com Sucesso!', 'Fechar')
}

}


}
