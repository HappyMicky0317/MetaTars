import React from "react";

//import css
import './socialitem.scss';

const SocialItem = (props) => {
    return (
        <div className="social-item text-center">
            <a target="_blank" href={props.link}>
                <div className="social-image">
                    <img src={'/images/social/' + props.icon} />
                </div>
                <div className="social-name py-2">{props.name}</div>
            </a>
        </div>
    )
}

export default SocialItem;