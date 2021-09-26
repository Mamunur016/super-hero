import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Developer.css'
import Rating from 'react-rating';

const Developer = (props) => {

    // destructring
    const { name, img, salary, star, experience, country, category, url, starCount } = props.developer;

    return (
        <div className="developer">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="developer-name">Name:{name}</h2>
                <h3>Catagory: <small>{category}</small></h3>

                <h4>Salary: $ {salary} </h4>
                <h4>Experience: {experience} Years</h4>

                <h4>Country:{country}</h4>
                <h4>
                    Rating:
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>({starCount})
                </h4>

                <div className="icon">
                    <a href={url} target="_blank"><i className="fas fa-link"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-facebook"></i></a>
                </div>

                <br />
                <br />
                {/* button for event handler */}
                <button
                    onClick={() => props.handleAddToCart(props.developer)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Developer;