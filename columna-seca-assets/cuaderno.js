'use strict';
const pegs = [
  "Aro",
  "Tea",
  "Noé",
  "Humo",
  "Oca",
  "Ola",
  "Oso",
  "Ufo",
  "Hacha",
  "Ave",
  "Toro",
  "Teta, dado, tata",
  "Tina, duna, tuna",
  "Átomo",
  "Taco",
  "Tela",
  "Tos, taza",
  "Tufo, taifa",
  "Techo, teja, toga, daga",
  "Tubo, tapa, tuba",
  "Noria",
  "Nata, nido",
  "Niño",
  "Nemo (el pececito)",
  "Nuca, anca",
  "Nilo (entre las pirámides)",
  "Anís (anisetes de colores)",
  "Nife (centro de la Tierra y lava volcánica)",
  "Nicho",
  "Nube, nabo",
  "Meru (tu perra blanca y negra)",
  "Moto, mata, meta",
  "Mina, mono (King Kong)",
  "Momia, memo, mamá",
  "Hamaca, moco",
  "Mula, miel",
  "Mesa, maza",
  "Mafia (gánster con traje a rayas)",
  "Mecha, macho, mago",
  "Mopa, ameba",
  "Coro, car (mini car)",
  "Cohete, coto",
  "Cuna, cuña, cono",
  "Cama",
  "Coco, coque (carbón)",
  "Culo, cola, celo (cinta adhesiva)",
  "Casa, queso",
  "Café, cofia",
  "Coche, caja",
  "Cubo, cepo, capa",
  "Loro, lira",
  "Lata",
  "Luna, lana, lino",
  "Lima, loma, alma",
  "Loco, laca",
  "Lulú (perrito blanco), lelo, lila",
  "Losa, lazo",
  "Alfa (tenazas)",
  "Lucha, lago",
  "Lobo, lupa, lapa",
  "Sor (monja)",
  "Seta",
  "Sena (bajo la torre Eiffel), sien",
  "Sima (gruta)",
  "Saco",
  "Sol, sal",
  "Seso (cerebro)",
  "Sofá",
  "Sacho (rastrillo), soga, soja",
  "Sebo, sepia",
  "Faro de mar",
  "Foto (máquina de fotos), feto",
  "Faena del hogar",
  "Fama (alguien famoso)",
  "Foca",
  "Falo, fila",
  "Foso (con cocodrilos)",
  "Fofó (payaso), fofo",
  "Ficha, faja",
  "Efebo (ángel), fobia",
  "Hachero, grúa",
  "Chita (mona de Tarzán), gato",
  "China (muralla)",
  "Chama (mercadillo), goma",
  "Chico(a), jaca",
  "Chal, chulo, gol",
  "Chas (látigo), Chis (silencio), gas",
  "Chufa (horchata), jefe",
  "Chucho (tu perrita)",
  "Chivo, chapa",
  "Bar, vara",
  "Bota de vestir, bata",
  "Vino, viña, pana",
  "BUM (explosión)",
  "Vaca",
  "Vela, bola",
  "Vaso",
  "Bofia (policía en argot mafioso)",
  "Bache, bajo, vago",
  "Bebé, papá, pavo",
  "Torre, tarro, torero"
];
const flashcards = [
  {
    "id": "funcionamiento-1",
    "block": "funcionamiento",
    "page": 7,
    "q": "¿Cómo permanece normalmente la columna seca?",
    "a": "Vacía. Se alimenta con agua a presión durante la intervención."
  },
  {
    "id": "funcionamiento-2",
    "block": "funcionamiento",
    "page": 7,
    "q": "¿Quién proporciona el caudal y la presión?",
    "a": "El servicio de extinción mediante su equipo de bombeo."
  },
  {
    "id": "funcionamiento-3",
    "block": "funcionamiento",
    "page": 7,
    "q": "¿Qué recorrido hace el agua hasta el tendido de ataque?",
    "a": "Bomba → toma de alimentación → tubería fija → boca de planta → línea de ataque."
  },
  {
    "id": "componentes-1",
    "block": "componentes",
    "page": 3,
    "q": "¿Qué medidas tienen entrada, tubería, salida y purga?",
    "a": "70 mm, DN 80, 45 mm y 25 mm, respectivamente."
  },
  {
    "id": "componentes-2",
    "block": "componentes",
    "page": 3,
    "q": "¿Dónde se sitúan las salidas de planta y a qué altura su centro?",
    "a": "En recintos de escalera o sus vestíbulos previos; centro de las bocas a 0,90 m del suelo."
  },
  {
    "id": "componentes-3",
    "block": "componentes",
    "page": 3,
    "q": "¿Cómo son la tubería y las válvulas?",
    "a": "Tubería de acero galvanizado DN 80 y válvulas de bola con palanca incorporada."
  },
  {
    "id": "distribucion-1",
    "block": "distribucion",
    "page": 3,
    "q": "En una ascendente, ¿qué plantas tienen salida por regla general?",
    "a": "Las pares hasta la 8.ª inclusive, y todas las siguientes."
  },
  {
    "id": "distribucion-2",
    "block": "distribucion",
    "page": 3,
    "q": "¿Dónde va el seccionamiento de la columna ascendente?",
    "a": "Cada cuatro plantas, por encima de la salida correspondiente."
  },
  {
    "id": "distribucion-3",
    "block": "distribucion",
    "page": 3,
    "q": "¿Qué disposición tiene una columna descendente?",
    "a": "Salida y seccionamiento en cada planta, con la válvula justo debajo de la salida."
  },
  {
    "id": "acceso-1",
    "block": "acceso",
    "page": 4,
    "q": "¿Qué representa el límite de 60 m en el RIPCI vigente?",
    "a": "El recorrido máximo hasta la columna, por recorridos de evacuación, debe ser inferior a 60 m."
  },
  {
    "id": "acceso-2",
    "block": "acceso",
    "page": 6,
    "q": "¿Qué representa el límite de 18 m del CTE?",
    "a": "El equipo de bombeo debe poder acceder a menos de 18 m de cada conexión, visible desde el camión."
  },
  {
    "id": "acceso-3",
    "block": "acceso",
    "page": 4,
    "q": "¿Qué información identifica una toma de entrada?",
    "a": "Las plantas o zonas que sirve y su presión máxima de servicio, además de la señal de uso exclusivo."
  },
  {
    "id": "mantenimiento-1",
    "block": "mantenimiento",
    "page": 4,
    "q": "¿Cómo se realiza la prueba inicial?",
    "a": "A la máxima presión de servicio y como mínimo a 1.470 kPa hasta 30 m o 2.450 kPa por encima, durante al menos 2 h sin fugas."
  },
  {
    "id": "mantenimiento-2",
    "block": "mantenimiento",
    "page": 4,
    "q": "¿En qué posición deben quedar siamesas y seccionamientos?",
    "a": "Siamesas cerradas y tapadas; válvulas de seccionamiento abiertas."
  },
  {
    "id": "mantenimiento-3",
    "block": "mantenimiento",
    "page": 0,
    "q": "¿Cada cuánto se repite la prueba en condiciones de recepción?",
    "a": "Cada cinco años, según la tabla II del anexo II del RIPCI."
  },
  {
    "id": "cte-1",
    "block": "cte",
    "page": 5,
    "q": "¿En qué seis usos el CTE pide columna por encima de 24 m?",
    "a": "Residencial Vivienda, Residencial Público, Administrativo, Docente, Comercial y Pública concurrencia."
  },
  {
    "id": "cte-2",
    "block": "cte",
    "page": 5,
    "q": "¿Cuál es el umbral de altura en uso Hospitalario?",
    "a": "Altura de evacuación superior a 15 m."
  },
  {
    "id": "cte-3",
    "block": "cte",
    "page": 5,
    "q": "¿Cuándo la exige el CTE en Aparcamiento?",
    "a": "Con más de tres plantas bajo rasante o más de cuatro sobre rasante, con tomas en todas sus plantas."
  },
  {
    "id": "rsciei-1",
    "block": "rsciei",
    "page": 0,
    "q": "¿Cuándo exige columna seca el RSCIEI de 2025?",
    "a": "A partir de 15 m de altura de evacuación, inclusive. El apartado 6 no condiciona el requisito al nivel de riesgo."
  },
  {
    "id": "rsciei-2",
    "block": "rsciei",
    "page": 0,
    "q": "¿Dónde habrá bocas de salida según el RSCIEI de 2025?",
    "a": "En todas las plantas, según el anexo III, apartado 6.2."
  },
  {
    "id": "rsciei-3",
    "block": "rsciei",
    "page": 7,
    "q": "¿Qué condición añadía el RSCIEI de 2004 recogido en el PDF?",
    "a": "Que el riesgo intrínseco fuese medio o alto, además de altura de evacuación ≥ 15 m."
  },
  {
    "id": "hornacinas-1",
    "block": "hornacinas",
    "page": 7,
    "q": "Según el temario, ¿qué ancho y fondo comparten las tres hornacinas?",
    "a": "55 cm de ancho y 30 cm de fondo."
  },
  {
    "id": "hornacinas-2",
    "block": "hornacinas",
    "page": 9,
    "q": "¿Cuáles son las alturas de fachada, planta y planta con seccionamiento en el PDF?",
    "a": "40, 35 y 60 cm, en ese orden."
  },
  {
    "id": "hornacinas-3",
    "block": "hornacinas",
    "page": 7,
    "q": "¿Qué cuadradillo describe el PDF para abrir la tapa de fachada?",
    "a": "8 mm, como detalle constructivo del temario."
  },
  {
    "id": "maniobra-1",
    "block": "maniobra",
    "page": 10,
    "q": "¿Qué dos cierres destaca el temario al alimentar desde una rama de la siamesa?",
    "a": "La purga y la otra rama de la toma de fachada."
  },
  {
    "id": "maniobra-2",
    "block": "maniobra",
    "page": 10,
    "q": "¿Qué pasa si una válvula de seccionamiento queda cerrada entre la toma y la boca elegida?",
    "a": "Puede impedir que llegue agua a la línea de ataque."
  },
  {
    "id": "maniobra-3",
    "block": "maniobra",
    "page": 10,
    "q": "¿Cómo se deja la instalación después de usarla?",
    "a": "Vacía, con siamesas cerradas y tapadas y válvulas de seccionamiento abiertas."
  }
];
const quizdata = [
  {
    "block": "funcionamiento",
    "page": 7,
    "source": "",
    "q": "¿Cuál es el estado normal de la conducción?",
    "options": [
      "Llena y presurizada",
      "Vacía",
      "Llena sin presión"
    ],
    "correct": 1,
    "explanation": "El agua se suministra mediante la bomba al utilizar la instalación."
  },
  {
    "block": "funcionamiento",
    "page": 7,
    "source": "",
    "q": "¿De dónde sale la presión de trabajo en el ejemplo del tema?",
    "options": [
      "De la llave de purga",
      "De las siamesas de planta",
      "Del equipo de bombeo del servicio"
    ],
    "correct": 2,
    "explanation": "La columna es una conducción fija; la bomba le aporta presión y caudal."
  },
  {
    "block": "funcionamiento",
    "page": 7,
    "source": "",
    "q": "¿En qué orden circula el agua tras salir de la bomba?",
    "options": [
      "Toma exterior → columna → boca de planta",
      "Boca de planta → columna → toma exterior",
      "Purga → boca de planta → toma exterior"
    ],
    "correct": 0,
    "explanation": "Se alimenta por la toma exterior y se extrae por la boca conectada al tendido de planta."
  },
  {
    "block": "componentes",
    "page": 3,
    "source": "ripci",
    "q": "¿Cuál es la combinación correcta de entrada / columna / salida / purga?",
    "options": [
      "70 mm / DN 80 / 45 mm / 25 mm",
      "45 mm / DN 80 / 70 mm / 25 mm",
      "70 mm / DN 45 / 80 mm / 25 mm"
    ],
    "correct": 0,
    "explanation": "La siamesa de mayor diámetro está en la toma de alimentación."
  },
  {
    "block": "componentes",
    "page": 3,
    "source": "ripci",
    "q": "¿A qué altura se sitúa el centro de las bocas según el RIPCI?",
    "options": [
      "0,90 m solo en las salidas de planta",
      "1,20 m tanto en toma como en salidas",
      "0,90 m tanto en la toma exterior como en las salidas de planta"
    ],
    "correct": 2,
    "explanation": "El epígrafe 6.2 usa la misma cota para toma exterior y salidas de planta."
  },
  {
    "block": "componentes",
    "page": 3,
    "source": "ripci",
    "q": "¿Qué dice la redacción vigente del RIPCI sobre la válvula antirretorno de la toma?",
    "options": [
      "El apartado 6.1.a la exige igual que el PDF",
      "El apartado 6.1.a ya no la enumera entre sus componentes",
      "Debe sustituir a la llave de purga"
    ],
    "correct": 1,
    "explanation": "El RD 164/2025 cambió ese apartado. Que ya no se enumere no significa que esté prohibida."
  },
  {
    "block": "distribucion",
    "page": 3,
    "source": "ripci",
    "q": "En una ascendente de regla general, ¿qué plantas llevan boca entre la 7.ª y la 10.ª inclusive?",
    "options": [
      "8.ª y 10.ª",
      "7.ª, 8.ª y 10.ª",
      "8.ª, 9.ª y 10.ª"
    ],
    "correct": 2,
    "explanation": "Hasta la octava hay salidas en pares. La 9.ª y la 10.ª ya siguen la regla de todas las plantas."
  },
  {
    "block": "distribucion",
    "page": 3,
    "source": "ripci",
    "q": "¿Dónde va el seccionamiento correspondiente a la 4.ª planta de una ascendente?",
    "options": [
      "Por encima de la salida de la 4.ª",
      "Justo debajo de la salida de la 4.ª",
      "Por encima de la salida de la 6.ª"
    ],
    "correct": 0,
    "explanation": "La ascendente lleva seccionamiento cada cuatro plantas, por encima de la boca correspondiente."
  },
  {
    "block": "distribucion",
    "page": 3,
    "source": "ripci",
    "q": "¿Cómo se sitúan las válvulas en una columna descendente?",
    "options": [
      "Cada cuatro plantas, encima de la salida",
      "En todas las plantas, justo debajo de cada salida",
      "Solo en las plantas pares, debajo de la salida"
    ],
    "correct": 1,
    "explanation": "La descendente tiene una boca y una válvula de seccionamiento por planta."
  },
  {
    "block": "acceso",
    "page": 4,
    "source": "ripci",
    "q": "¿Cómo se mide el límite de 60 m del RIPCI vigente?",
    "options": [
      "Entre tomas exteriores en línea recta",
      "Por recorridos de evacuación hasta la columna",
      "Entre una columna y otra por recorridos de evacuación"
    ],
    "correct": 1,
    "explanation": "La última opción reproduce la idea de la redacción anterior. Hoy se limita el recorrido máximo hasta la columna."
  },
  {
    "block": "acceso",
    "page": 6,
    "source": "si5",
    "q": "¿Cumple SI 5 un punto de conexión visible al que el equipo de bombeo solo puede acercarse a 18 m exactos?",
    "options": [
      "Sí: 18 m es un máximo inclusivo",
      "Sí: la visibilidad sustituye la distancia",
      "No: el acceso debe quedar a menos de 18 m"
    ],
    "correct": 2,
    "explanation": "El CTE exige conjuntamente visibilidad desde el camión y distancia estrictamente inferior a 18 m."
  },
  {
    "block": "acceso",
    "page": 4,
    "source": "ripci",
    "q": "¿Dónde admite la redacción vigente colocar el rótulo de uso exclusivo?",
    "options": [
      "Junto al armario o inscrito en la puerta",
      "Dentro del armario, siempre con la puerta cerrada",
      "Solo junto al armario, como indicaba el PDF"
    ],
    "correct": 0,
    "explanation": "La información de plantas o zonas y presión máxima sí puede figurar dentro, visible al abrir."
  },
  {
    "block": "mantenimiento",
    "page": 4,
    "source": "ripci",
    "q": "¿Qué mínimo de ensayo corresponde a una columna de 30 m exactos?",
    "options": [
      "1.470 kPa",
      "2.450 kPa",
      "980 kPa"
    ],
    "correct": 0,
    "explanation": "El primer escalón incluye los 30 m. La presión debe alcanzar también la máxima de servicio."
  },
  {
    "block": "mantenimiento",
    "page": 4,
    "source": "mantenimiento",
    "q": "¿Con qué frecuencia se revisan accesos, tapas, señalización y llaves en esta instalación?",
    "options": [
      "Cada tres meses",
      "Cada cinco años",
      "Cada seis meses"
    ],
    "correct": 2,
    "explanation": "La tabla I coloca estas comprobaciones en la columna semestral."
  },
  {
    "block": "mantenimiento",
    "page": 0,
    "source": "mantenimiento",
    "q": "¿Con qué frecuencia se repite la prueba en condiciones de recepción?",
    "options": [
      "Cada seis meses",
      "Cada cinco años",
      "Solo durante la puesta en servicio"
    ],
    "correct": 1,
    "explanation": "La tabla II prescribe la prueba quinquenal; la revisión semestral incluye otras comprobaciones."
  },
  {
    "block": "cte",
    "page": 5,
    "source": "cte",
    "q": "¿Qué ocurre en una vivienda con 24 m exactos de altura de evacuación?",
    "options": [
      "Se supera el umbral porque es ≥ 24 m",
      "Se supera el umbral porque es > 15 m",
      "No se supera el umbral de SI 4 para ese uso"
    ],
    "correct": 2,
    "explanation": "En vivienda el criterio es estrictamente superior a 24 m."
  },
  {
    "block": "cte",
    "page": 5,
    "source": "cte",
    "q": "¿Qué comparación de umbrales del CTE es correcta?",
    "options": [
      "Hospitalario > 15 m; Docente > 24 m",
      "Hospitalario ≥ 15 m; Docente > 15 m",
      "Hospitalario > 24 m; Docente > 15 m"
    ],
    "correct": 0,
    "explanation": "El umbral hospitalario es menor. En ambos usos el CTE habla de superar la altura indicada."
  },
  {
    "block": "cte",
    "page": 5,
    "source": "cte",
    "q": "Un aparcamiento tiene cuatro plantas bajo rasante. ¿Qué exige su fila de SI 4 en materia de columna seca?",
    "options": [
      "Columna con tomas solo en plantas pares",
      "Columna con tomas en todas sus plantas",
      "No exige columna hasta el quinto sótano"
    ],
    "correct": 1,
    "explanation": "Cuatro plantas bajo rasante son más de tres. El umbral sobre rasante es distinto: más de cuatro."
  },
  {
    "block": "rsciei",
    "page": 0,
    "source": "rsciei",
    "q": "Si a una industria de riesgo bajo con 15 m de altura de evacuación le aplica el RD 164/2025, ¿qué exige su apartado 6?",
    "options": [
      "No exige columna por ser de riesgo bajo",
      "Columna seca, con salidas en todas las plantas",
      "No exige columna a 15 m exactos"
    ],
    "correct": 1,
    "explanation": "El umbral incluye los 15 m y el apartado no distingue por nivel de riesgo."
  },
  {
    "block": "rsciei",
    "page": 7,
    "source": "historico",
    "q": "¿Qué pedía el RD 2267/2004, citado en el PDF?",
    "options": [
      "Altura de evacuación > 24 m sin condición de riesgo",
      "Altura de evacuación ≥ 15 m para cualquier riesgo",
      "Riesgo intrínseco medio o alto y altura de evacuación ≥ 15 m"
    ],
    "correct": 2,
    "explanation": "El filtro por nivel de riesgo era propio del apartado 10 del anexo III de 2004."
  },
  {
    "block": "rsciei",
    "page": 0,
    "source": "rsciei",
    "q": "Con 15 m exactos de altura de evacuación, ¿qué contraste es correcto?",
    "options": [
      "El umbral industrial de 2025 sí se alcanza; el del CTE Hospitalario no se supera",
      "Ambos se alcanzan porque los dos son ≥ 15 m",
      "Ninguno se alcanza porque los dos son > 15 m"
    ],
    "correct": 0,
    "explanation": "El RSCIEI dice 15 m o más. El CTE pide que el uso Hospitalario exceda de 15 m."
  },
  {
    "block": "hornacinas",
    "page": 8,
    "source": "",
    "q": "¿Qué medidas da el PDF para la hornacina de fachada, en ancho × alto × fondo?",
    "options": [
      "55 × 40 × 30 cm",
      "55 × 35 × 30 cm",
      "55 × 60 × 30 cm"
    ],
    "correct": 0,
    "explanation": "Los 35 cm son de la hornacina de planta y los 60 cm de la de planta con seccionamiento."
  },
  {
    "block": "hornacinas",
    "page": 9,
    "source": "",
    "q": "¿Qué altura tiene la hornacina de planta con seccionamiento en el temario?",
    "options": [
      "35 cm",
      "40 cm",
      "60 cm"
    ],
    "correct": 2,
    "explanation": "El espacio adicional permite alojar también la válvula."
  },
  {
    "block": "hornacinas",
    "page": 7,
    "source": "ripci",
    "q": "¿Qué valor tienen las medidas de hornacinas recogidas en este PDF?",
    "options": [
      "Son mínimos de diseño expresos del epígrafe 6 vigente",
      "Son referencias del temario que el epígrafe 6 vigente no fija",
      "Se aplican a todas las BIE por el epígrafe 6"
    ],
    "correct": 1,
    "explanation": "El RIPCI fija características del sistema, pero ese epígrafe no incluye una tabla con las dimensiones de esos armarios."
  },
  {
    "block": "maniobra",
    "page": 10,
    "source": "",
    "q": "En el ejemplo del PDF se alimenta por una rama. ¿Qué se comprueba en la toma de fachada?",
    "options": [
      "Que la purga y la rama libre estén abiertas",
      "Que la rama libre esté abierta y la purga cerrada",
      "Que la purga y la rama libre estén cerradas"
    ],
    "correct": 2,
    "explanation": "Se cierran las vías por las que se perdería agua antes de alimentar la conducción."
  },
  {
    "block": "maniobra",
    "page": 10,
    "source": "",
    "q": "La boca de ataque está por detrás de un seccionamiento cerrado, en el sentido del agua. ¿Qué fallo cabe esperar?",
    "options": [
      "Que no llegue agua a la línea de ataque",
      "Que aumente el caudal en la línea de ataque",
      "Que la purga se abra automáticamente"
    ],
    "correct": 0,
    "explanation": "La válvula cerrada interrumpe el recorrido entre la toma de alimentación y esa salida."
  },
  {
    "block": "maniobra",
    "page": 10,
    "source": "",
    "q": "¿Cuál es el estado de reposo tras la intervención?",
    "options": [
      "Presurizada, con siamesas cerradas y seccionamientos cerrados",
      "Vacía, con siamesas cerradas y tapadas y seccionamientos abiertos",
      "Vacía, con siamesas abiertas y seccionamientos cerrados"
    ],
    "correct": 1,
    "explanation": "La reposición deja la conducción vacía y disponible para la próxima intervención."
  }
];
const officialSources = {
  "ripci": [
    "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606",
    "RIPCI · texto consolidado"
  ],
  "mantenimiento": [
    "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2",
    "RIPCI · anexo II, mantenimiento"
  ],
  "cte": [
    "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=33",
    "CTE DB-SI · tabla 1.1"
  ],
  "si5": [
    "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=37",
    "CTE DB-SI · SI 5, acceso de bomberos"
  ],
  "rsciei": [
    "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3",
    "RSCIEI 2025 · anexo III"
  ],
  "historico": [
    "https://www.boe.es/buscar/doc.php?id=BOE-A-2004-21216",
    "RSCIEI 2004 · texto histórico"
  ]
};
const sourceLink = p => `<a href="columna-seca-assets/17.COLUMNA-SECA.pdf#page=${p}" target="_blank" rel="noopener">Temario, p. ${p} ↗</a>`;
const officialLink = key => officialSources[key] ? `<a href="${officialSources[key][0]}" target="_blank" rel="noopener">${officialSources[key][1]} ↗</a>` : '';
const blocks=[...document.querySelectorAll('#study section')];
const state={get(k,f){try{return JSON.parse(localStorage.getItem('columna-seca-'+k))??f}catch{return f}},set(k,v){try{localStorage.setItem('columna-seca-'+k,JSON.stringify(v))}catch{}}};
let done=new Set(state.get('blocks-v1',[]));
function progress(){const n=blocks.filter(b=>done.has(b.id)).length;document.querySelector('#progressbar').style.width=(n/blocks.length*100)+'%';const p=document.querySelector('.progress');p.setAttribute('aria-valuemax',blocks.length);p.setAttribute('aria-valuenow',n);document.querySelector('#progresslabel').textContent=`${n} de ${blocks.length} bloques repasados`;document.querySelector('#mobileprogress').textContent=`· ${n}/${blocks.length}`;state.set('blocks-v1',[...done])}
document.querySelector('#index').innerHTML=blocks.map((b,i)=>`<a href="#${b.id}" data-block="${b.id}"><span>${String(i+1).padStart(2,'0')}</span>${b.dataset.title}</a>`).join('');document.querySelector('#mobilelinks').innerHTML=document.querySelector('#index').innerHTML;
blocks.forEach(b=>{const label=document.createElement('label');label.className='done';const c=document.createElement('input');c.type='checkbox';c.checked=done.has(b.id);c.addEventListener('change',()=>{c.checked?done.add(b.id):done.delete(b.id);progress()});label.append(c,document.createTextNode('Puedo explicar este bloque sin mirar'));b.append(label)});progress();
const toolbar = document.querySelector('.toolbar');
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--toolbar-clearance', (toolbar.offsetHeight + 12) + 'px');
}).observe(toolbar);
const tabs=[...document.querySelectorAll('[data-view]')];let currentView='study';
function showView(v,scroll=true){currentView=v;document.querySelectorAll('.view').forEach(e=>e.hidden=e.id!==v);tabs.forEach(t=>{const active=t.dataset.view===v;t.setAttribute('aria-selected',active);t.tabIndex=active?0:-1});document.querySelector('#studytools').hidden=v!=='study';document.querySelector('.mobileindex').hidden=v!=='study';if(scroll)document.querySelector('main').scrollIntoView({behavior:'auto',block:'start'})}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>showView(t.dataset.view));t.addEventListener('keydown',e=>{let j;if(e.key==='ArrowRight')j=(i+1)%tabs.length;else if(e.key==='ArrowLeft')j=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=tabs.length-1;if(j!==undefined){e.preventDefault();tabs[j].focus();showView(tabs[j].dataset.view)}})});
function normalize(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function searchBlocks(){const q=normalize(document.querySelector('#search').value.trim());let n=0;blocks.forEach(b=>{b.hidden=q&&!normalize(b.textContent).includes(q);if(!b.hidden)n++});document.querySelector('#noresults').hidden=n>0;document.querySelector('#resultcount').textContent=q?`${n} ${n===1?'bloque':'bloques'}`:''}
document.querySelector('#search').addEventListener('input',searchBlocks);document.querySelector('#essentials').checked=state.get('essentials',false);document.querySelector('#study').classList.toggle('onlyessential',document.querySelector('#essentials').checked);document.querySelector('#essentials').addEventListener('change',e=>{document.querySelector('#study').classList.toggle('onlyessential',e.target.checked);state.set('essentials',e.target.checked)});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a&&document.getElementById(a.hash.slice(1))?.matches('#study section')){showView('study',false);document.querySelector('#search').value='';searchBlocks();document.querySelector('.mobileindex').open=false;document.getElementById(a.hash.slice(1)).scrollIntoView();}});
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('#index a').forEach(a=>a.classList.toggle('active',a.dataset.block===e.target.id))})},{rootMargin:'-110px 0px -65% 0px'});blocks.forEach(b=>observer.observe(b));
document.querySelector('#print').addEventListener('click',()=>window.print());
let printSnapshot;
window.addEventListener('beforeprint',()=>{
  const study=document.querySelector('#study');
  printSnapshot={essential:study.classList.contains('onlyessential'), filtered:blocks.filter(b=>b.hidden)};
  study.classList.remove('onlyessential');
  printSnapshot.filtered.forEach(b=>b.hidden=false);
});
window.addEventListener('afterprint',()=>{
  if(!printSnapshot)return;
  document.querySelector('#study').classList.toggle('onlyessential',printSnapshot.essential);
  printSnapshot.filtered.forEach(b=>b.hidden=true);
  printSnapshot=null;
});
const topicName=id=>blocks.find(b=>b.id===id)?.dataset.title||id;
const optionTopics=blocks.map(b=>`<option value="${b.id}">${b.dataset.title}</option>`).join('');document.querySelector('#cardtopic').insertAdjacentHTML('beforeend',optionTopics);document.querySelector('#quiztopic').insertAdjacentHTML('beforeend',optionTopics);
document.querySelector('#quickgrid').innerHTML=blocks.map((b,i)=>`<div class="quickcard"><div class="overline">${String(i+1).padStart(2,'0')}</div><h3>${b.dataset.title}</h3><p>${b.querySelector('.essential').innerHTML.replace(/<div class="overline">.*?<\/div>/,'')}</p><a href="#${b.id}">Revisar el bloque →</a></div>`).join('');
const storyNodes=[...document.querySelectorAll('#study .story')];document.querySelector('#stories').innerHTML=storyNodes.map(s=>`<div class="story">${s.innerHTML}<a class="note" href="#${s.closest('section').id}">Ver el dato en su contexto →</a></div>`).join('');
function renderPegs(){const q=normalize(document.querySelector('#pegsearch').value.trim());const matches=pegs.map((label,n)=>({label,n})).filter(p=>!q||normalize(p.n+' '+p.label).includes(q));document.querySelector('#peglist').innerHTML=matches.length?matches.map(p=>`<div class="peg"><b>${p.n}</b>${p.label}</div>`).join(''):'<p class="note">No hay casillas con ese término.</p>'}document.querySelector('#pegsearch').addEventListener('input',renderPegs);renderPegs();
let cardState=state.get('cards-v1',{});let deck=[],position=0,revealed=false;
function cardPool(){const type=document.querySelector('#deck').value;const topic=document.querySelector('#cardtopic').value;return flashcards.filter(c=>{const s=cardState[c.id];return(topic==='all'||c.block===topic)&&(type==='all'||(type==='repeat'&&s?.repeat)||(type==='due'&&(!s?.due||s.due<=Date.now())))})}
function renderCard(status=''){revealed=false;const c=deck[position];document.querySelector('#flasha').hidden=true;document.querySelector('#again').disabled=true;document.querySelector('#remember').disabled=true;document.querySelector('#flashstatus').textContent=status;const nDue=flashcards.filter(c=>!cardState[c.id]?.due||cardState[c.id].due<=Date.now()).length;document.querySelector('#flashcount').textContent=c?`Tarjeta ${position+1} de ${deck.length} · ${nDue} pendientes hoy en total`:`Mazo vacío · ${nDue} pendientes hoy en total`;document.querySelector('#flashtag').textContent=c?topicName(c.block)+(c.page?' · Temario, p. '+c.page:' · Normativa vigente'):'Sin tarjetas pendientes';document.querySelector('#flashq').textContent=c?c.q:'Has completado este mazo. Puedes practicar todas las tarjetas o cambiar de bloque.';document.querySelector('#reveal').disabled=!c;document.querySelector('#prev').disabled=!c;document.querySelector('#next').disabled=!c;document.querySelector('#flasha').innerHTML=c?`<p>${c.a}</p><a href="#${c.block}">Revisar el bloque →</a> ${c.page?sourceLink(c.page):officialLink(c.block==='mantenimiento'?'mantenimiento':'rsciei')}`:'';}
function rebuildDeck(){deck=cardPool();position=0;renderCard()}
document.querySelector('#deck').onchange=rebuildDeck;document.querySelector('#cardtopic').onchange=rebuildDeck;document.querySelector('#shuffle').onclick=()=>{deck=cardPool();for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}position=0;renderCard()};
function revealCard(){if(!deck.length)return;revealed=true;document.querySelector('#flasha').hidden=false;document.querySelector('#again').disabled=false;document.querySelector('#remember').disabled=false;document.querySelector('#reveal').hidden=true;document.querySelector('#flasha').focus()}
const originalRenderCard=renderCard;renderCard=function(status=''){document.querySelector('#reveal').hidden=false;originalRenderCard(status)};
document.querySelector('#reveal').onclick=revealCard;
function moveCard(delta){if(!deck.length)return;position=(position+delta+deck.length)%deck.length;renderCard()}document.querySelector('#prev').onclick=()=>moveCard(-1);document.querySelector('#next').onclick=()=>moveCard(1);
function gradeCard(remember){if(!revealed||!deck.length)return;const c=deck[position];const previous=cardState[c.id]||{};let label;if(remember){const level=Math.min((previous.level||0)+1,4);const days=[1,3,7,14][level-1];const due=Date.now()+days*86400000;cardState[c.id]={level,due,repeat:false};label=`Guardada. Próximo repaso: ${new Intl.DateTimeFormat('es-ES',{timeZone:'Europe/Madrid',day:'numeric',month:'long'}).format(due)} (en ${days} ${days===1?'día':'días'}).`}else{cardState[c.id]={level:0,due:Date.now(),repeat:true};label='Guardada para repetir hoy. También está en el mazo «Para repetir».'}state.set('cards-v1',cardState);const oldPos=position;const nextPool=cardPool();const ids=new Set(nextPool.map(x=>x.id));deck=deck.filter(x=>ids.has(x.id));const idx=deck.findIndex(x=>x.id===c.id);position=idx>=0?(idx+1)%deck.length:Math.min(oldPos,Math.max(deck.length-1,0));renderCard(label)}document.querySelector('#again').onclick=()=>gradeCard(false);document.querySelector('#remember').onclick=()=>gradeCard(true);rebuildDeck();
document.addEventListener('keydown',e=>{if(currentView!=='flash'||e.target instanceof Element&&e.target.matches('input,select,textarea,button,a,summary'))return;if(e.key===' '){e.preventDefault();if(!revealed)revealCard()}if(e.key==='ArrowRight'){e.preventDefault();moveCard(1)}if(e.key==='ArrowLeft'){e.preventDefault();moveCard(-1)}});
let quizAnswers={};
const quizEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function quizPool(){const topic=document.querySelector('#quiztopic').value;return quizdata.map((q,i)=>({q,i})).filter(({q})=>(topic==='all'||q.block===topic))}
function updateScore(){const visible=quizPool();const answered=visible.filter(x=>Object.hasOwn(quizAnswers,x.i));const correct=answered.filter(x=>quizAnswers[x.i]===x.q.correct);document.querySelector('#score').textContent=`${correct.length} ${correct.length===1?'acierto':'aciertos'} · ${answered.length}/${visible.length} respondidas`}
function renderQuiz(){
  document.querySelector('#quizlist').innerHTML=quizPool().map(({q,i})=>
    `<article class="quizitem" data-question="${i}">
      <div class="overline quizmeta">Pregunta ${i+1} · ${quizEscape(topicName(q.block))}</div>
      <h3>${quizEscape(q.q)}</h3>
      <div class="options">${q.options.map((o,j)=>`<button data-answer="${j}"><span aria-hidden="true">${String.fromCharCode(65+j)} · </span>${quizEscape(o)}</button>`).join('')}</div>
      <div class="feedback" hidden role="status"></div>
    </article>`).join('');
  Object.entries(quizAnswers).forEach(([i,answer])=>displayAnswer(Number(i),answer));
  updateScore();
}
function displayAnswer(i,answer){
  const row=document.querySelector(`[data-question="${i}"]`);
  if(!row)return;
  const q=quizdata[i], correct=answer===q.correct;
  row.querySelectorAll('[data-answer]').forEach(b=>{
    const n=Number(b.dataset.answer);
    b.disabled=true;
    b.classList.toggle('correct',n===q.correct);
    b.classList.toggle('wrong',n===answer&&!correct);
    b.setAttribute('aria-label',q.options[n]+(n===q.correct?' · Respuesta correcta':n===answer?' · Tu respuesta incorrecta':''));
  });
  const feedback=row.querySelector('.feedback');
  const reference=[q.page?sourceLink(q.page):'',officialLink(q.source)].filter(Boolean).join('');
  feedback.hidden=false;
  feedback.classList.toggle('error',!correct);
  feedback.innerHTML=`<p><b>${correct?'Correcto.':'Revisa: '+quizEscape(q.options[q.correct])+'.'}</b> ${quizEscape(q.explanation)}</p>
    <div class="quizlinks"><a href="#${q.block}">Volver al bloque →</a>${reference}</div>`;
}
document.querySelector('#quizlist').addEventListener('click',e=>{const button=e.target.closest('[data-answer]');if(!button)return;const i=Number(button.closest('[data-question]').dataset.question);if(Object.hasOwn(quizAnswers,i))return;quizAnswers[i]=Number(button.dataset.answer);displayAnswer(i,quizAnswers[i]);updateScore()});document.querySelector('#quiztopic').onchange=renderQuiz;document.querySelector('#resetquiz').onclick=()=>{quizPool().forEach(({i})=>delete quizAnswers[i]);renderQuiz()};renderQuiz();
function openHash(){const id=location.hash.slice(1);if(['quick','flash','quiz','images','memory'].includes(id))showView(id,false);else if(blocks.some(b=>b.id===id)){showView('study',false);document.querySelector('#search').value='';searchBlocks();document.querySelector('.mobileindex').open=false;requestAnimationFrame(()=>document.getElementById(id).scrollIntoView())}}window.addEventListener('hashchange',openHash);openHash();
