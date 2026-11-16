const practica = {
  "equipo": {
    cards: [
      [1, "¿Qué elementos llevan el agua desde la red hasta el fuego?", "La red alimenta la BIE. En el equipo, el agua pasa por la válvula, la manguera y la lanza-boquilla.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=4"],
      [2, "¿Qué diámetros interiores acepta el RIPCI en las BIE convencionales?", "25 mm en manguera semirrígida y 45 mm en manguera plana.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué UNE se asocia al marcado CE de cada tipo?", "UNE-EN 671-1 para manguera semirrígida y UNE-EN 671-2 para plana.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["¿Qué combinación corresponde al RIPCI para las BIE convencionales?", ["25 mm semirrígida y 45 mm plana", "25 mm plana y 45 mm semirrígida", "19 mm semirrígida y 52 mm plana"], 0, "Para BIE convencionales, el RIPCI limita el diámetro interior a 25 mm para semirrígida y 45 mm para plana.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué norma se asocia al marcado CE de la BIE de manguera plana?", ["UNE-EN 671-1", "UNE-EN 671-2", "UNE-EN 671-3"], 1, "La parte 1 corresponde a semirrígida, la 2 a plana y la 3 a mantenimiento.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿A quién se destina la toma adicional de 45 mm de una BIE semirrígida según el RIPCI?", ["A los servicios profesionales de extinción", "A la apertura habitual por los ocupantes", "A la alimentación desde un camión como toma de columna seca"], 0, "La salida adicional se destina a los servicios profesionales y debe contar con válvula, racor y tapón.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "semirrigida": {
    cards: [
      [1, "¿Cómo se alimenta la devanadera semirrígida?", "Por su eje. La devanadera fija gira en un plano y la pivotante puede desplazarse en más de un plano.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=8"],
      [2, "¿Cuántas vueltas necesita como máximo la válvula de globo manual descrita?", "Hasta tres vueltas y media del volante para que abra completamente.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=9"],
      [3, "¿Con cuántas vueltas de la devanadera debe abrir por completo la automática del temario?", "Como máximo, tres vueltas completas de la devanadera.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=10"]
    ],
    quiz: [
      ["¿Qué caracteriza a la devanadera fija del temario?", ["Pivota al menos 170° al extraer cada tramo", "Carece de eje de giro", "Gira en un plano y lleva una guía de manguera"], 2, "La guía reorienta la manguera si la devanadera solo gira en un plano.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=8"],
      ["¿Qué cifra corresponde al accionamiento automático descrito en la p. 10?", ["Hasta tres vueltas de devanadera", "Hasta tres vueltas y media de volante manual", "Una vuelta completa de la boquilla"], 0, "En la automática el giro que acciona la válvula es el de la devanadera.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=10"],
      ["¿Qué longitud máxima permite el RIPCI para la manguera semirrígida convencional?", ["20 m", "35 m", "30 m"], 2, "Los 20 m corresponden a plana. Los 35 m son el radio resultante al sumar 5 m a una semirrígida de 30 m.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "plana": {
    cards: [
      [1, "¿Qué significan las configuraciones A, B y C del PDF?", "A, hornacina con tapa. B, armario empotrado. C, armario de superficie.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=13"],
      [2, "¿Qué tipos de soporte se numeran 1, 2 y 3?", "1 devanadera giratoria, 2 plegado doble, 3 plegado en zigzag.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=13"],
      [3, "¿Cuáles son el diámetro y la longitud máxima de manguera plana en el RIPCI?", "45 mm de diámetro interior y 20 m de longitud máxima.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["En la designación del temario, ¿qué indica C-3/45-20?", ["Armario empotrado, devanadera, 45 mm y 20 m", "Armario de superficie, zigzag, 45 mm y 20 m", "Hornacina, plegado doble, 20 mm y 45 m"], 1, "C señala montaje de superficie y 3 identifica el soporte en zigzag.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=13"],
      ["¿Cuánto giran los soportes 2 y 3 cuando se alojan en armario según el ejemplo del temario?", ["90° respecto del plano trasero", "35° respecto del plano trasero", "170° respecto del plano trasero"], 0, "El portamanguera de plegado sale sobre un eje vertical hasta 90°. Los 170° suponen otro requisito del armario.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=13"],
      ["El PDF muestra un código de ejemplo con 52 mm. ¿Qué diámetro fija el RIPCI para la BIE plana convencional en España?", ["52 mm", "33 mm", "45 mm"], 2, "El código sirve para leer la designación UNE. El diámetro de la instalación en España se consulta en el RIPCI.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "lanza": {
    cards: [
      [1, "¿Cuáles son los alcances de ensayo para compacto, cortina y cono a 2 bar?", "10 m, 6 m y 3 m, respectivamente.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=10"],
      [2, "¿Qué ángulos de pulverización da el temario?", "90° ± 5° en cortina y al menos 45° en cono.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=16"],
      [3, "¿Qué apertura mínima de puerta recoge el temario y qué se pide si hay cerradura?", "170°. Si hay cerradura, se incorpora un dispositivo de apertura de emergencia.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=14"]
    ],
    quiz: [
      ["¿Qué alcance mínimo de ensayo corresponde a pulverización en cortina a 0,2 MPa?", ["3 m", "6 m", "10 m"], 1, "El compacto llega a 10 m y el cono a 3 m en las condiciones del ensayo.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=16"],
      ["Si la lanza ofrece los dos efectos, ¿qué orden recomienda el temario?", ["Compacto, cierre y pulverización", "Pulverización, compacto y cierre", "Cierre, pulverización y chorro compacto"], 2, "La pulverización queda entre el cierre y el chorro compacto.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=13"],
      ["¿Qué ángulo mínimo de apertura de la puerta del armario indica el temario?", ["90°", "170°", "135°"], 1, "La puerta requiere paso suficiente para extraer libremente la manguera. Los 90° se citan para determinados portamangueras.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=14"]
    ]
  },
  "implantacion": {
    cards: [
      [1, "¿A qué altura deben quedar boquilla, válvula manual y apertura del armario, si las hay?", "A 1,50 m como máximo sobre el suelo.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "¿Cómo calculas el radio de acción y cómo se mide?", "Longitud real de la manguera más 5 m, medida siguiendo recorridos de evacuación.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué límites aplica el RIPCI a salida y separación entre BIE convencionales?", "Hasta 5 m de cada salida de sector, con las excepciones previstas. Hasta 50 m entre una BIE y la más próxima.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ],
    quiz: [
      ["¿Qué radio de acción corresponde a una BIE convencional de manguera de 30 m?", ["35 m por recorrido", "25 m por recorrido", "40 m contando el alcance de chorro compacto"], 0, "El radio es longitud de manguera más 5 m, siguiendo el recorrido de evacuación.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Cuál es el máximo de separación de una BIE convencional respecto a su vecina más próxima?", ["35 m de recorrido", "50 m siempre en línea recta", "50 m de recorrido"], 2, "La separación se mide siguiendo recorridos de evacuación.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué distancia máxima debe haber de cada salida de sector a la BIE, salvo las excepciones del RIPCI?", ["15 m siguiendo cualquier recorrido", "5 m siguiendo un recorrido de evacuación", "25 m en línea recta"], 1, "El criterio se aplica a salidas del sector, con las excepciones de cobertura y legislación específica.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "hidraulica": {
    cards: [
      [1, "¿Qué caudales mínimos y K mínimos se piden en 25 y 45 mm?", "25 mm: 85 L/min y K 42. 45 mm: 160 L/min y K 85.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "¿Qué presión dinámica máxima se admite a la entrada de una BIE convencional?", "9 bar. Se mide con flujo completamente abierto y chorro compacto.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Cómo escribes Q = K × √P con la presión en MPa?", "Q = K × √(10 × P), ya que 1 MPa equivale a 10 bar.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=15"]
    ],
    quiz: [
      ["¿Con qué caudal mínimo se comprueba una BIE de 45 mm según el RIPCI vigente?", ["85 L/min", "100 L/min", "160 L/min"], 2, "El RIPCI fija 160 L/min para la manguera plana y 85 L/min para la semirrígida.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Dónde y en qué condiciones se miden los 3,5 bar de referencia para 45 mm con K 85?", ["En la boquilla cerrada sin circulación", "En la entrada, flujo completamente abierto y chorro compacto", "En el depósito, con la red sin servicio"], 1, "El criterio corresponde a una presión dinámica medida en el manómetro a la entrada.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["Con K = 85 y P = 0,4 MPa (4 bar), ¿qué caudal da la fórmula del temario?", ["170 L/min", "34 L/min", "85 L/min"], 0, "La raíz cuadrada de 4 bar es 2. Multiplicada por 85 da 170 L/min.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=15"]
    ]
  },
  "prueba": {
    cards: [
      [1, "¿Qué condición de ensayo inicial tiene una red de BIE convencional?", "Presión estática máxima de servicio y al menos 980 kPa, durante dos horas como mínimo sin fugas.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "¿Qué presión dinámica mínima de salida exige el RIPCI para alta presión?", "3.450 kPa, con las dos BIE más desfavorables en funcionamiento simultáneo durante al menos una hora.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [3, "¿Qué tríada de presiones cita el PDF para las mangueras planas racoradas descritas?", "1,2 MPa de servicio máximo, 2,4 MPa de prueba y 4,2 MPa de rotura mínima.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=15"]
    ],
    quiz: [
      ["Si la presión máxima de servicio de una red convencional es 800 kPa, ¿a qué mínimo se ensaya?", ["800 kPa durante al menos 1 h", "980 kPa durante al menos 2 h", "900 kPa durante al menos 2 h"], 1, "La prueba de estanquidad y resistencia mecánica tiene un mínimo de 980 kPa durante dos horas sin fugas.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué presión de ensayo previa a la puesta en servicio corresponde a BIE de alta presión?", ["9 bar siempre", "1,5 veces la presión máxima de trabajo", "El doble de la presión máxima de servicio"], 1, "El criterio de alta presión usa un factor 1,5 y exige un mínimo de dos horas sin fugas.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué longitud máxima se permite en las mangueras de BIE de alta presión?", ["30 m", "50 m", "12 m"], 0, "El valor de 12 se refiere al diámetro interior nominal en milímetros, con la excepción de manejabilidad.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"]
    ]
  },
  "cte": {
    cards: [
      [1, "¿Qué usos tienen el umbral de más de 2.000 m² y qué equipo se exige?", "Administrativo y Docente. BIE de 25 mm por uso.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      [2, "¿Cuándo se exigen BIE en Residencial Público?", "Con más de 1.000 m² construidos o alojamiento previsto para más de 50 personas.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      [3, "¿Qué BIE se pide para riesgo especial alto debido principalmente a sólidos combustibles?", "45 mm en general y 25 mm si el edificio es de uso Residencial Vivienda.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"]
    ],
    quiz: [
      ["¿En qué uso exige BIE SI 4 en todo caso?", ["Hospitalario", "Administrativo", "Aparcamiento convencional"], 0, "La fila de Hospitalario exige BIE de 25 mm en todos los casos.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      ["¿Qué condición aplica por uso a un hotel de 900 m² previsto para 55 huéspedes?", ["Exige BIE de 25 mm por superar 50 plazas de alojamiento", "Queda exento por estar por debajo de 1.000 m²", "Exige BIE de 45 mm por el número de huéspedes"], 0, "Residencial Público tiene dos umbrales alternativos. Superar cualquiera activa la exigencia de esa fila.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"],
      ["Un edificio Residencial Vivienda tiene un local de riesgo especial alto por sólidos combustibles. ¿Qué tipo fija la regla general de SI 4 para ese uso?", ["45 mm", "25 mm con toma adicional de 45 mm en todo caso", "25 mm"], 2, "Residencial Vivienda es la excepción al tipo 45 mm de la regla general para ese riesgo.", "https://www.codigotecnico.org/pdf/Documentos/SI/DBSI.pdf#page=32"]
    ]
  },
  "industria": {
    cards: [
      [1, "¿Qué umbrales de BIE fija el RSCIEI para tipo A horizontal o B?", "500 m² construidos en riesgo medio y 200 m² en riesgo alto.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [2, "¿Qué BIE corresponde a cada nivel cuando proceda dotación según la tabla 3.5.1 de 2025?", "25 mm para bajo y medio. 45 mm para alto, con las condiciones y alternativas de las notas.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      [3, "¿Dónde fija el RSCIEI de 2025 las condiciones hidráulicas de las BIE?", "Remite al anexo I del RIPCI para presión, caudal y tiempo de funcionamiento.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ],
    quiz: [
      ["Según el RD 164/2025, ¿qué tipo corresponde por regla general a un sector industrial de riesgo medio que debe instalar BIE?", ["45 mm en todos los casos", "25 mm", "Alta presión en todos los casos"], 1, "La tabla 3.5.1 asigna 25 mm. En caso de reforma admite conservar determinadas BIE de 45 mm existentes.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["Dos áreas adyacentes de tipo D y riesgo alto ocupan 2.700 m² y 2.400 m². ¿Qué resultado da el criterio del RD 164/2025?", ["Se comparan por separado y ninguna alcanza el umbral", "El umbral de 5.000 m² corresponde solo a sectores tipo C", "Se suman y 5.100 m² alcanzan el umbral"], 2, "La superficie ocupada de las áreas adyacentes de riesgo alto se computa de forma conjunta.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"],
      ["Si se usa 25 mm con toma adicional de 45 mm como alternativa para riesgo alto, ¿qué se exige?", ["Se considera de 45 mm para el cálculo y se dimensiona para ambos tipos", "Se calcula solo como 25 mm", "Todos los caudales se sustituyen por el caudal nominal de hidrante"], 0, "La nota 2 mantiene las exigencias de caudal y presión de ambos tipos.", "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190#ai-3"]
    ]
  },
  "senal": {
    cards: [
      [1, "¿Dónde se coloca la señal de una BIE en armario?", "Inmediatamente junto al armario, en una posición visible.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      [2, "¿Qué norma cita el RIPCI para las señales de los medios manuales?", "UNE 23033-1, según anexo I, sección 2.ª.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s2-2"],
      [3, "¿Qué medidas de manguera y lanza aparecen en el marcado del temario?", "Longitud y diámetro interior de la manguera y diámetro equivalente de la lanza-boquilla.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=16"]
    ],
    quiz: [
      ["¿Dónde se coloca la señal cuando la BIE está alojada en un armario?", ["En la cara interior de la puerta", "Sobre la superficie de la puerta", "Inmediatamente junto al armario"], 2, "El epígrafe de BIE del RIPCI exige colocarla junto al armario.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s1-2"],
      ["¿Qué debe ocurrir con la señal en caso de fallo del alumbrado normal?", ["Debe seguir siendo visible", "Puede dejar de verse si el armario es rojo", "Solo debe verse si hay un plano de evacuación"], 0, "La finalidad de la señalización es permitir identificar la situación del equipo también cuando falla el alumbrado normal.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#s2-2"],
      ["¿Qué medida da la tabla histórica de la p. 21 para una observación a 15 m?", ["210 × 210 mm", "420 × 420 mm", "594 × 594 mm"], 1, "15 m pertenece al segundo tramo del cuadro del temario. La regulación vigente remite a la norma de señalización.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=21"]
    ]
  },
  "mantenimiento": {
    cards: [
      [1, "¿Qué revisas cada tres meses en la BIE según el RIPCI?", "Señalización, accesibilidad, presión por manómetro y buen estado aparente de sus componentes.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      [2, "¿A qué UNE remiten el mantenimiento anual y quinquenal vigentes?", "A UNE-EN 671-3.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      [3, "¿Cuándo se sustituye la manguera como regla general?", "A los 20 años desde su puesta en servicio, salvo que el fabricante certifique durabilidad mayor.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"]
    ],
    quiz: [
      ["¿Cuál es una operación del control trimestral vigente?", ["Leer el manómetro y comprobar el estado aparente de los componentes", "Sustituir siempre la manguera", "Hacer siempre la prueba de puesta en servicio a 980 kPa"], 0, "La tabla I incluye estado aparente, acceso, señalización y presión, mientras que la prueba de red corresponde a otro momento.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      ["¿Qué referencia usa la tabla II para la revisión quinquenal de la manguera?", ["UNE-EN 671-1", "UNE 23033-1", "UNE-EN 671-3"], 2, "La parte 3 es la de mantenimiento y el RIPCI vigente la cita en la tabla II.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"],
      ["¿Desde cuándo se cuentan los 20 años de la manguera?", ["Desde la fabricación del armario", "Desde el último mantenimiento anual", "Desde su puesta en servicio"], 2, "El plazo de la tabla II empieza con la puesta en servicio de la manguera, con excepción de durabilidad mayor certificada.", "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606#ai-2"]
    ]
  },
  "maniobra": {
    cards: [
      [1, "¿Por qué la BIE de 25 mm puede emplearse desplegada solo en parte?", "La semirrígida conserva su sección y permite el flujo aunque quede manguera en la devanadera.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=25"],
      [2, "¿Qué debe estar hecho antes de alimentar la BIE de 45 mm?", "Debe estar tendida toda la manguera plana, sin nudos ni codos y con la lanza controlada.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=26"],
      [3, "¿Cómo se reparten las funciones al dar agua con la BIE de 45 mm?", "Una persona controla firmemente la lanza y otra se coordina con ella para abrir la alimentación.", "https://www.proteccioncivil.es/documents/20121/0/Manual-de-primera-intervencion-2018.pdf/7434f9ad-0b15-a72d-2c4a-ea7e6617e6c0#page=46"]
    ],
    quiz: [
      ["¿Qué permite usar una BIE de 25 mm sin sacar toda la manguera?", ["La válvula solo descarga si hay manguera enrollada", "La manguera semirrígida mantiene su sección", "La manguera plana se presuriza mejor sobre el soporte"], 1, "La semirrígida deja pasar el agua aunque parte quede enrollada.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=25"],
      ["¿Qué orden corresponde a una BIE de 45 mm?", ["Tender toda la manguera y después abrir la alimentación", "Abrir la alimentación y tender luego la manguera plegada", "Abrir la lanza y después comprobar si está conectada"], 0, "La manguera plana se tiende completa antes de que tome presión.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=26"],
      ["¿Para qué tipo de fuego es especialmente adecuado el agua de una BIE?", ["Clase F, como aceite de freidora", "Clase A, como madera o papel", "Equipos en tensión eléctrica"], 1, "El agua es útil en sólidos combustibles. Los aceites de cocina y la tensión eléctrica plantean riesgos específicos.", "bie-assets/18.BOCAS-DE-INCENDIO-EQUIPADAS.pdf#page=24"]
    ]
  }
};
