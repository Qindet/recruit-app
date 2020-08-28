import {createStore,applyMiddleware,compose} from 'redux'
import {rootReducer} from './reducers/index'
import thunk from 'redux-thunk'



const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default store