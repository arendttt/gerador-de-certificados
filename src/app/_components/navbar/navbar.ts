import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', // utiliza para referenciar o componente
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
 // aqui vai a lógica do componente

 // vai aparecer toda vez que o componente inicializar
  ngOnInit(): void {
     this.mensagem() // preciso colocar o this para referenciar
  }

  mensagem(){
     console.log("Meu componente navbar inicializou")
  }

}
