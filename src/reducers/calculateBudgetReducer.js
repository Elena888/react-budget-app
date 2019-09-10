import {ADD_ITEM, CALC_TOTAL_EXP, CALC_TOTAL_INC} from "../actions/types";

const INITIAL_STATE = {
    allItems: {
        inc: [],
        exp: []
    },
    totalInc: 0,
    totalExp: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_ITEM:
            let allItems = { ...state.allItems };
            let item = {
                id: action.payload.id,
                description: action.payload.description,
                value: action.payload.value
            };

            allItems[action.payload.type].push(item);
            return { ...state, allItems };

        case CALC_TOTAL_INC:
            return { ...state, totalInc: action.payload };

        case CALC_TOTAL_EXP:
            return { ...state, totalExp: action.payload };

        default:
            return state
    }
}