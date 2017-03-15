# FORMULARIO XML (Andreu Juan Ferrá)

A MEJORAR
---------
* Historia y Normas no debe modificar despazar todo el div, mejor hacer un zoom o algo similar que no desplace todo
* Mejor mostrar el texto de las soluciones en vez de el número de la solución correcta
* En js cuando se cambian los colores de la intro y las normas dependiendo del seleccionado, mejor cargarle un css desde el javascript: http://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
* Evitar tembleque de la pantalla: css normal: margin 1px, border:0px.... hover: margin:0px, border:1px

INTRODUCCIÓN
------------
En este proyecto nos basamos en coger la información almacenada en un fichero XML y visualizarla. En este caso en fichero .xml es un cuestionario. 
He extraído su información y la he visualizado para hacerlo funcional.

En el proyecto debíamos hacer una web representando a una universidad inventada, en mi caso: "UOG - UNIVERSITY OF GAMES", la cual presenta 
un formulario cuyo contenido esta basado en videojuegos.

Previsualización: https://rawgit.com/SOSandreu1095/FormularioXML/master/index.html


CONTENIDO DEL PROYECTO
----------------------

* HTML
  * index.html: Html donde se encuentra la estructura básica de la web
* CSS
  * d.css: Css encargado de colocar los elementos en una posición adecuada para una pantalla en modo horizontal
  * c.css: Css encargado de colocar los elementos en una posición adecuada para una pantalla en modo vertical
    * _Pasar de un css a otro lo hara mediante media query dependiendo del tamaño de la pantalla_
   * _Observaciones: El css no valida, ya que el degradado no me lo detecta correctamente, sin embargo debo dejar ese código para que el degradado salga correctamente_ 
* JS
  * js.js: Javascript donde se encuentran todas las funcionalidades para el correcto funcionamiento de la página, como extraer los datos del XML, la corrección, etc.
* IMG
  * Conjunto de imágenes usadas para la web.
  * Proyecto .psd de photoshop para facilitar una futura modificación en el logo
    * _Todas las imágenes han sido recortadas para un tamaño mínimo considerable, que no afecte a la calidad de la imagen al ser visualizada por pantalla_
    * _Además las imágenes han sido pasadas por https://tinypng.com/ para reducir su tamaño todavía más_
    * _La imagen desarrollada en photoshop es el logo de la universidad, compuesta por 2 imagenes optimizadas sacadas de google imágenes. No he conseguido poner un url indicando el autor de dichas imagenes, sin embargo espero que no suponga un porblema ya que es de uso académico y no comercial_
* XML
  * preguntas.xml: Documento .xml donde se encuentra toda la información del formulario
  * questions.dtd: Documento .dtd que valida el archivo .xml
  * questions.xsd: Documento .xsd (Schema) que valida el archivo .xml
    
Tareas obligatorias a desarrollar:
---------------------------------
* Creada página web con 10 preguntas
* 5 tipos distintos de elementos en el formulario
  * Radio
  * Text
  * Checkbox
  * Select simple
  * Select múltiple
* Creado fichero .xml con toda la información necesaria
* Creado javascript que da una solución automatizada a la creación y corrección del cuestionario
* Creada aplicación web compuesta por (HTML, CSS, JS, XML) que presenta un exáment de una universidad inventada, con el logo y sus datos de manera adecuada para cualquier dispositivo elegante y se puede corregir


Funcionalidades adicionales principales
---------------------------------------
* PÁGINA PRINCIPAL: La web no empieza en el cuestionario, sino que hay un primera pantalla principal donde podemos encontrar lo siguiente:
  * HISTORIA: Realiza una breve introducción sobre la creación de la universidad
  * NORMAS: Apartado que informa al usuario que normas se van a seguir en la realización del test y corrección del test
  * INICIAR TEST: Botón que permite al usuario empezar el test cuando se encuentre preparado
    * _Pulsar el botón despliega una confirmación para advertir al usuario de que el test va a empezar, y si está seguro que desea continuar_

* TIMER: Creado un timer de 3 minutos (180 segundos) para resolver el test
  * El timer empieza en un color verde y a medida de que el tiempo va bajando pasa por distintos colores hasta llegar al rojo cuando queden 30 segundos restantes
  * El timer esta en una posición fija en la pantalla, de tal manera que lo podemos ver constantemente en la realización del test
  * Al finalizar el timer se corregirá el test automáticamente, sin tener en cuenta que hubiese preguntas sin contestar

* ASEGURARSE DE QUE TODAS LAS RESPUESTAS ESTEN CONTESTADAS: Al pulsar en el botón de corregir
  * En caso de que falte alguna pregunta por contestar se avisará al usuario
  * La página hará focus al elemente que falta por contestar para simplificarle la vida al usuario y ahorrarle tiempo del test
  
* MUESTRA DE LAS SOLUCIONES
 * Al corregir no solo se muesta si es correcta o incorrecta la pregunta, también se muestra las soluciones de cada pregunta para que el usuario pueda comprobar sus respuestas más fácilmente

Funcionalidades adicionales secundarias
---------------------------------------
En este caso son pequeñas cosas y funciones que he creado para evitar errores y facilitar lo máximo posible la interacción entre el usuario y la web

* ANIMACIONES / HOVER
 * Realizado un hover rotatativo para ambos logos en la parte superior (una tontería que es lo que más me gusta de la web)
 * Hover en los botones

* SCROLL AL INICIAR EL TEST
  * Al iniciar el test la pantalla hace scroll hacia arriba de la página para ir hasta la primera pregunta
  * No es muy destacable, pero en caso de que la pantalla principal fuese muy larga evitaríamos problemas de mostrar el test por la mitad y tener que obligar al usuario a hacer scroll

* SCROLL PARA MOSTRAR LA CORRECCIÓN
  * La corrección sale al final de la página, y para que sea visualizada automáticamente por pantalla he realizado un scroll por javascript hasta el final de la página

* REGRESAR A LA PÁGINA PRINCIPAL
  * Una vez realizado el test y mostrada la corrección el test, desaparece el botón de corregir y sale un nuevo botón para volver a la pantalla principal

* RESET DEL FORMULARIO
  * Si ya se ha realizado el test, se ha vuelto a la pantalla principal y se desea volver a hacer, es necesario hacer un reset de lo que el usuario ya hubiese marcado anteriormente, para que al iniciar el test otra vez no le salgan las respuestas marcadas anteriormente
  * También una reset del tiempo anterior a unos nuevos 180 segundos

**Este documento, y el proyecto, es susceptible de sufrir modificaciones sin previo aviso**
