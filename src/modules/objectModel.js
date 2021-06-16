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

let JorgeSoto, DiegoMayen, CarlosRamos, IvanNavas, JoseCanizalez, JuanPalmieri, BryanHernandez, LuisLopez, GermanMendez, LuisPalmieri, LuisGonzalez, VictorCaceres, MichaelVowesh, LuisPira, JuanFigueroa, AndresVega, BryanCucum, ClaudioCucum, CarlosPortillo, MauricioMendez, JoseBarraza, GuillermoBarraza, TomyGonzalez, CesarPinto, JavierVasquez, JulioCastellanos, AndreGuillen, FelipeDiaz, JorgeRevolorio, JoseBonilla, OmarPineda, RicardoValenzuela, RolandoPalma, ByronMacaria, JaimeHernesto;

let bikerPositionTable = [
    LuisPalmieri = new PositionTable(1,'Luis Palmieri', 'Guatemala', 'R1250GS_blanco', 58),
    MichaelVowesh = new PositionTable(2,'Michael Vowesh', 'Guatemala', 'R1250GS', 57),
    LuisGonzalez = new PositionTable(3,'Luis González', 'Guatemala', 'R1250GS', 46),
    RicardoValenzuela = new PositionTable(4,'Ricardo Valenzuela', 'Guatemala', 'R1250GS', 45),
    AndresVega = new PositionTable(5,'Andres Vega', 'Guatemala', 'R1250GS_negro', 43),
    DiegoMayen = new PositionTable(6,'Diego Mayen', 'Guatemala', 'R1250GS', 38),
    CarlosPortillo = new PositionTable(7,'Carlos Portillo', 'Guatemala', 'R1250GS', 36),
    LuisLopez = new PositionTable(8,'Luis Lopez', 'Guatemala', 'R1250GS', 34),
    LuisPira = new PositionTable(9,'Luis Pira', 'Guatemala', 'R1250GS', 34),
    JulioCastellanos = new PositionTable(10,'Julio Castellanos', 'Guatemala', 'R1250GS', 32),
    VictorCaceres = new PositionTable(11,'Victor Cacerez', 'Guatemala', 'R1250GS', 29),
    BryanCucum = new PositionTable(12,'Bryan Cucum', 'Guatemala', 'R1250GS', 29), 
    JorgeRevolorio = new PositionTable(13,'Jorge Revolorio', 'Guatemala', 'R1250GS', 26),
    JuanPalmieri = new PositionTable(14,'Juan Palmieri', 'Guatemala', 'R1250GS', 25),
    RolandoPalma = new PositionTable(15,'Rolando Palma', 'Guatemala', 'R1250GS', 25),
    BryanHernandez = new PositionTable(16,'Bryan Hernández', 'Guatemala', 'R1250GS', 24),
    ByronMacaria = new PositionTable(17, 'Byron Macaria', 'Guatemala', 'R1250GS',24),
    CarlosRamos = new PositionTable(18,'Carlos Ramos', 'Guatemala', 'R1250GS', 23),
    AndreGuillen = new PositionTable(19,'Andres Guillen', 'Guatemala', 'R1250GS', 22),
    IvanNavas = new PositionTable(20,'Ivan Navas', 'Guatemala', 'R1250GS', 21),
    ClaudioCucum = new PositionTable(21,'Claudio Cucum', 'Guatemala', 'R1250GS', 21),
    JoseBonilla = new PositionTable(22,'José Bonilla', 'Guatemala', 'R1250GS', 19),
    TomyGonzalez = new PositionTable(23,'Tomy Gonzalez', 'Guatemala', 'R1250GS', 14),
    JoseCanizalez = new PositionTable(24,'José Canizalez', 'Guatemala', 'R1250GS', 8),
    JorgeSoto = new PositionTable(25,'Jorge Soto', 'Guatemala', 'R1250GS', 4),
    JuanFigueroa = new PositionTable(26,'Juan Figueroa', 'El_Salvador', 'R1250GS', 40),
    GuillermoBarraza = new PositionTable(27,'Guillermo Barraza', 'El_Salvador', 'R1250GS', 39),
    JoseBarraza = new PositionTable(28,'José Barraza', 'El_Salvador', 'R1250GS', 37),
    OmarPineda = new PositionTable(29,'Omar Pineda', 'El_Salvador', 'R1250GS', 23),
    JavierVasquez = new PositionTable(30,'Javier Vasquez', 'El_Salvador', 'R1250GS', 21),
    JaimeHernesto = new PositionTable(31,'Jaime Hernesto', 'El_Salvador', 'R1250GS', 12),
    FelipeDiaz = new PositionTable(32,'Felipe Diaz', 'El_Salvador', 'R1250GS', 12),


]

