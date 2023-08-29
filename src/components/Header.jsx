import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./Navbar";

function Header({
  selectedProductCount,
  incrementSelectedProductCount,
  toggleCartModal,
  cartItems,
  clearCart,
}) {
  return (
    <div>
      <DesktopNavbar
        selectedProductCount={selectedProductCount}
        incrementSelectedProductCount={incrementSelectedProductCount}
        toggleCartModal={toggleCartModal}
        cartItems={cartItems}
        clearCart={clearCart}
        className="hidden md:block"
      />
      <Navbar className="block md:hidden" />
    </div>
  );
}

export default Header;
