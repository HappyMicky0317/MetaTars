import React from "react";
import { Button, Modal } from "react-bootstrap";

const PreviewItem = ({show,handleClose,item}) => {
  return (
    <div className="item-preview-modal ">
      <Modal show={show} fullscreen={true} >
        <Modal.Body>
        <div onClick={()=>handleClose()}  style={{width:"100%",textAlign: "right",cursor:"pointer"}}>
          <img  src="/images/icons/close.png" alt="close" className="img-fluid"/>
        </div>
          <div className="item-preview">
            <img  src={item?.image} alt={item?.name} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default PreviewItem;
