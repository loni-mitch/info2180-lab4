window.onload = function(){
	let m = document.getElementById("boundary1")
	let myBoundary = document.querySelectorAll(".boundary");
	let end = document.getElementById("end");
	let win = true;
	var start = document.getElementById("start");
	var maze = document.getElementById("maze");
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
	start.addEventListener("click", function(){
			for (let i = 0; i < myBoundary.length; i++)
			{
				myBoundary[i].setAttribute("class", "boundary");
			}
			let top = maze.offsetTop;
			let left = maze.offsetLeft;
			let height = maze.offsetHeight;
			let width = maze.offsetWidth;
	});

};

function lose(){
	 let d = document.getElementById("boundary1");
	 d.classList.add('youlose');
}

