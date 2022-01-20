import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AnimalList from "../views/AnimalList.vue";
import DetailAnimal from "../views/DetailAnimal.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/animallist",
        name: "AnimalList",
        component: AnimalList,
    },
    {
        path: "/detail",
        name: "DetailAnimal",
        component: DetailAnimal,
    },
];

const router = new VueRouter({
    routes,
});

export default router;