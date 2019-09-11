import React from 'react'

const RenderItem = (props) => {
    const renderItem = () => {
        return props.data.map(item => {
            return (
                <div className="item clearfix" id={`${item.id}`} key={item.id}>
                    <div className="item__description">{item.description}</div>
                    <div className="right clearfix">
                        <div className="item__value">{props.sign} {item.value}</div>
                        {props.percentage &&
                            <div className="item__percentage">{props.percentage(item.value)} %</div>
                        }
                        <div className="item__delete">
                            <button className="item__delete--btn" onClick={() => props.deleteItem(item.id)}>
                                <i className="ion-ios-close-outline"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    };
    return(

        renderItem()
    )
};

export default RenderItem;