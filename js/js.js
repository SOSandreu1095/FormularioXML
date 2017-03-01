//VARIABLES
var formElement = null;
var nota = 0.0;
var time = 2; //Segundos para hacer el test
var timer; //Timer para el intervalo

//2 Radio, 2 Text, 2 Checkbox, 2 Select, 2 Mulltiple
var answRadio1;
var answRadio2;
var answText1;
var answText2;
var answCheck1 = [];
var answCheck2 = [];
var answSelect1;
var answSelect2;
var answMult1 = [];
var answMult2 = [];




window.onload = function () {

    formElement = document.getElementsByTagName("form")[0];

    //Cabecera
    document.getElementById("historia").onclick = function(){
        document.getElementById("historia").style.background = "#D20808";
        document.getElementById("historia").style.color = "yellow";
        document.getElementById("normas").style.color = "white";
        document.getElementById("normas").style.background = "#43751F";
        document.getElementById("lNormas").style.display = "none";
        document.getElementById("pHistoria").style.display = "table";
        document.getElementById("tInt").innerHTML = "UOG - INTRODUCCIÓN"
    }

    document.getElementById("normas").onclick = function(){
        document.getElementById("normas").style.background = "#D20808";
        document.getElementById("normas").style.color = "yellow";
        document.getElementById("historia").style.color = "white";
        document.getElementById("historia").style.background = "#43751F";
        document.getElementById("pHistoria").style.display = "none";
        document.getElementById("lNormas").style.display = "block";
        document.getElementById("tInt").innerHTML = "UOG - NORMATIVA"
    }

    //Boton empezar
    document.getElementById("start").onclick = function () {
        if(confirm("¿Estas seguro que deseas empezar el test? Recomendamos ver las normas")){
            empezarTest();
            window.scrollTo(0,0);
        }
    }

    //CORREGIR AL APRETAR EL BOTON
    formElement.onsubmit = function () {

        if (comprobarContestadas()) {
            if (confirm("¿Seguro que desea corregir?")) {
                inicializar();
                corregir();
                presentarNota();
                clearInterval(timer);
                document.getElementById("timer").style.display = "none";
            }
        }
        return false;
    }

    //LEER XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://rawgit.com/SOSandreu1095/FormularioXML/master/xml/preguntas.xml", true);
    xhttp.send();

}


