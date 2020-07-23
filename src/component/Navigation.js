import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  handleToggle = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="dropdown-icon">
          <i className="fas fa-bars" onClick={this.handleToggle}></i>
        </div>
        <div
          className={
            "dropdown-menu " + (this.state.isOn ? "btn-hidden" : "btn-show")
          }
        >
          <Link to="/" onClick={this.handleToggle}>
            Home
          </Link>
          <Link to="/cate_101" onClick={this.handleToggle}>
            소설
          </Link>
          <Link to="/cate_102" onClick={this.handleToggle}>
            시/에세이
          </Link>
          <Link to="/cate_118" onClick={this.handleToggle}>
            자기계발
          </Link>
          <Link to="/cate_119" onClick={this.handleToggle}>
            인문
          </Link>
          <Link to="/cate_122" onClick={this.handleToggle}>
            컴퓨터/인터넷
          </Link>
          <Link to="/cate_124" onClick={this.handleToggle}>
            취미/레저
          </Link>
          <Link to="/cate_126" onClick={this.handleToggle}>
            건강/뷰티
          </Link>
          <Link to="/cate_128" onClick={this.handleToggle}>
            여행
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
