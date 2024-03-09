import { Router } from "@vaadin/router"
const API_BASE_URL = "http://localhost:3002"
const state = {
    data: {
        profiles: [],
        sent: ""
    },
    listeners: [],

    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
        // --------------------------
        console.log("State Changed", this.data)
    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback)
    },
    createProfile(name: string, bio: string, image: string) {
        fetch(API_BASE_URL + "/profile", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, bio, image })
        }).then((res) => {
            return res.json()
        }).then(res => {
            console.log(res)
        })
    },
    getProfiles() {
        fetch(API_BASE_URL + "/profiles", {
            method: "get",
            headers: {
                "content-type": "application/json"
            },
        }).then((res) => {
            return res.json()
        }).then(res => {
            res.forEach(p => {
                const profiles = {
                    name: p.name,
                    bio: p.bio,
                    image: p.image
                }
                state.data.profiles.push(profiles)
                Router.go("/profiles")
            });

            // state.data.profiles.push({
            //     state.data.name = res.name,
            //     state.data.bio = res.bio,
            //     state.data.image = res.image
            // })
        })
    }


}
export { state }
