var golbalVariableCounter = 1;

var player1 = "X";
var player2 = "O";

x_list = [];
o_list = [];

var result=false;

toWin = [
    ["00","01","02"],
    ["10","11","12"],
    ["20","21","22"],
    ["00","10","20"],
    ["01","11","21"],
    ["02","12","22"],
    ["00","11","22"],
    ["02","11","20"]
]

function isEquals(myList1,myList2){

    let checker = myList2.every(i => myList1.includes(i));

    if(checker){
        return true;
    } else{
        return false;
    }
}


function isOver(myList,player){
    for(var i=0;i<toWin.length;i++){
        if(isEquals(myList,toWin[i])){
            document.getElementById("result").innerHTML=player+" is the winner ";
            document.getElementById("turn").innerHTML="Congratulations " + player;

            var inputs = document.getElementsByTagName("input");
            for(var i=0;i<inputs.length;i++){
                if(inputs[i].value == " ") {
                    inputs[i].value = "  ";
                } else if(inputs[i].value == player){
                    if(player=="X"){
                    inputs[i].style.backgroundColor="navy";
                    inputs[i].style.color="white";
                    inputs[i].style.fontWeight="bold";
                    }else{
                        inputs[i].style.backgroundColor="red";
                        inputs[i].style.color="white";
                        inputs[i].style.fontWeight="bold";

                    }
                    for(var j=0;j<toWin.length;j++){
                        if(inputs[i].id == toWin[j]){
                            inputs[i].style.backgroundColor="red";
                        }
                    }
                } else{
                   // inputs[i].style.backgroundColor="red";
                }
            }
            var button = document.createElement("button");
            button.innerHTML="Play Again";
            button.style.width="260px";
            button.style.height="100px";
            button.style.color="white";
            button.style.backgroundColor="crimson";
            button.style.fontSize="30px";
            button.style.borderRadius="30px";
            button.style.border="5px solid yellow";
            var element = document.getElementById("button").appendChild(button).style.display="block";
            result = true;
            button.addEventListener('click',function(){
                location.reload();
            })
           break;    
        }
    }
    if(o_list.length==4 && x_list.length==5 && result==false){
        document.getElementById("turn").innerHTML="Match Drawn";
        var button = document.createElement("button");
        button.innerHTML="Draw";
        button.style.width="300px";
        button.style.height="100px";
        button.style.color="white";
        button.style.backgroundColor="lime";
        button.style.fontSize="30px";
        button.style.borderRadius="30px";
        button.style.border="5px solid yellow";
        var element = document.getElementById("button").appendChild(button).style.display="block";
        result = true;
        button.addEventListener('click',function(){
            location.reload();
        })
    }

}

function put(myValue) {
    if(myValue.value == " ") {
        if(golbalVariableCounter%2 == 0) {
            document.getElementById("turn").innerHTML="Player X's turn";
            myValue.value = "O";
            o_list.push(myValue.id);
            if(o_list.length >= 3){
                isOver(o_list,player2);
            }
            
        } else {
            document.getElementById("turn").innerHTML="Player O's turn";
            myValue.value = "X";
            x_list.push(myValue.id);
            if(x_list.length >= 3){
                isOver(x_list,player1);
            }
        }
        
        golbalVariableCounter++;
        
    }

}

/*function generateRandom(){
    return Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
}

function randomChoice(){
    var randNum = generateRandom();
    var dict = new Object();
    dict= {
        1:"00",
        2:"01",
        3:"02",
        4:"10",
        5:"11",
        6:"12",
        7:"20",
        8:"21",
        9:"22"
    }
    console.log(dict[randNum]);
    for(var key in dict){
        var num = dict[key];
        if(document.getElementById(num).value!=" "){
            continue;
        } else {
            document.getElementById(num).value = "O";
            break;
        }
    }

}*/


