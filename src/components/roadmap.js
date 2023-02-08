import React, { useState } from "react";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState([
    {
      id: "01",
      isdetailed:false,
      title: "MetaTars Genesis collection ",
      description:
        " The Genesis collection is the name of the very first collection. It consists of 666 unique characters called MetaTars",
    },
    {
      id: "02",
      title: "Giveaways",
      description: `Private sale goes live, early access to buy before mint date `,
      isdetailed:false,
     
    },
    {
      id: "03",
      isdetailed:true,
      title: "Whitelist",
      detailed:[
        {id:1,text:'Early Cash Prize of $5,000 to community' },
        {id:2,text:'Give away 10% (66 NFTs) for free at because I want to give love back to the community when 50% of the MetaTars NFTs sell out' },
        {id:3,text:'2nd CASH PRIZE giveaway raffle airdrop: Mint hour 3 people win 1 ETH (each)' },
        {id:4,text:'All holders will have access to an Exclusive beach/ bikini yacht party in LA' },
      ],
      description: `NFT Raffles and Giveaways!`,
    },
    {
      id: "04",
      isdetailed:false,
      title: "Launch",
      description:
        "Holders are provided with a platform to have their ideas heard and viewed by those who have the power to carry them to the moon.",
    },
    {
      id: "05",
      isdetailed:false,
      title: "Metaverse and NFTs",
      description:
        "MetaTars traits and attributes  will be listed On Rarity.Tools",
    },
    {
      id: "06",
      isdetailed:false,
      title: "Metaverse and NFTs",
      description:
        "Random holder will win a spot on DeStorm’s Podcast @letstalksundays, you can promote your brand or project to DeStorm's audience of over 5 million. A code linked to specific random purchased NFTs, the buyer receives a message as a winner! Also featured on DeStorm's YouTube channel, which has more than 3.02 million subscribers and is largely used for his musical activities and is registered under the handle DeStorm. The channel's videos have been seen more than 508 million times.",
    },
    {
      id: "07",
      isdetailed:false,
      title: "Metaverse and NFTs",
      description:
        "1 lucky winner will receive a featured skit as well as a promotion on DeStorm's Instagram.",
    },
    {
      id: "08",
      isdetailed:false,
      title: "Metaverse and NFTs",
      description:
        "Owners of MetaTars enjoy perks for life at all future governance over the roadmap and treasury Bank, the ability to vote on future characters and the project's direction.",
    },
    {
      id: "09",
      isdetailed:false,
      title: "Metaverse and NFTs",
      description:
        "Huge brand partnerships, First dibs on the Season 2 releases",
    },
  ]);
  return (
    <div className="timeline-control mx-0" id="roadmap">
      <h2 className="text-center metal-load">
        Roadmap 
      </h2>
      <ul className="timeline">
        {roadmap.map((item, index) => {
          return (
            <li className="ms-5 d-flex flex-row pt-5 pb-4" key={index}>
              <div className="w-25">
                {/* <h5>{item.id}</h5> */}
                <div className=""><img src='/images/aboutme/star.svg' className="star" /></div>
                {/* <div className="description1">{item.title}</div> */}
              </div>
              {item.id=='03' ?(
                 <div data-aos="zoom-in" data-aos-duration="2000" className="w-75" >{item.description}
                 <ul>
                   {item?.isdetailed && (
                     item?.detailed?.map((list) => (<li className="timeline-list" key={list.id}>{list.text}</li>))
                   )}
               </ul>
               </div>
              ):(
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-75" >{item.description}
                 <ul>
                   {item?.isdetailed && (
                     item?.detailed?.map((list) => (<li className="timeline-list" key={list.id}>{list.text}</li>))
                   )}
               </ul>
               </div>
              )}
             
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Roadmap;
