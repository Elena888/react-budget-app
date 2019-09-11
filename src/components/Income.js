import React from 'react'
import RenderItem from './RenderItem'

const Income = (props) => {

    const deleteIncome = (id ) => {
        props.deleteItem('inc', id)
    };

    return(
        <div className="income">
            <h2 className="icome__title">Income</h2>

            <div className="income__list">
                <RenderItem
                    data={props.dataIncome}
                    sign="+"
                    deleteItem={deleteIncome}/>
            </div>
        </div>
    )
};

export default Income;