import { createContext, useContext, useState } from "react";

const MenuOpenContext = createContext();

export const MenuOpenProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuOpenContext.Provider>
    );
};

export const useMenuOpen = () => {
    return useContext(MenuOpenContext);
};