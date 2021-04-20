import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dineroInicial: number;
  Apuestainicial: number;
  selectMoneda: string;
  meta: number;
  numberSimulations: number;
  dataResult: any = {};
  solucion: Boolean = false;
  quiebra: number = 0;
  constructor() { 
  }

  ngOnInit() {
  }

  public simular() {
    this.dataResult = {}
    this.quiebra = 0;
    if (this.Apuestainicial > 0 && this.dineroInicial > 0 && this.selectMoneda != "" && this.meta > 0 && this.numberSimulations > 0 && this.Apuestainicial < this.dineroInicial) {
      this.solucion = true;
      for (let i = 0; i < this.numberSimulations; i++) {
        this.dataResult["Simulacion #" + (i+1)] = []
        var dineroInicial = this.dineroInicial
        var dineroAux = 0
        var apuestainicial = this.Apuestainicial
        var salida = false
        var gano = false
        while (!salida) {
          if(dineroInicial == 0) {
            salida = true
            this.dataResult["Simulacion #" + (i+1) ]["resultado"] = "quiebra"
            break;
          }else if(dineroInicial >= this.meta){
            salida = true
            this.dataResult["Simulacion #" + (i+1) ]["resultado"] = "meta"
            break;
          }else if(this.dineroInicial < 1){
            salida = true
          }
          let rand = Math.random()
          switch (this.selectMoneda) {
            case "cara":
              if (rand > 0.5) {
                dineroAux = dineroInicial
                if (gano) {
                  if (dineroInicial < apuestainicial || dineroInicial < this.Apuestainicial) {
                    apuestainicial = dineroInicial
                  }else{
                    apuestainicial = this.Apuestainicial
                  }
                }
                dineroInicial += apuestainicial;
                this.dataResult["Simulacion #" + (i+1) ].push({
                  dinero: dineroAux,
                  corrida: i,
                  dineroTotal: dineroInicial,
                  apuesta: apuestainicial,
                  aleatorio: rand,
                  gano: "si"
                })
                gano = true
              } else {
                if (gano) {
                  if (dineroInicial < apuestainicial || dineroInicial < this.Apuestainicial) {
                    apuestainicial = dineroInicial
                  }else{
                    apuestainicial = this.Apuestainicial
                  }
                }
                dineroAux = dineroInicial
                dineroInicial -= apuestainicial;
                this.dataResult["Simulacion #" + (i+1)].push({
                  dinero: dineroAux,
                  corrida: i,
                  dineroTotal: dineroInicial,
                  apuesta: apuestainicial,
                  aleatorio: rand,
                  gano: "no"
                })
                if (dineroInicial >= (apuestainicial * 2)) {
                  apuestainicial *= 2
                } else {
                  apuestainicial = dineroInicial
                }
                gano = false
              }
              break;
          case "sello":
                if (rand < 0.5) {
                  dineroAux = dineroInicial
                if (gano) {
                  if (dineroInicial < apuestainicial || dineroInicial < this.Apuestainicial) {
                    apuestainicial = dineroInicial
                  }else{
                    apuestainicial = this.Apuestainicial
                  }
                }
                dineroInicial += apuestainicial;
                this.dataResult["Simulacion #" + (i+1) ].push({
                  dinero: dineroAux,
                  corrida: i,
                  dineroTotal: dineroInicial,
                  apuesta: apuestainicial,
                  aleatorio: rand,
                  gano: "si"
                })
                gano = true
              } else {
                if (gano) {
                  if (dineroInicial < apuestainicial || dineroInicial < this.Apuestainicial) {
                    apuestainicial = dineroInicial
                  }else{
                    apuestainicial = this.Apuestainicial
                  }
                }
                dineroAux = dineroInicial
                dineroInicial -= apuestainicial;
                this.dataResult["Simulacion #" + (i+1)].push({
                  dinero: dineroAux,
                  corrida: i,
                  dineroTotal: dineroInicial,
                  apuesta: apuestainicial,
                  aleatorio: rand,
                  gano: "no"
                })
                if (dineroInicial >= (apuestainicial * 2)) {
                  apuestainicial *= 2
                } else {
                  apuestainicial = dineroInicial
                }
                gano = false
              }
                break;
            default:
              break;
          }
        }

      }
      Object.keys(this.dataResult).forEach(element=>{
        if(this.dataResult[element]["resultado"] == "quiebra"){
          this.quiebra ++;
        }
      })
    }
  }

  public type(dato){
    if(typeof(dato) == "string"){
      return true
    }else{
      return false;
    }
  }

}
