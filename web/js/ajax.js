/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function rescatar_script(texto)
{
        var tp1_0, tp1_1, tp2_0, tp2_1, tp3_0, tp3_1;

        if ( texto.indexOf('<script') >= 0 ) {
            tp1_0 = texto.substring(0,texto.indexOf('<script')-1);
            tp1_1 = texto.substring(texto.indexOf('<script'),texto.length -1);
            if( tp1_1 != '' ) {
                tp2_0 = tp1_1.substring(0,tp1_1.indexOf('>')-1);
                tp2_1 = tp1_1.substring(tp1_1.indexOf('>')+1,tp1_1.length -1);
                if( tp2_1 != '' ) {
                    tp3_0 = tp2_1.substring(0,tp2_1.indexOf('</script>')-1);
                    tp3_1 = tp2_1.substring(tp2_1.indexOf('</script>') + 9,tp2_1.length -1);
                    eval(tp3_0);
                }
                texto = tp1_0 + tp3_1;
               
                texto=rescatar_script(texto);
            }
        }
        /*var p1, p2, p3;

        p1=texto.split("<scrip",2);
	if (p1[1]) {
		p2=p1[1].split(">",2);
                //alert(p2[1]);
		p3=p2[1].split("</script",2);
		if (p3[0] && p3[0]!='')  eval(p3[0]);
                //alert(p3[1]);
		texto=p1[0]+p3[1];
                //alert(texto);
                //texto=rescatar_script(texto);
	}*/
	return texto;
}

function creaAjax(){
         var objetoAjax=false;
         try {
          /*Para navegadores distintos a internet explorer*/
          objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
          try {
                   /*Para explorer*/
                   objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
                   }
                   catch (E) {
                   objetoAjax = false;
          }
         }

         if (!objetoAjax && typeof XMLHttpRequest!='undefined') {
          objetoAjax = new XMLHttpRequest();
         }
         return objetoAjax;
}

function FAjax(url,capa,valores,metodo)
{
    
          var ajax=creaAjax();
          var capaContenedora = document.getElementById(capa);

    /*Creamos y ejecutamos la instancia si el metodo elegido es POST*/
    if(metodo.toUpperCase()=='POST'){
             ajax.open ('POST', url, true);
             ajax.onreadystatechange = function() {
             if (ajax.readyState==1) {

                              //capaContenedora.innerHTML="Cargando..";
                              capaContenedora.innerHTML = "<img src='../images/live_com_loading.gif'> Procesando...."
             }
             else if (ajax.readyState==4){
                       if(ajax.status==200)
                       {
                           document.getElementById(capa).innerHTML=rescatar_script(ajax.responseText);
                       }
                       else if(ajax.status==404)
                                                 {

                                capaContenedora.innerHTML = "La direccion no existe";
                                                 }
                               else
                                                 {
                                capaContenedora.innerHTML = "Error: ".ajax.status;
                                                 }
                                        }
                      }
             ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             ajax.send(valores);
             return;
    }

    /*Creamos y ejecutamos la instancia si el metodo elegido es GET*/
    if (metodo.toUpperCase()=='GET'){

             ajax.open ('GET', url, true);
             ajax.onreadystatechange = function() {
             if (ajax.readyState==1) {
                   capaContenedora.innerHTML = "<img src='../images/live_com_loading.gif'> Procesando...."
             }
             else if (ajax.readyState==4){
                       if(ajax.status==200){
                            document.getElementById(capa).innerHTML=rescatar_script(ajax.responseText);
                       }
                       else if(ajax.status==404)
                                                 {

                                capaContenedora.innerHTML = "La direccion no existe";
                                                 }
                                                 else
                                                 {
                                capaContenedora.innerHTML = "Error: ".ajax.status;
                                                 }
                                        }
                      }
             ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             ajax.send(null);
             return
    }
}

function FAjaxNuevo (url,capa,valores,metodo)
{
          var ajax=creaAjax();
          var capaContenedora = document.getElementById(capa);

    /*Creamos y ejecutamos la instancia si el metodo elegido es POST*/
    if(metodo.toUpperCase()=='POST'){
             ajax.open ('POST', url, true);
             ajax.onreadystatechange = function() {
             if (ajax.readyState==1) {
                             capaContenedora.innerHTML = "<img src='../images/live_com_loading.gif'> Procesando...."
             }
             else if (ajax.readyState==4){
                       if(ajax.status==200)
                       {
                           document.getElementById(capa).innerHTML=rescatar_script(ajax.responseText);
                       }
                       else if(ajax.status==404)
                                                 {

                                capaContenedora.innerHTML = "La direccion no existe";
                                                 }
                               else
                                                 {
                                capaContenedora.innerHTML = "Error: ".ajax.status;
                                                 }
                                        }
                      }
             ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             ajax.send(valores);
             return;
    }

    /*Creamos y ejecutamos la instancia si el metodo elegido es GET*/
    if (metodo.toUpperCase()=='GET'){

             ajax.open ('GET', url, true);
             ajax.onreadystatechange = function() {
             if (ajax.readyState==1) {
                 capaContenedora.innerHTML = "<img src='../images/live_com_loading.gif'> Procesando...."
             }
             else if (ajax.readyState==4){
                       if(ajax.status==200){
                            document.getElementById(capa).innerHTML=rescatar_script(ajax.responseText);
                       }
                       else if(ajax.status==404)
                                                 {

                                capaContenedora.innerHTML = "La direccion no existe";
                                                 }
                                                 else
                                                 {
                                capaContenedora.innerHTML = "Error: ".ajax.status;
                                                 }
                                        }
                      }
             ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             ajax.send(null);
             return
    }
}
