const input = document.querySelector("#guess");
const btn = document.querySelector("#btn");
const answer = Math.floor(Math.random()*50)+1

input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13)
    play();
})

btn.addEventListener("click", play);
function play(){
    const userNumber = document.querySelector("#guess").value;

    if (userNumber <1 || userNumber >50 ){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Enter a number from 1 to 50',
            })
    }
    else if ( isNaN (userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number',
            })
    }
    
    else {
        if (userNumber < answer){
            let timerInterval
            Swal.fire({
                title: 'Try a higher number! ',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
                },
                willClose: () => {
                clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                }
                })
                }

                else if (userNumber > answer){
                    let timerInterval
                    Swal.fire({
                        title: 'Try a lower number! ',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                        },
                        willClose: () => {
                        clearInterval(timerInterval)
                        }
                        }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                        }
                        })
                        }


    else{
        Swal.fire({
            title: 'Victory!',
            width: 300,
            color: '#7f7676',
            background: '#fff',
            backdrop: `
                rgba(0,0,0,0.0)
                url(2.png)
                right
                no-repeat
            `
            })
    }

    }
}
gsap.from(".container",{
  y:-500,
  x:-500,
  ease: "back.out(1.7)",
  duration:2.5,
  delay: .5
})