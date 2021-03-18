export default class Pieces{
    constructor(URL,color,type){
        this.img = document.createElement('img');
        this.img.src = URL;
        this.img.classList.add("piece")
        this.img.classList.add(`type${type}`)
        this.color = color
        // 1:roi 2:reine 3:fou 4:cavalier 5:tour 6:pion
        this.type = type
        if(type == 6)this.firstMove = true;
    }

    get getImg(){return this.img}

    init(){
        this.x = Number(this.img.parentNode.classList[1].charAt(0));
        this.y = Number(this.img.parentNode.parentNode.classList[1].charAt(0));
    }

}

