import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state) {
      return (
        <div className="about__container">
          <img
            src={location.state.cover}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="books__data">
            <h3 className="books__title">{location.state.title}</h3>
            <p className="book__priceStandard">
              <b>정가 :</b> {location.state.priceStandard.toLocaleString()}
            </p>
            <p className="book__priceSales">
              할인가 : {location.state.priceSales.toLocaleString()}
            </p>
            <p className="book__customerReviewRank">
              <b>평점 :</b> {location.state.customerReviewRank}
            </p>
            <p className="book__author">
              <b>저자 :</b> {location.state.author}
            </p>
            <div className="book__description-title">&nbsp;책소개</div>
            <p className="book__description">{location.state.description}</p>
            <div className="book__sale">
              <span>
                <a href="#" onClick={history.goBack}>
                  목록으로
                </a>
              </span>
              <span>
                <a
                  href={location.state.sale}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  구매하기
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
