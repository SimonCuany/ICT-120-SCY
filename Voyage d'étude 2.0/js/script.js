document.addEventListener('DOMContentLoaded', function () {



//Afficher les participants
        document.getElementById("Btn_Participants").addEventListener("click", show_participant);

        function show_participant() {
            document.getElementById('Participants').classList.remove('hidden')
            //Cacher page "Homepage"
            document.getElementById("Homepage").classList.add('hidden')
        }


//Afficher les Transports
        document.getElementById("Btn_Transports").addEventListener("click", show_transport);

        function show_transport() {
            document.getElementById('Transports').classList.remove('hidden')
            document.getElementById('Participants').classList.add('hidden')
            document.getElementById('Hebergement').classList.add('hidden')
            document.getElementById('Activités').classList.add('hidden')
            //Cacher page "Homepage"
            document.getElementById("Homepage").classList.add('hidden')
        }

//Afficher les hébergements
        document.getElementById("Btn_Hebergement").addEventListener("click", show_hebergement);

        function show_hebergement() {
            document.getElementById('Hebergement').classList.remove('hidden')
            document.getElementById('Participants').classList.add('hidden')
            document.getElementById('Transports').classList.add('hidden')
            document.getElementById('Activités').classList.add('hidden')
            //Cacher page "Homepage"
            document.getElementById("Homepage").classList.add('hidden')
        }

//Afficher les activités
        document.getElementById("Btn_Activités").addEventListener("click", show_activite);

        function show_activite() {
            document.getElementById('Activités').classList.remove('hidden')
            document.getElementById('Transports').classList.add('hidden')
            document.getElementById('Hebergement').classList.add('hidden')
            document.getElementById('Participants').classList.add('hidden')
            //Cacher page "Homepage"
            document.getElementById("Homepage").classList.add('hidden')
        }


        document.getElementById('txtHotelData00').addEventListener('blur', function () {
            console.log("Blabla")
            if (txtHotelData00.value === "alpha") {
                imgAlpha.src = "pictures/hotel-alpha.jpg"
            }
            else {
                imgAlpha.src = "pictures/hotel-none.png"
            }
        })

    }
)

