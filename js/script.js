
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
    
        function initAutocomplete() {
            var pickupInput = document.getElementById('pickup');
            var destinationInput = document.getElementById('destination');

            var autocompletePickup = new google.maps.places.Autocomplete(pickupInput);
            var autocompleteDestination = new google.maps.places.Autocomplete(destinationInput);
        }
        google.maps.event.addDomListener(window, 'load', initAutocomplete);
   
    
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";

        }
        document.querySelector(".tablinks.active").click();
    
    
        function Div() {
            var TravelType = document.getElementById("TravelType");
            var DateType = document.getElementById("DateType");
            var TimeType = document.getElementById("TimeType");

            if (TravelType.value === "Yes") {
                DateType.style.display = "block";
                TimeType.style.display = "block";
            } else {
                DateType.style.display = "none";
                TimeType.style.display = "none";
            }
        }
   
        function Div1() {
            var LuggageType = document.getElementById("LuggageType");
            var LargeBag = document.getElementById("LargeBag");
            var SmallBag = document.getElementById("SmallBag");

            if (LuggageType.value === "Yes") {
                LargeBag.style.display = "block";
                SmallBag.style.display = "block";
            } else {
                LargeBag.style.display = "none";
                SmallBag.style.display = "none";
            }
        }
    
        let vehicleCounter = 1;
        let awardCounter = 1;

        function updateVehicleCount() {
            document.getElementById("vehicleCount").innerText = vehicleCounter;
        }

        function updateAwardCount() {
            document.getElementById("awardCount").innerText = awardCounter;
        }

        window.onload = function () {
            const startTime = Date.now();
            const endTime = startTime + 6000; // 6 seconds

            const interval = setInterval(function () {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;

                if (elapsedTime >= 6000) {
                    clearInterval(interval);
                } else {
                    const progress = elapsedTime / 5000;
                    vehicleCounter = Math.min(Math.floor(progress * 120), 120);
                    awardCounter = Math.min(Math.floor(progress * 25), 25);
                    updateVehicleCount();
                    updateAwardCount();
                }
            }, 80); // Update every 50 milliseconds
        };
    
        function openForm() {
            document.getElementById("myForm").style.display = "block";
        }

        function closeForm() {
            document.getElementById("myForm").style.display = "none";
        }
 