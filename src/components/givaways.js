import React from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Giveaways = () => {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Row className="mx-0 faq-control d-flex align-items-center justify-content-center" id="giveaways">
      <div className="col-lg-12 col-md-12" >
        <h3 className="text-center metal-load">Giveaways</h3>
        <div className="text-center description mb-5">
          We are giving huge giveaways & benefits. Join discord for more details. 
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="giveaways-section mb-5">
          <Slider {...settings}>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/winner.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                  <div className="text">1 lucky winner will receive a featured skit and a promotion on DeStorm's Instagram.</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/G8brand.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                  <div className="text">The G8brand discount% membership of orders $20 +. (At Store Location)</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/nft.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">The ability to vote on future characters and the project's direction.</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/win_tickets.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Holder that mints a football field background, win tickets to a professional sports game w/ DeStorm</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/roadmap_nft.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Owners of MetaTars enjoy perks for life at all future governance over the roadmap and Treasury Bank</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/airdrop_nft.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Free AirDrop When 50% of the MetaTars NFTs sell out, 5 lucky holders will be airdropped one free NFT.</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/partnerships.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Huge brand partnerships</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/first dibs.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-13 col-md-8">
                    <div className="text">First dibs on the Season 2 releases</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/p2e_game.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">MetaTars join the Metaverse & P2E Game</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/private_sale.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Private sale goes live, early access to buy before a mint date</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/early_airdrop.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Early airdrop $5000 to community</div>
                  </div>
                </Row>
              </div>
              {/* <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/giveaway_nft_money.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-8 col-md-8">
                    <div className="text">Give away 5% (33 NFTs) for free because I want to give love back to the community </div>
                  </div>
                </Row>
              </div> */}
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/early_giveaway.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Early giveaway drop of 33 NFTs</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/2nd_cash.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">  2nd giveaway raffle airdrop: Mint hour 3 people will win 1 ETH (each)</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/bikini_yacht_party.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">ALL holder parties in LA are invited to a large yacht bikini party.</div>
                  </div>
                </Row>
              </div>
              <div className="slider-image">
                <Row className="align-items-center">
                  <div className="col-sm-12 col-md-4">
                    <img src="/images/giveaways/free.png" className="img-fluid" />
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="text">Give away 5% (33 NFTs) for free at mint hour because I want to give love back to the community</div>
                  </div>
                </Row>
              </div>
          </Slider>
        </div>
      </div>
    </Row>
  );
};

export default Giveaways;
