import './ElectronicsProduct.css';

const ElectronicsProduct = (props) => {
  return (
    <div className="section2-row3-product">
      <div className="row3-product-title">
        <h3>{props.title}</h3>
        <p>
          From
          <br />
          USD {props.price}
        </p>
      </div>
      <div className="row3-product-image">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default ElectronicsProduct;
