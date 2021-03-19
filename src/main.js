import { URLContent } from "../modules/imgImport.js";
import Pieces from "../modules/Pieces.js"
import Plateau from "../modules/Plateau.js"

let targetObject = null;
let selects = [];

const plateau = new Plateau()
plateau.init()
const game = plateau.game

play();


function move(e){
    unPlay();
    game.forEach( (row,i) => {
        let find = row.find( piece => piece.img == e.target);
        if(find != undefined)targetObject=find;
    })
    selects = [];
    
    switch(targetObject.type){
        case 1 : moveRoi();break;
        case 2 : moveReine();break;
        case 3 : moveFou();break;
        case 4 : moveCavalier();break;
        case 5 : moveTour();break;
        case 6 : movePion();break;
        default : break;
    }
}
function moveRoi(){
    
                    selects.push(onMove(1,0,1))
                    selects.push(onMove(1,0,2))
                    selects.push(onMove(0,1,1))
                    selects.push(onMove(0,1,2))
                    selects.push(onMove(1,1,1))
                    selects.push(onMove(1,1,2))
                    selects.push(onMove(1,1,3))
                    selects.push(onMove(1,1,4))

                
                selects = selects.filter(elem => elem != "")
                console.log(selects)
                selects.forEach( elem => {
                    elem.classList.add("target")
                    elem.addEventListener("click",select)
                    })
}

function moveReine(){
    let leftTop = true;
    let rightTop = true;
    let rightBottom = true;
    let leftBottom = true;
    let left = true;
    let right = true;
    let top = true;
    let bottom = true;
    for(let i=1;i<=8;i++){
        if(onMove(i,i,1)!=""){
            if(onMove(i,i,1).childNodes[0]==undefined&&leftBottom){
            selects.push(onMove(i,i,1))
            console.log("++")
            }else if(leftBottom){
            selects.push(onMove(i,i,1))
            leftBottom = false;
            }
        }
        if(onMove(i,i,2)!=""){
            if(onMove(i,i,2).childNodes[0]==undefined&&rightBottom){
            selects.push(onMove(i,i,2))
            console.log("--")
            }else if(rightBottom){
            selects.push(onMove(i,i,2))
            rightBottom = false
            }
        }
        if(onMove(i,i,3)!=""){
            if(onMove(i,i,3).childNodes[0]==undefined&&rightTop){
            selects.push(onMove(i,i,3))
            console.log("+-")
            }else if(rightTop){
            selects.push(onMove(i,i,3))
            rightTop = false
            }
        }
        if(onMove(i,i,4)!=""){
            if(onMove(i,i,4).childNodes[0]==undefined&&leftTop){
                selects.push(onMove(i,i,4))
                console.log("-+")
            }else if(leftTop){
                selects.push(onMove(i,i,4))
                leftTop = false
            }
        }
        if(onMove(i,0,1)!=""){
            if(onMove(i,0,1).childNodes[0]==undefined&&bottom){
            selects.push(onMove(i,0,1))
            console.log("++")
            }else if(bottom){
            selects.push(onMove(i,0,1))
            bottom = false;
            }
        }
        if(onMove(i,0,2)!=""){
            if(onMove(i,0,2).childNodes[0]==undefined&&top){
            selects.push(onMove(i,0,2))
            console.log("--")
            }else if(top){
            selects.push(onMove(i,0,2))
            top = false
            }
        }
        if(onMove(0,i,1)!=""){
            if(onMove(0,i,1).childNodes[0]==undefined&&left){
            selects.push(onMove(0,i,1))
            console.log("+-")
            }else if(left){
            selects.push(onMove(0,i,1))
            left = false
            }
        }
        if(onMove(0,i,2)!=""){
            if(onMove(0,i,2).childNodes[0]==undefined&&right){
                selects.push(onMove(0,i,2))
                console.log("-+")
            }else if(right){
                selects.push(onMove(0,i,2))
                right = false
            }
        }
    }
    selects = selects.reduce( (result,elem) => {
        if(!result.includes(elem))result.push(elem)
        return result
    },[])
    selects.forEach( elem => {
        elem.classList.add("target")
        console.log(elem)
        elem.addEventListener("click",select)
        })
}

