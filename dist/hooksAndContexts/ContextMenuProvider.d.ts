import React, { Dispatch, SetStateAction } from "react";
interface ContextMenuAndModalType {
    isContextMenuOpen?: boolean;
    isModalOpen?: boolean;
    setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
    setIsContextMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
export declare const useMenu: () => ContextMenuAndModalType;
declare const ContextMenuAndModalProvider: ({ children, }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export default ContextMenuAndModalProvider;
