// const formattedPrice = productPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function calculetPrice(productPrice) {
 
  const UAEPrice = productPrice;
  const IRPrice = UAEPrice * 14000;
  const UAESheppingPrice = UAEPrice * 0.5;
  const IRSheppingPrice = UAESheppingPrice * 14000;
  const deliveryPrice = IRPrice * 0.5;
  const wagePrice = IRPrice * 0.5;
  const totalPrice = IRPrice + deliveryPrice + wagePrice;
  return { totalPrice, deliveryPrice, wagePrice, UAEPrice, IRPrice, UAESheppingPrice, IRSheppingPrice };
}

export function addCommasToNumber({number }) {
  let numStr = number.toString();
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return {numStr};
}