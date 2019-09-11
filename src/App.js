import React from 'react';
import { connect } from 'react-redux'
import AddItem from './components/AddItem'
import Income from './components/Income'
import Expenses from './components/Expenses'
import Budget from './components/Budget'
import { addItem, deleteItem, calculateTotalExp, calculateTotalInc, getCurrentDate, getBudget, calculatePercentageExpenses } from "./actions";
import './App.css'

class App extends React.Component{

    componentDidMount(){
        this.props.getCurrentDate();
    }

    addNewItem = (type, desc, value) => {
        this.props.addItem(type, desc, value);
        if(type === 'inc'){
            this.props.calculateTotalInc();
        }else{
            this.props.calculateTotalExp();
        }
        this.props.getBudget();
        this.props.calculatePercentageExpenses()
    };

    deleteItem = (type, id) => {
        this.props.deleteItem(type, id);
        if(type === 'inc'){
            this.props.calculateTotalInc();
        }else{
            this.props.calculateTotalExp();
        }
        this.props.getBudget();
        this.props.calculatePercentageExpenses()
    };

    render() {
        return (
            <React.Fragment>
                <Budget
                    date={this.props.currentDate}
                    totalInc={this.props.totalInc}
                    totalExp={this.props.totalExp}
                    budget={this.props.budget}
                    percentage={this.props.percentage}
                />
                <div className="bottom">
                    <AddItem addNewItem={this.addNewItem}/>
                    <div className="container clearfix">
                        <Income dataIncome={this.props.dataInc} deleteItem={this.deleteItem}/>
                        <Expenses dataExpenses={this.props.dataExp} totalInc={this.props.totalInc} deleteItem={this.deleteItem}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataInc: state.data.allItems.inc,
        dataExp: state.data.allItems.exp,
        totalInc: state.data.totalInc,
        totalExp: state.data.totalExp,
        budget: state.data.budget,
        percentage: state.data.percentage,
        currentDate: state.currentDate.currentDate
    }
};

export default connect(mapStateToProps, { addItem, deleteItem, calculateTotalExp, calculateTotalInc, getCurrentDate, getBudget, calculatePercentageExpenses })(App);
