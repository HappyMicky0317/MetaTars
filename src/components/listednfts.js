import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import ListedNFT from "../components/utils/listednft";
import Dropdown from "react-multilevel-dropdown";
import Footer from "./footer";
import axios from "axios";
import configJson from "../config/default.json";


const ListedNFTs = () => {
  const [NFTs, setNFTs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [attributeType, setAttributeType] = useState("");
  const [attributeValue, setAttributeValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filters,setFilters]= useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  

  useEffect(() => {
    axios
      .get(`${configJson.SERVER_URL}/nfts/filters`)
      .then((res) => {
        const finalResult =  res?.data?.data?.map(d=>({
          ...d,
          value:d.type,
          attributes:(d.attributes.split(',')).map(att=>({ name:att,value:att})),
        }))
        setFilters(finalResult);
      });
  }, []);
  useEffect(() => {
    const params = {
      searchText: searchText,
      sortby: sortBy,
      attribute_type: attributeType,
      attribute_value: attributeValue,
      limit: limit,
      page: page,
    };
    axios
      .post(`${configJson.SERVER_URL}/nfts`, params)
      .then((res) => {
        res.data.length < 20 ?setLoadMore(false):setLoadMore(true);
        page > 1 ?setNFTs(NFTs.concat(res.data)):setNFTs(res.data)
      });
  }, [searchText, sortBy, attributeType, attributeValue,limit,page]);

  let filter;
  let sort;
  if (attributeType != "") {
    filter = "Filter:" + attributeValue + "(" + attributeType + ")";
  } else {
    filter = "Filter:";
  }
  if (sortBy == "") {
    sort = "Sort By: All";
  }
  if (sortBy == "toHigh") {
    sort = "Sort By:View low to high";
  }
  if (sortBy == "toLow") {
    sort = "Sort By:View high to low";
  }
  if (sortBy == "most") {
    sort = "Sort By:Most Favorite";
  }
  
  
  return (
    <div className="listed-nft-control">
      <div className="listed-nft-header d-flex align-items-lg-center align-items-md-start justify-content-between flex-lg-row flex-md-column">
        <h3>Listed NFTs</h3>
        <div className="listed-nft-gadget d-flex flex-row align-items-center gap-4">
          <Dropdown title={filter} position="right" menuClassName="wrapper">
            {filters?.map((filter,i)=>(
              <Dropdown.Item key={i}>
                    {filter.type}
                    <Dropdown.Submenu position="right">
                    {filter?.attributes?.map((attr,j)=>(
                      <Dropdown.Item
                          key={`att-${i}-${j}`}
                          onClick={() => {
                            setAttributeType(filter.type);
                            setAttributeValue(attr.name);
                            setPage(1);
                          }}
                        >
                          {attr.name}
                        </Dropdown.Item>
                    ))}
                      
                    </Dropdown.Submenu>
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Dropdown title={sort} position="right" menuClassName="wrapper">
            <Dropdown.Item
              onClick={() => {
                setSortBy("");
              }}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSortBy("toHigh");
                setPage(1);
              }}
            >
              View low to high
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSortBy("toLow");
                setPage(1);
              }}
            >
              View high to low
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSortBy("most");
                setPage(1);
              }}
            >
              Most Favorite
            </Dropdown.Item>
          </Dropdown>
          <div className="searchbar">
            <input
              placeholder="Search nfts"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setPage(1);
              }}
            />
            <img src="/images/icons/search.png" />
          </div>
        </div>
      </div>
      <Row className="listed-nft-body">
        {NFTs.map((item, index) => {
          return (
            <Col lg={3} md={4} key={index}>
              <ListedNFT info={item} />
            </Col>
          );
        })}
        {loadMore && (
          <div className="text-center mt-5">
            <button  onClick={()=>setPage(page+1)} className="loadmore-btn px-4">Load More</button>
          </div>
        )}
        
      </Row>

      <Footer />
    </div>
  );
};

export default ListedNFTs;
