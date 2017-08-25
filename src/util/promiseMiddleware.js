function isPromise(obj) {
    return obj && typeof obj.then === "function"
}

export default PromiseMiddleware = ({dispatch}) => (next) => (action) => {
    isPromise(action) ? action.then(dispatch) : next(action)
}