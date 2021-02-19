const React = require('react');

class Goal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
               {this.props.name}
               {this.props.icon} 
            </div>
        );
    }
}

export default Goal;