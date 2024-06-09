import React from "react";
import { MdClose } from "react-icons/md";
interface PropsType {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
}
const ModalTemplate = ({ isOpen, handleClose, children, title }: PropsType) => {
  return (
    <div>
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__header">
            <div className="modal__title">Modal Title</div>
            <div className="modal__close">
              <button type="button" onClick={handleClose}>
                <MdClose />
              </button>
            </div>
            <div className="modal__submit">
              <button>
                <MdClose />
              </button>
            </div>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
      {isOpen && <div className="modal__overlay" onClick={handleClose}></div>}
    </div>
  );
};

export default ModalTemplate;
