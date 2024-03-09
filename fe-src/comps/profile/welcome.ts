import { state } from "../../../state";

customElements.define("welc-el", class Welcome extends HTMLElement {
    connectedCallback() {
        this.render();
        this.listeners();
    }
    render() {
        const div = document.createElement("div")
        div.innerHTML = `
        <h2 class="title">Crea tu Perfil</h2> 
        <form class="form">    
        <fieldset class="fieldset">              
        <label>Tu Nombre</label>
         <input class="class-input" type="text" name="input">
        </fieldset>    
        <fieldset class="fieldset">              
        <label>Tu Bio</label>
         <input class="class-input" type="text" name="input2">
        </fieldset>    
        <fieldset class="fieldset">              
        <label>Tu Foto de Perfil</label>
         <input class="class-input" type="text" name="input3">
        </fieldset>    
            <button type="submit" class="button">Enviar</button>
            </form>
            <button class="button-profiles">Ver Perfiles</button>
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
            .form {
                display: flex;
                flex-direction: column;
                gap: 45px;
                background-color: aquamarine;
                align-items: center;
                height: 100;
                padding: 20px;
                border-radius: 6px;
            }
            .label {
                font-size: 25;
            }
            .fieldset {
                border: black solid 3px;
                border-radius: 6px;display: flex;
                flex-direction: column;
            }
        `;
        div.classList.add("root"); this.appendChild(div); this.appendChild(style)
    }
    listeners() {
        const formEl = this.querySelector(".form")
        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const trgt = e.target as any;
            const name = trgt.input.value;
            const bio = trgt.input2.value;
            const image = trgt.input3.value
            state.createProfile(name, bio, image)
        })
        const profilesButton = this.querySelector(".button-profiles");
        profilesButton.addEventListener("click", (e) => {
            e.preventDefault();
            state.getProfiles();
        })
    }
})