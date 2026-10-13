from pathlib import Path
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
root = Path(__file__).resolve().parents[2]
source = json.loads((root / 'tmp/forestales-test/test-3-source.json').read_text(encoding='utf-8'))

# Explanations refer to the supplied academy key. Reviews distinguish source
# discrepancies from the answer used for scoring this particular questionnaire.
notes = [
    {
        'block': 'prediccion', 'page': 53,
        'explanation': 'La cuarta generación incorpora la interfaz urbano-forestal: edificaciones y vegetación forestal entran en contacto y el incendio puede comprometer simultáneamente el monte y las viviendas. Esa interacción es la pista que pide el enunciado.',
        'contrast': 'Segunda → rapidez; tercera → copas y convección; cuarta → interfaz; quinta → simultaneidad de grandes incendios. Tu imagen mental: la Oca (4) mete un bosque dentro de una ciudad.'
    },
    {
        'block': 'peligro', 'page': None,
        'explanation': 'El umbral de este test es menos de 1 ha de superficie afectada. Por ejemplo, 0,8 ha corresponde a un conato; 1 ha exacta ya no satisface la expresión «inferior a 1 ha». Una hectárea equivale a 10.000 m².',
        'contrast': 'Fíjate en el signo: conato < 1 ha. No lo confundas con los cientos de hectáreas que se usan para identificar un gran incendio forestal.'
    },
    {
        'block': 'peligro', 'page': 52,
        'explanation': 'La academia marca superficie superior o igual a 500 ha. El número que discrimina entre las opciones es 500, frente a 50, 100 y 10. Conviene conservar también el matiz del límite, porque el test escribe ≥ 500 ha y los apuntes utilizan > 500 ha.',
        'contrast': 'Conato → menos de 1 ha; GIF → referencia de 500 ha. La superficie afectada no indica por sí sola la duración, intensidad o dificultad de extinción.',
        'review': {
            'title': '500 ha: atención al signo del umbral',
            'text': 'Se puntúa con ≥ 500 ha porque es la clave compartida. La p. 52 de los apuntes y el informe actual de MITECO hablan de superar 500 ha. No conviertas el «igual» del test en una definición universal; si se pregunta por el límite exacto, sigue la fuente indicada.',
            'links': [{'title': 'MITECO · Definición de GIF en el informe de incendios', 'url': 'https://www.miteco.gob.es/content/dam/miteco/es/biodiversidad/temas/incendios-forestales/estimacion_provisional.html'}]
        }
    },
    {
        'block': 'tipos', 'page': 8,
        'explanation': 'La respuesta señalada por la academia es gayuba. El concepto que sí explica el temario es fuego de subsuelo: se propaga por la materia orgánica situada bajo la superficie, puede permanecer poco visible y durar días o semanas; se cita la turba como ejemplo.',
        'contrast': 'El estrato donde arde es lo que define el tipo de fuego. La hojarasca situada sobre el suelo se relaciona con superficie; el nombre de una especie, por sí solo, no demuestra una combustión subterránea.',
        'review': {
            'title': 'Asociación específica del test: gayuba',
            'text': 'La página de subsuelo no menciona gayuba ni compara estas cuatro opciones. Se conserva la clave de academia, pero no se presenta como una preferencia botánica demostrada por los apuntes. Para comprenderlo, recuerda materia orgánica bajo la superficie; para este test concreto, gayuba.'
        }
    },
    {
        'block': 'tipos', 'page': 10, 'extraPages': [9],
        'explanation': 'Copas pasivo es la clave en la clasificación de CEIS / Arkaute que sigue esta pregunta. El fuego de las copas avanza acoplado al de superficie: depende de él para mantener la propagación. La pista decisiva es «acoplado» y «no independiente».',
        'contrast': 'En esa misma clasificación, antorcheo afecta de forma intermitente a árboles aislados y copas activo avanza de manera independiente del fuego superficial.',
        'review': {
            'title': 'El nombre cambia según el manual',
            'text': 'Ricardo Vélez llama copas activo al avance acoplado y copas independiente al que se separa del de superficie. CEIS / Arkaute usa pasivo para el acoplado y activo para el independiente. El comportamiento es la referencia común; no memorices el nombre sin su clasificación.'
        }
    },
    {
        'block': 'anatomia', 'page': 7,
        'explanation': 'La bolsa o entrante es una zona de combustible sin quemar que penetra entre el cuerpo principal del incendio y uno de sus dedos o lenguas. Es una concavidad del perímetro, tal como muestra el dibujo de las partes del incendio.',
        'contrast': 'Dedo o lengua → saliente de fuego. Bolsa o entrante → hueco sin quemar entre salientes. Isla → combustible sin quemar rodeado por el área quemada; no es simplemente cualquier entrante.'
    },
    {
        'block': 'anatomia', 'page': 18,
        'explanation': 'Pavesas es el nombre de las partículas vegetales incandescentes o inflamadas que pueden ser transportadas a distancia por el aire. Al caer sobre combustible receptivo por delante del frente pueden originar focos secundarios separados del incendio principal.',
        'contrast': 'La pregunta incluye la proyección y el transporte a distancia: esa es la pista para elegir pavesas frente a términos generales como brasas o chispas.'
    },
    {
        'block': 'meteorologia', 'page': 20,
        'explanation': 'La humedad absoluta expresa la masa de vapor de agua por unidad de volumen de aire, normalmente en g/m³. Por ejemplo, 8 g de vapor en 1 m³ de aire representan una humedad absoluta de 8 g/m³.',
        'contrast': 'Relativa → comparación con la saturación a igual temperatura, en %. Punto de rocío → temperatura a la que se alcanza la saturación al enfriar. Absoluta → masa de vapor por volumen.'
    },
    {
        'block': 'meteorologia', 'page': None,
        'explanation': 'La clave es fuerza de Coriolis, que interviene desviando la trayectoria del aire en movimiento en el sistema de referencia terrestre. Está vinculada a la rotación de la Tierra; el gradiente de presión impulsa el movimiento del aire.',
        'contrast': 'Las diferencias térmicas contribuyen a crear diferencias de presión. Coriolis desvía el movimiento: no es otra causa independiente de la rotación terrestre.',
        'review': {
            'title': 'El enunciado enumera dos veces una misma relación',
            'text': 'La pregunta separa «rotación de la Tierra» y «Coriolis», pero el efecto Coriolis deriva de esa rotación. AEMET explica que curva la trayectoria del viento. Elige Coriolis entre estas opciones conservando esa relación física.',
            'links': [{'title': 'AEMET · Viento y efecto Coriolis', 'url': 'https://aemetblog.es/2017/08/05/estimacion-instantanea-del-tiempo-regla-de-los-vientos-cruzados/'}]
        }
    },
    {
        'block': 'meteorologia', 'page': None,
        'explanation': '1 nudo equivale exactamente a 1,852 km/h: es una milla náutica, de 1.852 metros, recorrida en una hora. Para pasar de nudos a km/h multiplica por 1,852; por ejemplo, 10 nudos son 18,52 km/h.',
        'contrast': 'Imagen mental con tu casillero: una Tea (1) hace un NUDO en un Chal (85) que arrastra a Noé (2). Recupera 1 | 85 | 2 → 1,852 y añade km/h. La coma va después del 1; no son 1.852 km/h.'
    },
    {
        'block': 'meteorologia', 'page': 18,
        'explanation': 'Un viento de 270° procede del oeste. La dirección meteorológica indica de dónde viene el viento y se mide desde el norte en sentido horario: 0° o 360° norte, 90° este, 180° sur y 270° oeste.',
        'contrast': 'No confundas procedencia con destino: un viento del oeste se dirige hacia el este. Suroeste corresponde a 225° y sureste a 135°.'
    },
    {
        'block': 'meteorologia', 'page': 18,
        'explanation': 'La descripción corresponde al Foehn: viento descendente cálido y seco a sotavento de una montaña. Al descender, el aire se comprime y aumenta su temperatura; ese ambiente puede favorecer la desecación del combustible y agravar la propagación.',
        'contrast': 'La inversión térmica es una distribución de temperatura con la altura, no el nombre de este viento. La pista conjunta es descenso desde zonas altas + calentamiento + sequedad.'
    },
    {
        'block': 'meteorologia', 'page': None,
        'explanation': 'Es una inversión por subsidencia: el aire desciende en un entorno anticiclónico, se comprime y se calienta, formando una capa cálida y estable por encima de aire más frío. El hundimiento de aire de niveles medios es la pista decisiva.',
        'contrast': 'La inversión de radiación nace del enfriamiento del suelo, normalmente nocturno. Aquí se describe calentamiento del aire al descender, no enfriamiento de la superficie.',
        'review': {
            'title': 'Subsidencia y radiación: dos mecanismos distintos',
            'text': 'AEMET distingue la inversión de subsidencia, asociada al descenso de aire en anticiclones, de la que se forma por enfriamiento nocturno cerca del suelo. La foto de inversión del temario se centra en el valle; no sirve por sí sola como desarrollo de esta definición más específica.',
            'links': [{'title': 'AEMET · Tipos de inversión térmica', 'url': 'https://aemetblog.es/2020/10/04/ya-conoces-nuestro-meteoglosario-visual/'}]
        }
    },
    {
        'block': 'prediccion', 'page': None,
        'explanation': 'Tormenta ígnea es el sinónimo que marca la academia para tormenta de fuego. «Ígneo» significa relacionado con el fuego. Asocia el término a la intensa interacción entre la combustión y los movimientos de aire generados por su calor.',
        'contrast': 'Aunque la convección participa en ese comportamiento, «tormenta de convección» no es el sinónimo que solicita este test. La pregunta busca el nombre equivalente, no un mecanismo de transferencia de calor.'
    },
    {
        'block': 'meteorologia', 'page': None,
        'explanation': 'La opción es pyrocumulus, en español pirocúmulos: nubes que se forman por la convección intensa asociada al calor de un incendio o una erupción. El aire asciende y, si alcanza condiciones de condensación, aparece la nube sobre la columna.',
        'contrast': 'No toda columna de humo es una nube. Un pirocúmulo tampoco implica necesariamente una tormenta; un desarrollo mayor puede dar lugar a un pirocumulonimbo.',
        'review': {
            'title': 'Nube formada por el incendio, no solo humo',
            'text': 'AEMET explica que las nubes flammagenitus, conocidas como pirocúmulos, son nubes auténticas cuya formación depende de la energía y humedad asociadas al fuego. La opción conserva la grafía pyrocumulus del cuestionario.',
            'links': [{'title': 'AEMET · Pirocúmulos y nubes flammagenitus', 'url': 'https://aemetblog.es/2017/07/28/los-nuevos-tipos-de-nubes-reconocidos-por-la-organizacion-meteorologica-mundial-omm/'}]
        }
    },
    {
        'block': 'combustibles', 'page': 13,
        'explanation': '35 mm está dentro del intervalo de 25–75 mm, que el temario clasifica como combustible mediano y relaciona con una retardación de 100 horas. Basta situar el diámetro entre los dos límites de esa categoría.',
        'contrast': 'El diámetro se aplica a la partícula combustible, por ejemplo una rama, no al tamaño completo del matorral. En los apuntes: < 5 mm fino; 5–25 mm ligero; 25–75 mm mediano; > 75 mm grande.'
    },
    {
        'block': 'combustibles', 'page': 13,
        'explanation': 'El nombre buscado es tiempo de retardo o retardación. Describe la rapidez con la que un combustible muerto responde a cambios de humedad ambiental. Cuanto menor es ese tiempo, más deprisa se aproxima su humedad a la de equilibrio.',
        'contrast': 'Una unidad de retardo corresponde aproximadamente al 63 % del cambio necesario hacia el equilibrio, no a alcanzar todo el equilibrio. Tampoco iguala dos porcentajes distintos: humedad del combustible y humedad relativa del aire.',
        'review': {
            'title': 'La definición del test está abreviada',
            'text': 'El enunciado dice «equilibrar», pero la definición precisa de los apuntes utiliza aproximadamente el 63 % de la diferencia entre humedad inicial y de equilibrio. Recuerda: retardo = velocidad de ajuste; un tiempo de retardo ≠ equilibrio completo.'
        }
    },
    {
        'block': 'combustibles', 'page': 12,
        'explanation': 'En los trece modelos del esquema de Rothermel, el grupo de matorral comprende los modelos 4, 5, 6 y 7. La pregunta pide el grupo completo, no la descripción particular de uno de sus modelos.',
        'contrast': 'Recupera los intervalos en orden: 1–3 pastos; 4–7 matorral; 8–10 hojarasca bajo arbolado; 11–13 restos de corta y operaciones selvícolas.'
    },
    {
        'block': 'combustibles', 'page': 12,
        'explanation': 'La academia señala el modelo 7 y utiliza como pista los pinares con sotobosque de especies inflamables. La tabla resumida del temario describe el 7 como matorral muy inflamable; sin embargo, el dato aislado de matorral de más de 2 m aparece en el modelo 4.',
        'contrast': 'Modelo 4 → matorral muy denso de más de 2 m. Modelo 5 → denso y verde de menos de 1 m. Modelo 6 → parecido al 5, más alto e inflamable, con restos. Modelo 7 → muy inflamable.',
        'review': {
            'title': 'Enunciado con pistas de dos modelos',
            'text': 'Se conserva el 7 como clave de este test. No memorices «más de 2 metros = 7»: la p. 12 asigna expresamente el matorral muy denso de esa altura al 4. El test combina la altura con otra descripción; para una pregunta distinta, comprueba la estructura completa del combustible.'
        }
    },
    {
        'block': 'magnitudes', 'page': 15,
        'explanation': 'La academia marca pino rodeno como la especie que no pertenece al grupo de muy inflamables durante casi todo el año. En los apuntes, pino pinaster figura en el grupo de verano; eucalipto y encina sí están en el grupo de todo el año.',
        'contrast': 'El romero también aparece en el grupo de verano de la p. 15. Por tanto, esa tabla permite excluir del grupo de todo el año tanto al pino como al romero: la pregunta no tiene una única respuesta compatible con esos apuntes.',
        'review': {
            'title': 'Dos respuestas posibles al contrastar los apuntes',
            'text': 'La puntuación sigue pino rodeno, la clave recibida. La tabla del temario no respalda que romero sea un distractor incorrecto: también lo coloca en verano. Conserva la clasificación del material y trata esta pregunta como una discrepancia pendiente de aclaración con la academia.'
        }
    },
    {
        'block': 'magnitudes', 'page': 15,
        'explanation': 'Madroño es la respuesta marcada: los apuntes lo incluyen, junto con enebro y cedros, entre las especies de inflamabilidad moderada o poca. Por ello no pertenece al grupo de muy inflamables solo en verano.',
        'contrast': 'El alcornoque sí figura en verano. Pero el tomillo aparece en el grupo de todo el año, de modo que tampoco encaja literalmente en «solo durante el verano». El espliego no está en la lista resumida compartida.',
        'review': {
            'title': '«Solo en verano» hace ambiguo el descarte',
            'text': 'Se puntúa madroño según la academia. Con el cuadro de la p. 15, tomillo también queda fuera del grupo exclusivo de verano, aunque sea muy inflamable todo el año. La clave del test no basta para cambiar de grupo al tomillo ni para completar una clasificación del espliego.'
        }
    },
    {
        'block': 'magnitudes', 'page': 15,
        'explanation': 'La academia señala frambuesa como la especie que no es medianamente inflamable. La tabla de los apuntes sí permite reconocer madroño y enebro en el grupo moderado o poco inflamable, pero no incluye frambuesa entre las especies enumeradas.',
        'contrast': 'Carrasca es un nombre común de la encina, que el material sitúa entre las muy inflamables todo el año. Por ello tampoco puede justificarse, con esa tabla, que carrasca sea una opción medianamente inflamable.',
        'review': {
            'title': 'La clave no resuelve la opción «carrasca»',
            'text': 'Se conserva frambuesa para la corrección del cuestionario. La guía botánica del Ayuntamiento de Zaragoza identifica encina y carrasca como nombres de Quercus ilex. Al compararlo con la p. 15 aparece otra exclusión posible; no deduzcas una clasificación universal de frambuesa a partir de esta pregunta.',
            'links': [{'title': 'Ayuntamiento de Zaragoza · Encina / carrasca', 'url': 'https://www.zaragoza.es/sede/portal/medioambiente/infraestructura-verde/parques-jardines/especies/servicio/especie/66'}]
        }
    },
    {
        'block': 'combustibles', 'page': None,
        'explanation': 'Arbustos ralos es la asociación que utiliza este test para humo gris café. La corrección compartida permite conocer la clave de academia, pero el resumen fotografiado no aporta una tabla que justifique ese emparejamiento entre color y vegetación.',
        'contrast': 'Úsalo como asociación de este cuestionario. Un color de humo aislado no permite identificar de manera inequívoca una especie o formación vegetal.',
        'review': {
            'title': 'Color del humo: clave del cuestionario',
            'text': 'No se ha localizado esta equivalencia en las páginas del temario. Se conserva gris café → arbustos ralos como respuesta de academia, sin convertirla en una regla general de identificación del combustible.'
        }
    },
    {
        'block': 'combustibles', 'page': None,
        'explanation': 'Pinares es la respuesta que marca este tercer test para el humo gris negro. Memoriza el emparejamiento únicamente como clave del cuestionario: la corrección recibida no demuestra que todo pinar produzca humo de ese color.',
        'contrast': 'En Forestales 2, la pregunta 7 asociaba los pinares a humo amarillo. Ambos test usan asociaciones diferentes, por lo que no ofrecen una correspondencia única entre pinares y color.',
        'review': {
            'title': 'Diferencia con Forestales 2 · pregunta 7',
            'text': 'Forestales 2: pinares → amarillo. Forestales 3: gris negro → pinares. Se mantienen las claves recibidas para practicar cada test, pero no se unifican en una regla física. Los apuntes compartidos no incluyen una tabla que resuelva estas asociaciones.'
        }
    },
    {
        'block': 'topografia', 'page': 16,
        'explanation': 'La pendiente es el factor topográfico que el temario destaca como más importante. Al avanzar ladera arriba, las llamas quedan más cerca del combustible situado por delante y favorecen su precalentamiento por radiación y convección.',
        'contrast': 'Exposición y configuración también afectan al comportamiento, pero el texto no les atribuye la misma importancia en esta comparación. Pendiente → inclinación; exposición → orientación de la ladera.'
    },
    {
        'block': 'bases', 'page': 6,
        'explanation': 'La academia elige convección: el calor se transmite mediante el movimiento de aire y gases calientes. Las corrientes ascendentes y el transporte de energía hacia otros combustibles explican su importancia en el comportamiento de un incendio forestal.',
        'contrast': 'Conducción → transferencia a través de la materia sin transporte global de ella. Radiación → energía transmitida por ondas. Convección → transporte por movimiento del fluido.',
        'review': {
            'title': 'La eficacia depende de las condiciones',
            'text': 'Convección es la clave de este test. La pregunta no fija viento, pendiente, disposición del combustible ni zona del incendio; por ello no demuestra que este mecanismo domine siempre. Los apuntes explican también el papel de la radiación en el precalentamiento.'
        }
    },
    {
        'block': 'anatomia', 'page': 7,
        'explanation': 'Una isla es una porción de combustible que queda sin quemar dentro del área afectada, rodeada por terreno quemado. La imagen útil es un islote de vegetación que permanece intacto en medio de la superficie recorrida por el incendio.',
        'contrast': 'La bolsa o entrante se introduce desde el borde entre dedos o lenguas. Para distinguirlas, pregunta si la zona está rodeada por lo quemado (isla) o si forma una concavidad abierta del perímetro (bolsa).'
    },
    {
        'block': 'tipos', 'page': 10, 'extraPages': [9, 33],
        'explanation': 'Copas activo es la clave de la clasificación CEIS / Arkaute seguida por este test: el frente avanza por las copas independientemente de lo que ocurre en superficie. Contrástalo con la pregunta 5 de este mismo test: acoplado = pasivo.',
        'contrast': 'Antorcheo es la inflamación intermitente de árboles aislados. La opción copas independiente describe el comportamiento y es el nombre utilizado por Vélez, pero la academia puntúa aquí copas activo.',
        'review': {
            'title': '«Activo» e «independiente» según la clasificación',
            'text': 'El enunciado no nombra manual y ofrece dos términos que se usan para este comportamiento en fuentes distintas. CEIS / Arkaute: activo; Vélez: independiente. Se respeta la clave de academia, con esta aclaración para evitar trasladarla a cualquier clasificación.'
        }
    },
    {
        'block': 'bases', 'page': None,
        'explanation': 'La academia marca «todos son incendios forestales». La intención del ejercicio es reconocer categorías incluidas en el concepto legal de monte: terrenos yermos, roquedos y arenales, infraestructuras a su servicio y determinados terrenos agrícolas abandonados.',
        'contrast': 'Monte e incendio forestal son conceptos distintos. Que un lugar tenga consideración de monte no convierte cualquier fuego que lo afecte en forestal; importan el combustible y la propagación sin control.',
        'review': {
            'title': 'La ley exige condiciones que el test omite',
            'text': 'El artículo 5 de la Ley 43/2003 exige que el terreno agrícola abandonado cumpla condiciones y plazos autonómicos y muestre signos inequívocos de estado forestal. El artículo 6.k vincula incendio forestal a fuego sin control sobre combustibles forestales en el monte. La clave de academia simplifica estos requisitos.',
            'links': [{'title': 'BOE · Ley de Montes, artículo 5', 'url': 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21339#a5'}, {'title': 'BOE · Definición de incendio forestal, artículo 6', 'url': 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21339#a6'}]
        }
    },
    {
        'block': 'anatomia', 'page': 7,
        'explanation': 'La cola suele situarse cerca del origen del incendio: es su parte posterior, opuesta a la dirección de avance principal de la cabeza. La palabra «suele» importa, porque la forma y la dirección del avance pueden cambiar con el viento y el terreno.',
        'contrast': 'Un punto de anclaje es una referencia elegida para iniciar o asegurar trabajos de extinción; no define por sí solo la cola. Los focos secundarios están separados del incendio principal.'
    }
]

assert len(source) == len(notes) == 30
new = []
for s, note in zip(source, notes):
    n = s['number']
    new.append({
        'id': f'academia-forestales-3-{n:02d}',
        'origin': 'academia', 'test': 'academia-3',
        'sourceTest': 'Incendios forestales 3',
        'sourceLabel': 'Academia · Forestales 3',
        'q': s['q'].replace('un gran incendio forestas', 'un gran incendio forestal'),
        'options': s['options'], 'correct': s['correct'],
        'sourceNumber': n, **note
    })

target = root / 'index-for.html'
original = target.read_text(encoding='utf-8')
match = re.search(r'const quizdata\s*=\s*(\[.*?\]);', original, re.S)
assert match
previous = json.loads(match.group(1))
assert len(previous) == 100, 'Expected the existing 100 questions, without a third import'
(root / 'tmp/forestales-test/index-for.before-test-3.html').write_text(original, encoding='utf-8')

bank = previous + new
result = original[:match.start(1)] + json.dumps(bank, ensure_ascii=False) + original[match.end(1):]
replacements = {
    '100 preguntas: las 40 originales y 60 de los dos test de la academia.': '130 preguntas: las 40 originales y 90 de los tres test de la academia.',
    'Todas las preguntas (100)': 'Todas las preguntas (130)',
    'Los dos test de academia (60)': 'Los tres test de academia (90)',
    '<option value="academia-2">Academia · Forestales 2 (30)</option>': '<option value="academia-2">Academia · Forestales 2 (30)</option><option value="academia-3">Academia · Forestales 3 (30)</option>'
}
for old, replacement in replacements.items():
    assert result.count(old) == 1, f'Unexpected markup for {old}'
    result = result.replace(old, replacement)

(root / 'forestales-assets/test-academia-3.json').write_text(json.dumps(new, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
target.write_text(result, encoding='utf-8')
print(f'Added {len(new)} questions; {len(bank)} total; {sum("review" in q for q in new)} with contextual clarifications.')
