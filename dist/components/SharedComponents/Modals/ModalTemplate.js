import React from "react";
import { MdClose } from "react-icons/md";
var ModalTemplate = function (_a) {
    var isOpen = _a.isOpen, handleClose = _a.handleClose, children = _a.children, title = _a.title;
    return (React.createElement("div", null,
        React.createElement("div", { className: "modal__container" },
            React.createElement("div", { className: "modal__content" },
                React.createElement("div", { className: "modal__header" },
                    React.createElement("div", { className: "modal__title" }, "Modal Title"),
                    React.createElement("div", { className: "modal__close" },
                        React.createElement("button", { type: "button", onClick: handleClose },
                            React.createElement(MdClose, null))),
                    React.createElement("div", { className: "modal__submit" },
                        React.createElement("button", null,
                            React.createElement(MdClose, null)))),
                React.createElement("div", { className: "modal__body" }, children))),
        isOpen && React.createElement("div", { className: "modal__overlay", onClick: handleClose })));
};
export default ModalTemplate;
