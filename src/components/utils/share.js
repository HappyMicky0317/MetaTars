import React, { useEffect, useState } from "react";

const Share = ({fb,tw,wa,dc,item}) => {
  return (
    <div className="share-items">
        <ul>
          {fb && (
            <li className="hidden-xs" style={{display: "inline-block !important"}}>
                  <a href={`http://www.facebook.com/sharer.php?u=${item.url}`} target="_blank"><img  src="/images/social/facebook.png" alt="facebook" /></a>
            </li>
          )}
          {tw && (
            <li className="hidden-xs" style={{display: "inline-block !important"}}>
                <a href={`http://twitter.com/share?url=${item.url}&text=${item.text}`} target="_blank"><img src="/images/social/twitter.png" alt="twitter" /></a>
            </li>
          )}
          {wa && (
             <li className="hidden-xs" style={{display: "inline-block !important"}}>
                <a href={`https://api.whatsapp.com/send?text=${item.url}&text=${item.text}`} target="_blank"><img src="/images/social/whatsapp.png" alt="whatsapp" /></a>
            </li>
          )}
          {dc && (
            <li  className="hidden-xs" style={{display: "inline-block !important"}}>
                <a className="" target="_blanck"  href="#" title="Quick Access URL" ><img src="/images/social/discord.png" alt="discord" /></a>
            </li>
          )}
            
          
           
        </ul>
    </div>
  );
};

export default Share;
