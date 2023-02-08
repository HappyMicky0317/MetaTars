import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Spinner,
  Modal,
  Carousel
} from "react-bootstrap";
// import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
import OpenLogin from "openlogin";
import axios from "axios";
import Web3 from "web3";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from "../contracts/NFT.json";
import contractAddress from "../contracts/contract-address.json";

import getWeb3 from "./../getWeb3";

// Web3Auth
const VERIFIER = {
  clientId:
    "BJF-ZVNcEH4441uHgu_WXNY4Vn96IyinyPCvSXrwNG5BpuA-2_mvu4u_eNIzo9zzPnZ-JOi0qpaWssR6H-Yv4KQ",
};

// For Live Server(ethereum) :  1
// For Test(rinkeby)         : 4
const Allowed_NETWORK_ID = "3";

// For Local Development  : http://localhost:3000
// For Test Server        : https://web.metatars.club
// For Live Server        : https://metatars.club
const homepage_url = 'https://web.metatars.club';
// const homepage_url = "http://localhost:3000";

const Mint = () => {
  useEffect(() => {
    onMount();
    getTotalSupply();
    getMintPrice();
  }, []);

  const privateKeyToAddress = require("ethereum-private-key-to-address");

  const [mintCount, setMintCount] = useState(1);
  const [mintedCount, setMintedCount] = useState(0);
  const [address, setAddress] = useState(null);
  const [privKey, setPrivKey] = useState(null);
  const [mintPrice, setMintPrice] = useState();
  const [openlogin, setOpenLogin] = useState();
  const [isLoading, setLoading] = useState(false);
  // const [installMetamask, setMetamask] = useState(false);
  const [nftdetails, setnftdetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [showSocialModal, setShowSocialModal] = useState(false);
  const [isOnMountLoading, setOnMountLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  // const socialHandleClose = () => setShowSocialModal(false);

  let token;
  let socialLoginFlag = false;

  const connectWallet = async () => {

    // Open Connet Wallet Modal
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    console.log("connect", accounts[0]);
    setAddress(accounts[0]);
  };

  const openSocialModal = async () => {
    onLogin();
    // console.log(socialLoginFlag);
    // if (socialLoginFlag) {
    //   return;
    // } else {
    //   setShowSocialModal(true);
    // }
  };

  const getTotalSupply = async () => {
    // const web3 = await getWeb3();
    const web3 = createAlchemyWeb3(
      "https://eth-ropsten.alchemyapi.io/v2/1lwaff20WG4hsYKvSZL3iEilf_xK9VfO"
    );
    const token = new web3.eth.Contract(
      TokenArtifact.abi,
      contractAddress.Token
    );
    console.log(token);
    const totalSupply = await token.methods.totalSupply().call();
    console.log(totalSupply);
    setMintedCount(totalSupply);
  };

  const onMount = async () => {
    setOnMountLoading(true);
    try {
      const openlogin = new OpenLogin({
        clientId: VERIFIER.clientId,
        network: "testnet", // valid values (testnet or mainnet)
        uxMode: "popup",
      });
  
      setOpenLogin(openlogin);
      await openlogin.init();
      console.log("dddddddddddddddddddddd", address);

      console.log(address);

      if(!address) {
        setPrivKey(openlogin.privKey);
  
        if (openlogin.privKey) {
          setAddress(privateKeyToAddress(openlogin.privKey));
          socialLoginFlag = true;
        }
      }
    } finally {
      setOnMountLoading(false);
    }
  };

  const onLogin = async (login_provider) => {
    console.log(login_provider);

    if (isLoading || privKey) return;

    // setLoading(true);
    try {
      await openlogin.login({
        // loginProvider: login_provider,
        redirectUrl: homepage_url,
      });
      setPrivKey(openlogin.privKey);

      if (openlogin.privKey) {
        setAddress(privateKeyToAddress(openlogin.privKey));
      }
    } finally {
      setLoading(false);
      // setShowSocialModal(false);
    }
  };

  // const intializeEthers = async () => {
  //   console.log("Initialze Ehters");
  //   const web3 = new Web3(window.ethereum);
  //   token = new web3.eth.Contract(TokenArtifact.abi, contractAddress.Token);
  //   console.log("intializeEthers", token);
  // };

  const getMintPrice = async () => {
    // const timestamp = await getTimeDelta();

    // if(mintedCount > 566) {
    //   setMintPrice(300000000000000000);
    // }
    // else {
    //   if(timestamp > 0 && mintedCount < 100) {
    //     setMintPrice(100000000000000000);
    //   }
    //   else {
    //     setMintPrice(200000000000000000);
    //   }
    // }
    if (mintedCount < 100) {
      setMintPrice(10000000000000000);
    } else if (mintedCount < 250) {
      setMintPrice(20000000000000000);
    } else {
      setMintPrice(30000000000000000);
    }
  };

  const getTimeDelta = async () => {
    try {
      const res = await axios.get("http://localhost:5000/time");
      return res.data;
    } catch (error) {
      return -10000;
    }
  };

  const mintNFT = async () => {
    // intializeEthers();
    if (!privKey) {
      setLoading(true);
      if (!checkNetwork()) {
        setLoading(false);
        return;
      }
      const web3 = await getWeb3();
      const token = new web3.eth.Contract(
        TokenArtifact.abi,
        contractAddress.Token
      );

      console.log("Mint NFT with Metamask", token);
      console.log("Mint NFT with Metamask address", address);

      const transaction = await token.methods
        .mint(address, mintCount)
        .send({
          gasLimit: 285000 * mintCount,
          to: contractAddress.Token, // the address of your contract
          from: address,
          value: mintPrice * mintCount,
          // "value": 100000000 * mintCount,
        })
        .once("error", (err) => {
          setLoading(false);
          console.log(
            err,
            "EEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR"
          );
        })
        .then(async (receipt) => {
          const event = receipt.events;
          const transfer = event.Transfer;

          let temp = [];

          if (transfer.length) {
            for (var i = 0; i < transfer.length; i++) {
              const tokenId = event.Transfer[i].returnValues.tokenId;
              const tokenURI = await token.methods.tokenURI(tokenId).call();

              const res = await axios.get(
                "https://gateway.pinata.cloud/ipfs/QmSTJkFAwKJv6CgUcQ5quqfkRfsYvRjjtQi1N3QQD1PVMj/3.json"
              );
              const minted_metadata = res.data;

              temp[i] = {};
              temp[i].image = minted_metadata.image;
              temp[i].description = minted_metadata.description;
              temp[i].name = minted_metadata.name;
              temp[i].url =
                "https://ropsten.etherscan.io/tx/" + receipt.transactionHash;
              setMintedCount(tokenId);
            }
          } else {
            const tokenId = event.Transfer.returnValues.tokenId;
            const tokenURI = await token.methods.tokenURI(tokenId).call();

            const res = await axios.get(
              "https://gateway.pinata.cloud/ipfs/QmSTJkFAwKJv6CgUcQ5quqfkRfsYvRjjtQi1N3QQD1PVMj/3.json"
            );
            const minted_metadata = res.data;

            temp[0] = {};
            temp[0].image = minted_metadata.image;
            temp[0].description = minted_metadata.description;
            temp[0].name = minted_metadata.name;
            temp[0].url =
              "https://ropsten.etherscan.io/tx/" + receipt.transactionHash;
            setMintedCount(tokenId);
          }
          setnftdetails(temp);

          console.log("temp", temp);
          setShowModal(true);

          getTotalSupply();
          getMintPrice();
        }); // Minting the token

      setLoading(false);
    } else {
      setLoading(true);

      console.log("mint with Web3Auth account");
      console.log(privKey);

      const web3 = createAlchemyWeb3(
        "https://eth-ropsten.alchemyapi.io/v2/1lwaff20WG4hsYKvSZL3iEilf_xK9VfO"
      );
      token = new web3.eth.Contract(TokenArtifact.abi, contractAddress.Token);
      const _mint = token.methods.mint(address, mintCount);
      const _encodedAbi = _mint.encodeABI();

      const rawTransaction = {
        from: address,
        to: contractAddress.Token,
        value: mintPrice * mintCount,
        // "value": 100000000 * mintCount,
        gas: 2000,
        gasLimit: 285000 * mintCount,
        data: _encodedAbi,
      };

      web3.eth.accounts
        .signTransaction(rawTransaction, privKey)
        .then(async (signed) => {
          const tran = web3.eth.sendSignedTransaction(signed.rawTransaction);

          tran.on("confirmation", (confirmationNumber, receipt) => {
            // console.log('confirmation: ' + confirmationNumber);
          });

          tran.on("transactionHash", (hash) => {
            console.log("hash");
            console.log(hash);
          });

          tran.on("receipt", async (receipt) => {
            console.log("reciept");
            console.log(receipt);

            console.log(isLoading);

            const tokenId = web3.utils.hexToNumber(receipt.logs[0].topics[3]);

            let temp = [];
            console.log(receipt.logs.length);
            for (var i = 0; i < receipt.logs.length; i++) {
              const tokenId = web3.utils.hexToNumber(receipt.logs[i].topics[3]);
              const tokenURI = await token.methods.tokenURI(tokenId).call();

              const res = await axios.get(
                "https://gateway.pinata.cloud/ipfs/QmSTJkFAwKJv6CgUcQ5quqfkRfsYvRjjtQi1N3QQD1PVMj/3.json"
              );
              const minted_metadata = res.data;

              temp[i] = {};
              temp[i].image = minted_metadata.image;
              temp[i].description = minted_metadata.description;
              temp[i].name = minted_metadata.name;
              temp[i].url =
                "https://ropsten.etherscan.io/tx/" + receipt.transactionHash;
              setMintedCount(tokenId);
            }

            setnftdetails(temp);

            console.log("temp", temp);
            setShowModal(true);

            getTotalSupply();
            getMintPrice();
            setLoading(false);
          });

          tran.on("error", (err) => {
            console.log(err);
            // alert("Insufficient funds for Mint.");
            toast.error("Insufficient funds for Mint.", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setLoading(false);
          });
        });
    }
  };

  const logout = async () => {
    if (privKey) {
      await openlogin.logout();
    } else {
      // disconnect();
    }
    // onMount();
    setPrivKey(null);
    setAddress(null);
  };

  const connectMetaMask = async () => {
    console.log(nftdetails);

    if (!window.ethereum) {
      toast.error("Please install Metamask!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.open("https://metamask.io/download/");
      // alert("Please install Metamask!");
      return;
    }

    const [userAddress] = await window.ethereum.enable();
    setAddress(userAddress);
    console.log(userAddress);

    // First we check the network
    if (!checkNetwork()) {
      return;
    }

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      alert("accounts Changed");
      setAddress(newAddress);
    });

    // We reset the dapp state if the network is changed
    window.ethereum.on("networkChanged", ([networkId]) => {
      alert("networkChanged");
    });
  };

  // This method checks if Metamask selected network is Localhost:8545
  const checkNetwork = () => {
    if (window.ethereum.networkVersion === Allowed_NETWORK_ID) {
      return true;
    }
    toast.error("Please connect Metamask to Ropsten!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // alert("Please connect Metamask to Ropsten");
    return false;
  };

  const loadingBtn = (
    <div className="loadingBtn">
      <div className="loader"></div>
    </div>
  );

  const loadingSpinner = (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
  const loginButton = (
    <div className="mt-5 text-center mb-3">
      <div className="d-flex flex-row justify-content-center gap-1 mt-1">
        <button
          className="btn me-2 border-success rounded-0 text-white"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
        <button
          className={`btn me-2 border-success rounded-0 text-white`}
          onClick={openSocialModal}
          disabled={isOnMountLoading}
        >
          {isOnMountLoading ? loadingSpinner : ""}
          Create your Wallet
        </button>
      </div>
    </div>
  );

  const login_loading = <div>{isLoading ? loadingBtn : loginButton}</div>;

  const logoutBtn = (
    <button
      className="btn me-2 border-success rounded-0 text-white"
      onClick={logout}
    >
      Logout
    </button>
  );

  const MintButton = (
    <div className="d-flex flex-column align-items-center mb-3">
      <p>Connected Address: {address}</p>
      {/* <p>Connected Address: {privKey}</p> */}
      <div className="mint-button mt-2">
        {isLoading ? loadingBtn : ""}
        <button
          className="btn me-2 border-success rounded-0 text-white"
          onClick={mintNFT}
        >
          Mint
        </button>
        <a
          href={
            "https://buy-sandbox.moonpay.com?apiKey=pk_test_UJZee5XHLrpFEnfHpHgBm6VufpsZ8sZ&redirectURL=" +
            homepage_url +
            "&currencyCode=eth&walletAddress=" +
            address + 
            "&quoteCurrencyAmount=" + ( mintPrice / Math.pow(10, 18) * mintCount + 0.1 )
          }
        >
          <button className="btn me-2 border-success rounded-0 text-white">
            Buy Crypto with Credit Card
          </button>
        </a>

        {privKey ? logoutBtn : logoutBtn}
      </div>
    </div>
  );

  return (
    <Row className="mx-0" className="align-items-end mint">
      <Col lg={3} className="text-end">
        <img src="/arts/art1.png" />
      </Col>
      <Col lg={6} className="text-center mint-control">
        <h3 className="metal-load">Mint MetaTars</h3>
        <p className="minted-number">
          Left NFTs <span>{666 - mintedCount}/666</span>
        </p>
        <p className="mint-price mt-2">
          {mintPrice / Math.pow(10, 18)} ETH + Gas Fee
        </p>
        <p className="mb-2">MAX 5 MetaTars per transaction</p>
        <ButtonToolbar
          className="mb-3 text-center justify-content-center"
          aria-label="Toolbar with Button groups"
        >
          <InputGroup className="me-2">
            <InputGroup.Text
              id="btnGroupAddon"
              onClick={() => setMintCount(Math.max(1, mintCount - 1))}
              className="mint-counter-minus rounded-0 border-success"
            >
              -
            </InputGroup.Text>
           <FormControl
              type="number"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
              value={mintCount}
              onChange={(e) => {
                if (e.target.value > 5) {
                  setMintCount(5);
                } else if (e.target.value < 1) {
                  setMintCount(1);
                } else {
                  setMintCount(e.target.value);
                }
              }}
              min={1}
              max={5}
              className="rounded-0 border-success mint-counter-input"
            />  
            <InputGroup.Text
              id="btnGroupAddon"
              onClick={() => setMintCount(Math.min(5, mintCount + 1))}
              className="mint-counter-plus rounded-0 border-success"
            >
              +
            </InputGroup.Text>
          </InputGroup>
          <ButtonGroup
            className="me-2 gap-2 btn-counter-group"
            aria-label="First group"
          >
            <Button
              variant="secondary"
              className="border-success rounded-0"
              onClick={() => setMintCount(1)}
            >
              1
            </Button>{" "}
            <Button
              variant="secondary"
              className="border-success rounded-0"
              onClick={() => setMintCount(2)}
            >
              2
            </Button>{" "}
            <Button
              variant="secondary"
              className="border-success rounded-0"
              onClick={() => setMintCount(3)}
            >
              3
            </Button>{" "}
            <Button
              variant="secondary"
              className="border-success rounded-0"
              onClick={() => setMintCount(4)}
            >
              4
            </Button>{" "}
            <Button
              variant="secondary"
              className="border-success rounded-0"
              onClick={() => setMintCount(5)}
            >
              5
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        {address ? MintButton : login_loading}

        <a href={"https://ropsten.etherscan.io//token/"+contractAddress.Token} target="_blank">View Contract</a>
      </Col>
      <Col lg={3} className="text-start">
        <img src="/arts/art1.png" />
      </Col>
      <Modal show={showModal} onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body className="">
          <h5 className="border-light border-bottom">Mint Success!</h5>
          
          <Carousel>
            {nftdetails &&
              nftdetails.map((item, index) => {
                return (
                  <Carousel.Item>
                    <img src={nftdetails[index].image} className="d-block w-100"/>
                    <Carousel.Caption>
                      <p>{nftdetails[index].name}</p>
                      <p>{nftdetails[index].description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <a
            className="w-100"
            href={nftdetails.length > 0 ? nftdetails[0].url : ""}
            target="_blank"
          >
            <Button
              variant="primary"
              className="border-white rounded-0 w-100"
              onClick={handleClose}
            >
              View Transaction
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
      {/* 
      <Modal
        show={showSocialModal}
        onHide={socialHandleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="bg-white">
          <Row>
            <SocialIcon network="google" onClick={() => onLogin("google")} />
            <SocialIcon
              network="facebook"
              onClick={() => onLogin("facebook")}
            />
            <SocialIcon network="github" onClick={() => onLogin("github")} />
            <SocialIcon network="twitter" onClick={() => onLogin("twitter")} />
            <SocialIcon
              network="instagram"
              onClick={() => onLogin("instagram")}
            />
            <SocialIcon
              network="linkedin"
              onClick={() => onLogin("linkedin")}
            />
          </Row>
        </Modal.Body>
      </Modal> */}
    </Row>
  );
};

export default Mint;
