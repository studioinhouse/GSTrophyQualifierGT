/* Creación de clase prototipal para objetos */

class ParticipationRules{
    constructor(name, rules, numberRule){
        this.name = name,
        this.rules = rules,
        this.position = numberRule
    }
}

let motorcycleOwner, pilot, repeatParticipation, conduct, claim, escort;
let bikerRules = [
    motorcycleOwner = new ParticipationRules('Propiedad de la moto', '1) El evento es exclusivo para propietarios de motos BMW GS. Debe de demostrarse la propiedad de la misma por medio de la tarjeta de circulación. \n \n 2) En el caso de motos a nombre de empresas deberá de  presentarse el caso y las constancias de pago a la organización para su aprobación. \n \n 3) Se autoriza el uso de motos en primer grado sanguíneo. ( Padre e hijo ) \n \n 4) No se puede participar en motos prestadas o traspasadas temporalmente de forma fraudulenta lo cual da lugar a DESCALIFICACIÓN.', 1),
    
    pilot = new ParticipationRules('Pilotos', '1) No se pueden inscribir instructores certificados y/o instructores de motociclismo.  \n \n 2) No se permite la participación de pilotos que hayan ganado en los primeros 3 lugares de los campeonatos del año anterior de cualquier modalidad de motociclismo bajo las categorías de súper expertos. \n \n 3) Los pilotos deben de tener nacionalidad Guatemalteca.', 2),

    repeatParticipation = new ParticipationRules('Repetición de participación', '1) Las personas que hayan clasificado a un GS Trophy latinoamericano tienen que esperar una eliminatoria para volver a participar.  \n \n 2) Pilotos que hayan clasificado a un Trophy Internacional no pueden volver a participar.', 3),

    conduct = new ParticipationRules('Conducta', '1) Cualquier persona que muestre actitud antideportiva, falta de respeto a un compañero o directores de la organización será  DESCALIFICADO y retirado de el evento inmediatamente.', 4),

    claim = new ParticipationRules('Reclamos', '1) Cada etapa o prueba de manejo se puntea en el mismo momento en una tabla siempre a la vista de los participantes. Las revisiones o reclamos deben de hacer inmediatamente antes de que el Marshall de por cerrada la etapa. NO SE ACEPTAN RECLAMOS POSTERIORES.', 5),

    escort = new ParticipationRules('Acompañante', '1) Se permite la participación de cualquier moto y marca con el grupo de acompañantes quienes transitan bajo la guía de un Marshall de la organización.', 6)
]

class PositionTable{
    constructor(name, nationality, motorcycle, points){
        this.name = name,
        this.nationality = nationality,
        this.motorcycle = motorcycle,
        this.points = points
    }
    imageReference(){
        const url = `./statics/images/${this.motorcycle}.png`;
        return url;
    }
}

let Miguel, Estuardo, Luis, Alex;
let bikerPositionTable = [
    Miguel = new PositionTable('Miguel García', 'guatemalteco', 'G310GS', 250),
    Estuardo = new PositionTable('Estuardo Paz', 'guatemalteco', 'R1250GS', 200),
    Luis = new PositionTable('Luis Galván', 'guatemalteco', 'F850GS', 290),
    Alex = new PositionTable('Alex Rudeke', 'guatemalteco', 'F750GS', 240)
]


export{ bikerRules, bikerPositionTable }