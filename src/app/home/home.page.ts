import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

  export class HomePage {
    quantidadeAdultos: number = 0;
    quantidadeCriancas: number = 0;
    totalSalgadinho: number = 0;
    totalBolo: number = 0;
    totalRefrigerante: number = 0;
    siglaBolo: string = "g";
    siglaRefrigerante: string = "ml";

  constructor() {}

  adicionarAdultos() {
    this.quantidadeAdultos++;
    this.calcularTotalSalgadinho();
    this.calcularTotalBolo();
    this.calcularTotalRefrigerante();
  }

  adicionarCriancas() {
    this.quantidadeCriancas++;
    this.calcularTotalSalgadinho();
    this.calcularTotalBolo();
    this.calcularTotalRefrigerante();
  }

  removerAdultos() {
    if(this.quantidadeAdultos > 0){
      this.quantidadeAdultos--;
      this.calcularTotalSalgadinho();
      this.calcularTotalBolo();
      this.calcularTotalRefrigerante();
    }
  }

  removerCriancas() {
    if(this.quantidadeCriancas > 0){
      this.quantidadeCriancas--;
      this.calcularTotalSalgadinho();
      this.calcularTotalBolo();
      this.calcularTotalRefrigerante();
    }
  }

  calcularTotalSalgadinho(){
    this.totalSalgadinho = 0;
    this.totalSalgadinho += (this.quantidadeAdultos * 10) + (this.quantidadeCriancas * 7);
  }

  calcularTotalBolo(){
    this.totalBolo = 0;
    this.totalBolo += (this.quantidadeAdultos * 100) + (this.quantidadeCriancas * 100);
    this.siglaBolo = "g";
    if(this.totalBolo >= 1000){
      this.totalBolo = (this.totalBolo / 1000);
      this.siglaBolo = "Kg";
    }
  }

  calcularTotalRefrigerante(){
    this.totalRefrigerante = 0;
    this.totalRefrigerante += (this.quantidadeAdultos * 400) + (this.quantidadeCriancas * 300);
    this.siglaRefrigerante = "ml";
    if(this.totalRefrigerante >= 1000){
      this.totalRefrigerante = (this.totalRefrigerante / 1000);
      this.siglaRefrigerante = "L";
    }
  }

  limpar(){
    this.quantidadeAdultos = 0;
    this.quantidadeCriancas = 0;
    this.calcularTotalSalgadinho();
    this.calcularTotalBolo();
    this.calcularTotalRefrigerante();
  }
}