class PositionImg{
    constructor(name, img){
        this.name = name,
        this.img = img
    }
}

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59,img60,img61,img62,img63,img64,img65,img66,img67,img68,img69,img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81;

let bikerImageDay = [
    img1 = new PositionImg('GS_img1', '/statics/images/GSTrophy_img_day/image-1.jpg'),
    img2 = new PositionImg('GS_img2', '/statics/images/GSTrophy_img_day/image-2.jpg'),
    img3 = new PositionImg('GS_img3', '/statics/images/GSTrophy_img_day/image-3.jpg'),
    img4 = new PositionImg('GS_img4', '/statics/images/GSTrophy_img_day/image-4.jpg'),
    img5 = new PositionImg('GS_img5', '/statics/images/GSTrophy_img_day/image-5.jpg'),
    img6 = new PositionImg('GS_img6', '/statics/images/GSTrophy_img_day/image-6.jpg'),
    img7 = new PositionImg('GS_img7', '/statics/images/GSTrophy_img_day/image-7.jpg'),
    img8 = new PositionImg('GS_img8', '/statics/images/GSTrophy_img_day/image-8.jpg'),
    img9 = new PositionImg('GS_img9', '/statics/images/GSTrophy_img_day/image-9.jpg'),
    img10 = new PositionImg('GS_img10', '/statics/images/GSTrophy_img_day/image-10.jpg'),
    img11 = new PositionImg('GS_img11', '/statics/images/GSTrophy_img_day/image-11.jpg'),
    img12 = new PositionImg('GS_img12', '/statics/images/GSTrophy_img_day/image-12.jpg'),
    img13 = new PositionImg('GS_img13', '/statics/images/GSTrophy_img_day/image-13.jpg'),
    img14 = new PositionImg('GS_img14', '/statics/images/GSTrophy_img_day/image-14.jpg'),
    img15 = new PositionImg('GS_img15', '/statics/images/GSTrophy_img_day/image-15.jpg'),
    img16 = new PositionImg('GS_img16', '/statics/images/GSTrophy_img_day/image-16.jpg'),
    img17 = new PositionImg('GS_img17', '/statics/images/GSTrophy_img_day/image-17.jpg'),
    img18 = new PositionImg('GS_img18', '/statics/images/GSTrophy_img_day/image-18.jpg'),
    img19 = new PositionImg('GS_img19', '/statics/images/GSTrophy_img_day/image-19.jpg'),
    img20 = new PositionImg('GS_img20', '/statics/images/GSTrophy_img_day/image-20.jpg'),
    img21 = new PositionImg('GS_img21', '/statics/images/GSTrophy_img_day/image-21.jpg'),
    img22 = new PositionImg('GS_img22', '/statics/images/GSTrophy_img_day/image-22.jpg'),
    img23 = new PositionImg('GS_img23', '/statics/images/GSTrophy_img_day/image-23.jpg'),
    img24 = new PositionImg('GS_img24', '/statics/images/GSTrophy_img_day/image-24.jpg'),
    img25 = new PositionImg('GS_img25', '/statics/images/GSTrophy_img_day/image-25.jpg'),
    img26 = new PositionImg('GS_img26', '/statics/images/GSTrophy_img_day/image-26.jpg'),
    img27 = new PositionImg('GS_img27', '/statics/images/GSTrophy_img_day/image-27.jpg'),
    img28 = new PositionImg('GS_img28', '/statics/images/GSTrophy_img_day/image-28.jpg'),
    img29 = new PositionImg('GS_img29', '/statics/images/GSTrophy_img_day/image-29.jpg'),
    img30 = new PositionImg('GS_img30', '/statics/images/GSTrophy_img_day/image-30.jpg'),
    img31 = new PositionImg('GS_img31', '/statics/images/GSTrophy_img_day/image-31.jpg'),
    img32 = new PositionImg('GS_img32', '/statics/images/GSTrophy_img_day/image-32.jpg'),
    img33 = new PositionImg('GS_img33', '/statics/images/GSTrophy_img_day/image-33.jpg'),
    img34 = new PositionImg('GS_img34', '/statics/images/GSTrophy_img_day/image-34.jpg'),
    img35 = new PositionImg('GS_img35', '/statics/images/GSTrophy_img_day/image-35.jpg'),
    img36 = new PositionImg('GS_img36', '/statics/images/GSTrophy_img_day/image-36.jpg'),
    img37 = new PositionImg('GS_img37', '/statics/images/GSTrophy_img_day/image-37.jpg'),
    img38 = new PositionImg('GS_img38', '/statics/images/GSTrophy_img_day/image-38.jpg'),
    img39 = new PositionImg('GS_img39', '/statics/images/GSTrophy_img_day/image-39.jpg'),
    img40 = new PositionImg('GS_img40', '/statics/images/GSTrophy_img_day/image-40.jpg'),
    img41 = new PositionImg('GS_img41', '/statics/images/GSTrophy_img_day/image-41.jpg'),
    img42 = new PositionImg('GS_img42', '/statics/images/GSTrophy_img_day/image-42.jpg'),
    img43 = new PositionImg('GS_img43', '/statics/images/GSTrophy_img_day/image-43.jpg'),
    img44 = new PositionImg('GS_img44', '/statics/images/GSTrophy_img_day/image-44.jpg'),
    img45 = new PositionImg('GS_img45', '/statics/images/GSTrophy_img_day/image-45.jpg'),
    img46 = new PositionImg('GS_img46', '/statics/images/GSTrophy_img_day/image-46.jpg'),
    img47 = new PositionImg('GS_img47', '/statics/images/GSTrophy_img_day/image-47.jpg'),
    img48 = new PositionImg('GS_img48', '/statics/images/GSTrophy_img_day/image-48.jpg'),
    img49 = new PositionImg('GS_img49', '/statics/images/GSTrophy_img_day/image-49.jpg'),
    img50 = new PositionImg('GS_img50', '/statics/images/GSTrophy_img_day/image-50.jpg'),
    img51 = new PositionImg('GS_img51', '/statics/images/GSTrophy_img_day/image-51.jpg'),
    img52 = new PositionImg('GS_img52', '/statics/images/GSTrophy_img_day/image-52.jpg'),
    img53 = new PositionImg('GS_img53', '/statics/images/GSTrophy_img_day/image-53.jpg'),
    img54 = new PositionImg('GS_img54', '/statics/images/GSTrophy_img_day/image-54.jpg'),
    img55 = new PositionImg('GS_img55', '/statics/images/GSTrophy_img_day/image-55.jpg'),
    img56 = new PositionImg('GS_img56', '/statics/images/GSTrophy_img_day/image-56.jpg'),
    img57 = new PositionImg('GS_img57', '/statics/images/GSTrophy_img_day/image-57.jpg'),
    img58 = new PositionImg('GS_img58', '/statics/images/GSTrophy_img_day/image-58.jpg'),
    img59 = new PositionImg('GS_img59', '/statics/images/GSTrophy_img_day/image-59.jpg'),
    img60 = new PositionImg('GS_img60', '/statics/images/GSTrophy_img_day/image-60.jpg'),
    img61 = new PositionImg('GS_img61', '/statics/images/GSTrophy_img_day/image-61.jpg'),
    img62 = new PositionImg('GS_img62', '/statics/images/GSTrophy_img_day/image-62.jpg'),
    img63 = new PositionImg('GS_img63', '/statics/images/GSTrophy_img_day/image-63.jpg'),
    img64 = new PositionImg('GS_img64', '/statics/images/GSTrophy_img_day/image-64.jpg'),
    img65 = new PositionImg('GS_img65', '/statics/images/GSTrophy_img_day/image-65.jpg'),
    img66 = new PositionImg('GS_img66', '/statics/images/GSTrophy_img_day/image-66.jpg'),
    img67 = new PositionImg('GS_img67', '/statics/images/GSTrophy_img_day/image-67.jpg'),
    img68 = new PositionImg('GS_img68', '/statics/images/GSTrophy_img_day/image-68.jpg'),
    img69 = new PositionImg('GS_img69', '/statics/images/GSTrophy_img_day/image-69.jpg'),
    img70 = new PositionImg('GS_img70', '/statics/images/GSTrophy_img_day/image-70.jpg'),
    img71 = new PositionImg('GS_img71', '/statics/images/GSTrophy_img_day/image-71.jpg'),
    img72 = new PositionImg('GS_img72', '/statics/images/GSTrophy_img_day/image-72.jpg'),
    img73 = new PositionImg('GS_img73', '/statics/images/GSTrophy_img_day/image-73.jpg'),
    img74 = new PositionImg('GS_img74', '/statics/images/GSTrophy_img_day/image-74.jpg'),
    img75 = new PositionImg('GS_img75', '/statics/images/GSTrophy_img_day/image-75.jpg'),
    img76 = new PositionImg('GS_img76', '/statics/images/GSTrophy_img_day/image-76.jpg'),
    img77 = new PositionImg('GS_img77', '/statics/images/GSTrophy_img_day/image-77.jpg'),
    img78 = new PositionImg('GS_img78', '/statics/images/GSTrophy_img_day/image-78.jpg'),
    img79 = new PositionImg('GS_img79', '/statics/images/GSTrophy_img_day/image-79.jpg'),
    img80 = new PositionImg('GS_img80', '/statics/images/GSTrophy_img_day/image-80.jpg'),
    img81 = new PositionImg('GS_img81', '/statics/images/GSTrophy_img_day/image-81.jpg'),
]; 

