//metodos de colecciones importantes:
//filter
//map
//foreach
//some
//every
//reduce

class Persona {
    constructor(felicidad) {    
        
        this.felicidad = felicidad;
        this.añoDeNacimiento = 1997
        this.recuerdos = []
        this.recuerdosDelDia = []
        this.memoriaDeLargoPlazo = []
        this.listaDeEmociones = ["Alegria", "Tristeza"]
        this.emocionDelMomento = "Alegria"
        this.pensamientosCentrales = []

    }


    agregarEmocion(emocion){
        
        this.listaDeEmociones.push(emocion)
    }


    agregarPensamienoCentral(recuerdo){
        const esUnRecuerdoRepetido = this.pensamientosCentrales.some(unRecuerdo => unRecuerdo.esIgualAOtro(recuerdo));
        if(!esUnRecuerdoRepetido){
            this.pensamientosCentrales.push(recuerdo)
 
        }
    }



    agregarFelicidad(extasis){
        this.felicidad = Math.min(this.felicidad+extasis,1000)
    }


    disminuirFelicidad(extasis){
        this.felicidad = this.felicidad-extasis
    }


    getFelicidad(){
        return this.felicidad
    }


    emocionDelMomento(){
        return this.emocionDelMomento
    }


    recuerdos(){
        return this.recuerdos
    }


    recuerdosDelDia(){
        return this.recuerdosDelDia
    }


    //Asentamiento: todos los recuerdos del día se asientan.

    borrarYAgregarPensamientosCentrales(lista){
        this.pensamientosCentrales=[]
        this.pensamientosCentrales=lista

    }

    



    asentarRecuerdosDelDia(){
      this.recuerdos.push(this.recuerdosDelDia)
    }



      asentarRecuerdoEspecifico(recuerdo){
        this.recuerdos.push(recuerdo)
      }



    
    //recorro cada recuerdo del dia transformando su detalle en unarray de oracion para asi recorrer
    //cada palabra y si es igual a la palabra clave entonces asiento ESE recuerdo en especifico
    AsentamientoSelectivo(palabraClave){

        function chequeador(palabra){
            return palabra ===palabraClave
        }

        this.recuerdosDelDia.forEach(element => {

            let oracion = element.detalle.split(" ")
            if(oracion.some(chequeador)){
            this.memoriaDeLargoPlazo.asentarRecuerdoEspecifico(element)
        }
        });
    }
      
  
      

    //recorremos losrecuerdos para ver si el recuerdo del dia NO es un recuerdo negado y NO esta incluido en los pensamientos centrales
    //Entonces se agrega a la memoria de largo plazo
    profundizacion(){
        //implementar esto por filter
    let recuerdosNoNegadosYQueNoSonCentrales= recuerdosDelDia.filter((recuerdo)=>!recuerdo.elRecuerdoEsNegado(this.emocionDelMomento()) && !pensamientosCentrales.includes(recuerdo))

    memoriaDeLargoPlazo.push(recuerdosNoNegadosYQueNoSonCentrales)}
    restauracionCognitiva(numero){
        felicidad = this.getFelicidad()
        agregarFelicidad(Math.max(numero,100))
    }




    controlHormonal(){

        let todasLasEmocionesDeLosRecuerdosDiarios = this.recuerdosDelDia.map((a) => a.emocionDominante) 
        //hacer metodo para que un recuerdo sepa si es dominado por x emocion camino del refactor a seguir : una emocion => un booleano 
        let todasLasEmocionesDeLosRecuerdosDiariosSonIguales = todasLasEmocionesDeLosRecuerdosDiarios.every((recuerdo)=>recuerdo.emocionDominante===todasLasEmocionesDeLosRecuerdosDiarios[0])

        let pensamientoCentralEstaEnLaMemoriaALargoPlazo= this.memoriaDeLargoPlazo.some(
            (recuerdo)=>{
            this.pensamientosCentrales.includes(recuerdo)
        })
   
        if(todasLasEmocionesDeLosRecuerdosDiariosSonIguales || pensamientoCentralEstaEnLaMemoriaALargoPlazo){
            this.disminuirFelicidad(getFelicidad*0.15)
            listaDePensamientosCentralesNuevos = this.pensamientosCentrales.splice(0,3)
            this.borrarYAgregarPensamientosCentrales(listaDePensamientosCentralesNuevos)
       }
    }





    liberacionDeRecuerdos(){
        this.recuerdosDelDia = []
    }



    descansar(numerodefelicidad,listaDeDescansoDeRiley){
        listaDeDescansoDeRiley.forEach(tarea => {
        tarea.procesoDeDescanso()
     });
        liberacionDeRecuerdos()
    }



   
    asentarRecuerdoDelDia(recuerdo){
        this.recuerdosDelDia.push(recuerdo) 
        if(this.emocionDelMomento==="Alegria" && this.felicidad>500){
            agregarPensamienoCentral(recuerdo)
        }
        if(this.emocionDelMomento==="Tristeza"){
            agregarPensamienoCentral(recuerdo)
            setearFelicidad(Math.max(1,this.felicidad-this.felicidad*0.1))
        }




    }
    vivirEvento(evento){
        this.asentarRecuerdoDelDia(new Recuerdo(Date(Date.now()),evento,this.emocionDelMomento)) 
    }





