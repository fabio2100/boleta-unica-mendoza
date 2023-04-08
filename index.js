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
      console.log({event});
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

      if(listaCompleta.length > 1){
        console.log('Voto completo anulado')
      }else if(listaCompleta.length == 1){
        console.log('voto una lista completa, ver que no haya nulos por categorias')
      }else{
        console.log('No hay votod de lista completa')
      }
    }
  }
});
