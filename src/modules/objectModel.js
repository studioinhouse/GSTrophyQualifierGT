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

class PositionImg{
    constructor(name, img){
        this.name = name,
        this.img = img
    }
}

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59,img60,img61,img62,img63,img64,img65,img66,img67,img68,img69,img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81;

let bikerImageDay = [
    img1 = new PositionImg('GS_img1', './statics/images/GSTrophy_img_day/image-1.jpg'),
    img2 = new PositionImg('GS_img2', './statics/images/GSTrophy_img_day/image-2.jpg'),
    img3 = new PositionImg('GS_img3', './statics/images/GSTrophy_img_day/image-3.jpg'),
    img4 = new PositionImg('GS_img4', './statics/images/GSTrophy_img_day/image-4.jpg'),
    img5 = new PositionImg('GS_img5', './statics/images/GSTrophy_img_day/image-5.jpg'),
    img6 = new PositionImg('GS_img6', './statics/images/GSTrophy_img_day/image-6.jpg'),
    img7 = new PositionImg('GS_img7', './statics/images/GSTrophy_img_day/image-7.jpg'),
    img8 = new PositionImg('GS_img8', './statics/images/GSTrophy_img_day/image-8.jpg'),
    img9 = new PositionImg('GS_img9', './statics/images/GSTrophy_img_day/image-9.jpg'),
    img10 = new PositionImg('GS_img10', './statics/images/GSTrophy_img_day/image-10.jpg'),
    img11 = new PositionImg('GS_img11', './statics/images/GSTrophy_img_day/image-11.jpg'),
    img12 = new PositionImg('GS_img12', './statics/images/GSTrophy_img_day/image-12.jpg'),
    img13 = new PositionImg('GS_img13', './statics/images/GSTrophy_img_day/image-13.jpg'),
    img14 = new PositionImg('GS_img14', './statics/images/GSTrophy_img_day/image-14.jpg'),
    img15 = new PositionImg('GS_img15', './statics/images/GSTrophy_img_day/image-15.jpg'),
    img16 = new PositionImg('GS_img16', './statics/images/GSTrophy_img_day/image-16.jpg'),
    img17 = new PositionImg('GS_img17', './statics/images/GSTrophy_img_day/image-17.jpg'),
    img18 = new PositionImg('GS_img18', './statics/images/GSTrophy_img_day/image-18.jpg'),
    img19 = new PositionImg('GS_img19', './statics/images/GSTrophy_img_day/image-19.jpg'),
    img20 = new PositionImg('GS_img20', './statics/images/GSTrophy_img_day/image-20.jpg'),
    img21 = new PositionImg('GS_img21', './statics/images/GSTrophy_img_day/image-21.jpg'),
    img22 = new PositionImg('GS_img22', './statics/images/GSTrophy_img_day/image-22.jpg'),
    img23 = new PositionImg('GS_img23', './statics/images/GSTrophy_img_day/image-23.jpg'),
    img24 = new PositionImg('GS_img24', './statics/images/GSTrophy_img_day/image-24.jpg'),
    img25 = new PositionImg('GS_img25', './statics/images/GSTrophy_img_day/image-25.jpg'),
    img26 = new PositionImg('GS_img26', './statics/images/GSTrophy_img_day/image-26.jpg'),
    img27 = new PositionImg('GS_img27', './statics/images/GSTrophy_img_day/image-27.jpg'),
    img28 = new PositionImg('GS_img28', './statics/images/GSTrophy_img_day/image-28.jpg'),
    img29 = new PositionImg('GS_img29', './statics/images/GSTrophy_img_day/image-29.jpg'),
    img30 = new PositionImg('GS_img30', './statics/images/GSTrophy_img_day/image-30.jpg'),
    img31 = new PositionImg('GS_img31', './statics/images/GSTrophy_img_day/image-31.jpg'),
    img32 = new PositionImg('GS_img32', './statics/images/GSTrophy_img_day/image-32.jpg'),
    img33 = new PositionImg('GS_img33', './statics/images/GSTrophy_img_day/image-33.jpg'),
    img34 = new PositionImg('GS_img34', './statics/images/GSTrophy_img_day/image-34.jpg'),
    img35 = new PositionImg('GS_img35', './statics/images/GSTrophy_img_day/image-35.jpg'),
    img36 = new PositionImg('GS_img36', './statics/images/GSTrophy_img_day/image-36.jpg'),
    img37 = new PositionImg('GS_img37', './statics/images/GSTrophy_img_day/image-37.jpg'),
    img38 = new PositionImg('GS_img38', './statics/images/GSTrophy_img_day/image-38.jpg'),
    img39 = new PositionImg('GS_img39', './statics/images/GSTrophy_img_day/image-39.jpg'),
    img40 = new PositionImg('GS_img40', './statics/images/GSTrophy_img_day/image-40.jpg'),
    img41 = new PositionImg('GS_img41', './statics/images/GSTrophy_img_day/image-41.jpg'),
    img42 = new PositionImg('GS_img42', './statics/images/GSTrophy_img_day/image-42.jpg'),
    img43 = new PositionImg('GS_img43', './statics/images/GSTrophy_img_day/image-43.jpg'),
    img44 = new PositionImg('GS_img44', './statics/images/GSTrophy_img_day/image-44.jpg'),
    img45 = new PositionImg('GS_img45', './statics/images/GSTrophy_img_day/image-45.jpg'),
    img46 = new PositionImg('GS_img46', './statics/images/GSTrophy_img_day/image-46.jpg'),
    img47 = new PositionImg('GS_img47', './statics/images/GSTrophy_img_day/image-47.jpg'),
    img48 = new PositionImg('GS_img48', './statics/images/GSTrophy_img_day/image-48.jpg'),
    img49 = new PositionImg('GS_img49', './statics/images/GSTrophy_img_day/image-49.jpg'),
    img50 = new PositionImg('GS_img50', './statics/images/GSTrophy_img_day/image-50.jpg'),
    img51 = new PositionImg('GS_img51', './statics/images/GSTrophy_img_day/image-51.jpg'),
    img52 = new PositionImg('GS_img52', './statics/images/GSTrophy_img_day/image-52.jpg'),
    img53 = new PositionImg('GS_img53', './statics/images/GSTrophy_img_day/image-53.jpg'),
    img54 = new PositionImg('GS_img54', './statics/images/GSTrophy_img_day/image-54.jpg'),
    img55 = new PositionImg('GS_img55', './statics/images/GSTrophy_img_day/image-55.jpg'),
    img56 = new PositionImg('GS_img56', './statics/images/GSTrophy_img_day/image-56.jpg'),
    img57 = new PositionImg('GS_img57', './statics/images/GSTrophy_img_day/image-57.jpg'),
    img58 = new PositionImg('GS_img58', './statics/images/GSTrophy_img_day/image-58.jpg'),
    img59 = new PositionImg('GS_img59', './statics/images/GSTrophy_img_day/image-59.jpg'),
    img60 = new PositionImg('GS_img60', './statics/images/GSTrophy_img_day/image-60.jpg'),
    img61 = new PositionImg('GS_img61', './statics/images/GSTrophy_img_day/image-61.jpg'),
    img62 = new PositionImg('GS_img62', './statics/images/GSTrophy_img_day/image-62.jpg'),
    img63 = new PositionImg('GS_img63', './statics/images/GSTrophy_img_day/image-63.jpg'),
    img64 = new PositionImg('GS_img64', './statics/images/GSTrophy_img_day/image-64.jpg'),
    img65 = new PositionImg('GS_img65', './statics/images/GSTrophy_img_day/image-65.jpg'),
    img66 = new PositionImg('GS_img66', './statics/images/GSTrophy_img_day/image-66.jpg'),
    img67 = new PositionImg('GS_img67', './statics/images/GSTrophy_img_day/image-67.jpg'),
    img68 = new PositionImg('GS_img68', './statics/images/GSTrophy_img_day/image-68.jpg'),
    img69 = new PositionImg('GS_img69', './statics/images/GSTrophy_img_day/image-69.jpg'),
    img70 = new PositionImg('GS_img70', './statics/images/GSTrophy_img_day/image-70.jpg'),
    img71 = new PositionImg('GS_img71', './statics/images/GSTrophy_img_day/image-71.jpg'),
    img72 = new PositionImg('GS_img72', './statics/images/GSTrophy_img_day/image-72.jpg'),
    img73 = new PositionImg('GS_img73', './statics/images/GSTrophy_img_day/image-73.jpg'),
    img74 = new PositionImg('GS_img74', './statics/images/GSTrophy_img_day/image-74.jpg'),
    img75 = new PositionImg('GS_img75', './statics/images/GSTrophy_img_day/image-75.jpg'),
    img76 = new PositionImg('GS_img76', './statics/images/GSTrophy_img_day/image-76.jpg'),
    img77 = new PositionImg('GS_img77', './statics/images/GSTrophy_img_day/image-77.jpg'),
    img78 = new PositionImg('GS_img78', './statics/images/GSTrophy_img_day/image-78.jpg'),
    img79 = new PositionImg('GS_img79', './statics/images/GSTrophy_img_day/image-79.jpg'),
    img80 = new PositionImg('GS_img80', './statics/images/GSTrophy_img_day/image-80.jpg'),
    img81 = new PositionImg('GS_img81', './statics/images/GSTrophy_img_day/image-81.jpg'),
]; 


export{ bikerRules, bikerPositionTable, bikerImageDay }