let img82, img83, img84, img85, img86, img87, img88, img89, img90, img91, img92, img93, img94, img95, img96, img97, img98, img99, img100, img101, img102, img103, img104, img105, img106, img107, img108, img109, img110, img111, img112, img113, img114, img115, img116, img117, img118, img119, img120, img121, img122, img123, img124, img125, img126, img127, img128, img129, img130, img131, img132, img133, img134, img135, img136, img137, img138, img139, img140, img141, img142, img143, img144, img145, img146, img147, img148, img149, img150, img151, img152, img153, img154, img155, img156, img157, img158, img159, img160, img161, img162, img163, img164, img165, img166, img167, img168;

let bikerImageDay2 = [
    img82 = new PositionImg('GS_img82', '/statics/images/GSTrophy_img_day/image-82.jpg'),
    img83 = new PositionImg('GS_img83', '/statics/images/GSTrophy_img_day/image-83.jpg'),
    img84 = new PositionImg('GS_img84', '/statics/images/GSTrophy_img_day/image-84.jpg'),
    img85 = new PositionImg('GS_img85', '/statics/images/GSTrophy_img_day/image-85.jpg'),
    img86 = new PositionImg('GS_img86', '/statics/images/GSTrophy_img_day/image-86.jpg'),
    img87 = new PositionImg('GS_img87', '/statics/images/GSTrophy_img_day/image-87.jpg'),
    img88 = new PositionImg('GS_img88', '/statics/images/GSTrophy_img_day/image-88.jpg'),
    img89 = new PositionImg('GS_img89', '/statics/images/GSTrophy_img_day/image-89.jpg'),
    img90 = new PositionImg('GS_img90', '/statics/images/GSTrophy_img_day/image-90.jpg'),
    img91 = new PositionImg('GS_img91', '/statics/images/GSTrophy_img_day/image-91.jpg'),
    img92 = new PositionImg('GS_img92', '/statics/images/GSTrophy_img_day/image-92.jpg'),
    img93 = new PositionImg('GS_img93', '/statics/images/GSTrophy_img_day/image-93.jpg'),
    img94 = new PositionImg('GS_img94', '/statics/images/GSTrophy_img_day/image-94.jpg'),
    img95 = new PositionImg('GS_img95', '/statics/images/GSTrophy_img_day/image-95.jpg'),
    img96 = new PositionImg('GS_img96', '/statics/images/GSTrophy_img_day/image-96.jpg'),
    img97 = new PositionImg('GS_img97', '/statics/images/GSTrophy_img_day/image-97.jpg'),
    img98 = new PositionImg('GS_img98', '/statics/images/GSTrophy_img_day/image-98.jpg'),
    img99 = new PositionImg('GS_img99', '/statics/images/GSTrophy_img_day/image-99.jpg'),
    img100 = new PositionImg('GS_img100', '/statics/images/GSTrophy_img_day/image-100.jpg'),
    img101 = new PositionImg('GS_img101', '/statics/images/GSTrophy_img_day/image-101.jpg'),
    img102 = new PositionImg('GS_img102', '/statics/images/GSTrophy_img_day/image-102.jpg'),
    img103 = new PositionImg('GS_img103', '/statics/images/GSTrophy_img_day/image-103.jpg'),
    img104 = new PositionImg('GS_img104', '/statics/images/GSTrophy_img_day/image-104.jpg'),
    img105 = new PositionImg('GS_img105', '/statics/images/GSTrophy_img_day/image-105.jpg'),
    img106 = new PositionImg('GS_img106', '/statics/images/GSTrophy_img_day/image-106.jpg'),
    img107 = new PositionImg('GS_img107', '/statics/images/GSTrophy_img_day/image-107.jpg'),
    img108 = new PositionImg('GS_img108', '/statics/images/GSTrophy_img_day/image-108.jpg'),
    img109 = new PositionImg('GS_img109', '/statics/images/GSTrophy_img_day/image-109.jpg'),
    img110 = new PositionImg('GS_img110', '/statics/images/GSTrophy_img_day/image-110.jpg'),
    img111 = new PositionImg('GS_img111', '/statics/images/GSTrophy_img_day/image-111.jpg'),
    img112 = new PositionImg('GS_img112', '/statics/images/GSTrophy_img_day/image-112.jpg'),
    img113 = new PositionImg('GS_img113', '/statics/images/GSTrophy_img_day/image-113.jpg'),
    img114 = new PositionImg('GS_img114', '/statics/images/GSTrophy_img_day/image-114.jpg'),
    img115 = new PositionImg('GS_img115', '/statics/images/GSTrophy_img_day/image-115.jpg'),
    img116 = new PositionImg('GS_img116', '/statics/images/GSTrophy_img_day/image-116.jpg'),
    img117 = new PositionImg('GS_img117', '/statics/images/GSTrophy_img_day/image-117.jpg'),
    img118 = new PositionImg('GS_img118', '/statics/images/GSTrophy_img_day/image-118.jpg'),
    img119 = new PositionImg('GS_img119', '/statics/images/GSTrophy_img_day/image-119.jpg'),
    img120 = new PositionImg('GS_img120', '/statics/images/GSTrophy_img_day/image-120.jpg'),
    img121 = new PositionImg('GS_img121', '/statics/images/GSTrophy_img_day/image-121.jpg'),
    img122 = new PositionImg('GS_img122', '/statics/images/GSTrophy_img_day/image-122.jpg'),
    img123 = new PositionImg('GS_img123', '/statics/images/GSTrophy_img_day/image-123.jpg'),
    img124 = new PositionImg('GS_img124', '/statics/images/GSTrophy_img_day/image-124.jpg'),
    img125 = new PositionImg('GS_img125', '/statics/images/GSTrophy_img_day/image-125.jpg'),
    img126 = new PositionImg('GS_img126', '/statics/images/GSTrophy_img_day/image-126.jpg'),
    img127 = new PositionImg('GS_img127', '/statics/images/GSTrophy_img_day/image-127.jpg'),
    img128 = new PositionImg('GS_img128', '/statics/images/GSTrophy_img_day/image-128.jpg'),
    img129 = new PositionImg('GS_img129', '/statics/images/GSTrophy_img_day/image-129.jpg'),
    img130 = new PositionImg('GS_img130', '/statics/images/GSTrophy_img_day/image-130.jpg'),
    img131 = new PositionImg('GS_img131', '/statics/images/GSTrophy_img_day/image-131.jpg'),
    img132 = new PositionImg('GS_img132', '/statics/images/GSTrophy_img_day/image-132.jpg'),
    img133 = new PositionImg('GS_img133', '/statics/images/GSTrophy_img_day/image-133.jpg'),
    img134 = new PositionImg('GS_img134', '/statics/images/GSTrophy_img_day/image-134.jpg'),
    img135 = new PositionImg('GS_img135', '/statics/images/GSTrophy_img_day/image-135.jpg'),
    img136 = new PositionImg('GS_img136', '/statics/images/GSTrophy_img_day/image-136.jpg'),
    img137 = new PositionImg('GS_img137', '/statics/images/GSTrophy_img_day/image-137.jpg'),
    img138 = new PositionImg('GS_img138', '/statics/images/GSTrophy_img_day/image-138.jpg'),
    img139 = new PositionImg('GS_img139', '/statics/images/GSTrophy_img_day/image-139.jpg'),
    img140 = new PositionImg('GS_img140', '/statics/images/GSTrophy_img_day/image-140.jpg'),
    img141 = new PositionImg('GS_img141', '/statics/images/GSTrophy_img_day/image-141.jpg'),
    img142 = new PositionImg('GS_img142', '/statics/images/GSTrophy_img_day/image-142.jpg'),
    img143 = new PositionImg('GS_img143', '/statics/images/GSTrophy_img_day/image-143.jpg'),
    img144 = new PositionImg('GS_img144', '/statics/images/GSTrophy_img_day/image-144.jpg'),
    img145 = new PositionImg('GS_img145', '/statics/images/GSTrophy_img_day/image-145.jpg'),
    img146 = new PositionImg('GS_img146', '/statics/images/GSTrophy_img_day/image-146.jpg'),
    img147 = new PositionImg('GS_img147', '/statics/images/GSTrophy_img_day/image-147.jpg'),
    img148 = new PositionImg('GS_img148', '/statics/images/GSTrophy_img_day/image-148.jpg'),
    img149 = new PositionImg('GS_img149', '/statics/images/GSTrophy_img_day/image-149.jpg'),
    img150 = new PositionImg('GS_img150', '/statics/images/GSTrophy_img_day/image-150.jpg'),
    img151 = new PositionImg('GS_img151', '/statics/images/GSTrophy_img_day/image-151.jpg'),
    img152 = new PositionImg('GS_img152', '/statics/images/GSTrophy_img_day/image-152.jpg'),
    img153 = new PositionImg('GS_img153', '/statics/images/GSTrophy_img_day/image-153.jpg'),
    img154 = new PositionImg('GS_img154', '/statics/images/GSTrophy_img_day/image-154.jpg'),
    img155 = new PositionImg('GS_img155', '/statics/images/GSTrophy_img_day/image-155.jpg'),
    img156 = new PositionImg('GS_img156', '/statics/images/GSTrophy_img_day/image-156.jpg'),
    img157 = new PositionImg('GS_img157', '/statics/images/GSTrophy_img_day/image-157.jpg'),
    img158 = new PositionImg('GS_img158', '/statics/images/GSTrophy_img_day/image-158.jpg'),
    img159 = new PositionImg('GS_img159', '/statics/images/GSTrophy_img_day/image-159.jpg'),
    img160 = new PositionImg('GS_img160', '/statics/images/GSTrophy_img_day/image-160.jpg'),
    img161 = new PositionImg('GS_img161', '/statics/images/GSTrophy_img_day/image-161.jpg'),
    img162 = new PositionImg('GS_img162', '/statics/images/GSTrophy_img_day/image-162.jpg'),
    img163 = new PositionImg('GS_img163', '/statics/images/GSTrophy_img_day/image-163.jpg'),
    img164 = new PositionImg('GS_img164', '/statics/images/GSTrophy_img_day/image-164.jpg'),
    img165 = new PositionImg('GS_img165', '/statics/images/GSTrophy_img_day/image-165.jpg'),
    img166 = new PositionImg('GS_img166', '/statics/images/GSTrophy_img_day/image-166.jpg'),
    img167 = new PositionImg('GS_img167', '/statics/images/GSTrophy_img_day/image-167.jpg'),
    img168 = new PositionImg('GS_img168', '/statics/images/GSTrophy_img_day/image-168.jpg'),
]; 

export{ bikerRules, bikerPositionTable, bikerImageDay, bikerImageDay2 }