export default class Plateau{
    constructor(){
        this.plateau = [];
    }

    get getPlateau(){return this.plateau}

    init(){
        //Create Plateau
        let flag=0;
        const container = document.querySelector(".container")
        for(let i=0;i<8;i++){
            const ligne = [];
            const divHtml = document.createElement("div");
            divHtml.classList.add("ligne")
            divHtml.classList.add(`ligne${i}`);
            for(let j=0;j<8;j++){
                const tuile = document.createElement("div");
                tuile.classList.add("tuile");
                if(flag%2)tuile.style.backgroundColor = "gray"
                flag++;
                ligne.push(tuile);
                divHtml.appendChild(tuile);
            }
            flag++;
            this.plateau.push(ligne)
            container.appendChild(divHtml)
        }


    }
}