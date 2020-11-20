let inputSearch = document.querySelector(".search")
let btn = document.querySelector(".btn")
let baseUrl = "https://api.github.com"
let userURL = "https://api.github.com/users"
let content
let contentSearch

class AddClass {
    constructor(el){
        this.el = el
    }

    show(className){
        this.el.classList.add(className);
    }

    hide(className){
        return this.el.classList.remove(className)
    }
}
const loader = new AddClass(document.querySelector('.search'));
const loaderBtn = new AddClass(document.querySelector('.btn'));
const animation = new AddClass(document.querySelector('.list'));

