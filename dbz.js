class Guerrero {
    constructor() {
        this.potencialOfensivo = 0
        this.nivelDeExperiencia = 0
        this.nivelDeEnergia = 5000
        this.traje = 0
    }
    
    nivelDeExperiencia(){
        return this.nivelDeExperiencia
    }
    nivelOfensivoDelGuerrero(){
        return this.potencialOfensivo
    }
    aumentarExperiencia(numero){
        this.guerrero.nivelDeExperiencia = this.guerrero.nivelDeExperiencia + numero
    }
    perderVida(numero){
        this.guerrero.nivelDeEnergia = this.guerrero.nivelDeEnergia - numero
    }

    recibirAtaque(numero){
        if(this.guerrero.traje.tipo!=entrenamiento){           
        this.Guerrero.perderVida(numero*porcentaje)}
    }
    cambiarTraje(traje){
        this.guerrero.traje = traje
    }

    atacar(GuerreroEnemigo){
        GuerreroEnemigo.recibirAtaque(this.guerrero.nivelOfensivoDelGuerrero()*0.10)
        this.guerrero.aumentarExperiencia(1)
        if(this.guerrero.traje.tipo===entrenamiento){
            this.aumentarExperiencia(this.guerrero.nivelDeExperiencia*2)
        }
        else{

        }
    
    }
    seleccionarTraje(traje){
        this.guerrero.cambiarTraje(traje)
    }


}

class Traje{

  constructor(tipo) {
        this.tipo = entrenamiento
        this.porcentajeDeDefensa = 15
        this.nivelDeDesgaste = 0
    }
    aumentarExperiencia(guerrero){
        guerrero.aumentarExperiencia(guerrero.nivelDeExperiencia*2)
        //esto capaz me conviene implementarlo cuando peleen y chequear el tipo
        //porque el que tiene que toquetearse la experiencia es el guerrero
    }

}


let Goku = new Guerrero()
let TrajeDeEntrenamientoZenfu = new Traje("entrenamiento")
Goku.seleccionarTraje(TrajeDeEntrenamientoZenfu)