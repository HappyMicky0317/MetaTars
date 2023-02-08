import { useState, useEffect } from "react";
import OpenLogin from "openlogin";
import eccrypto from "@toruslabs/eccrypto";
import LoadingOverlay from "react-loading-overlay";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
import Web3 from "web3";
import axios from 'axios';
// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from "../contracts/NFT.json";
import contractAddress from "../contracts/contract-address.json";

import { Modal, Button, Spinner } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Allowed_NETWORK_ID = "4";

// Web3Auth
const VERIFIER = {
  clientId:
    "BJF-ZVNcEH4441uHgu_WXNY4Vn96IyinyPCvSXrwNG5BpuA-2_mvu4u_eNIzo9zzPnZ-JOi0qpaWssR6H-Yv4KQ",
};

function Login() {

  useEffect( async () => {
    onMount();    
    // await intializeEthers();
    // await getTokenData();
  }, []);


  const privateKeyToAddress = require("ethereum-private-key-to-address");

  const [isLoading, setLoading] = useState(false);
  const [openlogin, setOpenLogin] = useState();
  const [privKey, setPrivKey] = useState();

  const [address, setAddress] = useState();

  const [mintCount, setMintCount] = useState(1);
  // The info of the token (i.e. It's Name and symbol)
  const [tokenData, setTokenData] = useState({
    name: "",
    symbol: "",
  });

  let token;

  const intializeEthers = async () => {
    console.log("Initialze Ehters");
    const web3 = new Web3(window.web3.currentProvider);
    token = new web3.eth.Contract(TokenArtifact.abi, contractAddress.Token);
    console.log("intializeEthers", token);
  };

  // The next two methods just read from the contract and store the results
  // in the component state.
  const getTokenData = async () => {
    const name = await token.methods.name().call();
    const symbol = await token.methods.symbol().call();
    console.log(name, symbol);
    setTokenData({ ...tokenData, ["name"]: name, ["symbol"]: symbol });
  };


  const onMount = async () => {
    setLoading(true);

    try {
      const openlogin = new OpenLogin({
        clientId: VERIFIER.clientId,
        network: "testnet", // valid values (testnet or mainnet)
        uxMode: "popup",
      });
      setOpenLogin(openlogin);

      await openlogin.init();
      setPrivKey(openlogin.privKey);

      if(openlogin.privKey){
        setAddress(privateKeyToAddress(openlogin.privKey));
      }
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (login_provider) => {

    if (isLoading || privKey) return;

    setLoading(true);
    try {
      await openlogin.login({
        loginProvider: login_provider,
        // redirectUrl: "https://metatars.club/",         // For Live Server
        redirectUrl: "https://web.metatars.club/",     // For Test Server
        // redirectUrl: "http://localhost:3000",       // Developer
      });
      setPrivKey(openlogin.privKey);
      
      if(openlogin.privKey){
        setAddress(privateKeyToAddress(openlogin.privKey));
      }
    } finally {
      setLoading(false);
    }
  };

  
  const connectMetaMask = async () => {

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

  const getTimeDelta = async () => {
    await axios.get('http://localhost:5000/api/time')
      .then(res => {
        console.log(res);
        return res;
      })
  }

  const getPrice = async () => {
    // const timestamp = await getTimeDelta();
    const timestamp = 5000;
  
    const web3= new Web3(window.ethereum);
    token = new web3.eth.Contract(TokenArtifact.abi, contractAddress.Token);

    const totalSupply = await token.methods.totalSupply().call();

    if(totalSupply > 566) {
      return 300000000000000000;
    }
    else {
      if(timestamp > 0 && totalSupply < 100) {
        return 100000000000000000;
      }
      else {
        return 200000000000000000;
      }
    }
  }

  const mintNFT = async () => {
    console.log("Initialze Ehters");
              
    const mintCost = await getPrice();


    try {
      if (!checkNetwork()) {
        return;
      }
      if(privKey) {
        return ;
      }
      const transaction = await token.methods
        .mint(address, mintCount)
        .send({
          gasLimit: 285000 * mintCount,
          to: contractAddress.Token, // the address of your contract
          from: address,
          value: mintCost * mintCount,
        })
        .once("error", (err) => {
          console.log(err, "EEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR");
        })
        .then((receipt) => {
          alert("Your NFT has been successfully minted!");
        }); // Minting the token

      const tx = await transaction.wait(); // Waiting for the token to be minted

      const event = tx.events[0];
      const value = event.args[2];
      const tokenId = value.toNumber(); // Getting the tokenID

      const tokenURI = await token.tokenURI(tokenId); // Using the tokenURI from ERC721 to retrieve de metadata
      console.log(tokenURI);
    } catch (error) {
      if(!privKey) {
        return ;
      }

      const web3= createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/JBBBmZoQWxxNLJIW5yYewrIPALpX3zhW");
      token = new web3.eth.Contract(TokenArtifact.abi, contractAddress.Token);
      const _mint = token.methods.mint(address, mintCount);
      const _encodedAbi = _mint.encodeABI();
      console.log(_encodedAbi);

      const rawTransaction = {
        "from": address,
        "to": contractAddress.Token,
        "value": mintCost * mintCount,
        "gas": 2000,
        "gasLimit": 285000 * mintCount, 
        "data": _encodedAbi
      };

      web3.eth.accounts.signTransaction(rawTransaction, privKey)
        .then(async (signed) => {
          const tran = web3.eth.sendSignedTransaction(signed.rawTransaction);

          tran.on('confirmation', (confirmationNumber, receipt) => {
            // console.log('confirmation: ' + confirmationNumber);
          });
      
          tran.on('transactionHash', hash => {
            console.log('hash');
            console.log(hash);
          });
      
          tran.on('receipt', receipt => {
            console.log('reciept');
            console.log(receipt);
            alert("https://rinkeby.etherscan.io/tx/"+receipt.transactionHash);
          });
      
          tran.on('error', console.error);
        })

    }
  };
  
  // This method checks if Metamask selected network is Localhost:8545
  const checkNetwork = () => {
    if (window.ethereum.networkVersion === Allowed_NETWORK_ID) {
      return true;
    }
    alert("Please connect Metamask to Ropsten");
    return false;
  };
   
  const logout = async () => {
    await openlogin.logout();
    onMount();
    setPrivKey(null);
    setAddress(null);
  }

  const loginButton = (
    <div className="mt-5">
      <h4>Connect with</h4>
      <div className="d-flex flex-row justify-content-start gap-2 mt-3">
        <div>
          <img src="/images/icons/metamask.png" onClick={connectMetaMask} />
        </div>
        <SocialIcon network="google" onClick={() => onLogin("google")} />
        <SocialIcon network="facebook" onClick={() => onLogin("facebook")} />
        <SocialIcon network="github" onClick={() => onLogin("github")} />
        <SocialIcon network="twitter" onClick={() => onLogin("twitter")} />
        <SocialIcon network="instagram" onClick={() => onLogin("instagram")} />
        <SocialIcon network="linkedin" onClick={() => onLogin("linkedin")} />
      </div>
    </div>
  );
  
  const logoutbtn = (
    <button className="btn btn-primary me-2"
    onClick={logout}
  >Logout</button>
  )
  const MintButton = (
    <div className="d-flex flex-column align-items-center">
      {privKey ? logoutbtn : ""}

      <p>Connected Address: {address}</p>
      <p>Connected Address: {privKey}</p>
      <div className="d-flex flex-row align-items-center justify-content-stretch mint-control py-2">
        <button
          className="btn btn-primary me-2"
          onClick={() => setMintCount(Math.max(mintCount - 1, 1))}
        >
          {" "}
          -{" "}
        </button>
        <input
          className="btn "
          max={5}
          min={1}
          type="number"
          value={mintCount}
          readOnly={true}
        />
        <button
          className="btn btn-primary ms-2"
          onClick={() => setMintCount(Math.min(mintCount + 1, 5))}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="mint-count-button-group d-flex flex-row gap-2 mt-2">
        <button className="btn" onClick={() => setMintCount(1)}>
          1
        </button>
        <button className="btn" onClick={() => setMintCount(2)}>
          2
        </button>
        <button className="btn" onClick={() => setMintCount(3)}>
          3
        </button>
        <button className="btn" onClick={() => setMintCount(4)}>
          4
        </button>
        <button className="btn" onClick={() => setMintCount(5)}>
          5
        </button>
      </div>
      <div className="mint-button mt-2">
        <button className="btn me-2" onClick={mintNFT}>Mint</button>
        <a target={"_blank"} href={"https://buy-sandbox.moonpay.com?apiKey=pk_test_UJZee5XHLrpFEnfHpHgBm6VufpsZ8sZ&redirectURL=10.10.13.155:3000&baseCurrencyCode=usd&currencyCode=eth&walletAddress="+address}><button className="btn">Buy Crypto with Credit Card</button></a> 
      </div>
    </div>
  );
  if (isLoading)
    return (
      <Button variant="primary" className="mt-3" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  return <div>{address ? MintButton : loginButton}</div>;
}

export default Login;
