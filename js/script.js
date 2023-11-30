
//elementos del html
let userImput = document.getElementById("userInput")
let userplay = document.getElementById("userInput").value
let countdown = document.getElementById("countdown")
let result = document.getElementById ("result")
let restart = document.getElementById("restart")

//realizar una funcion que nos de un cuenta atras y se pueda reiniciar//al final metemos aqui la comparacion por empirismo
    userImput.addEventListener("change",()=>{
        let tiempo = 5;
        let intervalo = setInterval(() => {
          tiempo--;
          countdown.innerHTML = tiempo;
          if (tiempo === 0) {
            promesa.then(()=>{
                if (res == pcPlay){
                    (result.setAttribute("class","green"))
                    result.innerHTML = `buenas noticias<br>has elegido ${res} y el ordenador ${pcPlay}<br> asi que tu ganas`
                }else{ 
                    result.setAttribute("class","red")
                    result.innerHTML = `Che, perdiste, <br> por que ${res} no es igual que ${pcPlay} <br>mala suerte`}
            })
            clearInterval(intervalo);
          }
        }, 1000);
    })
//restart.addEventListener("click",countdown1) //asi probamos la cuenta atras en el intento numero 349534
 
//obtener la jugada del usuario

const promesa = new Promise((resolve)=>{
userImput.addEventListener("change",(e)=>{
    res = e.target.value 
    let play = `esta fue su jugada ${parseFloat(res)}`
    resolve (play)
})
}) 
promesa.then((jugada)=>result.innerHTML = jugada)

//console.log(play)//la funcion change es asincrona asi que aqui es donde vamos a partir conlas promesas


 //obtener la jugada del pc
    let pcPlay = Math.floor(Math.random()*3)+1;
//console.log(pcPlay)

restart.addEventListener("click",()=>{
    userplay.textContent = "" 
    countdown.textContent = ""
    result.textContent = ""
})

//se deberia iniciar al introducir los datos?
//realizar una funcion de comparacion 
//(podria usar el then para que se realice al final del countdown)
//es probable que vayan unidos al seconds



 
  