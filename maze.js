window.onload = function(){
	let m = document.getElementById("boundary1")
	let myBoundary = document.querySelectorAll(".boundary");
	let end = document.getElementById("end");
	let win = true;
	m.addEventListener("mouseover",lose);

	for (let i = 0; i < myBoundary.length - 1; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (let j = 0; j < myBoundary.length - 1; j++ )
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
					win = false;
				}
				alert("You Lose!");
			});
		}	

		end.addEventListener("mouseover", function(){

			if (win)
			{
				alert("You Win!");
			}
			
		})
};

function lose(){
	 var d = document.getElementById("boundary1");
	 d.classList.add('youlose');
}

