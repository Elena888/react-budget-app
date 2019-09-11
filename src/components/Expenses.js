import React from 'react'
import RenderItem from './RenderItem'

const Expenses = (props) =>{

    const deleteExpenses = (id ) => {
        props.deleteItem('exp', id)
    };

    const calcPercentage = (value) => {
        let percentage;
        if(props.total > 0){
            percentage = Math.round((value / props.totalInc) * 100);
        }else{
            percentage = -1;
        }

        return percentage;
    };
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <div className="expenses__list">
                <RenderItem
                    data={props.dataExpenses}
                    sign="-"
                    deleteItem={deleteExpenses}
                    percentage={calcPercentage}
                />
            </div>
        </div>
    )
};

export default Expenses;