function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML;



    //RADIO ------------------------------------------------------------
    var tituloRadio = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    var opcionesRadio = [];
    var nopt = xmlDoc.getElementById("jklm_001").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesRadio[i] = xmlDoc.getElementById("jklm_001").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadio(tituloRadio, "q1", opcionesRadio, "radioDiv1");
    //ANSWER
    answRadio1 = xmlDoc.getElementById("jklm_001").getElementsByTagName('answer')[0].innerHTML;

    //-------------------------------------------

    var tituloRadio = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    var opcionesRadio = [];
    var nopt = xmlDoc.getElementById("jklm_002").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesRadio[i] = xmlDoc.getElementById("jklm_002").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadio(tituloRadio, "q2", opcionesRadio, "radioDiv2");
    //ANSWER
    answRadio2 = xmlDoc.getElementById("jklm_002").getElementsByTagName('answer')[0].innerHTML;







    //TEXT --------------------------------------------------------------
    var tituloText = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    ponerDatosText(tituloText, "q3");
    //ANSWER
    answText1 = xmlDoc.getElementById("jklm_003").getElementsByTagName('answer')[0].innerHTML;

    tituloText = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    ponerDatosText(tituloText, "q4");
    //ANSWER
    answText2 = xmlDoc.getElementById("jklm_004").getElementsByTagName('answer')[0].innerHTML;







    //CHECKBOX ----------------------------------------------------------
    var tituloCheckbox = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesCheckbox = [];
    var nopt = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesCheckbox[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckbox(tituloCheckbox, "q5", opcionesCheckbox, "checkBoxDiv1");
    //ANSWER
    var nres = xmlDoc.getElementById("jklm_005").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        answCheck1[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('answer')[i].innerHTML;
    }

    //---------------------------------------------------------

    var tituloCheckbox = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    var opcionesCheckbox = [];
    var nopt = xmlDoc.getElementById("jklm_006").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesCheckbox[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckbox(tituloCheckbox, "q6", opcionesCheckbox, "checkBoxDiv2");
    //ANSWER
    var nres = xmlDoc.getElementById("jklm_006").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        answCheck2[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('answer')[i].innerHTML;
    }






    //SELECT ------------------------------------------------------------
    var tituloSelect = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesSelect = [];

    var nopt = xmlDoc.getElementById("jklm_007").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_007").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q7", opcionesSelect, 0);
    //ANSWER
    answSelect1 = xmlDoc.getElementById("jklm_007").getElementsByTagName('answer')[0].innerHTML;

    //-------------------------------------------------------------------------------------

    tituloSelect = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    opcionesSelect = [];

    var nopt = xmlDoc.getElementById("jklm_008").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_008").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q8", opcionesSelect, 1);
    //ANSWER
    answSelect2 = xmlDoc.getElementById("jklm_008").getElementsByTagName('answer')[0].innerHTML;









    //MULTIPLE ----------------------------------------------------------
    var tituloMultiple = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    var opcionesMultiple = [];
    var nopt = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesMultiple[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultiple(tituloMultiple, "q9", opcionesMultiple, 2);
    //ANSWER
    var nres = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        answMult1[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer')[i].innerHTML;
    }

    //------------------------------------------------------

    var tituloMultiple = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesMultiple = [];
    var nopt = xmlDoc.getElementById("jklm_010").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesMultiple[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultiple(tituloMultiple, "q10", opcionesMultiple, 3);
    //ANSWER
    var nres = xmlDoc.getElementById("jklm_010").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        answMult2[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('answer')[i].innerHTML;
    }
}


/**************************************************************************
                        METODOS INSERTAR DATOS
***************************************************************************/


//RADIO
function ponerDatosRadio(tituloRadio, IDposicion, opciones, divID) {
    document.getElementById(IDposicion).innerHTML = tituloRadio;
    var radioContainer = document.getElementById(divID);

    for (i = 0; i < opciones.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opciones[i];
        label.setAttribute("for", "rad_" + i + divID);
        input.id = "rad_" + i + divID;
        input.type = "radio";
        input.name = "rad" + divID;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    }

}

//TEXT
function ponerDatosText(tituloText, IDposicion) {
    document.getElementById(IDposicion).innerHTML = tituloText;
}

//CHECKBOX
function ponerDatosCheckbox(tituloCheckbox, IDposicion, opciones, divID) {
    document.getElementById(IDposicion).innerHTML = tituloCheckbox;
    var checkBoxContainer = document.getElementById(divID);

    for (i = 0; i < opciones.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opciones[i];
        label.setAttribute("for", "check_" + i + divID);
        input.id = "check_" + i + divID;
        input.type = "checkbox";
        input.name = "check" + divID;
        checkBoxContainer.appendChild(input);
        checkBoxContainer.appendChild(label);
        checkBoxContainer.appendChild(document.createElement("br"));
    }
}

//SELECT
function ponerDatosSelect(tituloSelect, IDposicion, opciones, numSelect) {
    document.getElementById(IDposicion).innerHTML = tituloSelect;

    var select = document.getElementsByTagName("select")[numSelect];

    var option = document.createElement("option");
    option.text = "Elige una respuesta..."
    option.value = 0;
    select.options.add(option);
    for (i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.text = opciones[i];
        option.value = i;
        select.options.add(option);
    }
}

//MULTIPLE
function ponerDatosMultiple(tituloMultiple, IDposicion, opciones, numSelect) {
    document.getElementById(IDposicion).innerHTML = tituloMultiple;
    var select = document.getElementsByTagName("select")[numSelect];
    for (i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.text = opciones[i];
        option.value = i;
        select.options.add(option);
    }
}



//-----------------------------------------------------------------
//                            CORREGIR
//-----------------------------------------------------------------

function corregir() {
    document.getElementById("resultados").style.display = "block";
    addCorreccionHtml("RESULTADOS");

    corregirRadio("radradioDiv1", answRadio1, 1);
    corregirRadio("radradioDiv2", answRadio2, 2);

    corregirText("text1", answText1, 3);
    corregirText("text2", answText2, 4);

    corregirCheckbox("checkcheckBoxDiv1", answCheck1, 5);
    corregirCheckbox("checkcheckBoxDiv2", answCheck2, 6);

    corregirSelect("sel1", answSelect1, 7);
    corregirSelect("sel2", answSelect2, 8);

    corregirMultiple("mult1", answMult1, 9);
    corregirMultiple("mult2", answMult2, 10);

    window.scrollTo(0,document.body.scrollHeight);
}


function corregirRadio(divID, answer, numPregunta) {
    var f = formElement;
    var rad;
    var fin = false;

    switch (divID) {
        case "radradioDiv1":
            rad = f.radradioDiv1;
            break;
        case "radradioDiv2":
            rad = f.radradioDiv2;
            break;
    }

    for (i = 0; (i < rad.length) && !(fin); i++) {
        if (rad[i].checked) {
            fin = true;
            if (i == answer) {
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡CORRECTA!");
                nota += 1;
            } else {
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡INCORRECTA!");
            }
        }
    }
}


function corregirText(IDtext, answer, numPregunta) {
    var s = document.getElementById(IDtext).value;
    //Pasamos todo a minisculas para evitar conflictos
    s = s.toLowerCase();

    if (s == answer) {
        addCorreccionHtml(numPregunta + " --> ¡CORRECTA!");
        nota += 1;
    } else {
        addCorreccionHtml(numPregunta + " --> ¡INCORRECTA!");
    }
}


function corregirCheckbox(divID, answer, numPregunta) {
    // Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo
    // guarda en un array escorrecta[]
    var f = formElement;
    var escorrecta = [];
    var chk;

    switch (divID) {
        case "checkcheckBoxDiv1":
            chk = f.checkcheckBoxDiv1;
            break;
        case "checkcheckBoxDiv2":
            chk = f.checkcheckBoxDiv2;
            break;
    }

    for (i = 0; i < chk.length; i++) {  //"checkcheckBoxDiv1" es el nombre asignado a todos los checkbox
        if (chk[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < answer.length; j++) {
                if (i == answer[j]) escorrecta[i] = true;
            }
        }
    }
    //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    for (i = 0; i < chk.length; i++) {
        if (chk[i].checked) {
            if (escorrecta[i]) {
                nota += 1.0 / answer.length;  //dividido por el número de respuestas correctas   
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡CORRECTA!");
            } else {
                nota -= 1.0 / answer.length;  //dividido por el número de respuestas correctas   
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡INCORRECTA!");
            }
        }
    }
}

