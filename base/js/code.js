document.addEventListener('DOMContentLoaded', function () {
   document.getElementById("btnclicked").enabled = false;


    var countclick = 0

    function btnclick() {
        document.getElementById('inc').value = ++countclick;
    }


    btnclicked.addEventListener('click', function () {
        btnclick()
        btnrestart.classList.add('hidden')
    })



//[------------------------------------TIMER----------------------------------------]

    document.getElementById("start").addEventListener("click", function startfn(){
        btnclicked.enabled = true;
        var timeleft = 12;

        btnrestart.addEventListener('click', function () {
            startfn()
            btnclicked.classList.remove('hidden')
        document.getElementById('lblclick').textContent = "0"

        })

        var downloadTimer = setInterval(function function1(){
            document.getElementById("countdown").innerHTML = timeleft +
                "&nbsp"+"seconds remaining";

            timeleft -= 1;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Time is up!"
                btnclicked.classList.add('hidden')
                btnrestart.classList.remove('hidden')
                document.getElementById('h3resultat').classList.remove('hidden')
                document.getElementById('h3resultatnum').classList.remove('hidden')
                numclick =
                document.getElementById('h3resultatnum').replaceWith(numclick)
            }
        }, 1000);

        console.log(countdown);

    });

})




