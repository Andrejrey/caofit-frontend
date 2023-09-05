import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./Navbar";

function Header({
  selectedProductCount,
  toggleCartModal,
  cartItems,
  clearCart,
  isAuthenticated,
  user,
  logOut,
  setIsOpen,
  isOpen,
}) {
  return (
    <div>
      <DesktopNavbar
        selectedProductCount={selectedProductCount}
        cartItems={cartItems}
        clearCart={clearCart}
        isAuthenticated={isAuthenticated}
        user={user}
        logOut={logOut}
        className="hidden md:block"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        toggleCartModal={toggleCartModal}
      />
      <Navbar
        className="block md:hidden"
        isAuthenticated={isAuthenticated}
        user={user}
        logOut={logOut}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  );
}

export default Header;
