import Web3 from "web3";
import Web3Modal from 'web3modal'
// import WalletLink from 'walletlink'
import WalletConnectProvider from '@walletconnect/web3-provider'


const INFURA_ID = 'f7f4eac7a8494e85b09363caf6e5e0cc';
// const provider = null;

// const disconnect = async () => {
//   await provider.disconnect();
// }

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    (async () => {

      window.addEventListener("load", async () => {
        // Modern dapp browsers...
        // if (window.ethereum) {


        const provider = new WalletConnectProvider({
          infuraId: INFURA_ID,
          qrcodeModalOptions: {
            mobileLinks: [
              "rainbow",
              "metamask",
              "argent",
              "trust",
              "imtoken",
              "pillar",
            ],
          },
        });

        // const providerOptions = {
        //   walletconnect: {
        //     package: WalletConnectProvider, // required
        //     options: {
        //       infuraId: INFURA_ID, // required
        //       // qrcodeModalOptions: {
        //       //   mobileLinks: [
        //       //     "rainbow",
        //       //     "metamask",
        //       //     "argent",
        //       //     "trust",
        //       //     "imtoken",
        //       //     "pillar",
        //       //   ],
        //       // },
        //     },
        //     qrcodeModalOptions: {
        //       mobileLinks: [
        //         "rainbow",
        //         "metamask",
        //         "argent",
        //         "trust",
        //         "imtoken",
        //         "pillar",
        //       ],
        //     },
        //   },
        // }
        // let web3Modal
        // if (typeof window !== 'undefined') {
        //   web3Modal = new Web3Modal({
        //     network: 'mainnet', // optional
        //     providerOptions, // required
        //     cacheProvider: true,
        //   })
        // }
        // const provider = await web3Modal.connect()
        const web3 = new Web3(provider)
        resolve(web3)
        // }
        // // Legacy dapp browsers...
        // else if (window.web3) {
        //   // Use Mist/MetaMask's provider.
        //   const web3 = window.web3;
        //   console.log("Injected web3 detected.");
        //   resolve(web3);
        // }
        // // Fallback to localhost; use dev console port by default...
        // else {
        //   const provider = new Web3.providers.HttpProvider(
        //     "https://data-seed-prebsc-1-s1.binance.org:8545/"
        //   );
        //   const web3 = new Web3(provider);
        //   alert("Please install metamask")
        //   console.log("No web3 instance injected, using Local web3.");
        //   resolve(web3);
        // }
      });


      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: INFURA_ID, // required
          },
        },

      }
      let web3Modal
      if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
          network: 'mainnet', // optional
          providerOptions, // required
          cacheProvider: true,
        })
      }
      const provider = await web3Modal.connect()
      const web3 = new Web3(provider)
      resolve(web3)

      // if (window.ethereum) {


      // }
      // // Legacy dapp browsers...
      // else if (window.web3) {
      //   // Use Mist/MetaMask's provider.
      //   const web3 = window.web3;
      //   console.log("Injected web3 detected.");
      //   resolve(web3);
      // }
      // // Fallback to localhost; use dev console port by default...
      // else {
      //   const provider = new Web3.providers.HttpProvider(
      //     "https://data-seed-prebsc-1-s1.binance.org:8545/"
      //   );
      //   const web3 = new Web3(provider);
      //   alert("Please install metamask")
      //   console.log("No web3 instance injected, using Local web3.");
      //   resolve(web3);
      // }
    })()
  });

export default getWeb3;
// export default disconnect;