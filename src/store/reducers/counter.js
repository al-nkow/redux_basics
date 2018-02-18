import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    // results: []
};

const reducer = (state = initialState, action) => {
    // switch ( action.type ) {
    //     case 'INCREMENT':
    //         return {
    //             counter: state.counter + 1
    //         } // - break здесь не нужно, потому как есть return!
    //     default:
    //         return state
    // }

    // if (action.type === 'INCREMENT') {
    if (action.type === actionTypes.INCREMENT) {
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;
        // return { - то же самое
        //     ...state,
        //     counter: state.counter + 1
        // }
    }
    // if (action.type === 'DECREMENT') {
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state, // скопировать все свойства из state
            counter: state.counter - 1 // перезаписать counter
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    // ===========================
    // if (action.type === 'STORE_RESULT') {
    //     return {
    //         ...state,
    //         results: state.results.concat({id: new Date() , value: state.counter}) // - concat создает новый массив, нет ссылки на state.results
    //     }
    // }
    // if (action.type === 'DELETE_RESULT') {
    //     // const id = 2;
    //     // const newArray = [...state.results];
    //     // newArray.splice(id, 1)
    //     const newArray = state.results.filter(res => res.id !== action.delId); // filter возвращает новый массив
    //     return {
    //         ...state,
    //         results: newArray
    //     }
    // }
    // ============================
    return state;
};

export default reducer;