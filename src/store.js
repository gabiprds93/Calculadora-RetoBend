import createStore from "redux-zero";

const initialState = 
{
    operation: 0,
    register: "",
};

const store = createStore(initialState);

export default store;