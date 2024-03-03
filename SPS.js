let userScore=0;
let compScore=0;

let pick=document.querySelectorAll(".choice")
pick.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userMove=choice.querySelector('p').innerText
        
        playGame(userMove)
    })
})
const playGame=(userMove)=>{
    let comMove=genComChoice()
    
    if(userMove===comMove){
        document.querySelector(".moveP").innerText="Game Was Draw Because Comp Choose"+"  "+userMove
        document.querySelector(".moveDiv").style.backgroundColor="#081B31"
    }
    else if(comMove=="stone"){
        
         if(userMove=="paper"){
            
            userScore++;
            document.getElementsByClassName("youS")[0].innerText=userScore
            document.querySelector(".moveP").innerText="You Win! Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="green"
        }
        else{
            console.log("com win")
            compScore++;
            document.getElementsByClassName("comS")[0].innerText=compScore
            document.querySelector(".moveP").innerText="You Lose Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="red"
        }
    }



    else if(comMove=="paper"){
        if(userMove=="stone"){
            
            compScore++
            document.getElementsByClassName("comS")[0].innerText=compScore
            document.querySelector(".moveP").innerText="You Lose Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="red"
        }
        
        else{
           
            userScore++
            document.getElementsByClassName("youS")[0].innerText=userScore
            document.querySelector(".moveP").innerText="You Win! Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="green"
        }
    }




    else if(comMove=="scissor"){
        if(userMove=="stone"){
           
            userScore++
            document.getElementsByClassName("youS")[0].innerText=userScore
            document.querySelector(".moveP").innerText="You Win! Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="green"
        }
        else if(userMove=="paper"){
           
            compScore++
            document.getElementsByClassName("comS")[0].innerText=compScore
            document.querySelector(".moveP").innerText="You Lose Because Comp Choose"+"  "+comMove
            document.querySelector(".moveDiv").style.backgroundColor="red"
        }
        
    }
}
const genComChoice=()=>{
    let a=Math.random()*3
    let i=Math.floor(a)
    let arr=["stone","paper","scissor"]
    let comMove=arr[i]   
    return comMove; 
}