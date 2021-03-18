import {URLContent} from "./imgImport.js"
import Pieces from "./Pieces.js";


export default class Plateau{
    constructor(){
        this.plateau = [];
        this.game = [];
    }

    init(){
        //Create Plateau
        let flag=0;
        const container = document.querySelector(".container")
        for(let i=0;i<8;i++){
            const ligne = [];
            const divHtml = document.createElement("div");
            divHtml.classList.add("ligne")
            divHtml.classList.add(`${i}ligne`);
            for(let j=0;j<8;j++){
                const tuile = document.createElement("div");
                tuile.classList.add("tuile");
                tuile.classList.add(`${j}tuile`);
                if(flag%2)tuile.classList.add("dam");
                flag++;
                ligne.push(tuile);
                divHtml.appendChild(tuile);
            }
            flag++;
            this.plateau.push(ligne)
            container.appendChild(divHtml)
        }
        //Ajoute Plateau
        this.game = [
            [new Pieces(URLContent.BLACKTOUR,0,5),new Pieces(URLContent.BLACKCAVALIER,0,4),new Pieces(URLContent.BLACKFOU,0,3),new Pieces(URLContent.BLACKQUEEN,0,2),
            new Pieces(URLContent.BLACKKING,0,1),new Pieces(URLContent.BLACKFOU,0,3),new Pieces(URLContent.BLACKCAVALIER,0,4),new Pieces(URLContent.BLACKTOUR,0,5)],
            [new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6),
            new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6),new Pieces(URLContent.BLACKPION,0,6)],
            ["","","","","","","","",],
            ["","","","","","","","",],
            ["","","","","","","","",],
            ["","","","","","","","",],
            [new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),
            new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),new Pieces(URLContent.WHITEPION,1,6),],
            [new Pieces(URLContent.WHITETOUR,1,5),new Pieces(URLContent.WHITECAVALIER,1,4),new Pieces(URLContent.WHITEFOU,1,3),new Pieces(URLContent.WHITEQUEEN,1,2),
            new Pieces(URLContent.WHITEKING,1,1),new Pieces(URLContent.WHITEFOU,1,3),new Pieces(URLContent.WHITECAVALIER,1,4),new Pieces(URLContent.WHITETOUR,1,5)],
        ];

        this.game.forEach( (elem,index) => {
            elem.forEach( (e,i) => {
                if(e!=""){
                    this.plateau[index][i].appendChild(e.img);
                    e.init();
                }
            })
        })


    }
}