import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({id: new Date() , value: action.result}) // - concat создает новый массив, нет ссылки на state.results
        }
    }
    if (action.type === 'DELETE_RESULT') {
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1)
        const newArray = state.results.filter(res => res.id !== action.delId); // filter возвращает новый массив
        return {
            ...state,
            results: newArray
        }
    }
    return state;
};

export default reducer;