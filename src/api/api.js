import $ from "jquery"

//const url = "./assets/items.xml";  

const getUrl=function(){
    var loc1=window.location;
    var str = ""+loc1;
    var n = str.indexOf("/es-co/sena");
    console.log(str.slice(0,n+11))
    return str.slice(0,n+11)
}
const url = getUrl()+"/_api/web/lists/getbytitle('Aliados_mapa')/items?$select=Title,PAIS,INSTITUCION,Vigencia,OBJETO,FileLeafRef,File_x0020_Type,EncodedAbsUrl,Id&$top=500&$orderby=Title%20asc";


export var apijsonConvoJquey=(resl,erro)=> $.ajax({
    url:url,
    method: "GET",
    dataType: "xml"
   ,  
    success: function(data) {
        const objetoRes={}
        const datos=[]

       /*  var properties=data.getElementsByTagName("m:properties")[0]
        console.log(properties)  */
    $(data).find("entry").each(function (t) { // or "item" or whatever suits your feed
        var el = $(this);
         datos.push({
            "id":el[0].getElementsByTagName("d:Id")[0].childNodes[0] && el[0].getElementsByTagName("d:Id")[0].childNodes[0].nodeValue,          
            "continente":el[0].getElementsByTagName("d:Title")[0].childNodes[0] && el[0].getElementsByTagName("d:Title")[0].childNodes[0].nodeValue,  
            "pais":el[0].getElementsByTagName("d:PAIS")[0].childNodes[0] && el[0].getElementsByTagName("d:PAIS")[0].childNodes[0].nodeValue , 
            "institucion":el[0].getElementsByTagName("d:INSTITUCION")[0].childNodes[0] && el[0].getElementsByTagName("d:INSTITUCION")[0].childNodes[0].nodeValue, 
            "vigencia":el[0].getElementsByTagName("d:Vigencia")[0].childNodes[0] && el[0].getElementsByTagName("d:Vigencia")[0].childNodes[0].nodeValue, 
            "objeto":el[0].getElementsByTagName("d:OBJETO")[0].childNodes[0] && el[0].getElementsByTagName("d:OBJETO")[0].childNodes[0].nodeValue, 
        }) 

     
    });
    objetoRes.datos=datos;
    //console.log(objetoRes.datos);
    resl( objetoRes);
},                 
    error: function(t) {
        erro(t)
    }
})