    recuerdosRecientes(){
       return this.recuerdos.slice(-5)
    }




//-----ultimo punto del parcial creo.

    rememorar(){
        // recuerdo tiene que poseer esta funcion como metodo y ver si todas las funciones de chequear ya no las puede cumplir un objeto
        function verSiElRecuerdoEsMasViejoQueElAño(añoDelRecuerdo,año){
            return añoDelRecuerdo<año

        }
        let recuerdosMasAntiguosQueLaMitadDeLaEdadDeLaPersona = this.memoriaDeLargoPlazo.filter((recuerdo)=>verSiElRecuerdoEsMasViejoQueElAño(recuerdo.date.year(),this.persona.añoDeNacimiento/2))
    
    this.recuerdosDelDia.push(recuerdosMasAntiguosQueLaMitadDeLaEdadDeLaPersona[Math.floor((Math.random() * (recuerdosMasAntiguosQueLaMitadDeLaEdadDeLaPersona.length -1)) )])
    
    
    
    }
//pasar esto a recuerdos porque es su responsabilidad
//desde la 215 hasta las 220 se reemplaza con sum o count si existiese , reemplazar con reduce
//reemplazar con filter y some para probar quizas
    saberCuantasVecesSeRepiteUnRecuerdo(recuerdoAChequear,enDondeSeRepite){
        let cantidadDeRepeticiones = 0
        enDondeSeRepite.forEach(recuerdo => {
            if(recuerdo.esIgualAOtro(recuerdoAChequear)){
                let cantidadDeRepeticiones = cantidadDeRepeticiones +1 
            }
        });
        return cantidadDeRepeticiones
    }


    esUnDejaVu(pensamiento){
        return 0<saberCuantasVecesSeRepiteUnRecuerdo(pensamiento,this.memoriaDeLargoPlazo)

    }
    }







class Recuerdo {
    constructor(fecha,descripcion,emocionDominante){
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.emocionDominante = emocionDominante;
    }
    darEmocionDominante(){
        return this.emocionDominante
    }
    darDescripcion(){
        return this.descripcion
    }
    esIgualAOtro(recuerdo){
        return recuerdo.darEmocionDominante()===this.emocionDominante && recuerdo.darDescripcion()===this.descripcion
            
    }
    //el recuerdo tiene la responsabilidad de saber si es negado//
    elRecuerdoEsNegado(emocionActual){
        if(this.emocionDominante!="Alegria" && emocionActual ==="Alengria"){
            return true

        }
        else if(emocionActual==="Tristeza" && this.emocionDominante==="Alegria"){
            return true
        }
        else{
            return false
        }
        
    }

    esDificilDeExplicar(){
        cadenita= this.descripcion.split(" ")
        return cadenita.lengh()>10
    }
}


class AsentarRecuerdos{
    constructor(persona) {
        this.persona = persona;}
    procesoDeDescanso(){
        this.persona.asentarRecuerdosDelDia()
    
    }
      

}
class AsentamientoSelectivo{
    constructor(persona,palabraClave) {
        this.persona = persona
        this.palabraClave = palabraClave;}
        procesoDeDescanso(){
            this.persona.AsentamientoSelectivo(this.palabraClave)
        
        }

}


class profundizacion{
    constructor(persona) {
        this.persona = persona}
        procesoDeDescanso(){
            this.persona.profundizacion()
        
        }

}
class restauracionCognitiva{
    constructor(persona,numero){
        this.persona = persona
    this.numero = numero}
        procesoDeDescanso(){
            this.persona.restauracionCognitiva(numero)
                
        
        }

}
class controlHormonal{
    constructor(persona){
        this.persona = persona
    }
    procesoDeDescanso(){
        this.persona.controlHormonal()
    }

}

let listaDeDescansoDeRileyPersonalizada = [new AsentarRecuerdos(Riley), new profundizacion(Riley),new restauracionCognitiva(Riley,560) ]


  
  let Riley = new Persona(1)

  Riley.vivirEvento("fue un verano del 76, mi padre insinuo que mi madre era una zorra y procedio a pegarle a mi hermano, fue un buen sabado a diferencia de lo habitual")
  Riley.vivirEvento("asdasdasd EMBOLIA")
  Riley.vivirEvento("LA ECONOMIA CALLO EVENTO TRISTE XDXD")
  Riley.vivirEvento("HOY oi una cancion de ghost, soy metalero gotico jajajsasjas")
  Riley.vivirEvento("hace frio, emocionado por el verano")
  Riley.vivirEvento("hace calor, esperando el invierno")

   console.log(Riley.emocionDelMomento)