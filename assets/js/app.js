var text = document.getElementById("text").value;
var posts = document.getElementById("posts");
var arrPost = new Array();

document.getElementById("enviar").addEventListener('click',function(event) {
	event.preventDefault();

	arrPost.push(new Post(text));
	arrPost.appendChild(arrPost[arrPost.length -1].crearPost());

});

function Post(text){

		this.text = text;
		this.crearPost = function(){

					                       var nuevoDiv = document.createElement('div');
					                       var p = document.createElement('p');

																 p.innerHTML += this.text;
					                       //nuevaTextarea.readOnly = "true";

					                       nuevoDiv.appendChild(p);
					                       return nuevoDiv;
					                       };

   }
