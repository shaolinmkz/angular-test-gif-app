import { stat } from 'fs';

export const initialState = {
    searchTerm: '',
    id: '',
    singleGiphy: {},
    searchedGiphy: []
};


const giphyReducer = (state = initialState, { payload, type, searchTerm, id }) => {
    switch (type) {
        case 'SEARCH_RESULT':
            return {
                ...state,
                searchedGiphy: payload,
                searchTerm
            };

        case 'ADD_MORE_SEARCH':
            return {
                ...state,
                searchedGiphy: state.searchedGiphy.concat(payload),
            };
        case 'SINGLE_GIPHY':
            return {
                ...state,
                singleGiphy: payload,
                id
            };
        default:
            return state;
    }
};

export default giphyReducer;
