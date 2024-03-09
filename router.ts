import { Router } from "@vaadin/router";
import "./fe-src/comps/profile/welcome"
import "./fe-src/comps/profile/profiles"

const root = document.querySelector(".root")
const router = new Router(root);
router.setRoutes([
    { path: "/", component: "welc-el" },
    { path: "/profiles", component: "pro-el" },
]);