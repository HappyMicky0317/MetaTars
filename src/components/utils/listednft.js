import React from "react";
import { Link } from "react-router-dom";

const ListedNFT = (props) => {
  let heartImage;
  if (props.info.favorite == 0) {
    heartImage = <img src="/images/icons/heart-empty.png" />;
  } else {
    heartImage = <img src="/images/icons/heart-fill.png" />;
  }
  return (
    <Link to={"/collectable/" + props.info.id}>
      <div className="listednft">
        <div className="listednft-image">
          <img loading="lazy" src={`collection/${props.info.image}`} />
          <div className="favorite">
            {heartImage}
            <p>{props.info.vote}</p>
          </div>
        </div>
        <p className="listed-nft-name">DeStorm Power #{props.info.id}</p>
        <p className="price-text">Buy Price</p>
        <p className="price-value">{props.info.price} Eth</p>
      </div>
    </Link>
  );
};

export default ListedNFT;
