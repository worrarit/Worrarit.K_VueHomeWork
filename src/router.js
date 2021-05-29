import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/pages/Profile.vue";
import Contact from "@/pages/Contact.vue";
import Main from "@/pages/Main.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/Profile", name: "Profile", component: Profile },
  { path: "/Contact", name: "Contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
