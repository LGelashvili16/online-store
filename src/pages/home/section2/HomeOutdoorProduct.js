import './HomeOutdoorProduct.css';

const HomeOutdoorProduct = (props) => {
  return (
    <div className="section2-row2-product">
      <div className="row2-product-title">
        <h3>{props.title}</h3>
        <p>
          From
          <br />
          USD {props.price}
        </p>
      </div>
      <div className="row2-product-image">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default HomeOutdoorProduct;
