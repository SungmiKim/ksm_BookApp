import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/cate_101">소설</Link>
      <Link to="/cate_102">시/에세이</Link>
      <Link to="/cate_118">자기계발</Link>
      <Link to="/cate_119">인문</Link>
      <Link to="/cate_122">컴퓨터/인터넷</Link>
      <Link to="/cate_124">취미/레저</Link>
      <Link to="/cate_126">건강/뷰티</Link>
      <Link to="/cate_128">여행</Link>
    </div>
  );
}

export default Navigation;
