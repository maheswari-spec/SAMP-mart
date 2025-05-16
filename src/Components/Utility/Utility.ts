export const BUTTON_TEXT = {
  viewCheckout: "View CHECKOUT",
  returnHome: "Return to Home",
  goShopping: "Go to Shopping",
  orderConfirmed: "Your order has been confirmed",
  orderIdLabel: "Order ID",
  checkoutSummary: "Checkout Summary"
};

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export const generateOrderId = (): string => {
  return 'ORD-' + Math.floor(100000 + Math.random() * 900000).toString();
};

export const ABOUT_TEXT={
    about:"  About",
    name:"SAMPMART",
    welcome:" Welcome to ",
    platform:", your trusted eCommerce platform",
    easy:'We make your Shopping easy',
    our:'OUR',
    vision:'VISION',
    choose:" Why Choose SAMPMART?",
    chooseDesp:"At SAMPMART, we provide the best products with a commitment to quality, affordability, and fast delivery.",
    commitment:"   Our Commitment",
    commitmentDescp:"We are dedicated to providing you with a seamless shopping experience that ensures satisfaction every time you shop.   ",
    mission:"MISSION",
    missionDescp:"Our mission is to redefine the online shopping experience by offering unbeatable value, unmatched customer service, and a seamless platform for everyone. We aim to empower customers with convenience and trust through every purchase.",
    shopping:"       Go to Shopping"
}