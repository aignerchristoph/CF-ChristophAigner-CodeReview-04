
		var data = document.getElementById("movies");

		for (var i = 0; i< movies.length; i++) {
			data.innerHTML += 
						`<div class="moviebox">
						<div class="image">
						<img src="${movies[i].image}" alt="">
						</div>
						<div class="info">
							<div class="boxtitle">${movies[i].movieName}</div>
							<div class="description">${movies[i].description}</div>
							<div id="likeArea">
							<button class ="btn" id = "${i}">Like <i class="fa fa-thumbs-up"></i></button>
							<div class ="show">${movies[i].likes}</div>
							</div>
						</div>
						</div>`;
		}
		
		var allbtn = document.getElementsByClassName("btn");

		for (var i =0; i< movies.length; i++) {
			allbtn[i].addEventListener("click", function(){increase(this.getAttribute("id"))},false);
		}

	
		

		function increase (i){
			var change = document.getElementsByClassName("show");
			movies[i].likes.innerHTML = movies[i].likes++;
			change[i].innerHTML = movies[i].likes;
		}