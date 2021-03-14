class List {
    constructor(element) {
        this.element = element
    }

    winLoad = window.onload = function () {
        list.loadList(userURL)
    }

    focusListener = inputSearch.addEventListener("focus", () => {
        btn.classList.add("bottomGreen")
        if (!inputSearch.value && !this.element.childNodes.length) {
            loader.show("loading")
            loaderBtn.show("loading")
            this.addList()
            animation.show('opacity')
        }
    })

    blurListener = inputSearch.addEventListener("blur", () => {
        btn.classList.remove("bottomGreen")
        if (!inputSearch.value && this.element.childNodes.length) {
            animation.hide('opacity')
            setTimeout( () => list.clearList(), 0)
        }
    })


    btnListener = btn.addEventListener('click', async () => {
        let searchUrl = baseUrl + '/search/users?q=' + inputSearch.value;
        if (inputSearch.value) {
            loader.show("loading")
            loaderBtn.show("loading")
            this.clearList()
            await this.addSearchList(searchUrl)
        }
    })

    async loadList(allUserURL) {
        let response = await fetch(allUserURL)
        content = await response.json()
    }

    addList() {
        let i;
        loader.hide("loading")
        loaderBtn.hide("loading")
        for (i in content) {
            this.element.innerHTML += `
            <li class="card">
                <a class="cardA" target="_blank" href="${content[i].html_url}">
                    <img class="avatarImg" src="${content[i].avatar_url}">
                    <p class="userName">${content[i].login}</p>
                </a>
            </li>
        `
        }
    }

    async addSearchList(searchURL) {
        this.clearList()
        let response = await fetch(searchURL)
        contentSearch = await response.json()
        let k;
        loader.hide("loading")
        loaderBtn.hide("loading")
        for (k in contentSearch.items) {
            this.element.innerHTML += `
            <li class="card">
                <a class="cardA" target="_blank" href="${contentSearch.items[k].html_url}">
                    <img class="avatarImg" src="${contentSearch.items[k].avatar_url}">
                    <p class="userName">${contentSearch.items[k].login}</p>
                </a>
            </li>
        `
        }
    }

    clearList() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }
    }
}

const list = new List(document.querySelector('.list'));


