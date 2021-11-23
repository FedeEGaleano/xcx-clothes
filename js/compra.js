function captura(){
    let nomCom=document.getElementById("nomCom").value;
    let emaill=document.getElementById("emaill").value;
    let celular=document.getElementById("celular").value;
    let direccionPr=document.getElementById("direccionPr").value;
    let direccionLoc=document.getElementById("direccionLoc").value;
    let direccionCal=document.getElementById("direccionCal").value;
    let direccionCp=document.getElementById("direccionCp").value;
    let nomTar=document.getElementById("nomTar").value;
    let dni=document.getElementById("dni").value;
    let num=document.getElementById("num").value;
    let clave=document.getElementById("clave").value;
    if(nomCom == ""){
        alert("INGRESE SU NOMBRE");
        document.getElementById("nomCom").focus();
    }else{
        if(num == ""){
            alert("INGRESE LA TARJETA");
            document.getElementById("num").focus();
        }else{
            console.log("Datos del comprador:" + " " + nomCom + " " + emaill + " " + celular
            + "  " + " Datos de Envio:" + " " + direccionPr + " " + direccionLoc + " " + direccionCal + " " + direccionCp
            + " " + "Metodo de pago:" + " " + nomTar + " " + dni + " " + num + " " + clave);
            document.getElementById("nomCom").value="";
            document.getElementById("num").value="";
            document.getElementById("nomCom").focus();


        }
    }
}