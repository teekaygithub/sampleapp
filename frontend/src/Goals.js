import React from 'react';
import Goal from './Goal.js';
import GoalCreator from './GoalCreator.js';

class Goals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
    }

    componentDidMount() {
        fetch('http://www.mocky.io/v2/5eb421880e00005000081991')
        .then(response => response.json())
        .then(data => {
                //console.log(data);
                this.setState({
                    goals: data.goals
                });
            }
        )
        .catch(err => {
            console.log(err);
        })
    }

    render() {
            let goalComponents = this.state.goals.map(x => {
                //console.log(x);
                return <Goal name={x.name} icon={x.icon}/>
            });
        
        //console.log(goalComponents);

        return(
            <div>
                {goalComponents}
                <GoalCreator goals={this.state.goals} />
            </div>
        );
        }
    }

export default Goals;