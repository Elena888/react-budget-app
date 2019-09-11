import {
    ADD_ITEM,
    CALC_TOTAL_EXP,
    CALC_TOTAL_INC,
    DELETE_ITEM,
    GET_BUDGET,
    PERCENTAGE_EXPENSES
} from "../actions/types";

const INITIAL_STATE = {
    allItems: {
        inc: [],
        exp: []
    },
    totalInc: 0,
    totalExp: 0,
    budget: 0,
    percentage: '-'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_ITEM:
            let itemsCopy = Object.assign({}, state.allItems);
            let item = {
                id: action.payload.id,
                description: action.payload.description,
                value: action.payload.value
            };

            itemsCopy[action.payload.type].push(item);
            return { ...state, allItems: itemsCopy };

        case DELETE_ITEM:
            let allItemsType = state.allItems[action.payload.type].filter(el => {
                return el.id !== action.payload.id
            });

            let allItemsCopy = { ...state.allItems };

            allItemsCopy[action.payload.type] = allItemsType;

            return { ...state, allItems: allItemsCopy };

        case CALC_TOTAL_INC:
            return { ...state, totalInc: action.payload };

        case CALC_TOTAL_EXP:
            return { ...state, totalExp: action.payload };

        case GET_BUDGET:
            return { ...state, budget: action.payload };

        case PERCENTAGE_EXPENSES:
            return { ...state, percentage: action.payload };

        default:
            return state
    }
}