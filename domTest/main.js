document.body.onload = addElement;

function addElement () {
	
		// // crée un nouvel élément div
		// var newDiv = document.createElement("div");
		// // et lui donne un peu de contenu
		// var newContent = document.createTextNode('Hi there and greetings!');
		// // ajoute le nœud texte au nouveau div créé
		// newDiv.appendChild(newContent);
	
	
		container = document.getElementById('items');
		
		  for(i = 120; i < 800; i++){
			
			var div = document.createElement('div');
			container.appendChild(div);
			var h = document.createElement("H1");
			var newContent = document.createTextNode(i);
			// container.innerHTML+='<div class="items"></div>';
			h.appendChild(newContent);
			div.appendChild(h);
			h.innerHTML+='<span class="dot"></span>';
			
			// container.appendChild(newContent);
		  }
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentDiv = document.getElementById('div1');
//   document.body.insertBefore(newDiv, currentDiv);
}