function corregirMultiple(IDmulti, answer, numPregunta) {
    var f = formElement;
    var escorrecta = [];
    var mult = document.getElementById(IDmulti);

    for (i = 0; i < mult.length; i++) {
        if (mult[i].selected) {
            escorrecta[i] = false;
            for (j = 0; j < answer.length; j++) {
                if (i == answer[j]) escorrecta[i] = true;
            }
        }
    }
    //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    for (i = 0; i < mult.length; i++) {
        if (mult[i].selected) {
            if (escorrecta[i]) {
                nota += 1.0 / answer.length;  //dividido por el número de respuestas correctas   
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡CORRECTA!");
            } else {
                nota -= 1.0 / answer.length;  //dividido por el número de respuestas correctas   
                addCorreccionHtml(numPregunta + "." + (i + 1) + " --> ¡INCORRECTA!");
            }
        }
    }
}


function corregirSelect(IDselect, answer, numPregunta) {
    var sel = document.getElementById(IDselect);
    if (sel.selectedIndex - 1 == answer) {
        addCorreccionHtml(numPregunta + " --> ¡CORRECTA!");
        nota += 1;
    } else {
        addCorreccionHtml(numPregunta + " --> ¡INCORRECTA!");
    }
}


function addCorreccionHtml(s) {
    var p = document.createElement("p");
    var node = document.createTextNode(s);
    p.appendChild(node);
    document.getElementById("resultados").appendChild(p);
}




