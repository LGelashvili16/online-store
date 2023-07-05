import './DiscountedProduct.css';

const DiscountedProduct = (props) => {
  return (
    <div className="discounted-product-card">
      <div className="discounted-product-img">
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className="discounted-product-title">{props.title}</h3>
      <p className="discounted-product-discount">{props.discount}</p>
    </div>
  );
};

export default DiscountedProduct;
