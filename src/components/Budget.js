import React from 'react'

const Budget = (props) => {
    const prettyNum = (num) => {
        let newNum = Math.abs(num);
        newNum = newNum.toFixed(2);
        let numSplit = newNum.split('.');
        let int = numSplit[0];
        let dec = numSplit[1];

        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }
        if(num > 0){
            return '+' + int + '.' + dec;
        }else if(num < 0){
            return '-' + int + '.' + dec;
        }else{
            return int + '.' + dec;
        }

    };
    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{props.date}</span>:
                </div>

                <div className="budget__value">
                   {prettyNum(props.budget)}
                </div>

                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value"> + {props.totalInc}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>

                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value"> - {props.totalExp}</div>
                        <div className="budget__expenses--percentage">{props.percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Budget;