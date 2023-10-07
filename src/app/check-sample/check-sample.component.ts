import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit
{
  quantidade: number = 0;

  constructor(){}

  add(){
    this.quantidade +=1;
  }

  remove(){
    this.quantidade -=1;
  }

  //checked -> content -> view

  //quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log(`AfterContentInit`)

  }
  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log(`AfterViewInit`)
  }

  //após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
  console.log(`AfterContentChecked`)
  }

  ngOnInit(): void {
    console.log(`OnInit`)
  }
  ngDoCheck(): void {
    console.log(`DoCheck`)
  }
  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked`)
  }

}
