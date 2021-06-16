function calcular(d1, d2, d3){
    var d1 = parseInt(document.getElementById("dato1").value);
    var d2 = parseInt(document.getElementById("dato2").value);
    var d3 = parseInt(document.getElementById("dato3").value);
    let me = (d1 + d2 + d3) / 3;

    if(d1==d2||d1==d3){
       var mod=d1;
        document.getElementById("moda").innerHTML = "Moda :" +mod;
    }else if(d2==d3){
        var mod=d2;
        document.getElementById("moda").innerHTML = "Moda :" +mod;
    }else
    mod="No hay valores que se repiten";
    document.getElementById("moda").innerHTML = "Moda :" +mod;
  

    document.getElementById("media").innerHTML = "Media :" +me.toFixed(3);

    var restita1=d1-me;
    var restita2=d2-me;
    var restita3=d3-me;

    var potencia1=Math.pow(restita1,2);
    var potencia2=Math.pow(restita2,2);
    var potencia3=Math.pow(restita3,2);

    var sumapotencia=potencia1+potencia2+potencia3;

    var division=sumapotencia/(3-1);

    S=Math.sqrt(division);

    document.getElementById("desviacion").innerHTML = "Desviación Estándar :" +S.toFixed(3);

}


