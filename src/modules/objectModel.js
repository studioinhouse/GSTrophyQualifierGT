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
    constructor(number, name, nationality, motorcycle, points){
        this.number = number,
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

let JorgeSoto, DiegoMayen, CarlosRamos, IvanNavas, JoseCanizalez, JuanPalmieri, BryanHernandez, LuisLopez, GermanMendez, LuisPalmieri, LuisGonzalez, VictorCaceres, MichaelVowesh, LuisPira, JuanFigueroa, AndresVega, BryanCucum, ClaudioCucum, CarlosPortillo, MauricioMendez, JoseBarraza, GuillermoBarraza, TomyGonzalez, CesarPinto, JavierVasquez, JulioCastellanos, AndreGuillen, FelipeDiaz, JorgeRevolorio, JoseBonilla, OmarPineda, RicardoValenzuela, RolandoPalma;

let bikerPositionTable = [
    JorgeSoto = new PositionTable(1,'Jorge Soto', 'Guatemala', 'R1250GS', 0),
    DiegoMayen = new PositionTable(2,'Diego Mayen', 'Guatemala', 'R1250GS', 0),
    CarlosRamos = new PositionTable(3,'Carlos Ramos', 'Guatemala', 'R1250GS', 0),
    IvanNavas = new PositionTable(4,'Ivan Navas', 'Guatemala', 'R1250GS', 0),
    JoseCanizalez = new PositionTable(5,'José Canizalez', 'Guatemala', 'R1250GS', 0),
    JuanPalmieri = new PositionTable(6,'Juan Palmieri', 'Guatemala', 'R1250GS', 0),
    BryanHernandez = new PositionTable(7,'Bryan Hernández', 'Guatemala', 'R1250GS', 0),
    LuisLopez = new PositionTable(8,'Luis Lopez', 'Guatemala', 'R1250GS', 0),
    GermanMendez = new PositionTable(9,'German Mendez', 'Guatemala', 'R1250GS', 0),
    LuisPalmieri = new PositionTable(10,'Luis Palmieri', 'Guatemala', 'R1250GS', 0),
    LuisGonzalez = new PositionTable(11,'Luis González', 'Guatemala', 'R1250GS', 0),
    VictorCaceres = new PositionTable(12,'Victor Cacerez', 'Guatemala', 'R1250GS', 0),
    MichaelVowesh = new PositionTable(13,'Michael Vowesh', 'Guatemala', 'R1250GS', 0),
    LuisPira = new PositionTable(14,'Luis Pira', 'Guatemala', 'R1250GS', 0),
    JuanFigueroa = new PositionTable(15,'Juan Figueroa', 'El_Salvador', 'R1250GS', 0),
    AndresVega = new PositionTable(16,'Andres Vega', 'Guatemala', 'R1250GS', 0),
    BryanCucum = new PositionTable(17,'Bryan Cucum', 'Guatemala', 'R1250GS', 0),
    ClaudioCucum = new PositionTable(18,'Claudio Cucum', 'Guatemala', 'R1250GS', 0),
    CarlosPortillo = new PositionTable(19,'Carlos Portillo', 'Guatemala', 'R1250GS', 0),
    MauricioMendez = new PositionTable(20,'Mauricio Mendez', 'El_Salvador', 'R1250GS', 0),
    JoseBarraza = new PositionTable(21,'José Barraza', 'El_Salvador', 'R1250GS', 0),
    GuillermoBarraza = new PositionTable(22,'Guillermo Barraza', 'El_Salvador', 'R1250GS', 0),
    TomyGonzalez = new PositionTable(23,'Tomy Gonzalez', 'Guatemala', 'R1250GS', 0),
    CesarPinto = new PositionTable(24,'Cesar Pinto', 'Guatemala', 'R1250GS', 0),
    JavierVasquez = new PositionTable(25,'Javier Vasquez', 'El_Salvador', 'R1250GS', 0),
    JulioCastellanos = new PositionTable(26,'Julio Castellanos', 'Guatemala', 'R1250GS', 0),
    AndreGuillen = new PositionTable(27,'Andres Guillen', 'Guatemala', 'R1250GS', 0),
    FelipeDiaz = new PositionTable(28,'Felipe Diaz', 'El_Salvador', 'R1250GS', 0),
    JorgeRevolorio = new PositionTable(29,'Jorge Revolorio', 'Guatemala', 'R1250GS', 0),
    JoseBonilla = new PositionTable(30,'José Bonilla', 'Guatemala', 'R1250GS', 0),
    OmarPineda = new PositionTable(31,'Omar Pineda', 'El_Salvador', 'R1250GS', 0),
    RicardoValenzuela = new PositionTable(32,'Ricardo Valenzuela', 'Guatemala', 'R1250GS', 0),
    RolandoPalma = new PositionTable(33,'Rolando Palma', 'Guatemala', 'R1250GS', 0)

]


export{ bikerRules, bikerPositionTable }