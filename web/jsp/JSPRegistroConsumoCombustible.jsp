<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Registro de Consumo de Combustible</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="content-type" content="text/html; charset=windows-1252" />
        <link rel="stylesheet" type="text/css" href="<c:url value="/css/style_oltursa.css"/>" title="style" />
        <link rel="stylesheet" type="text/css" href="<c:url value="/css/screen_oltursa.css"/>" title="style" />
        <link rel="stylesheet" href="<c:url value="/css/jquery-ui.css"/>" title="style">
        
        <script src="<c:url value="/js/jquery.min.js"/>"></script>
        <script src="<c:url value="/js/jquery-ui.min.js"/>"></script>
        <script src="<c:url value="/js/jquery.validate.min.js"/>"></script>	
            
        <script type="text/javascript">	  
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-17442910-1']);
            _gaq.push(['_trackPageview']);
            
            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();  
            
        </script>
    </head>
    <body>
        <div id="content">
            <div id="formchambo">
                <h1>Registro de Consumo de Combustible / Kilometraje</h1>
                <form>
                    <fieldset>
                        <legend>Datos Generales</legend>
                        <table width="100%"  border="0">
                            <tr>
                                <td><label for="localidad">Localidad</label></td>
                                <td>        
                                    <select id="localidad" name="localidad">
                                        <option>Lima</option>
                                        <option>Piura</option>
                                        <option>Tumbes</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="ndocumento">N. Documento</label></td>
                                <td><input id="ndocumento" name="ndocumento" type="text" class="text" /></td>
                                <td><label for="fregistro">Fecha de registro</label></td>
                                <td><input name="fregistro" id="fregistro" type="date" /></td>
                            </tr>
                            <tr>
                                <td><label for="autorizapor">Autorizado por</label></td>
                                <td>
                                    <select id="autorizapor" name="autorizapor">
                                        <option>Gerente de Zona</option>
                                        <option>Supervisor Tarde</option>
                                    </select>
                                </td>
                                <td><label for="uregistro">Usuario registro</label></td>
                                <td>
                                    <select id="uregistro" name="uregistro">
                                        <option>Digitador TMB</option>
                                        <option>Hernandez Javier</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                    <fieldset>
                        <legend>Datos de la Unidad</legend>
                        <table width="100%" border="0">
                            <tr>
                                <td><label for="codigo-unidad">Codigo Unidad</label></td>
                                <td>
                                    <select id="codigo-unidad" name="codigo-unidad">
                                        <option>2038</option>
                                        <option>2028</option>
                                        <option>2026</option>
                                    </select>
                                </td>
                                <td><label for="marca">Marca</label></td>
                                <td>
                                    <select id="marca" name="marca" disabled="disabled">
                                        <option>Scania 5000</option>
                                        <option>Scania 6000</option>
                                        <option selected="selected">Volvo B600</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="modelo">Modelo</label></td>
                                <td>
                                    <select id="modelo" name="modelo" disabled="disabled">
                                        <option>B12R</option>
                                        <option>B7R</option>
                                    </select>
                                </td>
                                <td><label for="placa">Placa</label></td>
                                <td><input id="placa" name="placa" type="text" /></td>
                            </tr>
                        </table>			
                    </fieldset>
                    <fieldset>
                        <legend>Datos Combustible</legend>
                        <table width="100%" border="0">
                            <tr>
                                <td><label for="tproveedor">Tipo proveedor</label></td>
                                <td>
                                    <select id="tproveedor" name="tproveedor">
                                        <option>Oltursa</option>
                                        <option>Tercero</option>
                                    </select>
                                </td>
                                <td><label for="proveedor">Proveedor</label></td>
                                <td>
                                    <select id="proveedor" name="proveedor">
                                        <option>Rafaelas EIRL - Tumbes</option>
                                        <option>Repsol</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="gdesp">Galones Despachados</label></td>
                                <td><input id="gdesp" name="gdesp" type="text" /></td>
                                <td><label for="ltanque">Llenado Tanque</label></td>
                                <td><input id="ltanque" name="ltanque" type="checkbox" /></td>
                            </tr>
                        </table>			
                    </fieldset>    
                    <fieldset>
                        <legend>Datos Kilometraje</legend>
                        <table width="100%" border="0">
                            <tr>
                                <td><label for="oant">Odometro Anterior</label></td>
                                <td><input id="oant" name="oant" type="text" /></td>
                                <td><label for="oact">Odometro Actual</label></td>
                                <td><input id="oact" name="oact" type="text" /></td>
                            </tr>
                            <tr>
                                <td><label for="oact">Kms. Recorridos</label></td>
                                <td><input id="oact" name="oact" type="text" /></td>
                                <td><label for="mmov">Motivo Movimiento</label></td>
                                <td>
                                    <select id="mmov" name="mmov">
                                        <option>Frecuencia-Itinerario</option>
                                        <option>Transbordo</option>
                                        <option>Expreso</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="torig">Tramo Origen</label></td>
                                <td>
                                    <select id="torig" name="torig">
                                        <option>LIM-AQP-CUZ</option>
                                        <option>LIM</option>
                                        <option>LIM-AQP</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="obs">Observaciones</label></td>
                                <td><textarea name="obs" id="obs"></textarea></td>
                            </tr>
                        </table>
                    </fieldset>
                   
                        <div align="center">
                        <input class="submit" type="submit" id="regis" name="regis" value="Registrar" />
                        <input class="submit" type="reset" id="cancel" name="cancel" value="Cancelar" />
                        </div>
                   
                </form>
            </div>
        </div>
    </body>
</html>