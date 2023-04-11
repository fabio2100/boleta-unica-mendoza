new Vue({
  el: "#app",
  data: {
    checkedValuesListaCompleta : [],
    checkedValuesGobernador: [],
    checkedValuesSenadores: [],
    checkedValuesDiputados: [],
    checkedValuesIntendente: [],
    checkedValuesConcejales: [],
    listasTotalesPaso: [
      { nombre: "1A", clase: "uno", claseBorde: "unoBorde" },
      { nombre: "1B", clase: "uno", claseBorde: "unoBorde" },
      { nombre: "1C", clase: "uno", claseBorde: "unoBorde" },
      { nombre: "2A", clase: "dos", claseBorde: "dosBorde" },
      { nombre: "2B", clase: "dos", claseBorde: "dosBorde" },
      { nombre: "3A", clase: "tres", claseBorde: "tresBorde" },
      { nombre: "4A", clase: "cuatro", claseBorde: "cuatroBorde" },
      { nombre: "4B", clase: "cuatro", claseBorde: "cuatroBorde" },
      { nombre: "4C", clase: "cuatro", claseBorde: "cuatroBorde" },
      { nombre: "4D", clase: "cuatro", claseBorde: "cuatroBorde" },
    ],
    listasTotales: ["1", "2", "3", "4", "5"],
  },
  methods: {
    emitirVoto : function(event){
      console.log(this.checkedValuesListaCompleta);
      console.log(this.checkedValuesGobernador);
      console.log(this.checkedValuesSenadores);
      console.log(this.checkedValuesDiputados);
      console.log(this.checkedValuesIntendente);
      console.log(this.checkedValuesConcejales);
      

      var listaCompleta = this.checkedValuesListaCompleta;
      var gobernadores = this.checkedValuesGobernador;
      var senadores = this.checkedValuesSenadores;
      var diputados = this.checkedValuesDiputados;
      var intedentes = this.checkedValuesIntendente;
      var concejales = this.checkedValuesConcejales;

      var sizeListaCompleta = listaCompleta.length;
      var sizeGobernador = gobernadores.length;
      var sizeSenadores = senadores.length;
      var sizeDiputados = diputados.length;
      var sizeIntendentes = intedentes.length;
      var sizeConcejales = concejales.length; 

      var votoGobernador = 0;
      var votoSenadores = 0;
      var votoDiputados = 0;
      var votoIntendente = 0;
      var votoConcejales = 0;
      


      if(sizeListaCompleta > 1){
        console.log('Voto completo anulado')
        votoGobernador = 2;
        votoSenadores = 2;
        votoDiputados = 2;
        votoIntendente = 2;
        votoConcejales = 2;
      }else if(listaCompleta.length == 1){
        votoGobernador ++;
        votoSenadores ++;
        votoDiputados ++;
        votoIntendente ++;
        votoConcejales ++;
        if(sizeGobernador > 0)  votoGobernador++
        if(sizeSenadores > 0)  votoSenadores++
        if(sizeDiputados > 0)  votoDiputados++
        if(sizeIntendentes > 0)  votoIntendente++
        if(sizeConcejales > 0)  votoConcejales++
      }else{
        console.log('No hay votod de lista completa')
        if(sizeGobernador==1){
          votoGobernador++;
        }else if(sizeGobernador>1){
          votoGobernador=2;
        }

        if(sizeSenadores==1){
          votoSenadores++;
        }else if(sizeSenadores>1){
          votoSenadores=2;
        }

        if(sizeDiputados==1){
          votoDiputados++;
        }else if(sizeDiputados>1){
          votoDiputados=2;
        }

        if(sizeIntendentes==1){
          votoIntendente++;
        }else if(sizeIntendentes>1){
          votoIntendente=2;
        }

        if(sizeConcejales==1){
          votoConcejales++;
        }else if(sizeConcejales>1){
          votoConcejales=2;
        }
      }


      console.log({votoGobernador})
      console.log({votoSenadores})
      console.log({votoDiputados})
      console.log({votoIntendente})
      console.log({votoConcejales})
    },

    limpiar : function(event){
      console.log('pouladl')
      this.checkedValuesListaCompleta = '';
      this.checkedValuesGobernador = '';
      this.checkedValuesSenadore = '';
      this.checkedValuesDiputados = '';
      this.checkedValuesIntendente = '';
      this.checkedValuesConcejales = '';

    this.checkedValuesListaCompleta = []
    this.checkedValuesGobernador= []
    this.checkedValuesSenadores= []
    this.checkedValuesDiputados= []
    this.checkedValuesIntendente= []
    this.checkedValuesConcejales= []
    }
  }
});
