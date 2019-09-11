import {CURRENT_DATE} from "../actions/types";

export default (state = '', action) => {
    switch (action.type){
        case CURRENT_DATE:
            return { ...state, currentDate: action.payload };

        default:
            return state
    }
}