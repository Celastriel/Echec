import Pieces from "../Pieces.js"

export default class Pion extends Pieces{
    constructor(URL){
        super(URL);
        this.firstMove = true;
    }

    init(color){
        super.init(color);
        console.dir("x : " + this.x + " y : " + this.y)
        this.img.addEventListener("click",(e) => this.eventListener(e))
    }

    eventListener(e){
        /// Black
        const target = []
        if(this.color){
            if(this.firstMove){
                target.push(document.getElementsByClassName(`${this.x}tuile`)[this.y+2])
                target.forEach( elem => {
                    elem.classList.add("target");
                    elem.addEventListener("click",(e)=> this.move(e,target))
                })
                this.firstMove = false;
            } else {
                target.push(document.getElementsByClassName(`${this.x}tuile`)[this.y+1])
                target.forEach( elem => {
                    elem.classList.add("target");
                    elem.addEventListener("click",(e)=> this.move(e,target))
                })
                this.firstMove = false;
            }
        }
        /// White
        else {

        }
    }

    move(e,t){
        e.target.innerHTML = '';
        e.target.appendChild(this.img);
        t.forEach( elem => elem.classList.remove("target"));
        this.x = Number(this.img.parentNode.classList[1].charAt(0));
        this.y = Number(this.img.parentNode.parentNode.classList[1].charAt(0));
        e.target.removeEventListener("click",(e)=> this.move(e,target))
    }
}