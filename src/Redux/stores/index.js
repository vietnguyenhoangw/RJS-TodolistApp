import { createStore } from "redux";
import reducer from "../reducers/rootReducer";

const initialState = { };
export const store = createStore(reducer, initialState);    