function moveCavalier(){
               
                    selects.push(onMove(2,1,3))
                    selects.push(onMove(2,1,1))
                    selects.push(onMove(2,1,4))
                    selects.push(onMove(2,1,2))
                    selects.push(onMove(1,2,3))
                    selects.push(onMove(1,2,1))
                    selects.push(onMove(1,2,4))
                    selects.push(onMove(1,2,2))
                
                selects = selects.filter(elem => elem != "")
                console.log(selects)
                selects.forEach( elem => {
                    elem.classList.add("target")
                    elem.addEventListener("click",select)
                    })
                
}

function moveFou(){

    let leftTop = true;
    let rightTop = true;
    let rightBottom = true;
    let leftBottom = true;
    for(let i=1;i<=8;i++){
        if(onMove(i,i,1)!=""){
            if(onMove(i,i,1).childNodes[0]==undefined&&leftBottom){
            selects.push(onMove(i,i,1))
            console.log("++")
            }else if(leftBottom){
            selects.push(onMove(i,i,1))
            leftBottom = false;
            }
        }
        if(onMove(i,i,2)!=""){
            if(onMove(i,i,2).childNodes[0]==undefined&&rightBottom){
            selects.push(onMove(i,i,2))
            console.log("--")
            }else if(rightBottom){
            selects.push(onMove(i,i,2))
            rightBottom = false
            }
        }
        if(onMove(i,i,3)!=""){
            if(onMove(i,i,3).childNodes[0]==undefined&&rightTop){
            selects.push(onMove(i,i,3))
            console.log("+-")
            }else if(rightTop){
            selects.push(onMove(i,i,3))
            rightTop = false
            }
        }
        if(onMove(i,i,4)!=""){
            if(onMove(i,i,4).childNodes[0]==undefined&&leftTop){
                selects.push(onMove(i,i,4))
                console.log("-+")
            }else if(leftTop){
                selects.push(onMove(i,i,4))
                leftTop = false
            }
        }
    }

    selects = selects.reduce( (result,elem) => {
        if(!result.includes(elem))result.push(elem)
        return result
    },[])
    selects.forEach( elem => {
        elem.classList.add("target")
        console.log(elem)
        elem.addEventListener("click",select)
        })
}

function moveTour(){

    let left = true;
    let right = true;
    let top = true;
    let bottom = true;
    for(let i=1;i<=8;i++){
        if(onMove(i,0,1)!=""){
            if(onMove(i,0,1).childNodes[0]==undefined&&bottom){
            selects.push(onMove(i,0,1))
            console.log("++")
            }else if(bottom){
            selects.push(onMove(i,0,1))
            bottom = false;
            }
        }
        if(onMove(i,0,2)!=""){
            if(onMove(i,0,2).childNodes[0]==undefined&&top){
            selects.push(onMove(i,0,2))
            console.log("--")
            }else if(top){
            selects.push(onMove(i,0,2))
            top = false
            }
        }
        if(onMove(0,i,1)!=""){
            if(onMove(0,i,1).childNodes[0]==undefined&&left){
            selects.push(onMove(0,i,1))
            console.log("+-")
            }else if(left){
            selects.push(onMove(0,i,1))
            left = false
            }
        }
        if(onMove(0,i,2)!=""){
            if(onMove(0,i,2).childNodes[0]==undefined&&right){
                selects.push(onMove(0,i,2))
                console.log("-+")
            }else if(right){
                selects.push(onMove(0,i,2))
                right = false
            }
        }
    }

    selects = selects.reduce( (result,elem) => {
        if(!result.includes(elem))result.push(elem)
        return result
    },[])
    selects.forEach( elem => {
        elem.classList.add("target")
        console.log(elem)
        elem.addEventListener("click",select)
        })
}

