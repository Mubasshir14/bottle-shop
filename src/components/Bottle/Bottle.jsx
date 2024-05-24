
import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle, handleAddToCart}) => {

    const {name, price, ratings, img} = bottle;
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <h3>Ratings: {ratings}</h3>
            <img style={{ width: '200px' }} src={img}  />
            <br />
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;