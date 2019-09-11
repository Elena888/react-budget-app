import {v4} from 'uuid'
import {
    ADD_ITEM,
    CALC_TOTAL_EXP,
    CALC_TOTAL_INC,
    DELETE_ITEM,
    CURRENT_DATE,
    GET_BUDGET,
    PERCENTAGE_EXPENSES
} from "./types";

export const calculatePercentage = (value, sumIncome) => (dispatch, getState) =>{
    return (value / sumIncome) * 100;
};

export const calculateTotalInc = () => (dispatch, getState) => {
    let dataInc = getState().data.allItems.inc;
    let sum = 0;
    dataInc.map(item => {
        return sum += Number(item.value)
    });

    dispatch ({
        type: CALC_TOTAL_INC,
        payload: sum
    })
};

export const calculateTotalExp = () => (dispatch, getState) => {
    let dataExp = getState().data.allItems.exp;
    let sum = 0;
    dataExp.map(item => {
        return sum += Number(item.value)
    });

    dispatch ({
        type: CALC_TOTAL_EXP,
        payload: sum
    })
};

export const addItem = (type, description, value) => {
    value = Number(value).toFixed(2);
    return {
        type: ADD_ITEM,
        payload: {
            id: v4(),
            description,
            value,
            type
        }
    }
};

export const deleteItem = (type, id) => {
    return {
       type: DELETE_ITEM,
       payload: {
           type,
           id
       }
    }
};

export const getBudget = () => (dispatch, getState) => {
    let totalInc = getState().data.totalInc;
    let totalExp = getState().data.totalExp;
    let budget = Number(totalInc) - Number(totalExp);
    dispatch({
        type: GET_BUDGET,
        payload: budget
    })
};

export const calculatePercentageExpenses = () => (dispatch, getState) => {
    let totalInc = getState().data.totalInc;
    let totalExp = getState().data.totalExp;
    let percentage = '';
    if(totalInc > 0){
        percentage = Math.round((Number(totalExp) / Number(totalInc)) *100);
    }
    dispatch({
        type: PERCENTAGE_EXPENSES,
        payload: percentage
    })
};

export const getCurrentDate = () => {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

    let currentDate = months[month] + ' ' + year;

    return {
        type: CURRENT_DATE,
        payload: currentDate
    }
};

/*
export const addItem = (type, description, value) => (dispatch, getState) => {
    let percentage = '-';
    let dataIncome = getState().data.allItems.inc;
    let dataExpenses = getState().data.allItems.exp;
    let sumIncome = 0;

    if(dataIncome.length > 0){
        dataIncome.map(item => {
            return sumIncome += Number(item.value);
        });
        if(type === 'inc'){
            sumIncome += value;
        }

        dataExpenses.map(item => {
            return percentage = Math.round(calculatePercentage(item.value, sumIncome))
        });
    }


    if(type === 'inc'){
        dispatch({
            type: ADD_ITEM,
            payload: {
                id: v4(),
                description,
                value,
                type
            }
        })
    }else if(type === 'exp'){
        dispatch({
            type: ADD_ITEM,
            payload: {
                id: v4(),
                description,
                value,
                percentage,
                type
            }
        })
    }else{
        console.log('Error type')
    }
};*/
