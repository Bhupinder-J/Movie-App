import React from "react";

class MovieCard extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img className="img" src="https://wallpapers.com/images/hd/avengers-characters-z0b2jhtwcxv7ag5z.webp" />
                    </div>

                    <div className="right">

                        <div className="title">The Avengers</div>
                        <div className="plot">Captian America Goes aginst Iron man,
                            all the avengers splits into 2 groups to fight aginst each other.</div>
                        <div className="price">Rs. 199/-</div>

                        <div className="footer">
                            <button className="rating">9.1</button>

                            <button className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" />

                                <span className="starCount">0</span>
                            </button>

                            <button className="favourite-btn">Add to Favourites</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default MovieCard;