function presentarNota() {
    nota = nota.toFixed(2);
    addCorreccionHtml("Nota: " + nota + " puntos sobre 10");
    if (nota >= 5) {
        alert("¡ENHORABUENA! HAS APROBADO CON UN " + nota);
    } else {
        alert("LÁSTIMA! HAS SUSPENDIDO CON UN " + nota);
    }
}


function inicializar() {
    document.getElementById('resultados').innerHTML = "";
    nota = 0.0;
}


/**
 * Comprueba que todas las preguntas esten contestadas antes de corregir el test
 */
function comprobarContestadas() {
    var f = formElement;
    var checked = false;
    var cnt = 0;

    //Empezamos mirando los radio
    for (i = 0; i < f.radradioDiv1.length; i++) {
        if (f.radradioDiv1[i].checked) checked = true;
    }
    if (!checked) {
        alert("¡Contesta la primera pregunta!");
        f.elements[0].focus();
        return false;
    }
    cnt += f.radradioDiv1.length;
    checked = false;

    for (i = 0; i < f.radradioDiv2.length; i++) {
        if (f.radradioDiv2[i].checked) checked = true;
    }
    if (!checked) {
        alert("¡Contesta la segunda pregunta!");
        f.elements[f.radradioDiv1.length].focus();
        return false;
    }
    cnt += f.radradioDiv2.length;
    checked = false;

    //Miramos los text
    if (document.getElementById("text1").value.length == 0) {
        alert("¡Contesta la tercera pregunta!");
        document.getElementById("text1").focus();
        return false;
    }

    if (document.getElementById("text2").value.length == 0) {
        alert("¡Contesta la cuarta pregunta!");
        document.getElementById("text2").focus();
        return false;
    }
    cnt += 2;

    //Miramos los checkbox
    for (i = 0; i < f.checkcheckBoxDiv1.length; i++) {
        if (f.checkcheckBoxDiv1[i].checked) checked = true;
    }
    if (!checked) {
        alert("¡Contesta la quinta pregunta!");
        f.elements[cnt].focus();
        return false;
    }
    cnt += f.checkcheckBoxDiv1.length;
    checked = false;

    for (i = 0; i < f.checkcheckBoxDiv2.length; i++) {
        if (f.checkcheckBoxDiv2[i].checked) checked = true;
    }
    if (!checked) {
        alert("¡Contesta la sexta pregunta!");
        f.elements[cnt].focus();
        return false;
    }
    cnt += f.checkcheckBoxDiv2.length;
    checked = false;

    //Miramos los select simple
    if (document.getElementById("sel1").selectedIndex == 0) {
        alert("¡Contesta la séptima pregunta!");
        document.getElementById("sel1").focus();
        return false;
    }

    if (document.getElementById("sel2").selectedIndex == 0) {
        alert("¡Contesta la octava pregunta!");
        document.getElementById("sel2").focus();
        return false;
    }

    //Miramos los select Mulltiple

    if (document.getElementById("mult1").selectedIndex == -1) {
        alert("¡Contesta la novena pregunta!");
        document.getElementById("mult1").focus();
        return false;
    }
    if (document.getElementById("mult2").selectedIndex == -1) {
        alert("¡Contesta la décima pregunta!");
        document.getElementById("mult2").focus();
        return false;
    }

    return true;
}

function empezarTest() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quest").style.display = "block";
    document.getElementById("timer").style.display = "block";

    timer = setInterval(actualizarTemp, 1000);
}

function actualizarTemp() {
    time--;
    t = document.getElementById("timer");

    if (time >= 0) {
        if (time < 30){
            //Rojo
            t.style.background = "#F21C1C";
        } else {
            if (time < 60) {
                t.style.background = "#D28808";
            } else {
                if (time < 120) {
                t.style.background = "#A0D208";
                } else {
                    t.style.background = "#54AE06";
                }
            }
        }
        document.getElementById("temp").innerHTML = time;
    } else {
        clearInterval(timer);
        t.style.display = "none";
        inicializar();
        corregir();
        presentarNota();
    }
}