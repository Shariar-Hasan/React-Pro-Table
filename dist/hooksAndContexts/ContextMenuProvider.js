import React, { createContext, useContext, useState, } from "react";
var ContextMenuAndModal = createContext({});
export var useMenu = function () { return useContext(ContextMenuAndModal); };
var ContextMenuAndModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isContextMenuOpen = _b[0], setIsContextMenuOpen = _b[1];
    var _c = useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    return (React.createElement(ContextMenuAndModal.Provider, { value: {
            isContextMenuOpen: isContextMenuOpen,
            setIsContextMenuOpen: setIsContextMenuOpen,
            isModalOpen: isModalOpen,
            setIsModalOpen: setIsModalOpen,
        } }, children));
};
export default ContextMenuAndModalProvider;
