import { legacy_createStore as createStore } from "redux";
import { root } from './reducer';

export let store = createStore(root);
console.log(store)