import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./Navbar";

function Header({
  selectedProductCount,
  incrementSelectedProductCount,
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
        incrementSelectedProductCount={incrementSelectedProductCount}
        toggleCartModal={toggleCartModal}
        cartItems={cartItems}
        clearCart={clearCart}
        isAuthenticated={isAuthenticated}
        user={user}
        logOut={logOut}
        className="hidden md:block"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
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
