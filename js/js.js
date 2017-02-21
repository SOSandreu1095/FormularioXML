//VARIABLES
var formElement = null;
var nota = 0.0;

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

    //CORREGIR AL APRETAR EL BOTON
    formElement = document.getElementsByTagName("form")[0];
    formElement.onsubmit = function () {
        if (confirm("¿Seguro que desea corregir?")) {
            inicializar();
            corregir();
            presentarNota();
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
    ponerDatosMultiple(tituloMultiple, "q9");

    var tituloSelect = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    var opcionesSelect = [];
    var nopt = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q9", opcionesSelect, 2);
    //ANSWER
    var nres = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        answMult1[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer')[i].innerHTML;
    }

    //------------------------------------------------------

    var tituloMultiple = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    ponerDatosMultiple(tituloMultiple, "q10");

    var tituloSelect = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesSelect = [];
    var nopt = xmlDoc.getElementById("jklm_010").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q10", opcionesSelect, 3);
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

    for (i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.text = opciones[i];
        option.value = i;
        select.options.add(option);
    }
}

//MULTIPLE
function ponerDatosMultiple(tituloMultiple, IDposicion) {
    document.getElementById(IDposicion).innerHTML = tituloMultiple;
}



//-----------------------------------------------------------------
//                            CORREGIR
//-----------------------------------------------------------------

function corregir() {
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
    alert(mult.length);

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
    if (sel.selectedIndex == answer) {
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