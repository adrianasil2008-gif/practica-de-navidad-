 
function desp()
{
    document.getElementById("santa").textContent="Un anciano bondadoso de barba blanca y traje rojo, que viaja en su trineo tirado por renos para dejar regalos a los niños en Nochebuena.";
}
function desr()
{
    document.getElementById("ro").textContent="El reno más especial del equipo. Tiene una nariz roja que brilla intensamente y guía el camino del trineo en las noches de niebla y tormenta."
}
function desrey()
{
    document.getElementById("rey").textContent="Tres sabios —Melchor, Gaspar y Baltasar— que llegaron de Oriente siguiendo una estrella para adorar al niño y regalarle oro, incienso y mirra. En muchos países son quienes dejan los regalos a los niños."
}
function desg()
{
    document.getElementById("gr").textContent="Un personaje de ficción que vivía en una montaña y odiaba la Navidad. Intento robarla, pero al final comprendió que lo más importante es el cariño y estar juntos"
}
function calculartotal()
{
    var c1=parseInt(document.getElementById("p1").value) ||0;
    var c2=parseInt(document.getElementById("p2").value) ||0;
    var c3=parseInt(document.getElementById("p3").value) ||0;
    var c4=parseInt(document.getElementById("p4").value) ||0;

    var t1=90*c1;
    var t2=95*c2;
    var t3=40*c3;
    var t4=45*c4;

    document.getElementById("tp").textContent="Precio Total del Pollo al Horno: "+t1+"Bs";
    document.getElementById("tpi").textContent="Precio Total de la Picana: "+t2+"Bs";
    document.getElementById("tpa").textContent="Precio Total del Paneton: "+t3+"Bs";
    document.getElementById("tr").textContent="Precio Total de la Rosca: "+t4+"Bs";
    var total=t1+t2+t3+t4;
    document.getElementById("totalc").textContent="Total a pagar: "+total+"Bs";
}
function lista()
{
    var r=document.getElementById("inr").value;
    document.getElementById("mostrar").innerHTML=document.getElementById("mostrar").innerHTML+"<br>"+"-"+r;
}
function enviar()
{
    document.getElementById("mostrar").textContent=" ";
    document.getElementById("listo").textContent="La lista fue enviada con exito";
}
