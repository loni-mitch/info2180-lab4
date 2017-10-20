window.onload = function(){
	let m = document.getElementById("boundary1")
	let myBoundary = document.querySelectorAll(".boundary");
	let end = document.getElementById("end");
	let win = true;
	let start = document.getElementById("start");
	let maze = document.getElementById("maze");
	m.addEventListener("mouseover",lose);

	for (let i = 0; i < myBoundary.length - 1; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (let j = 0; j < myBoundary.length - 1; j++ )
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
					win = false;
				}
				document.getElementById("status").innerHTML = "You're a loser!";
			});
		}	

		end.addEventListener("mouseover", function(){

			if (win)
			{
				document.getElementById("status").innerHTML = "You Win! :)";
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

