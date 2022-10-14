const num1 = Math.ceil(Math.random()*100)
const num2 = Math.ceil(Math.random()*100)



const questionEl= document.getElementById("question")
const formEl =document.getElementById("form");
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")

questionEl.innerText = `what is ${num1} multiply by ${num2}`


let  score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0
}

scoreEl.innerText=`score : ${score}`


const corectAns = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAns= +inputEl.value

    if(userAns==corectAns){
        score++

        updateScore()
    }
    else{
        score--
        updateScore()
    }

    console.log(score);

})



function updateScore(){
    localStorage.setItem("score",JSON.stringify(score))
}