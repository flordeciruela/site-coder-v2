
var posts = document.getElementById("posts");
var arrPost = new Array();

document.getElementById("enviar").addEventListener('click',function(event) {
	event.preventDefault();
	var text = document.getElementById("text").value;
	var nombre = document.getElementById("nombre").value;
	var firstNode = document.getElementById("comments-title");

	arrPost.push(new Post(nombre, text));
	posts.insertBefore(arrPost[arrPost.length -1].crearPost(),firstNode.nextSibling);//Insertar ultimo posts antes del segundo elemento.
	document.getElementById("coment-box").reset();

});

function Post(nombre, text){

	this.text = text;
	this.nombre = nombre;
	this.crearPost = function(){

															var divPost = document.createElement('div');
															var p = document.createElement('p');
															var divTexto = document.createElement('div');
															divTexto.setAttribute("class","print-text");

															p.appendChild(document.createTextNode(this.nombre));
															divTexto.appendChild(document.createTextNode(this.text));

															divPost.appendChild(p);
															divPost.appendChild(divTexto);
														 	return divPost;
					                    };

   }
