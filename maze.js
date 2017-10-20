window.onload = function(){
	 m = document.getElementById("boundary1")
	 m.addEventListener("mouseover",lose);
};

function lose(){
	 var d = document.getElementById("boundary1");
	 d.classList.add('youlose');
}

