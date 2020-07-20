import React from "react";
import PropTypes from "prop-types";
import "./Book.css";
import { Link } from "react-router-dom";

function Book({
  cover,
  title,
  rank,
  description,
  priceStandard,
  priceSales,
  author,
  sale,
  customerReviewRank,
}) {
  if (title.length > 15) {
    title = title.slice(0, 15) + "..";
  }
  return (
    <div className="book">
      <Link
        to={{
          pathname: "book_detail",
          state: {
            cover,
            title,
            rank,
            description,
            priceStandard,
            priceSales,
            author,
            sale,
            customerReviewRank,
          },
        }}
      >
        <div className="book__data">
          <span className="book__data-rank">{rank}위</span>
          <div className="book__data_img">
            <img src={cover} alt={title} title={title}></img>
            <span className="book__data-title">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Book;

Book.prototype = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};
