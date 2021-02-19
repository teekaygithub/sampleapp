import React from 'react';

class GoalCreator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: ""
        }
    }

    handleClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.props.goals.push(e.target.value);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} ></input>
                    <input type="submit" onClick={this.handleClick}></input>
                </form>
                
            </div>
        );
    }
}

export default GoalCreator;