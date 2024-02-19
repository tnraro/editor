import { mount } from "svelte";
import App from "./app/app.svelte";
import "./styles/global.css";

const app = mount(App, { target: document.querySelector("#app")! });

export default app;