import React from "react";
import { Link } from 'react-router-dom';

// Styles Imports
import "./index.css";

class Navsubelement extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         expand: false
      }
   }

   handleClick = (str) => {
      const expanded = this.state.expand;

      this.setState({
         expand: !expanded
      })

      this.props.onclick(str);
   }

   render() {
      const {iconclass, text, sub} = this.props;
      let arrow;
      let liclass;
      let sublis;
      let bgcolor;

      if (this.state.expand) {
         arrow = "arrow-up-thick";
         liclass = "expanded";
         bgcolor = "bg-secondary-19";
         sublis = sub.map((element) =>
            <li onClick={this.props.close}>
               <Link to={`/${element.url}`}>{element.name}</Link>
            </li>
         );
      } 
      
      else {
         arrow = "arrow-down-thick";
         liclass = "closed";
         bgcolor = "";
      }

      return(
         <li className={`${liclass} ${bgcolor}`} onClick={this.handleClick}>
            <div className="menu-item">
               <div className="left">
                  <i className={`icon icon--${iconclass}`} />
                  <p>{text}</p>
               </div>
               <i className={`icon icon--${arrow}`} />
            </div>
            <ul className="sub-nav">
               {sublis}
            </ul>
         </li>
      );
   }
}

export default Navsubelement;