function movePion(){
    if(!targetObject.color){
        if(targetObject.firstMove){
            selects.push(onMove(2,0,2))
            selects.push(onMove(1,0,2))
            if(targetObject.x==0){
                if(onMove(1,1,2).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,2))
                }
            }
            selects.forEach( elem => {
                elem.classList.add("target")
                elem.addEventListener("click",select)
                })
        }else{
            if(onMove(1,0,2).childNodes[0]==undefined){
                selects.push(onMove(1,0,2))
            }
            if(targetObject.x==0){
                if(onMove(1,1,2).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,2))
                }
            }else{
                if(onMove(1,1,2).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,2))
                }
                if(onMove(1,1,4).childNodes[0]!=undefined){             
                        selects.push(onMove(1,1,4))
                }
            }
            selects.forEach( elem => {
                elem.classList.add("target")
                elem.addEventListener("click",select)
                })
        } 
        //////////////////////////////////////
    }else {
        if(targetObject.firstMove){
            selects.push(onMove(2,0,1))
            selects.push(onMove(1,0,1))
            if(targetObject.x==0){
                if(onMove(1,1,3).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,3))
                }
            }
            selects.forEach( elem => {
                elem.classList.add("target")
                elem.addEventListener("click",select)
                })
        }else{
            if(onMove(1,0,1).childNodes[0]==undefined){
                selects.push(onMove(1,0,1))
            } 
            if(targetObject.x==0){
                if(onMove(1,1,3).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,3))
                }
            }else{
                if(onMove(1,1,3).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,3))
                }
                if(onMove(1,1,1).childNodes[0]!=undefined){             
                    selects.push(onMove(1,1,1))
                }
            }
            selects.forEach( elem => {
                elem.classList.add("target")
                elem.addEventListener("click",select)
            })
        }
    };
}
//MOVE POSSIBLE
function onMove(y,x,modificateur){
    switch(modificateur){
        case 1 :
            if(document.getElementsByClassName(`${targetObject.y-y}ligne`)[0]!=undefined){
                if(document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x-x]!=undefined){
                    return document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x-x]
                } else return "";
            }else return "";
        case 2 :
            if(document.getElementsByClassName(`${targetObject.y+y}ligne`)[0]!=undefined){
                if(document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x+x]!=undefined){
                    return document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x+x]
                } else return "";
            }else return "";
        case 3 :
            if(document.getElementsByClassName(`${targetObject.y-y}ligne`)[0]!=undefined){
                if(document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x+x]!=undefined){
                    return document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x+x]
                } else return "";
            }else return "";
        case 4 :
            if(document.getElementsByClassName(`${targetObject.y+y}ligne`)[0]!=undefined){
                if(document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x-x]!=undefined){
                    return document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x-x]
                } else return "";
            }else return "";
        default: throw new Error(`Erreur de modificateur ${modificateur}`)
    }
        
        
}

//DEPLACEMENT DISPO
function select(e){
    if(Array.from(e.target.classList).includes("piece")){
        const parent = e.target.parentNode;
        parent.innerHTML = "";
        parent.appendChild(targetObject.img)
    } else e.target.appendChild(targetObject.img);    
    targetObject.init()
    targetObject.firstMove = false;
    if(targetObject.color&&targetObject.y==0&&targetObject.type==6){
        targetObject.type = 2;
        targetObject.img.src = URLContent.WHITEQUEEN
    }
    if(targetObject.color==0&&targetObject.y==7&&targetObject.type==6){
        targetObject.type = 2;
        targetObject.img.src = URLContent.BLACKQUEEN
    }
    play()
    selects.forEach( elem => {
        elem.classList.remove("target")
        elem.removeEventListener("click",select)})
}
// ADD EVENT PION
function play(){
    game.forEach((elem)=>{
        elem.forEach(e=>{
            if(e instanceof Pieces)e.img.addEventListener("click",move)
        })
    })
}
// REMOVE EVENT PION
function unPlay(){
    game.forEach((elem)=>{
        elem.forEach(e=>{
            if(e instanceof Pieces)e.img.removeEventListener("click",move)
        })
    })
}


