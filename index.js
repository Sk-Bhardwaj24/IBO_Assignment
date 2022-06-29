const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(listOfProdcuts) {
  let product_obj = {};

  for (let i = 0; i < listOfProdcuts.length; i++) {
    if (product_obj[listOfProdcuts[i].productName] === undefined) {
      product_obj[listOfProdcuts[i].productName] = 1; //if productName is not in product_obj I am initializing to 1;
    } else {
      product_obj[listOfProdcuts[i].productName]++; //if productName is already in product_obj I am increasing the count of that productName;
    }
  }

  return product_obj;
}

console.log(getUniqueProductCount(listOfProducts));
