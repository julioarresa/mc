const rsciei = "https://www.boe.es/buscar/act.php?id=BOE-A-2025-7190";
const ripci = "https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606";
const directriz = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-21144";
const temario = printedPage =>
  "industriales-assets/tema-05-recuperado.pdf#page=" + (Math.floor((printedPage - 6) / 2) + 1);

const practica = {
  vigencia: {
    source: rsciei,
    cards: [
      ["reglamento", "¿Qué real decreto aprueba el actual RSCIEI?", "El RD 164/2025, de 4 de marzo. Derogó el RD 2267/2004."],
      ["entrada", "¿En qué fecha entró en vigor el RD 164/2025?", "El 10 de mayo de 2025."],
      ["transitoria", "¿Dónde se regula la aplicación del nuevo RSCIEI a establecimientos que ya existían?", "En la disposición transitoria primera del RD 164/2025.", rsciei + "#dt"]
    ],
    quiz: [
      ["¿Qué decreto derogó el RSCIEI de 2004?", ["RD 513/2017", "RD 164/2025", "RD 314/2006", "RD 524/2023"], 1, "El RD 164/2025 aprueba el nuevo RSCIEI. Su disposición derogatoria única deroga el RD 2267/2004.", rsciei + "#dd"],
      ["¿Cuál es la fecha de entrada en vigor del RD 164/2025?", ["4 de marzo de 2025", "10 de abril de 2025", "10 de noviembre de 2025", "10 de mayo de 2025"], 3, "El 4 de marzo es la fecha del decreto y el 10 de abril es la de su publicación. Entró en vigor un mes después de publicarse."],
      ["¿Qué apartado del RSCIEI consultamos para saber cómo encaja el DB-SI cuando coexisten usos industriales y no industriales?", ["Artículo 4", "Anexo I, tabla 1.3.1", "Artículo 13", "Anexo III, apartado 1"], 0, "El artículo 4 regula la compatibilidad reglamentaria entre los usos industriales y los demás usos.", rsciei + "#a4"]
    ]
  },
  ambito: {
    source: rsciei + "#a2",
    cards: [
      ["uso", "¿Qué uso principal define el ámbito del RSCIEI?", "El uso industrial, con las actividades que enumera el artículo 2."],
      ["taller", "¿Abarca el RSCIEI los talleres de reparación de vehículos?", "Sí. Los incluye expresamente el artículo 2.1.c)."],
      ["almacen", "¿Cuál es el umbral de carga de fuego para almacenes logísticos en el artículo 3.b).2.º?", "Qₜ ≥ 3.000.000 MJ, como carga de fuego total ponderada y corregida.", rsciei + "#a3"]
    ],
    quiz: [
      ["¿Cuál de estas actividades está incluida expresamente en el artículo 2.1?", ["Extracción de minerales", "Actividad ganadera", "Reparación de vehículos en taller", "Uso militar"], 2, "Los talleres de reparación de vehículos figuran entre los usos industriales del artículo 2.1. Las demás actividades aparecen en el apartado de exclusiones."],
      ["¿Qué magnitud usa el artículo 3.b).2.º para el umbral de los almacenes logísticos?", ["Qₜ en MJ", "Qₛ en MJ/m²", "Superficie en m²", "Potencia en MW"], 0, "El límite es 3.000.000 MJ de carga de fuego total ponderada y corregida (Qₜ).", rsciei + "#a3"],
      ["Un almacén logístico alcanza exactamente 3.000.000 MJ de Qₜ. ¿Cumple el umbral de carga de fuego del artículo 3.b).2.º?", ["Debe superarlo de forma estricta.", "Debe alcanzar el doble.", "Depende de que Qₛ supere 3.400 MJ/m².", "Sí, el límite incluye la igualdad."], 3, "El artículo exige una Qₜ igual o superior a tres millones de megajulios.", rsciei + "#a3"]
    ]
  },
  configuracion: {
    source: rsciei + "#ai",
    cards: [
      ["tipo-a", "¿En qué se distinguen Aᵥ y Aₕ?", "En un edificio compartido, la separación entre establecimientos es vertical en Aᵥ y horizontal en Aₕ. Si reúne ambos tipos, prevalece Aᵥ."],
      ["tipos-bc", "¿Cuál es el límite de distancia entre los tipos B y C?", "B incluye la adyacencia y hasta 3 m entre edificios de distintos establecimientos. C requiere más de 3 m y que la separación esté libre de mercancías combustibles y elementos que puedan propagar el fuego."],
      ["sector-area", "¿Dónde se identifican sectores y dónde áreas de incendio?", "Los sectores se identifican en edificios y las áreas en espacios abiertos."]
    ],
    quiz: [
      ["Si la separación de un establecimiento respecto de otros en el mismo edificio combina rasgos Aᵥ y Aₕ, ¿cómo se clasifica?", ["Tipo Aₕ", "Tipo Aᵥ", "Tipo B", "Tipo C"], 1, "El anexo I, apartado 1.1.1, asigna el tipo Aᵥ cuando coinciden rasgos de ambos subtipos."],
      ["Dos establecimientos ocupan cada uno un edificio completo e independiente. Los separan exactamente 3 m. ¿Qué configuración corresponde?", ["Aᵥ", "Aₕ", "B", "C"], 2, "La separación igual o inferior a 3 m entra en el tipo B. El tipo C exige una distancia estrictamente superior."],
      ["¿Qué condición se revisa para que una zona cubierta de un espacio abierto se clasifique como D?", ["Las aberturas laterales previstas en el anexo I.", "La existencia de una planta subterránea.", "La presencia de un almacén logístico.", "La coincidencia de dos titulares en el recinto."], 0, "La tabla 1.1.1 del anexo I fija los requisitos de las aberturas laterales en las zonas cubiertas."]
    ]
  },
  riesgo: {
    source: rsciei + "#ai",
    cards: [
      ["densidad", "¿Qué magnitud y unidad se usan para determinar el nivel de riesgo intrínseco?", "Qₛ, densidad de carga de fuego ponderada y corregida, en MJ/m²."],
      ["niveles", "¿Cómo se agrupan los ocho niveles de riesgo intrínseco?", "Bajo: 1–2. Medio: 3–5. Alto: 6–8."],
      ["alto", "¿A partir de qué valores comienza el riesgo alto?", "Para Qₛ > 3.400 MJ/m². Exactamente 3.400 MJ/m² sigue siendo medio 5."]
    ],
    quiz: [
      ["¿Qué nivel tiene un sector con Qₛ = 850 MJ/m²?", ["Bajo 1", "Medio 3", "Medio 4", "Bajo 2"], 3, "Bajo 2 incluye valores superiores a 425 y hasta 850 MJ/m². Medio 3 comienza por encima de 850."],
      ["¿Qué nivel tiene un área con Qₛ = 3.401 MJ/m²?", ["Medio 5", "Alto 6", "Alto 7", "Alto 8"], 1, "Alto 6 incluye valores por encima de 3.400 y hasta 6.800 MJ/m²."],
      ["Un sector tiene Qₛ = 13.600 MJ/m². ¿Qué nivel le corresponde?", ["Medio 5", "Alto 6", "Alto 7", "Alto 8"], 2, "El valor 13.600 MJ/m² es el límite superior incluido en alto 7."]
    ]
  },
  proteccion: {
    source: rsciei + "#a8",
    cards: [
      ["anexo-ii", "¿Qué regula el anexo II del RSCIEI?", "Los requisitos constructivos, entre ellos los de compartimentación y resistencia estructural."],
      ["anexo-iii", "¿Qué regula el anexo III del RSCIEI?", "La dotación exigible de instalaciones de protección activa contra incendios."],
      ["ripci", "¿Qué reglamento establece las condiciones de los equipos y sistemas de protección activa?", "El RIPCI, aprobado por el RD 513/2017.", ripci]
    ],
    quiz: [
      ["¿Cuál es un ejemplo de protección pasiva?", ["Una BIE", "Un pulsador manual", "Un extintor portátil", "Un elemento compartimentador resistente al fuego"], 3, "La compartimentación se consigue mediante requisitos constructivos. Los otros ejemplos son medios o componentes de protección activa.", rsciei + "#a3"],
      ["¿En qué anexo se consulta la dotación de instalaciones de protección activa?", ["Anexo III", "Anexo II", "Anexo I", "Anexo V"], 0, "El artículo 8 remite al anexo III para determinar la dotación según la caracterización del establecimiento."],
      ["¿Qué elementos se consideran al determinar los requisitos de cada sector o área?", ["Solo la configuración del edificio.", "Configuración, nivel de riesgo, superficie y tipo de actividad.", "Únicamente superficie y antigüedad.", "Tipo de titular y horario de apertura."], 1, "El artículo 7 relaciona los requisitos con la configuración, el nivel de riesgo intrínseco, la superficie y si se fabrica o se almacena.", rsciei + "#a7"]
    ]
  },
  autoproteccion: {
    source: directriz,
    cards: [
      ["orden", "¿Qué orden publica el acuerdo que aprueba la Directriz Básica de Planificación de Autoprotección?", "La Orden INT/1068/2026, de 7 de octubre."],
      ["anexos", "¿Qué recogen los dos primeros anexos de la Directriz?", "El anexo I recoge las actividades incluidas y el anexo II el contenido mínimo del plan."],
      ["adaptacion", "¿Qué plazo máximo tienen los planes vigentes para adaptarse a la Directriz?", "Cuatro años, según el apartado 2.6.3."]
    ],
    quiz: [
      ["¿Qué norma publica el acuerdo que aprueba la Directriz de Autoprotección de 2026?", ["RD 393/2007", "RD 164/2025", "Orden INT/1068/2026", "RD 513/2017"], 2, "El acuerdo se publica mediante la Orden INT/1068/2026. Su apartado cuarto pone fin a la aplicación de la norma de 2007."],
      ["¿Dónde se enumera el contenido mínimo del Plan de Autoprotección?", ["Anexo I del RSCIEI", "Anexo III de la Directriz", "Anexo I de la Directriz", "Anexo II de la Directriz"], 3, "El anexo II fija el contenido mínimo. El anexo I enumera las actividades incluidas."],
      ["¿Cuál es el plazo máximo para adaptar los planes vigentes a la entrada en vigor de la Directriz?", ["Cuatro años", "Seis meses", "Un año", "Cinco años"], 0, "El apartado 2.6.3 establece un máximo de cuatro años para esos planes."]
    ]
  },
  estructuras: {
    source: temario(10),
    cards: [
      ["acero", "¿Qué efectos estructurales puede provocar la dilatación de vigas de acero?", "Empujes sobre pilares y muros, cambios en sus apoyos y posibilidad de pandeo o pérdida de apoyo."],
      ["hormigon", "¿Cómo protege el recubrimiento de hormigón a la armadura?", "Retrasa su calentamiento. El desprendimiento del recubrimiento puede dejar las barras expuestas."],
      ["madera", "¿Qué le ocurre a la sección resistente de la madera al carbonizarse?", "La sección útil disminuye a medida que la carbonización avanza hacia el interior."]
    ],
    quiz: [
      ["¿Qué material transmite el calor con facilidad a lo largo de sus piezas?", ["Madera", "Acero", "Hormigón de recubrimiento", "Los tres con igual facilidad"], 1, "El acero tiene mayor conductividad térmica y puede transmitir calor lejos del punto directamente expuesto."],
      ["¿Qué efecto tiene un desprendimiento del recubrimiento de hormigón?", ["Evita la transmisión de calor a las barras.", "Aumenta la sección de acero.", "Permite que se enfríe toda la estructura.", "Puede dejar expuesta la armadura."], 3, "El recubrimiento actúa como protección térmica de la armadura. Al desprenderse, la barra queda más expuesta al calor."],
      ["¿Qué información complementa el material al valorar la estabilidad de una nave?", ["Las uniones, los apoyos y las posibilidades de dilatación.", "Solo el color de la fachada.", "El número de extintores exclusivamente.", "Únicamente la altura del humo."], 0, "La p. 27 incluye el esquema de equilibrio, los detalles de las uniones y la posibilidad de dilatación.", temario(27)]
    ]
  },
  escenarios: {
    source: temario(12),
    cards: [
      ["solidos", "¿Qué tres aspectos del almacenamiento de sólidos condicionan el incendio?", "La naturaleza del sólido, su cantidad y la continuidad con que está dispuesto."],
      ["boilover", "¿Qué desencadena el boilover descrito para ciertos tanques de crudo?", "La vaporización súbita del agua decantada en el fondo cuando la alcanza el frente térmico. Puede expulsar combustible ardiendo."],
      ["dardo", "¿Qué alimenta un dardo de fuego?", "La salida de gas o vapor inflamable a presión por una fuga."]
    ],
    quiz: [
      ["¿Cuál es un mecanismo de inicio de incendio de maquinaria que recoge el temario?", ["Presurización de una escalera.", "Formación de una manta de espuma.", "Sobrecarga de una línea eléctrica.", "Enfriamiento del aceite."], 2, "Las sobrecargas, cortocircuitos, fugas de aceite caliente y fallos de mantenimiento son causas descritas."],
      ["¿Qué escenario describe un pool fire?", ["Un líquido inflamable derramado que arde sobre una superficie.", "Una fuga en chorro de gas que arde.", "Una estructura de madera que se carboniza.", "Una explosión secundaria de polvo."], 0, "Pool fire es el incendio de charco formado por el vertido de un líquido inflamable."],
      ["¿Cuál de los fenómenos siguientes puede proyectar fuera de un tanque combustible ardiendo al vaporizarse agua del fondo?", ["Efecto Venturi", "Efecto chimenea", "Jet fire", "Boilover"], 3, "En ciertos tanques de crudo, la vaporización rápida del agua puede provocar un rebosamiento violento."]
    ]
  },
  polvo: {
    source: temario(14),
    cards: [
      ["superficie", "¿Qué cambia al dividir un sólido combustible en partículas más finas?", "Aumenta la superficie de contacto por unidad de masa. Al dispersarse, el polvo puede formar una nube que arde con rapidez."],
      ["secundaria", "¿Cómo puede originarse una explosión secundaria de polvo?", "Una primera explosión puede levantar polvo depositado y formar una nueva nube inflamable."],
      ["agente", "¿De qué depende la elección del agente en un incendio de material pulverulento?", "De la naturaleza y reactividad del polvo, el confinamiento y los medios disponibles. Los fuegos de metales requieren un agente de clase D compatible con el metal."]
    ],
    quiz: [
      ["¿Qué situación puede convertir un depósito de polvo combustible en otra atmósfera explosiva?", ["Que una onda levante el polvo y forme una nube.", "Que aumente el tamaño de todos los granos.", "Que desaparezca el oxígeno del recinto.", "Que se mantenga la masa de polvo sin dispersión."], 0, "El polvo acumulado puede pasar al aire tras la primera explosión. La nube resultante puede inflamarse."],
      ["¿Cómo debe interpretarse la referencia de 0,5 mm para las partículas?", ["Como el caudal mínimo para todos los polvos.", "Como el espesor mínimo de un depósito peligroso.", "Como una referencia orientativa que se valora junto con la naturaleza del polvo y su fracción fina.", "Como la concentración mínima de cualquier polvo."], 2, "El tamaño influye en la facilidad de ignición. La composición, la fracción fina y la concentración también importan."],
      ["¿Qué clase de agente extintor se debe comprobar para un fuego de polvo metálico?", ["Clase A, por tratarse de un sólido.", "Clase C, por estar disperso en aire.", "Clase F, por su fina granulometría.", "Clase D, compatible con el metal."], 3, "El RIPCI clasifica los fuegos de metales como clase D. La compatibilidad depende del metal concreto.", ripci]
    ]
  },
  dosificacion: {
    source: temario(16),
    cards: [
      ["venturi", "¿Cómo aspira el espumógeno un proporcionador en línea de tipo Venturi?", "El estrechamiento acelera el agua y crea una depresión que se comunica con la línea de succión."],
      ["retencion", "¿Para qué sirve la válvula de retención en la línea de succión?", "Para impedir que el agua retroceda hacia el depósito de espumógeno."],
      ["membrana", "¿Qué provoca la salida del espumógeno de un tanque de membrana?", "La presión del agua contra la membrana que contiene el concentrado."],
      ["premezcla", "¿Qué se almacena ya combinado en una premezcla?", "Agua y espumógeno en la proporción prevista. Al incorporar aire se genera la espuma.", temario(15)]
    ],
    quiz: [
      ["¿Qué efecto hace posible la aspiración en un proporcionador en línea?", ["Efecto chimenea", "Efecto Venturi", "Expansión térmica de la estructura", "Radiación del combustible"], 1, "El estrechamiento aumenta la velocidad del flujo y genera la depresión que aspira el concentrado."],
      ["¿Qué papel tiene el agua que entra en un tanque de membrana?", ["Incorpora aire a la solución.", "Limpia la línea de succión.", "Presiona la membrana para expulsar el concentrado.", "Se mezcla directamente con el concentrado dentro de la bolsa."], 2, "El agua ejerce presión sobre la membrana. El concentrado se incorpora al flujo en el proporcionador."],
      ["¿Dónde está el proporcionador en las boquillas autoaspirantes descritas?", ["En la propia boquilla de descarga.", "En el depósito de agua.", "Dentro de la membrana.", "En la salida de ventilación del recinto."], 0, "El temario señala que el proporcionador forma parte de la boquilla."],
      ["¿Qué etapa ya está hecha cuando se usa una premezcla?", ["La expansión del volumen con aire.", "La mezcla del agua con el espumógeno.", "La aplicación de la espuma al combustible.", "La formación de la manta sobre el derrame."], 1, "La premezcla contiene el agua y el concentrado combinados. La incorporación de aire produce la espuma expandida.", temario(15)]
    ]
  },
  espuma: {
    source: temario(18),
    cards: [
      ["expansion", "¿Qué rangos de expansión usa el temario?", "Baja < 20:1. Media de 20:1 a 200:1. Alta > 200:1."],
      ["tasa", "¿Cómo se obtiene el caudal de solución para un derrame si se conoce la tasa de aplicación?", "Superficie en m² × tasa en L/min/m² = caudal de solución en L/min."],
      ["rebote", "¿Cómo llega la espuma al combustible en la cubrición por rebote?", "Se aplica contra un obstáculo, como una pared, y escurre sobre la superficie con menor impacto.", temario(25)]
    ],
    quiz: [
      ["Según el temario, ¿cómo se clasifica una espuma con expansión 120:1?", ["Baja", "Alta", "Sin expansión", "Media"], 3, "El rango de expansión media de los apuntes abarca de 20:1 a 200:1."],
      ["En un ejercicio, un derrame de 60 m² recibe una tasa de 5 L/min/m². ¿Qué caudal de solución resulta?", ["12 L/min", "300 L/min", "65 L/min", "3.000 L/min"], 1, "Se multiplica la superficie por la tasa de aplicación. El resultado se expresa en litros de solución por minuto."],
      ["¿Qué modo de aplicación busca llenar el volumen de un recinto adecuado?", ["Cubrición por rebote", "Refrigeración de un depósito vecino", "Inundación con espuma de alta expansión", "Presurización de una escalera"], 2, "La alta expansión aporta un gran volumen de espuma en relación con la solución.", temario(20)]
    ]
  },
  propagacion: {
    source: temario(20),
    cards: [
      ["presion", "¿Qué se busca al presurizar un espacio protegido?", "Dificultar la entrada de humo mediante una presión superior a la de los espacios contiguos."],
      ["refrigeracion", "¿Por qué se refrigera una superficie expuesta al fuego de otro elemento?", "Para limitar el calentamiento causado por radiación, convección o contacto de llama y proteger el elemento expuesto."],
      ["exposicion", "¿Qué tipos de exposición distingue la tabla de refrigeración del temario?", "Calor radiante, llama directa incipiente y llama de dardo."]
    ],
    quiz: [
      ["¿Qué medida busca mantener humo fuera de un espacio protegido mediante una diferencia de presión?", ["Presurización", "Cubrición por rebote", "Ataque directo", "Sectorización del caudal"], 0, "El aumento de presión en la zona protegida dificulta que el humo entre desde otra zona."],
      ["¿Qué puede limitar la eficacia de la presurización en una nave de gran volumen?", ["La carga de fuego se expresa en MJ.", "La espuma tiene alta expansión.", "El depósito vecino es metálico.", "El caudal disponible y las fugas del recinto."], 3, "Los grandes volúmenes y la falta de estanqueidad dificultan mantener una diferencia de presión suficiente."],
      ["¿Qué datos son relevantes para estimar la demanda de agua de refrigeración?", ["El nombre del titular y el año de construcción.", "El tipo de exposición y la superficie que debe protegerse.", "El número de señales de evacuación.", "La relación de expansión de cualquier espuma."], 1, "El temario diferencia las exposiciones y relaciona el caudal con el área protegida o proyectada."]
    ]
  },
  agua: {
    source: temario(22),
    cards: [
      ["critico", "¿Qué es el caudal crítico de extinción?", "El mínimo caudal disponible que permite extinguir el incendio."],
      ["optimo", "¿Qué minimiza el caudal óptimo?", "El volumen total de agua gastado para lograr la extinción."],
      ["indirecto", "¿Qué mecanismo aprovecha el ataque indirecto descrito en el temario?", "La generación de vapor al aplicar agua sobre superficies calientes en un espacio confinado.", temario(24)]
    ],
    quiz: [
      ["¿Qué magnitud corresponde al volumen total de agua empleado durante la intervención?", ["Caudal óptimo", "Caudal crítico", "Gasto de agua", "Caudal disponible"], 2, "El gasto es un volumen. El caudal medio se obtiene dividiendo el gasto por el tiempo de intervención."],
      ["¿Qué caracteriza al caudal óptimo según el temario?", ["Extingue con el menor gasto total de agua.", "Coincide siempre con el caudal máximo de la bomba.", "Es el valor de la presión en punta de lanza.", "Es el caudal medio de todas las intervenciones."], 0, "El óptimo se define por el menor volumen total necesario para extinguir."],
      ["¿Qué condición destaca el temario como desfavorable para el ataque indirecto por vapor?", ["Que el agua pueda evaporarse.", "Que exista una zona confinada.", "Que haya superficies calientes.", "Que haya víctimas atrapadas o vías de propagación a zonas sin afectar."], 3, "La expansión del vapor puede afectar a víctimas y desplazar calor y gases hacia otras zonas.", temario(24)]
    ]
  },
  ventilacion: {
    source: temario(26),
    cards: [
      ["horizontal", "¿Qué puede pasar en una misma abertura de ventilación natural?", "Puede entrar aire por una parte y salir humo por otra. El viento y la geometría también influyen."],
      ["chimenea", "¿Qué favorece el efecto chimenea?", "El movimiento de gases por recorridos verticales por diferencias de temperatura y presión."],
      ["vpp", "¿Qué añade la ventilación por presión positiva?", "Un ventilador que impulsa aire y crea una diferencia de presión para dirigir el flujo hacia una salida."]
    ],
    quiz: [
      ["¿Cuál es un recorrido típico del humo por efecto chimenea?", ["La línea de succión de espumógeno.", "Una caja de escalera o un hueco de ascensor.", "El interior de una barra de acero.", "Un depósito sin aberturas."], 1, "Las cajas de escalera y los huecos de ascensor pueden actuar como recorridos verticales de los gases."],
      ["¿Qué distingue a la ventilación por presión positiva de la natural?", ["Elimina la influencia de las aberturas.", "Funciona por refrigeración superficial.", "Impulsa aire con un ventilador para establecer una diferencia de presión.", "Mantiene el mismo recorrido de los gases en todos los casos."], 2, "La VPP emplea un ventilador. La salida elegida condiciona el recorrido de los gases."],
      ["¿Por qué se estudia la ventilación junto con la extinción?", ["Porque al cambiar las aberturas cambian el flujo de gases y el aire que llega al incendio.", "Porque cualquier abertura reduce siempre la intensidad del incendio.", "Porque ambas son formas de dosificar espuma.", "Porque el tamaño de la salida carece de influencia."], 0, "La ventilación puede aportar oxígeno y cambiar el recorrido del humo y el calor. Su coordinación con la extinción importa."]
    ]
  },
  valoracion: {
    source: temario(28),
    cards: [
      ["recuento", "¿Qué información aporta el recuento en el punto de encuentro?", "Ayuda a identificar si faltan trabajadores, visitas u otras personas que pudieran seguir en la nave."],
      ["riesgos", "¿Qué dos riesgos inmediatos destaca el temario?", "El tipo de actividad y de material implicado, y el posible colapso de la estructura."],
      ["recursos", "¿Qué condiciona que búsqueda y ataque puedan desarrollarse a la vez?", "El personal, los medios disponibles, el número de posibles víctimas y las condiciones del incendio."]
    ],
    quiz: [
      ["¿Qué situación hace necesario considerar que puede haber ocupantes en la nave?", ["El recuento en el punto de encuentro está incompleto.", "Las naves están a más de 3 m.", "Se conoce el número de BIE.", "La nave dispone de una fachada accesible."], 0, "Con un recuento incompleto, el mando debe tener en cuenta que pueden faltar personas."],
      ["¿Qué riesgo añadido presenta una estructura común entre varias naves?", ["Imposibilidad de que exista sectorización.", "Caudal insuficiente por definición.", "Colapso en cadena de elementos que afectan a naves contiguas.", "Disminución automática de la carga de fuego."], 2, "La pérdida de capacidad de un elemento compartido puede comprometer los edificios contiguos."],
      ["¿Qué equipo cita el temario para ayudar a orientarse durante una búsqueda con baja visibilidad?", ["Un manómetro de bomba", "Un proporcionador de espuma", "Un termómetro ambiente fijo", "Una cámara térmica"], 3, "La cámara térmica puede ayudar a orientar al equipo y reducir el tiempo de rastreo."]
    ]
  },
  recursos: {
    source: temario(30),
    cards: [
      ["funciones", "¿Entre qué tres funciones distribuye el mando los recursos?", "Rescate, evacuación o confinamiento. Control de la propagación. Extinción."],
      ["dimensionamiento", "¿Qué parámetros se cuantifican para la extinción?", "El volumen de agua o agente, el caudal mínimo, el número de intervinientes, los puntos de ataque y los relevos."],
      ["reevaluacion", "¿Cuándo se revisa el plan de intervención?", "Cuando cambian las condiciones, se pierden medios o las acciones tienen un efecto distinto al previsto."]
    ],
    quiz: [
      ["¿Qué prioridad guía la asignación de recursos al inicio?", ["Reparar los daños del edificio.", "Proteger la vida de los ocupantes.", "Recuperar la producción.", "Completar el inventario de materiales."], 1, "La protección de vidas guía la asignación al rescate, evacuación o confinamiento, según las condiciones."],
      ["Para prever la extinción, ¿qué par de magnitudes sobre el agente destaca el temario?", ["Volumen necesario y caudal mínimo.", "Diámetro de manguera y anchura de fachada.", "Nivel de riesgo y altura de cubierta.", "Superficie de la nave y ocupación."], 0, "El mando cuantifica cuánto agente necesita y a qué caudal mínimo, junto con personal, puntos de ataque y relevos."],
      ["Un equipo de suministro se avería y cae el caudal disponible. ¿Qué decisión corresponde al mando?", ["Mantener el plan hasta que termine la intervención.", "Trasladar la decisión al personal de la empresa.", "Medir solo el gasto medio de agua.", "Reevaluar de inmediato la táctica y los medios disponibles."], 3, "La valoración dinámica incluye cambios en el incendio y pérdidas de recursos, como una avería."]
    ]
  },
  tacticas: {
    source: temario(33),
    cards: [
      ["exposiciones", "¿Qué objetivo tiene el control exterior de la propagación?", "Proteger superficies y edificios expuestos para limitar la extensión del incendio."],
      ["pirolisis", "¿Qué busca el ataque directo interior al enfriar el foco?", "Reducir la pirólisis del combustible y, con ello, la generación de gases combustibles."],
      ["patrones", "¿Qué formas de aplicación menciona la academia para el ataque indirecto con agua?", "Patrón en T, con recorridos superiores y uno vertical, y patrón en O, con recorrido circular.", temario(34)]
    ],
    quiz: [
      ["¿Qué objetivo corresponde al control exterior de propagación?", ["Llenar el recinto de espuma.", "Crear una nube de vapor en el foco.", "Proteger elementos próximos expuestos al incendio.", "Aumentar el caudal en un punto de ataque interior."], 2, "El control exterior pretende limitar la extensión del incendio a otras superficies o edificios."],
      ["¿Qué riesgo del ataque indirecto destaca el temario?", ["El vapor puede desplazar gases hacia otras estancias.", "Se pierde la capacidad de dosificar espumógeno.", "Aumenta la sección resistente de la madera.", "Se reduce la presión del tanque de membrana."], 0, "La generación de vapor puede desplazar los gases, reducir la visibilidad y exponer a las personas a quemaduras."],
      ["En el ataque indirecto con agua descrito en la p. 34, ¿qué movimiento distingue al patrón en O?", ["Un recorrido vertical único.", "Dos recorridos horizontales.", "Un recorrido en zigzag.", "Un recorrido circular."], 3, "El impreso distingue el recorrido circular del patrón en O de los recorridos superiores y el tramo vertical del patrón en T.", temario(34)]
    ]
  },
  "presion-positiva": {
    source: temario(32),
    cards: [
      ["defensiva", "¿Por dónde circula el flujo en la VPP defensiva según el temario?", "Por las zonas o recorridos que se quieren proteger, evitando el foco del incendio."],
      ["ofensiva", "¿Qué riesgo aparece cuando el flujo de la VPP ofensiva atraviesa el foco?", "El aire aportado al incendio puede intensificarlo. El resultado depende de la trayectoria del flujo y de la coordinación con la extinción."],
      ["progresion", "¿Qué condiciones del flujo destaca el temario para la progresión?", "El foco queda aislado del itinerario y hay una salida de gases diferenciada de la entrada de aire. Se vigilan ambas aberturas.", temario(35)]
    ],
    quiz: [
      ["¿Qué distingue el recorrido de la VPP defensiva del de la ofensiva?", ["La defensiva usa espuma y la ofensiva usa agua.", "En la defensiva se protege el recorrido evitando el foco. En la ofensiva el flujo atraviesa la zona del incendio.", "Solo la ofensiva requiere conocer la salida de gases.", "La diferencia depende de la superficie impresa en el plan."], 1, "La trayectoria del aire con respecto al foco distingue ambos planteamientos."],
      ["¿Qué objetivo tiene la presión positiva para la progresión que describe la p. 35?", ["Aumentar el caudal de la línea de ataque.", "Aspirar espumógeno.", "Retirar humo de un itinerario de acceso con el foco aislado de ese recorrido.", "Formar una manta sobre un derrame."], 2, "Busca mejorar las condiciones en pasillos o escaleras mediante un recorrido de aire con entrada y salida diferenciadas.", temario(35)],
      ["¿Qué puede restar eficacia a la presión positiva contra la propagación?", ["La existencia de una salida identificada.", "La protección de un recorrido independiente.", "La separación del sector protegido respecto al foco.", "El mal sellado de la nave y un flujo natural que se opone al del ventilador."], 3, "Las fugas dificultan mantener la diferencia de presión. Una corriente opuesta puede desviar o contrarrestar el flujo previsto.", temario(35)]
    ]
  }
};
