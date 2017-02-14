

window.onload = function () {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://rawgit.com/SOSandreu1095/FormularioXML/master/preguntas.xml", true);
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

    //-------------------------------------------

    var tituloRadio = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    var opcionesRadio = [];
    var nopt = xmlDoc.getElementById("jklm_002").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesRadio[i] = xmlDoc.getElementById("jklm_002").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadio(tituloRadio, "q2", opcionesRadio, "radioDiv2");


    //TEXT --------------------------------------------------------------
    var tituloText = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    ponerDatosText(tituloText, "q3");

    tituloText = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    ponerDatosText(tituloText, "q4");

    //CHECKBOX ----------------------------------------------------------
    var tituloCheckbox = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesCheckbox = [];
    var nopt = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesCheckbox[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckbox(tituloCheckbox, "q5", opcionesCheckbox, "checkBoxDiv1");

    //---------------------------------------------------------

    var tituloCheckbox = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    var opcionesCheckbox = [];
    var nopt = xmlDoc.getElementById("jklm_006").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesCheckbox[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckbox(tituloCheckbox, "q6", opcionesCheckbox, "checkBoxDiv2");



    //SELECT ------------------------------------------------------------
    var tituloSelect = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesSelect = [];

    var nopt = xmlDoc.getElementById("jklm_007").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_007").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q7", opcionesSelect, 0);

    //-------------------------------------------------------------------------------------

    tituloSelect = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    opcionesSelect = [];

    var nopt = xmlDoc.getElementById("jklm_008").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_008").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelect(tituloSelect, "q8", opcionesSelect, 1);



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
        input.type = "radio";
        input.name = "rad";
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
        /*label.setAttribute("for", "color_" + i);*/
        input.type = "checkbox";
        input.name = "check";
        /*input.id = "color_" + i;*/
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
        option.value = i + 1;
        select.options.add(option);
    }
}

//MULTIPLE
function ponerDatosMultiple(tituloMultiple, IDposicion) {
    document.getElementById(IDposicion).innerHTML = tituloMultiple;
}