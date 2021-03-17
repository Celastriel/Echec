export default class Pieces{
    constructor(URL){
        this.img = document.createElement('img');
        this.img.src = URL;
        this.img.classList.add("piece")
    }

    get getImg(){return this.img}

    init(color){
        this.x = Number(this.img.parentNode.classList[1].charAt(0));
        this.y = Number(this.img.parentNode.parentNode.classList[1].charAt(0));
        this.color = color
    }

}

