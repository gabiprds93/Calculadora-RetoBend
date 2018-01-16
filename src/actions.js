import store from "./store";

export const show = (e) =>
{
    let operation = store.getState().operation;
    if(operation == 0)
    {
        store.setState({
            operation: e,
        })
    }
    else
    {
        store.setState({
            operation: operation + e,
        })
    }
}

export const calculate = () =>
{
    let operation = store.getState().operation;
    let register = store.getState().register;    
    let total = eval(operation);
    operation += " = " + total + "\n";
    store.setState({
        operation: total,
        register: register + operation,
    })
}

export const clean = () =>
{
    store.setState({
        operation: 0,
    })
}