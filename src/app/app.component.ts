import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = resultado;

  public age = 18;

  image = 'https://enciclopedia.net/wp-content/uploads/2014/04/persona.jpg';

  btn = true ;

  myButton (){
    this.btn = !this.btn ;
  }

  valor = 19;

  person = {
    names : 'Juan' ,
    edad : 17 ,
    avatar : 'https://enciclopedia.net/wp-content/uploads/2014/04/persona.jpg'

  }


}


function  suma(a:number , b:number) {
    return a + b;
}


   const username : string = 'Nicolas';

   const sum = (a: number , b: number) =>{
    return a + b;
   }
   var resultado = sum(1,2);
