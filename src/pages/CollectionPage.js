import React from "react";

//import Components
import ArtCollection from "../components/artcollection.js";
import ListedNFTs from "../components/listednfts.js";
const CollectionPage = () => {
  return (
    <div>
      <ArtCollection />
      <ListedNFTs />
    </div>
  );
};

export default CollectionPage;
