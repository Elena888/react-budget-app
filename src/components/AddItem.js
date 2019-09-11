import React from 'react'

class AddItem extends React.Component{
    state = {
        type: 'inc',
        description: '',
        value: ''
    };

    changeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const {type, description, value} = this.state;
        if(description.length === 0 || value.length === 0){
            return;
        }
        this.props.addNewItem(type, description, value);

        this.setState({
            type: 'inc',
            description: '',
            value: ''
        })
    };

    render() {
        return (
            <form className="add"  onSubmit={this.submitHandler}>
                <div className="add__container">
                    <select
                        className={`add__type ${this.state.type === 'exp' ? 'red-focus' : ''}`}
                        onChange={this.changeHandler}
                        value={this.state.type}
                        name="type"
                    >
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input
                        type="text"
                        className={`add__description ${this.state.type === 'exp' ? 'red-focus' : ''}`}
                        placeholder="Add description"
                        onChange={this.changeHandler}
                        value={this.state.description}
                        name="description"
                    />
                    <input
                        type="number"
                        className={`add__value ${this.state.type === 'exp' ? 'red-focus' : ''}`}
                        placeholder="Value"
                        onChange={this.changeHandler}
                        value={this.state.value}
                        name="value"
                    />
                    <button
                        type="submit"
                        className={`add__btn ${this.state.type === 'exp' ? 'red' : ''}`} >
                        <i className="ion-ios-checkmark-outline"></i>
                    </button>
                </div>
            </form>
        )
    }

}

export default AddItem;