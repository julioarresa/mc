const practica = {
  "introduccion": {
    cards: [
      [1, "¿Qué tres usos del hidrante explica el temario?", "Llenar una cisterna, alimentar una autobomba o una bomba portátil e impulsar agua directamente hacia el incendio si el sistema está previsto para ello.", "hidrantes-assets/19.HIDRANTES.pdf#page=3"],
      [2, "¿Qué tipos admite el RIPCI?", "Hidrantes de columna e hidrantes bajo tierra.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué norma corresponde al marcado CE de cada tipo?", "UNE-EN 14384 para columna y UNE-EN 14339 para enterrados.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["¿Qué elemento permite aislar la toma de la red de agua?", ["La válvula del hidrante", "La tapa de la arqueta", "El racor de conexión"], 0, "La válvula abre o corta el paso. El racor sirve para acoplar el tendido.", "hidrantes-assets/19.HIDRANTES.pdf#page=3"],
      ["¿Qué norma se asocia al marcado CE de un hidrante de arqueta?", ["UNE-EN 14384", "UNE-EN 14339", "UNE-EN 671-2"], 1, "La 14339 corresponde a hidrantes bajo tierra. La 14384 corresponde a los de columna.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué debe garantizar el sistema que abastece al hidrante?", ["Agua al caudal y a la presión requeridos durante el tiempo previsto", "Solo la presión nominal que figura en el cuerpo", "Solo que el agua llegue con la válvula cerrada"], 0, "El funcionamiento depende de que el abastecimiento pueda mantener simultáneamente caudal, presión y duración.", "hidrantes-assets/19.HIDRANTES.pdf#page=3"]
    ]
  },
  "columna": {
    cards: [
      [1, "¿Qué sucede cuando se cierra un hidrante de columna seca?", "La columna se vacía automáticamente en condiciones normales de drenaje.", "hidrantes-assets/19.HIDRANTES.pdf#page=4"],
      [2, "¿Para qué sirve el sistema de rotura?", "Permite que se separe la parte emergente en un impacto manteniendo cerrada la válvula principal.", "hidrantes-assets/19.HIDRANTES.pdf#page=7"],
      [3, "¿Cómo se clasifican los tipos A, B, C y D en el temario?", "A seca sin rotura, B húmeda sin rotura, C seca con rotura y D húmeda con rotura.", "hidrantes-assets/19.HIDRANTES.pdf#page=11"]
    ],
    quiz: [
      ["¿Qué tipo identifica una columna con drenaje y sistema de rotura?", ["D", "A", "C"], 2, "A y C tienen drenaje. C y D incorporan sistema de rotura.", "hidrantes-assets/19.HIDRANTES.pdf#page=11"],
      ["Si hay venteo, ¿qué hace al presurizar la columna y al cerrar la válvula principal?", ["Se cierra con presión y se abre al cerrar la válvula principal", "Se abre con presión y se cierra al cortar el agua", "Permanece siempre cerrado"], 0, "La entrada de aire facilita el vaciado una vez cerrada la válvula principal.", "hidrantes-assets/19.HIDRANTES.pdf#page=11"],
      ["Si hay peligro de heladas y el nivel freático obliga a taponar el drenaje, ¿qué pide el RIPCI?", ["Dejar agua en la columna mientras no se use", "Retirar el tapón con el hidrante en servicio", "Vaciar la columna por otros medios tras cada utilización e identificar el hidrante"], 2, "El drenaje taponado impide el vaciado normal y hay que retirar el agua por otro medio.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "arqueta": {
    cards: [
      [1, "¿Cómo se cuentan las vueltas muertas, efectivas y totales?", "Muertas hasta que comienza el flujo, efectivas desde ese punto hasta apertura completa y totales como suma de ambas.", "hidrantes-assets/19.HIDRANTES.pdf#page=10"],
      [2, "¿Qué intervalos de vueltas totales da el temario para los enterrados DN 80 y DN 100?", "DN 80, de 5 a 15. DN 100, de 6 a 15. Las vueltas muertas tienen un máximo de 4.", "hidrantes-assets/19.HIDRANTES.pdf#page=10"],
      [3, "¿Qué cuadradillos recoge el RIPCI a falta de indicación europea?", "25 × 25 mm para enterrado y 30 × 30 mm para columna.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["El agua comienza a salir a las 3 vueltas y la válvula está abierta del todo a las 10. ¿Cuántas vueltas son efectivas?", ["3", "7", "13"], 1, "Las efectivas van del inicio del flujo a la apertura completa. Son 10 menos 3.", "hidrantes-assets/19.HIDRANTES.pdf#page=10"],
      ["A falta de indicación europea, ¿qué llave corresponde a un hidrante de columna?", ["Cuadradillo de 30 × 30 mm", "Cuadradillo de 25 × 25 mm", "Cuadradillo de 45 × 45 mm"], 0, "El RIPCI prevé 30 mm de lado para columna y 25 mm para enterrados.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["Visto desde arriba, ¿en qué sentido cierra el hidrante descrito en el temario?", ["Antihorario", "Según el número de salidas", "Horario"], 2, "El cierre se realiza a derechas. El marcado identifica el sentido de apertura.", "hidrantes-assets/19.HIDRANTES.pdf#page=9"]
    ]
  },
  "componentes": {
    cards: [
      [1, "¿Cuáles son las salidas habituales de una columna DN 80 en el PDF?", "Dos laterales de 45 mm y una central de 70 mm.", "hidrantes-assets/19.HIDRANTES.pdf#page=10"],
      [2, "¿Qué salidas recoge el temario para un hidrante enterrado DN 100?", "Una de 100 mm o dos de 70 mm.", "hidrantes-assets/19.HIDRANTES.pdf#page=11"],
      [3, "¿Qué normas cita el RIPCI para racores y mangueras?", "UNE 23400 para racores y UNE 23091 para mangueras.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["¿Qué combinación señala el temario como habitual en una columna DN 100?", ["2 × 45 mm laterales y 1 × 70 mm central", "2 × 70 mm laterales y 1 × 100 mm central", "3 salidas de 100 mm"], 1, "La combinación de dos de 45 y una de 70 corresponde al ejemplo de columna DN 80.", "hidrantes-assets/19.HIDRANTES.pdf#page=10"],
      ["¿Cuál de estas posibilidades da el temario para un hidrante bajo tierra DN 80?", ["Una de 100 mm o dos de 70 mm", "Dos de 25 mm o una de 45 mm", "Una salida de 70 mm o dos de 45 mm"], 2, "La opción de 100 mm o dos de 70 corresponde al enterrado DN 100 descrito.", "hidrantes-assets/19.HIDRANTES.pdf#page=11"],
      ["¿Qué expresa DN en la denominación de un hidrante?", ["El diámetro exacto de cada racor instalado", "La designación del tamaño nominal", "La presión continua de alimentación"], 1, "DN es una referencia de tamaño. Hay que leer aparte las medidas de las salidas.", "hidrantes-assets/19.HIDRANTES.pdf#page=7"]
    ]
  },
  "presiones": {
    cards: [
      [1, "¿Qué diferencia hay entre PFA y PMA?", "PFA es la presión admisible en servicio continuo. PMA es la presión máxima ocasional en servicio e incluye picos.", "hidrantes-assets/19.HIDRANTES.pdf#page=8"],
      [2, "¿Qué presiones PFA, PMA y PEA da el temario para PN 16?", "16 bar, 20 bar y 25 bar, respectivamente.", "hidrantes-assets/19.HIDRANTES.pdf#page=9"],
      [3, "¿Cómo se define el Kv del hidrante?", "Caudal en m³/h que produce 1 bar de diferencia de presión a través del hidrante.", "hidrantes-assets/19.HIDRANTES.pdf#page=8"]
    ],
    quiz: [
      ["¿Qué sigla identifica la presión admisible de ensayo de corta duración tras instalar el componente?", ["PEA", "PFA", "PMA"], 0, "PFA describe servicio continuo y PMA incluye picos ocasionales de servicio.", "hidrantes-assets/19.HIDRANTES.pdf#page=8"],
      ["En la tabla del temario, ¿qué PMA corresponde a PN 16?", ["16 bar", "25 bar", "20 bar"], 2, "16 bar es la PFA. 25 bar es la PEA en el supuesto descrito.", "hidrantes-assets/19.HIDRANTES.pdf#page=9"],
      ["Con una salida de 90/100, ¿qué Kv mínimo corresponde a columna y enterrado, respectivamente?", ["150 y 180", "180 y 150", "80 y 80"], 1, "Para esa salida, la tabla del RIPCI fija valores distintos según el tipo de hidrante.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "senal": {
    cards: [
      [1, "¿Qué datos de manejo aparecen en la parte alta del hidrante según el PDF?", "El sentido de apertura y las vueltas, con la información que corresponda a columna o enterrado.", "hidrantes-assets/19.HIDRANTES.pdf#page=12"],
      [2, "¿Cómo debe identificarse la tapa del hidrante enterrado?", "Debe ser visible, preferentemente roja RAL 3001 o equivalente, o llevar «incendios» o texto equivalente. Debe poder abrirla el servicio de extinción.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué indica H 80 en el ejemplo de placa?", "La presencia de un hidrante de diámetro nominal 80. Las otras cifras localizan la toma en metros desde la placa.", "hidrantes-assets/19.HIDRANTES.pdf#page=12"]
    ],
    quiz: [
      ["En la placa de ejemplo del temario, ¿qué representan las cifras 10 y 5 junto a H 80?", ["Presiones PFA y PMA en bar", "Vueltas muertas y efectivas", "Distancias para localizar el hidrante desde la placa"], 2, "Las cifras sitúan la toma tomando la placa como referencia.", "hidrantes-assets/19.HIDRANTES.pdf#page=12"],
      ["¿Qué pide el RIPCI para la visibilidad de la tapa del enterrado?", ["Color rojo obligatorio como única opción", "Color rojo preferente o inscripción que permita identificarla rápidamente", "Una etiqueta visible solo al levantar la tapa"], 1, "El epígrafe permite identificarla mediante la pintura indicada o mediante texto como «incendios».", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué finalidad tiene la señalización si falla el alumbrado normal?", ["Permitir identificar la ubicación del equipo también en esa situación", "Indicar únicamente el año de fabricación", "Sustituir la flecha de apertura"], 0, "La señal permite localizar el hidrante. El marcado del aparato identifica su accionamiento y sus características.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s2-2"]
    ]
  },
  "implantacion": {
    cards: [
      [1, "¿Qué límites de recorrido real horizontal fija el RIPCI por defecto?", "Inferior a 100 m en zona urbana e inferior a 40 m en las demás, salvo legislación aplicable distinta.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "Fuera de vía pública, ¿qué separación perpendicular al límite protegido pide el RIPCI?", "De 5 a 15 m.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué orientación tiene la salida de 100 mm que debe haber al menos en un hidrante?", "Perpendicular a la fachada y orientada de espaldas a ella, si es posible junto a la entrada.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["Fuera de zona urbana, un punto está a 40 m exactos de recorrido real del hidrante. ¿Cumple el límite general del RIPCI?", ["Cumple porque los 40 m son inclusivos", "Queda fuera porque el recorrido debe ser inferior a 40 m", "Cumple si en línea recta queda por debajo de 40 m"], 1, "El epígrafe mide recorrido real horizontal y exige un valor inferior al límite.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué distancia perpendicular a fachada se exige al hidrante fuera de vía pública en la regla general?", ["0 a 5 m", "5 a 15 m", "40 a 100 m"], 1, "Esta es la separación respecto al límite exterior protegido. Se mide independientemente del recorrido al hidrante.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Dónde debe quedar el hidrante respecto a los vehículos?", ["Fuera de los espacios destinados a circulación y estacionamiento", "En una plaza señalizada que se pueda ocupar en condiciones normales", "En el centro de un carril de paso para facilitar la conexión"], 0, "El lugar debe ser accesible, estar señalizado y quedar libre de los espacios de circulación y estacionamiento.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "abastecimiento": {
    cards: [
      [1, "¿Qué caudal mínimo continuo indica el RIPCI por boca de hidrante?", "500 L/min.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "¿Qué presiones mínimas de salida distingue la regla general del RIPCI?", "1 bar para llenado exclusivo en zona urbana y 5 bar en los demás casos del epígrafe.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Cuándo puede alimentarse desde la red pública un hidrante destinado solo a llenar camiones?", "Cuando la red pueda proporcionar el caudal y la presión requeridos.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["¿Qué conjunto de datos corresponde a un hidrante urbano previsto solo para llenar cisternas según el RIPCI?", ["500 L/min por boca y mínimo 100 kPa en la salida", "500 L/min por boca y mínimo 500 kPa en todos los casos", "100 L/min por boca y mínimo 500 kPa"], 0, "La excepción de presión a 100 kPa requiere uso exclusivo de llenado y emplazamiento urbano.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["Si se utiliza depósito para llenado exclusivo y no hay otra exigencia específica, ¿qué autonomía mínima indica el RIPCI?", ["60 minutos", "30 minutos", "90 minutos"], 0, "El apartado 3.4 fija 60 min para esta alternativa de abastecimiento.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["Un caudal total de 500 L/min se mantiene durante una hora. ¿Qué volumen circula en ese tiempo?", ["3 m³", "300 m³", "30 m³"], 2, "500 por 60 da 30.000 L. Cada metro cúbico equivale a 1.000 L.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "mantenimiento": {
    cards: [
      [1, "¿Qué se revisa trimestralmente en los hidrantes de las tablas del RIPCI?", "Acceso, señal, estanquidad aparente, estado de juntas y tapas de salidas. Se engrasan las roscas.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      [2, "¿Qué operación distingue el semestre?", "Abrir y cerrar para probar válvula principal y drenaje, y engrasar la tuerca de accionamiento o rellenar su cámara de aceite.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      [3, "¿Qué se hace anualmente y cada cinco años?", "Estanquidad de los tapones cada año. Cambio de las juntas de los racores cada cinco años.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"]
    ],
    quiz: [
      ["¿Qué periodicidad corresponde a maniobrar la válvula y comprobar el drenaje según el RIPCI?", ["Trimestral", "Semestral", "Quinquenal"], 1, "La maniobra se incluye en el semestre. El control trimestral se centra en accesibilidad, señal y comprobaciones visuales.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      ["¿Cuándo se cambian las juntas de los racores según la tabla II?", ["Cada año", "Cada seis meses", "Cada cinco años"], 2, "La tabla II indica estanquidad de tapones anual y sustitución de juntas quinquenal.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      ["¿Quién determina el mantenimiento de un hidrante en vía pública cuya gestión asume el municipio?", ["El municipio o la administración pública correspondiente", "El fabricante, como única autoridad", "El titular del edificio más próximo en todos los casos"], 0, "El apartado 3.6 prevé este régimen para la puesta en servicio, el mantenimiento y las inspecciones de esos hidrantes.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "cte": {
    cards: [
      [1, "¿Qué alturas de evacuación activan la regla general de hidrantes del CTE?", "Descendente superior a 28 m o ascendente superior a 6 m.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      [2, "¿Qué grupo de usos comparte el tramo por superficie de 5.000 a 10.000 m²?", "Residencial Vivienda, Administrativo y Docente.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      [3, "¿Cuándo puede contarse un hidrante de vía pública a efectos de dotación del CTE?", "Cuando quede a menos de 100 m de la fachada accesible.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"]
    ],
    quiz: [
      ["Un edificio Docente tiene 5.200 m² construidos. ¿Qué indica su fila de dotación por superficie?", ["Ninguno hasta alcanzar 10.000 m²", "Dos hidrantes en todos los casos", "Un hidrante en ese tramo"], 2, "Docente comparte el tramo inicial de 5.000 a 10.000 m² con Administrativo y Residencial Vivienda.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      ["¿Qué dotación inicial por superficie corresponde a un establecimiento Comercial de 12.000 m²?", ["Dos hidrantes", "Uno porque 12.000 m² no alcanza otros 10.000 completos", "Tres hidrantes"], 0, "A la primera dotación se añade uno por los 2.000 m² que exceden de 10.000, pues cuenta la fracción.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      ["¿Puede contabilizarse por la nota (3) un hidrante de vía pública a exactamente 100 m de la fachada accesible?", ["Sí, siempre que sea de 100 mm", "Queda fuera porque la nota exige menos de 100 m", "Sí, porque la nota admite exactamente 100 m"], 1, "La nota trata la distancia del hidrante de vía pública a la fachada accesible y fija un límite estricto.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"]
    ]
  },
  "llenado": {
    cards: [
      [1, "¿Qué presión, caudal y tiempo mínimos fija el RSCIEI para llenado?", "100 kPa en la salida, 500 L/min de caudal total y 60 min.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [2, "¿Qué regla de superficie total se añade a los umbrales por configuración?", "Si el establecimiento alcanza 5.000 m² incluyendo edificios y espacios abiertos, se exige al menos uno, salvo que todos los sectores y espacios abiertos sean de riesgo bajo 1.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [3, "¿Qué umbral aplica el RD 164/2025 para llenado en un sector B de riesgo medio?", "Desde 2.500 m².", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ],
    quiz: [
      ["¿Qué dotación general de llenado aplica a un establecimiento industrial de 5.000 m² con algún sector de riesgo medio?", ["Al menos un hidrante por superficie total", "Ninguno porque debe superar 5.000 m²", "Solo se exige si todos los sectores son de riesgo alto"], 0, "La regla de superficie incluye 5.000 m² exactos. La excepción exige que todos los sectores y espacios abiertos sean de riesgo bajo 1.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["¿A qué corresponden los 500 L/min y 60 min industriales del hidrante de llenado?", ["A cada boca por separado según la tabla industrial", "Solo al caudal de una lanza de impulsión", "Al total que ha de suministrarse a la red"], 2, "El apartado 3.2.4 aclara que corresponden al total, independientemente del número de hidrantes.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["¿Cuál es el umbral de llenado para un sector C de riesgo medio en la tabla 3.3.1?", ["2.500 m²", "5.000 m²", "3.500 m²"], 2, "Para C se exige desde 3.500 m² en medio y desde 2.500 m² en alto. El umbral bajo es de 5.000 m² con su excepción.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ]
  },
  "impulsion": {
    cards: [
      [1, "¿Cómo se implanta la impulsión directa respecto al perímetro según el RSCIEI?", "Radio horizontal de 40 m por hidrante hacia el perímetro o espacio protegido. Si es posible se deja de 5 a 15 m perpendicularmente al límite.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [2, "¿Qué caudal y autonomía requiere la red en A horizontal, B o C de riesgo medio o alto cuando procede?", "Medio, 1.500 L/min durante 60 min. Alto, 2.000 L/min durante 90 min.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [3, "¿Qué exige en tipo D de riesgo alto cuando alcanza su umbral?", "Desde 10.000 m² en el supuesto de la tabla. 3.000 L/min durante 90 min y presión mínima de 500 kPa en la boca.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ],
    quiz: [
      ["Un sector B de riesgo alto tiene 2.500 m². ¿Qué pide la tabla de impulsión directa?", ["1.500 L/min durante 60 min", "2.000 L/min durante 90 min", "500 L/min durante 60 min"], 1, "Alcanza el umbral de riesgo alto. Los 500 L/min durante 60 min corresponden al llenado.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["¿Qué radio horizontal se usa para cubrir el perímetro con hidrantes de impulsión directa?", ["40 m por hidrante", "100 m de recorrido de evacuación", "15 m por hidrante"], 0, "Los 40 m son un radio horizontal para el perímetro o espacio a proteger. Los 5 a 15 m corresponden a la separación perpendicular cuando es posible.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["¿Puede un hidrante industrial de impulsión directa cubrir también la exigencia de llenado?", ["Sí, en cualquier ubicación y situación", "Sí, si cumple las condiciones que el reglamento fija para llenado", "Solo si se reduce la presión en toda la red a un máximo de 100 kPa"], 1, "El apartado 3.4 permite computarlo para ambas funciones cuando también se satisfacen las condiciones del apartado 3.2.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ]
  }
};
