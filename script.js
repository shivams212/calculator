let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr =Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML =='AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = parseInt(string.substring(0, string.length-1));
            // let shivam = string;
            // let result = parseInt(shivam.substring(0, shivam.length));
            // input.value = result;
            //Trial
        }
        else if(e.target.innerHTML == '√'){
            string = Math.sqrt(string);
            input.value = string;
        }
        else if(e.target.innerHTML == '^'){
            string = string + "**";
            input.value = string;
        }

        else if(e.target.innerHTML == 'π'){
            string = string + "3.14";
            input.value = string;
        }
        
        else{
            string +=e.target.innerHTML;
            input.value = string;
            // let stringLen = string.length 
            // if (string[stringLen - 2] == "√") {
            //     string.substring(0, stringLen - 2) + Math.round(Math.sqrt(Number(string[stringLen - 1])))
            // }
            // console.log(string)
        }
        
    })
})