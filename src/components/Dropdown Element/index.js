import React from 'react';
import './index.css';

class DropDownElement extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expand: false,
        }
    }

    handleClick = () => {
        this.setState({
            expand: !this.state.expand,
        })

        this.props.onclick();
    }

    render() {
        return(
            <>
            <div className="dropdown-item" onClick={this.handleClick}>
                <div className="left">
                    <i className={this.props.icon} />
                    <p>{this.props.label}</p>
                </div>
                <i className={this.state.expand ? "arrow icon icon--arrow-up-thick" :"arrow icon icon--arrow-down-thick"} />
            </div>
            <div className={this.state.expand ? "expand" : "collapse"}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut egestas ipsum, eu fermentum dolor. Mauris ultrices urna mauris, eu tristique libero gravida in. Pellentesque commodo iaculis orci, at placerat ante tempus ut. Sed sit amet interdum risus. Curabitur porttitor metus eget est commodo, sit amet maximus velit blandit. Phasellus vehicula tellus quis quam faucibus efficitur. Pellentesque tincidunt ligula sit amet arcu viverra, quis bibendum mauris feugiat. </p>
            </div>
            </>
        )
    }
}

export default DropDownElement;