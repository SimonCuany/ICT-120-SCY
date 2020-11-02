document.addEventListener('DOMContentLoaded', function () {
//Afficher les participants
        document.getElementById("Btn_Participants").addEventListener("click", show_participant);

        function show_participant() {
            document.getElementById('Participants').classList.remove('hidden')
        }


//Afficher les Transports
        document.getElementById("Btn_Transports").addEventListener("click", show_transport);

        function show_transport() {
            document.getElementById('Transports').classList.remove('hidden')
            document.getElementById('Participants').classList.add('hidden')
            document.getElementById('Hebergement').classList.add('hidden')
            document.getElementById('Activités').classList.add('hidden')
        }

//Afficher les hébergements
        document.getElementById("Btn_Hebergement").addEventListener("click", show_hebergement);

        function show_hebergement() {
            document.getElementById('Hebergement').classList.remove('hidden')
            document.getElementById('Participants').classList.add('hidden')
            document.getElementById('Transports').classList.add('hidden')
            document.getElementById('Activités').classList.add('hidden')
        }

//Afficher les activités
        document.getElementById("Btn_Activités").addEventListener("click", show_activite);

        function show_activite() {
            document.getElementById('Activités').classList.remove('hidden')
            document.getElementById('Transports').classList.add('hidden')
            document.getElementById('Hebergement').classList.add('hidden')
            document.getElementById('Participants').classList.add('hidden')
        }


        document.getElementById('Btn_Hebergement').addEventListener('click', showImg)

        function showImg() {
            txtHotelData00.classList.add('hidden')
        }

        document.getElementById('txtHotelData00').addEventListener('click', function (){
            console.log("Blabla")
            if (txtHotelData00.value === "alpha") {
                imgAlpha.classList.remove('hidden')
            }
        })



    }


)

