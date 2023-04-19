Vue.component("modal", {
  template: "#modal-template",
  props: [
    "votoGobernador",
    "votoSenadores",
    "votoDiputados",
    "votoIntendente",
    "votoConcejales",
  ],
});

new Vue({
  el: "#app",
  data: {
    fecha: '30 de Abril',
    tipoEleccion: 'paso',
    tipoDepartamento: 'municipal',
    tipoDepto: 'siete',
    showModal: false,
    checkedValuesListaCompleta: [],
    checkedValuesGobernador: [],
    checkedValuesSenadores: [],
    checkedValuesDiputados: [],
    checkedValuesIntendente: [],
    checkedValuesConcejales: [],
    votoGobernador: 0,
    votoSenadores: 0,
    votoDiputados: 0,
    votoIntendente: 0,
    votoConcejales: 0,
    listasTotalesPaso: [
      { nombre: "1A", clase: "uno", claseBorde: "unoBorde", tipoEleccion:"paso" },
      { nombre: "1B", clase: "uno", claseBorde: "unoBorde", tipoEleccion:"paso" },
      { nombre: "1C", clase: "uno", claseBorde: "unoBorde", tipoEleccion:"paso" },
      { nombre: "2A", clase: "dos", claseBorde: "dosBorde", tipoEleccion:"paso" },
      { nombre: "2B", clase: "dos", claseBorde: "dosBorde", tipoEleccion:"paso" },
      { nombre: "3A", clase: "tres", claseBorde: "tresBorde",tipoEleccion:"paso" },
      { nombre: "4A", clase: "cuatro", claseBorde: "cuatroBorde",tipoEleccion:"paso" },
      { nombre: "4B", clase: "cuatro", claseBorde: "cuatroBorde",tipoEleccion:"paso" },
      { nombre: "4C", clase: "cuatro", claseBorde: "cuatroBorde",tipoEleccion:"paso" },
      { nombre: "4D", clase: "cuatro", claseBorde: "cuatroBorde",tipoEleccion:"paso" },
      { nombre: "1", clase: "uno", claseBorde: "unoBorde", tipoEleccion:"general" },
      { nombre: "2", clase: "dos", claseBorde: "dosBorde", tipoEleccion:"general" },
      { nombre: "3", clase: "tres", claseBorde: "tresBorde", tipoEleccion:"general" },
      { nombre: "4", clase: "cuatro", claseBorde: "cuatroBorde", tipoEleccion:"general" }
    ],
    listasTotales: [
      { nombre: "1", clase: "uno", claseBorde: "unoBorde" },
      { nombre: "2", clase: "dos", claseBorde: "dosBorde" },
      { nombre: "3", clase: "tres", claseBorde: "tresBorde" },
      { nombre: "4", clase: "cuatro", claseBorde: "cuatroBorde" },
    ],
  },
  methods: {
    emitirVoto: function (event) {
      this.votoGobernador = 0;
      this.votoSenadores = 0;
      this.votoDiputados = 0;
      this.votoIntendente = 0;
      this.votoConcejales = 0;

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

      if (sizeListaCompleta > 1) {
        this.votoGobernador = 2;
        this.votoSenadores = 2;
        this.votoDiputados = 2;
        this.votoIntendente = 2;
        this.votoConcejales = 2;
      } else if (listaCompleta.length == 1) {
        this.votoGobernador++;
        this.votoSenadores++;
        this.votoDiputados++;
        this.votoIntendente++;
        this.votoConcejales++;
        if (sizeGobernador > 0) this.votoGobernador++;
        if (sizeSenadores > 0) this.votoSenadores++;
        if (sizeDiputados > 0) this.votoDiputados++;
        if (sizeIntendentes > 0) this.votoIntendente++;
        if (sizeConcejales > 0) this.votoConcejales++;
      } else {
        if (sizeGobernador == 1) {
          this.votoGobernador++;
        } else if (sizeGobernador > 1) {
          this.votoGobernador = 2;
        }

        if (sizeSenadores == 1) {
          this.votoSenadores++;
        } else if (sizeSenadores > 1) {
          this.votoSenadores = 2;
        }

        if (sizeDiputados == 1) {
          this.votoDiputados++;
        } else if (sizeDiputados > 1) {
          this.votoDiputados = 2;
        }

        if (sizeIntendentes == 1) {
          this.votoIntendente++;
        } else if (sizeIntendentes > 1) {
          this.votoIntendente = 2;
        }

        if (sizeConcejales == 1) {
          this.votoConcejales++;
        } else if (sizeConcejales > 1) {
          this.votoConcejales = 2;
        }
      }

      this.showModal = true;
    },

    limpiar: function (event) {
      this.checkedValuesListaCompleta = "";
      this.checkedValuesGobernador = "";
      this.checkedValuesSenadore = "";
      this.checkedValuesDiputados = "";
      this.checkedValuesIntendente = "";
      this.checkedValuesConcejales = "";

      this.checkedValuesListaCompleta = [];
      this.checkedValuesGobernador = [];
      this.checkedValuesSenadores = [];
      this.checkedValuesDiputados = [];
      this.checkedValuesIntendente = [];
      this.checkedValuesConcejales = [];
    },
    actualizarFecha: function(){
      if(this.tipoDepto==='siete' && this.tipoEleccion==='paso' && this.tipoDepartamento==='municipal'){
        this.fecha= '30 de Abril';
      }
      if(this.tipoDepto==='siete' && this.tipoEleccion==='paso' && this.tipoDepartamento==='provincial'){
        this.fecha= '11 de Junio';
      }
      if(this.tipoDepto==='siete' && this.tipoEleccion==='general' && this.tipoDepartamento==='municipal'){
        this.fecha= '3 de Septiembre';
      }
      if(this.tipoDepto==='siete' && this.tipoEleccion==='general' && this.tipoDepartamento==='provincial'){
        this.fecha= '24 de Septiembre';
      }
      if(this.tipoDepto==='doce' && this.tipoEleccion==='paso' && this.tipoDepartamento==='municipal'){
        this.fecha= 'IMPOSIBLE';
      }
      if(this.tipoDepto==='doce' && this.tipoEleccion==='paso' && this.tipoDepartamento==='provincial'){
        this.fecha= '11 de Junio';
      }
      if(this.tipoDepto==='doce' && this.tipoEleccion==='general' && this.tipoDepartamento==='municipal'){
        this.fecha= 'IMPOSIBLE';
      }
      if(this.tipoDepto==='doce' && this.tipoEleccion==='general' && this.tipoDepartamento==='provincial'){
        this.fecha= '24 de Septiembre';
      }
    },
    changeTipoEleccion: function(event){
      this.limpiar();
      this.actualizarFecha();
    },
    changeTipoDepartamento: function(event){
      this.limpiar();
      this.actualizarFecha();
    },
    changeTipoDepto: function(event){
      if(this.tipoDepto==='doce'){
        this.tipoDepartamento='provincial';
      }else if(this.tipoDepto==='siete'){
        this.tipoDepartamento='municipal';
      }
      this.limpiar();
      this.actualizarFecha();
    }
  },
});
