import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;

store.dispatch( addArticle({ title: 'React Redux Tutorial for beginners', id: 1}));