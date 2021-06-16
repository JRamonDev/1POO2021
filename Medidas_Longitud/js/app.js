function convertir(){
    var valor=parseFloat(document.getElementById("cantidad").value);
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    resultado=0;
    //Centimetro a Kilometro
    if(de==1&&a==2){
        resultado=valor/100000;
    }
    //Centimetro a Metro
    else if(de==1&&a==3){
        resultado=valor/100;
    }
    //Centimetro a Pulgada
    else if(de==1&&a==4){
        resultado=valor/2.54;
    }
    //Centimetro a Milla
    else if(de==1&&a==5){
        resultado=valor/160934;
    }

    //kilometro a Centimetro
    else if(de==2&&a==1){
        resultado=valor*100000;
     }
     //Metro a Centimetro
     else if(de==3&&a==1){
         resultado=valor*100;
     }
     //Pulgada a Centimetro
     else if(de==4&&a==1){
        resultado=valor*2.54;
    }
    //Milla a Centimetro
    else if(de==5&&a==1){
        resultado=valor*160934;
    }

    //Kilometro a Metro
    else if(de==2&&a==3){
        resultado=valor*1000;
    }
    //Kilometro a Pulgada
    else if(de==2&&a==4){
        resultado=valor*39370;
    }
    //Kilometro a Milla
    else if(de==2&&a==5){
        resultado=valor/1.609;
    }

    //Metro a Kilometro
    else if(de==3&&a==2){
        resultado=valor/1000;
    }
    //Pulgada a Kilometro
    else if(de==4&&a==2){
        resultado=valor/39370;
    }
    //Milla a Kilometro
    else if(de==5&&a==2){
        resultado=valor*1.609;
    }

    //Metro a Pulgada
    else if(de==3&&a==4){
        resultado=valor*39.37;
    }
    //Metro a Milla
    else if(de==3&&a==5){
        resultado=valor/1609;
    }

    //Pulgada a Metro
    else if(de==4&&a==3){
        resultado=valor/39.37;
    }
    //Milla a Metro
    else if(de==5&&a==3){
        resultado=valor*1609;
    }

    //Pulgada a Milla
    else if(de==4&&a==5){
        resultado=valor/63360;
    }

    //Milla a Pulgada
    else if(de==5&&a==4){
        resultado=valor*63360;
    }//cm a cm, km a km, mts a mts, pulgada a pulgada, milla a milla
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: "+resultado.toFixed(3);

}
