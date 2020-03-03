import React from "react";

// Styles Imports
import "./index.css";

class Listelement extends React.Component {
  render() {
    const iconclass = this.props.iconclass;
    const pathTo = this.props.pathTo;
    const spanclass = this.props.notification ? "bg-tertiary-04" : "noclass";

    return (
      <div className="nav-item" onClick={() => this.props.onclick(pathTo)}>
        <div className="left">
          <i className={`icon icon--${iconclass}`} />
          <span className={spanclass}></span>
          <h5>{this.props.text}</h5>
        </div>
        <i className="icon icon--arrow color-secondary-05" />
      </div>
    );
  }
}

export default Listelement;
