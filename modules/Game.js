import {URLContent} from "./imgImport.js"
import Plateau from "../modules/Plateau.js"
import Cavalier from "./piece/Cavalier.js"
import Fou from "./piece/Fou.js"
import Pion from "./piece/Pion.js"
import Reine from "./piece/Roi.js"
import Tour from "./piece/Tour.js"
import Roi from "./piece/Roi.js"

export default class Game{
    constructor(){
        this.plateau = new Plateau();
        this.plateau.init();
        ////////////////////////////////////////////////////////////
        this.blackCavalier = []
        this.whiteCavalier = []
        ////////////////////////////////////////////////////////////
        this.blackFou = [];
        this.whiteFou = [];
        ////////////////////////////////////////////////////////////
        this.blackTour = [];
        this.whiteTour = [];
        ////////////////////////////////////////////////////////////
        this.blackPion = [];
        this.whitePion = [];
        ////////////////////////////////////////////////////////////
        for(let i=0;i<8;i++){
            if(i<2){
                this.blackCavalier[i] = new Cavalier(URLContent.BLACKCAVALIER);
                this.whiteCavalier[i] = new Cavalier(URLContent.WHITECAVALIER);
                this.blackFou[i] = new Fou(URLContent.BLACKFOU);
                this.whiteFou[i] = new Fou(URLContent.WHITEFOU);
                this.blackTour[i] = new Tour(URLContent.BLACKTOUR);
                this.whiteTour[i] = new Tour(URLContent.WHITETOUR);
            }
            this.blackPion[i]=new Pion(URLContent.BLACKPION);
            this.whitePion[i]=new Pion(URLContent.WHITEPION);
        }
        ////////////////////////////////////////////////////////////
        this.blackReine = new Reine(URLContent.BLACKQUEEN);
        this.whiteReine = new Reine(URLContent.WHITEQUEEN);
        ////////////////////////////////////////////////////////////
        this.blackRoi= new Roi(URLContent.BLACKKING);
        this.whiteRoi = new Roi(URLContent.WHITEKING);
    }

    init(){
        ////////////////////////////////////////////////////////////////
        this.plateau.getPlateau[0][0].appendChild(this.blackTour[0].getImg)
        this.plateau.getPlateau[0][1].appendChild(this.blackCavalier[0].getImg)
        this.plateau.getPlateau[0][2].appendChild(this.blackFou[0].getImg)
        this.plateau.getPlateau[0][3].appendChild(this.blackReine.getImg)
        this.plateau.getPlateau[0][4].appendChild(this.blackRoi.getImg)
        this.plateau.getPlateau[0][5].appendChild(this.blackFou[1].getImg)
        this.plateau.getPlateau[0][6].appendChild(this.blackCavalier[1].getImg)
        this.plateau.getPlateau[0][7].appendChild(this.blackTour[1].getImg)
        this.plateau.getPlateau[1].forEach((e,i)=> {
            e.appendChild(this.blackPion[i].getImg)
            })
        ////////////////////////////////////////////////////////////////
        this.plateau.getPlateau[7][0].appendChild(this.whiteTour[0].getImg)
        this.plateau.getPlateau[7][1].appendChild(this.whiteCavalier[0].getImg)
        this.plateau.getPlateau[7][2].appendChild(this.whiteFou[0].getImg)
        this.plateau.getPlateau[7][3].appendChild(this.whiteReine.getImg)
        this.plateau.getPlateau[7][4].appendChild(this.whiteRoi.getImg)
        this.plateau.getPlateau[7][5].appendChild(this.whiteFou[1].getImg)
        this.plateau.getPlateau[7][6].appendChild(this.whiteCavalier[1].getImg)
        this.plateau.getPlateau[7][7].appendChild(this.whiteTour[1].getImg)
        this.plateau.getPlateau[6].forEach((e,i)=> {
            e.appendChild(this.whitePion[i].getImg)
            })
        ///////////////////////////////////////////////////////////////////
        for(let i=0;i<8;i++){
            if(i<2){
                this.blackCavalier[i].init(true)
                this.whiteCavalier[i].init(false)
                this.blackTour[i].init(true);
                this.whiteTour[i].init(false);
                this.blackFou[i].init(true);
                this.whiteFou[i].init(false);
            }
            this.blackPion[i].init(true);
            this.whitePion[i].init(false);
        }
        this.blackRoi.init(true);
        this.whiteReine.init(false);
        this.blackReine.init(true);
        this.whiteReine.init(false);
    }
}
