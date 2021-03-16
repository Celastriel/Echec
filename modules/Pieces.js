export default class Pieces{
    constructor(URL){
        this.img = document.createElement('img');
        this.img.src = URL;
        this.img.classList.add("piece")
    }

    get getImg(){return this.img}


}

