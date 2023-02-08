import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Row className="mx-0 faq-control d-flex align-items-center justify-content-center">
      <div className="col-lg-12 col-md-12">
        <h3 className="text-center metal-load">FAQ</h3>
        <div className="text-center description mb-5">
          Here are some of the most faq's about METATARS
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <Accordion>
          <Row className="">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is an NFT?</Accordion.Header>
                <Accordion.Body>
                  An NFT, or non-fungible token, is a unique unit of data that uses technology to log and authenticate digital content, such as films, songs, and photographs, on cryptocurrency blockchains, primarily Ethereum. The most significant impact of NFTs is that they make it simple to own and sell digital content.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is MetaTars?
                </Accordion.Header>
                <Accordion.Body>
                  DeStorm Power created Metatars as digital artwork. He is a self-made artist with influence in the metaverse who believes in new technologies. People turn to these for innovative new art, music, and technology concepts.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why should I invest in MetaTars NFTs at all?</Accordion.Header>
                <Accordion.Body>
                  It's never a terrible idea to invest in collectables with provenance and worth. It should be emphasised that the value of collectables might be subjective. Over the course of a few days, certain NFT collectables have increased in value by over 100 times their original value.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="3">
                <Accordion.Header>When Will MetaTars Be Officially Launched?</Accordion.Header>
                <Accordion.Body>
                  Dates for the pre-sale and public sale will be announced in the coming days. Follow MetaTars on social media and on Discord to stay up to date!
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="4">
                <Accordion.Header>How can I mint MetaTars NFT?</Accordion.Header>
                <Accordion.Body>
                  On our website, you'll be able to mint MetaTars NFT. On the launch date, this feature will be available on the website.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="5">
                <Accordion.Header>What Does the Future Hold for MetaTars?</Accordion.Header>
                <Accordion.Body>
                  MetaTars aren't just another NFT art project. We intend to create a MetaTars community based on interaction and utility, individual and group incentives, collaboration, and personal and financial growth opportunities, among other things.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="6">
                <Accordion.Header>How can I become involved with the MetaTars NFT project?</Accordion.Header>
                <Accordion.Body>
                  Go to the Discord server, join the chat, invite your friends, make new crypto friends, and share your thoughts with us!
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="7">
                <Accordion.Header>How Do I Get On The Whitelist?</Accordion.Header>
                <Accordion.Body>
                  On our Discord, you can discover all precise and up-to-date information on the Whitelist.
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="8">
                <Accordion.Header>What Blockchain Hosts The Project?</Accordion.Header>
                <Accordion.Body>
                  MetaTars is based on Ethereum.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Accordion.Item eventKey="9">
                <Accordion.Header>What does the term "MINT" mean?</Accordion.Header>
                <Accordion.Body>
                  In simpler terms, "minting" an NFT entails putting a token on the blockchain and making it available for purchase.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Row>





        </Accordion>
      </div>
    </Row>
  );
};

export default Faq;
