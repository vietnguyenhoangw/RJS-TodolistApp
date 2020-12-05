import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { name: "..." };
export const store = createStore(reducer, initialState);    