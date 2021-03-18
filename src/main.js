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
        case 1 : break;
        case 2 : break;
        case 3 : break;
        case 4 : break;
        //// TOUR /////
        case 5 : 
                
                let y = targetObject.y;
                let flag = true;
                let counter = 0;
                /////// y ///////////
                if(y==0){   
                    while(flag){
                        y++
                        if(y==8){
                            flag = false
                        }else if(onMove(1+counter,0,2).childNodes[0]!=undefined){
                            selects.push(onMove(1+counter,0,2))
                            flag = false
                        }else selects.push(onMove(1+counter,0,2))
                        counter++
                    }
                }else if(y==7){
                    while(flag){
                        y--
                        if(y<0){
                            flag = false
                        }else if(onMove(1+counter,0,1).childNodes[0]!=undefined){
                            selects.push(onMove(1+counter,0,1))
                            flag = false
                        }else selects.push(onMove(1+counter,0,1))
                        counter++
                    }
                }else{
                    counter = 0;
                    while(flag){
                        y++
                        if(y==8){
                            flag = false
                        }else if(onMove(1+counter,0,2).childNodes[0]!=undefined){
                            selects.push(onMove(1+counter,0,2))
                            flag = false
                        }else selects.push(onMove(1+counter,0,2))
                        counter++
                    }
                    counter = 0;
                    flag = true;
                    y = targetObject.y
                    while(flag){
                        y--
                        if(y<0){
                            flag = false
                        }else if(onMove(1+counter,0,1).childNodes[0]!=undefined){
                            selects.push(onMove(1+counter,0,1))
                            flag = false
                        }else selects.push(onMove(1+counter,0,1))
                        counter++
                    }
                }
                let x = targetObject.x;
                flag = true;
                counter = 0;
                ///// x ////////
                if(x==0){   
                    while(flag){
                        x++
                        if(x==8){
                            flag = false
                        }else if(onMove(0,1+counter,2).childNodes[0]!=undefined){
                            selects.push(onMove(0,1+counter,2))
                            flag = false
                        }else selects.push(onMove(0,1+counter,2))
                        counter++
                    }
                }else if(x==7){
                    while(flag){
                        x--
                        if(x<0){
                            flag = false
                        }else if(onMove(0,1+counter,1).childNodes[0]!=undefined){
                            selects.push(onMove(0,1+counter,1))
                            flag = false
                        }else selects.push(onMove(0,1+counter,1))
                        counter++
                    }
                }else{
                    counter = 0;
                    while(flag){
                        x++
                        if(x==8){
                            flag = false
                        }else if(onMove(0,1+counter,2).childNodes[0]!=undefined){
                            selects.push(onMove(0,1+counter,2))
                            flag = false
                        }else selects.push(onMove(0,1+counter,2))
                        counter++
                    }
                    counter = 0;
                    flag = true;
                    x = targetObject.x
                    while(flag){
                        x--
                        if(x<0){
                            flag = false
                        }else if(onMove(0,1+counter,1).childNodes[0]!=undefined){
                            selects.push(onMove(0,1+counter,1))
                            flag = false
                        }else selects.push(onMove(0,1+counter,1))
                        counter++
                    }
                }
                selects.forEach( elem => {
                    elem.classList.add("target")
                    elem.addEventListener("click",select)
                    });
        break;
        // PION ////////
        case 6 : if(!targetObject.color){
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
                break;
        default : break;
    }
}
//MOVE POSSIBLE
function onMove(y,x,modificateur){
    switch(modificateur){
        case 1 :return document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x-x];
        case 2 :return document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x+x];
        case 3 :return document.getElementsByClassName(`${targetObject.y-y}ligne`)[0].childNodes[targetObject.x+x];
        case 4 :return document.getElementsByClassName(`${targetObject.y+y}ligne`)[0].childNodes[targetObject.x-x];
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


