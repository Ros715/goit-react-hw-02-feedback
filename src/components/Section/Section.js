import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

class Section extends React.Component {
  /*constructor(props) {
    super(props);
    //console.log(this);
  }*/

  render() {
    return (
      <div>
        <p className={styles.title}>{this.props.title}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
