		$(document).ready(function() {
			$('#all').fadeIn(1500);
			$('#navigation-bar-left').css('left', '-850px');


			var afficherTitreDOM = document.getElementById('afficherTitre');
			var afficherPhraseDOM = document.getElementById('afficherPhrase');

			var titres = ["Yacine Laakel", "Développeur Web", "En recherche d'emploi"];
			var phrases = ["cv - développement web", "volonté de devenir meilleur au quotidien", "passionné et cherchant de l'expérience"];
			var i = 0;
			var indexPhrase = 0;
			var premiereFois = true;

			afficherTitreDOM.innerHTML = " ";
			var affichagePhrase = function() {

				if(i == 0) {
					if(premiereFois) {
						afficherTitreDOM.innerHTML = titres[indexPhrase];
						premiereFois = false;
					} else {
				        $('#afficherTitre').fadeOut(function() {
			        		afficherTitreDOM.innerHTML = titres[indexPhrase];
				        });
						$('#afficherTitre').fadeIn(100);
					}
				}
				if(i > phrases[indexPhrase].length - 1) {
					i = 0;
					indexPhrase++;

					if(indexPhrase > phrases.length - 1) {
						indexPhrase = 0;
					}


					clearInterval(lancement);
					setTimeout(function() {
				        afficherPhraseDOM.innerHTML = "";
				        lancement = setInterval(affichagePhrase, 80);
					}, 5000);

					
				} else {
					afficherPhraseDOM.innerHTML += phrases[indexPhrase][i];
					i++;
				}
			}



			var lancement = setInterval(affichagePhrase, 150);

			$(document).on('click', 'a', function(event){
			    if($(this).hasClass('currentPage')) {
    			    event.preventDefault();
    
    			    $('html, body').animate({
    			        scrollTop: $( $.attr(this, 'href') ).offset().top
    			    }, 500);
			    }
			});

			$('#fb').click(function() {
				window.location.href = "https://www.facebook.com/yacine.laakel";
			});

			$('[data-toggle="tooltip"]').tooltip(); 

		});