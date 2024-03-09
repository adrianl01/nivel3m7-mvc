import { state } from "../../../state";

customElements.define("pro-el", class Welcome extends HTMLElement {
    connectedCallback() {
        console.log("callbackProfiles")
        this.render();
        this.addProfiles();
    }
    render() {
        const div = document.createElement("div")
        div.innerHTML = `
        <h2 class="title">Perfiles</h2> 
        <div class="feed"></div>      
        `;
        const style = document.createElement("style");
        style.textContent = `
        *{box-sizing:border-box;}
        body {margin:0}
            .root {
                width: 100%;
                font-family: 'Roboto', sans-serif;
                min-height: 667px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .title {
                font-family: 'Roboto', sans-serif;
                text-align: center;
                font-size: 80;
                background-color: white;
            }
            .feed {
                display: flex;
                flex-direction: column;
                gap: 45px;
                background-color: aquamarine;
                align-items: center;
                height: 100;
                padding: 20px;
                border-radius: 6px;
            }
        `;
        div.classList.add("root"); this.appendChild(div); this.appendChild(style)
    }
    addProfiles() {
        console.log("addProfiles")
        const currentState = state.getState()
        console.log(currentState.profiles)
        currentState.profiles.forEach(p => {
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="name">${p.name}</div>
            <div class="bio">${p.bio}</div>
            <div class="img"><a href="${p.image}"></a></div>
            `;
            const feedEl = this.querySelector(".feed")
            console.log(feedEl)
            feedEl.appendChild(div)
        })

    }
})