		// When the user clicks on the text "Click me to toggle the popup tip", the popup opens
		function popUp() {
		  var popup = document.getElementById("myPopup");
		  popup.classList.toggle("show");
		}
		
		// When the user clicks on the text "Click me to toggle the popup tip", the popup opens
		function popUpInfo() {
		  var popup = document.getElementById("myPopupInfo");
		  popup.classList.toggle("show");
		}
		
		//--------------------Timer-------------------------
		function timerUp() {
		var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            } 
            else
            {
                return valString;
            }
        }
		}
		
			/* When the user clicks on the button, 
			toggle between hiding and showing the dropdown content */
		function dropDown() {
			  document.getElementById("myDropdown").classList.toggle("show");
			}

			

		// Close the dropdown menu if the user clicks outside of it
		window.onclick = function(event) {
		  if (!event.target.matches('.dropbtn')) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
			  var openDropdown = dropdowns[i];
			  if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			  }
			}
		  }
		}
		
		//Change the text "You will see the result here" into "Try one more time"
		function myTip() {
			document.getElementById("result_id").innerHTML = "Try one more time";
			setTimeout(window.location.reload.bind(window.location), 800);
		}

		
		//Apply the "." metacharacter on an input text
		function myFunction1() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value;
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);		
			
			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
			  

		//Apply the "\w" metacharacter on an input text
		function myFunction2() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // ------- /\w/g;
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\W" metacharacter on an input text
		function myFunction3() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // ------- /\W/g;
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\d" metacharacter on an input text
		function myFunction4() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // ------- /\d/g;
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\D" metacharacter on an input text
		function myFunction5() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- /\D/g
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\s" metacharacter on an input text
		function myFunction6() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- /\s/g
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		
		//Apply the "\S" metacharacter on an input text
		function myFunction7() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- /\S/g
			var regex = new RegExp(pattern, 'g');
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result + "<br>" + "(total: " + result.length + ")";
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\b" metacharacter on an input text
		function myFunction8() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- /\b/g
			var regex = new RegExp(pattern, 'g');
			let result = input.search(regex);

			  document.getElementById("result_id").innerHTML = "Found in position: " + result;
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\B" metacharacter on an input text
		function myFunction9() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- \B
			var regex = new RegExp(pattern);
			let result = input.search(regex);

			  document.getElementById("result_id").innerHTML = "Found in position: " + result;
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		//Apply the "\0" metacharacter on an input text
		function myFunction10() {
			var input = document.getElementById("input_id").value;
			var pattern = document.getElementById("pattern_id").value; // -------- \0
			var regex = new RegExp(pattern);
			let result = input.match(regex);

			  document.getElementById("result_id").innerHTML = "The result is: " + result;
			  document.getElementById("result_id").style.fontSize = "16px";
			  document.getElementById("result_id").style.fontWeight = "lighter";
			  document.getElementById("result_id").style.color = "white";
			  document.getElementById("result_id").style.fontFamily = "Arial";
		}
		
		