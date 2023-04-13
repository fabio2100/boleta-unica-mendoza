Vue.component("modal", {
  template: "#modal-template",
  props : ['votoGobernador','votoSenadores','votoDiputados','votoIntendente','votoConcejales']
});

new Vue({
  el: "#app",
  data: {
    showModal : false,
    checkedValuesListaCompleta : [],
    checkedValuesGobernador: [],
    checkedValuesSenadores: [],
    checkedValuesDiputados: [],
    checkedValuesIntendente: [],
    checkedValuesConcejales: [],
    votoGobernador : 0,
    votoSenadores : 0,
    votoDiputados : 0,
    votoIntendente : 0,
    votoConcejales : 0,
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
      this.votoGobernador = 0
      this.votoSenadores = 0
      this.votoDiputados = 0
      this.votoIntendente = 0
      this.votoConcejales = 0
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
      


      if(sizeListaCompleta > 1){
        console.log('Voto completo anulado')
        this.votoGobernador = 2;
        this.votoSenadores = 2;
        this.votoDiputados = 2;
        this.votoIntendente = 2;
        this.votoConcejales = 2;
      }else if(listaCompleta.length == 1){
        this.votoGobernador ++;
        this.votoSenadores ++;
        this.votoDiputados ++;
        this.votoIntendente ++;
        this.votoConcejales ++;
        if(sizeGobernador > 0)  this.votoGobernador++
        if(sizeSenadores > 0)  this.votoSenadores++
        if(sizeDiputados > 0)  this.votoDiputados++
        if(sizeIntendentes > 0)  this.votoIntendente++
        if(sizeConcejales > 0)  this.votoConcejales++
      }else{
        console.log('No hay votod de lista completa')
        if(sizeGobernador==1){
          this.votoGobernador++;
        }else if(sizeGobernador>1){
          this.votoGobernador=2;
        }

        if(sizeSenadores==1){
          this.votoSenadores++;
        }else if(sizeSenadores>1){
          this.votoSenadores=2;
        }

        if(sizeDiputados==1){
          this.votoDiputados++;
        }else if(sizeDiputados>1){
          this.votoDiputados=2;
        }

        if(sizeIntendentes==1){
          this.votoIntendente++;
        }else if(sizeIntendentes>1){
          this.votoIntendente=2;
        }

        if(sizeConcejales==1){
          this.votoConcejales++;
        }else if(sizeConcejales>1){
          this.votoConcejales=2;
        }
      }


      console.log(this.votoGobernador)
      console.log(this.votoSenadores)
      console.log(this.votoDiputados)
      console.log(this.votoIntendente)
      console.log(this.votoConcejales)

      this.showModal = true;
    },

    limpiar : function(event){
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
