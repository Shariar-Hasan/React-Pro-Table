import React from "react";
interface PropsType {
    isOpen: boolean;
    handleClose: () => void;
    children: React.ReactNode;
    title: string;
}
declare const ModalTemplate: ({ isOpen, handleClose, children, title }: PropsType) => React.JSX.Element;
export default ModalTemplate;
