

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


function gestionarXml(dadesXml){
    var xmlDoc = dadesXml.responseXML;
    
    document.getElementById('title').innerHTML = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
}