/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function js_trim(cadena){
   cadena = js_rtrim(cadena);
	cadena = js_ltrim(cadena);
	return cadena;
}
function js_rtrim(cadena){
    for (i = 0; i <= cadena.length -1 ; i++){
		if (cadena.charAt(i) != " "){
			return cadena.substring(i,cadena.length);
		}
	}
	return "";
}
function js_ltrim(cadena){
    for (i = cadena.length -1 ; i >= 0; i--){
		if (cadena.charAt(i) != " "){
			return cadena.substring(0, i + 1);
		}
	}
	return cadena;
}
function js_tecla_nombre(cadena, obj, e, txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();
   if(tecla==8 || tecla==0 || tecla==32 || tecla==241 || tecla==209) return true;
   if ((tecla >= 65 && tecla <= 90) || (tecla >= 97 && tecla <= 122)) opc = true;
   return opc;
}

function js_tecla_numero(cadena, obj, e,txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();
   if ((tecla >= 48 && tecla <= 57) || tecla==8 || tecla==0)
   opc = true;
   return opc;
}

function js_tecla_numero_letra(cadena, obj, e, txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();

   if(tecla==8 || tecla==0 || tecla==32 || tecla==241 || tecla==209) return true;

   if( (tecla >= 48 && tecla <= 57)  || (tecla >= 65 && tecla <= 90) ||
       (tecla >= 97 && tecla <= 122) ||  tecla==20 || tecla==32 || tecla==8 ||
        tecla==0 || tecla==241 || tecla==209 ) opc = true
   return opc;
}

function js_tecla_numero_decimal(cadena, obj, e, txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();
   if(obj.value.indexOf(".") > -1 && tecla == 46) return opc;

   if ((tecla >= 48 && tecla <= 57) || tecla==8 || tecla==0 || tecla==46)
   opc = true;
   return opc;
}
function js_tecla_telefono(cadena, obj, e, txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();
   if ((tecla >= 48 && tecla <= 57) || tecla==8 || tecla==0  || tecla==40 || tecla==41 || tecla==43 || tecla==45)
   opc = true;
   return opc;
}

function js_valida_obligatorio(cadena, obj, e, txtfocus,txtfocusSgte){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) {
       if( document.getElementById(txtfocus).value == "" ) {
           alert("Debe Ingresar un dato.... !");
           document.getElementById(txtfocus).focus();
           return false
          }
   }
    if ((tecla >= 48 && tecla <= 57) || tecla==8 || tecla==0)
      {   document.getElementById(txtfocusSgte).focus();
       opc = true;
   }
   return opc;
}

function js_valida_descripcion(cadena, obj, e, txtfocus){
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;
   if( tecla==13 && txtfocus != null ) {
       if( document.getElementById("txtIng_3").value == "" ) {
           alert("Debe Ingresar Descripcion de la Carga.... !");
           document.getElementById("txtIng_3").focus();
           return false
          }
       if( document.getElementById("txtIng_13").value == "1") {
           // Validar si objeto esta activo sino ir al actualizar detalle
           document.getElementById("agregar").focus();
          }
       if( document.getElementById("txtIng_13").value == "2") {
          document.getElementById("txtIng_7").focus();
       }
       if( document.getElementById("txtIng_13").value == "3") {
          document.getElementById("txtIng_7").focus();
       }
       if( document.getElementById("txtIng_13").value == "4") {
          document.getElementById("txtIng_10").focus();
       }
   }
   
   if( (tecla >= 32 && tecla <= 57) ||  // Numeros
       (tecla >= 65 && tecla <= 90)     // Letras Mayusculas
       || (tecla >= 97 && tecla <= 122) // Letras Minusculas
       ||  tecla==225 || tecla==233 || tecla==237 || tecla==243 || tecla==250  // Tildes Vocales
       ||  tecla==47 || tecla==45 || tecla==46  // Guion y Slash Punto Decimal
       ||  tecla==40 || tecla==41 || tecla==46  // Parentesis ( )
       ||  tecla==8 || tecla==0   // Backspace Fechas  Ultima Linea Space ñ Ñ
       ||  tecla==32 || tecla==241 || tecla==209 || tecla==20 ) opc = true;

   return opc;
   }

// Nueva y Documentada

function js_tecla_direccion(cadena, obj, e, txtfocus){
      
   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;

   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();
   
   if( (tecla >=48 && tecla <= 57) ||  // Numeros Y Simbolos mas Usados
       (tecla >=65 && tecla <= 90)     // Letras Mayusculas

       || (tecla >= 97 && tecla <= 122) // Letras Minusculas

       ||  tecla==225 || tecla==233 || tecla==237 || tecla==243 || tecla==250  // Tildes Vocales
       ||  tecla==57 ||  tecla==58 ||  tecla==59 || tecla==47 || tecla==45 || tecla==46 || tecla==35 || tecla==44     // Coma Guion y Slash Punto Decimal, Coma ?
       ||  tecla==8 || tecla==0  || tecla==38                               // Backspace Fechas  Ultima Linea Space ñ Ñ
       ||  tecla==32 || tecla==241 || tecla==209 )

       opc = true;

return opc;
}

function js_tecla_email(cadena, obj, e, txtfocus){

   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;

   if( tecla==13 && txtfocus != null ) document.getElementById(txtfocus).focus();

   if( (tecla >= 48 && tecla <= 57) ||  // Numeros
       (tecla >= 65 && tecla <= 90)     // Letras Mayusculas
       || (tecla >= 97 && tecla <= 122) // Letras Minusculas
              || tecla==47 ||  tecla==46  ||  tecla==64 ||  tecla==45 ||  tecla==95 // Guion y  Punto Decimal y arroba
       ||  tecla==8 || tecla==0   // Backspace Fechas  Ultima Linea Space ñ Ñ
       ||  tecla==32 || tecla==241 || tecla==209 ) opc = true;

return opc;
}

function js_tecla_fecha(cadena, obj, e, txtfocus){

   opc = false;
   tecla = (document.all) ? e.keyCode : e.which;

   if( tecla==13 && txtfocus != null )
       {           
       if( validar_fecha(obj.value)== true )
           {
            document.getElementById(txtfocus).focus();
           }
           else
               {
               }
       }

       if( (tecla >=48 && tecla <= 57)  // Numeros
            || tecla==47 ||  tecla==8 || tecla==0     )     // Backspace Fechas
       opc = true;

return opc;


}