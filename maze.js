window.onload = function(){
	let m = document.getElementById("boundary1")
	let myBoundary = document.querySelectorAll(".boundary");
	m.addEventListener("mouseover",lose);

	for (var i = 0; i < myBoundary.length - 1; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (var j = 0; j < myBoundary.length - 1; j++ )
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
				}
			});
		}	
};

function lose(){
	 var d = document.getElementById("boundary1");
	 d.classList.add('youlose');
}

