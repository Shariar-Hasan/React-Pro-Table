import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import ContextMenu from "../components/SharedComponents/ContextMenu";
interface ContextMenuAndModalType {
  isContextMenuOpen?: boolean;
  isModalOpen?: boolean;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  setIsContextMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
const ContextMenuAndModal = createContext<ContextMenuAndModalType>({});
export const useMenu = () => useContext(ContextMenuAndModal);
const ContextMenuAndModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ContextMenuAndModal.Provider
      value={{
        isContextMenuOpen,
        setIsContextMenuOpen,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {/* Modal Component */}
      <ContextMenu />
      {children}
    </ContextMenuAndModal.Provider>
  );
};

export default ContextMenuAndModalProvider;
