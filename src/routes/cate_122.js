import React from "react";
import axios from "axios";
import Book from "../component/Book";

class cate_122 extends React.Component {
  state = {
    isLoading: true,
    books_one: [],
    books_two: [],
    books_three: [],
    books_four: [],
    books_five: [],
    books_six: [],
  };

  getBooks = async () => {
    const key =
      "86B493B8DCEB7413E1BAA34E236A4079861491A960C7FCB705D8887DD30AC580";
    const {
      data: { item: books },
    } = await axios.get("/bestSeller.api", {
      params: {
        key: key,
        categoryId: 122,
        output: "json",
      },
    });
    const book1 = books.slice(0, 3);
    const book2 = books.slice(3, 6);
    const book3 = books.slice(6, 9);
    const book4 = books.slice(9, 12);
    const book5 = books.slice(12, 15);
    const book6 = books.slice(15, 18);
    this.setState({
      books_one: book1,
      books_two: book2,
      books_three: book3,
      books_four: book4,
      books_five: book5,
      books_six: book6,
      isLoading: false,
    });
  };
  componentDidMount() {
    this.getBooks();
  }
  render() {
    const {
      isLoading,
      books_one,
      books_two,
      books_three,
      books_four,
      books_five,
      books_six,
    } = this.state;
    return (
      <section className="container">
        <span className="title_name">
          베스트셀러 : 국내도서 &gt; 컴퓨터/인터넷
        </span>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="bookshelf">
            <div className="bookshelf_one">
              <div className="books">
                {books_one.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
              <div className="books">
                {books_three.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
              <div className="books">
                {books_five.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
            </div>
            <div className="bookshelf_two">
              <div className="books">
                {books_two.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
              <div className="books">
                {books_four.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
              <div className="books">
                {books_six.map((books) => {
                  return (
                    <Book
                      key={books.rank}
                      cover={books.coverLargeUrl}
                      rank={books.rank}
                      title={books.title}
                      description={books.description}
                      priceStandard={books.priceStandard}
                      priceSales={books.priceSales}
                      author={books.author}
                      sale={books.link}
                      customerReviewRank={books.customerReviewRank}
                    ></Book>
                  );
                })}
                <img
                  src={require("../images/wall-bookshelf.png")}
                  className="bookshelf_img"
                  alt="bookshelf_img"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default cate_122;
