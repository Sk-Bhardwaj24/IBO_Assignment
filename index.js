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

function getUniquePrducts(listOfProducts) {
  let newlistOfProducts = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    // if itmes is not present in newlistOfProducts then we will push this items into our newlistOfProducts;

    if (itemchecker(newlistOfProducts, listOfProducts[i]) === false) {
      newlistOfProducts.push(listOfProducts[i]);
    } else {
      //  if items is already in newlistOfProducts then we will try to increase the quantity of that listOfProducts by latest quantity;
      for (let j = 0; j < newlistOfProducts.length; j++) {
        if (
          listOfProducts[i].productName === newlistOfProducts[j].productName
        ) {
          newlistOfProducts[j].quantity += listOfProducts[i].quantity;
        }
      }
    }
  }

  return newlistOfProducts;
}

//itemchecker for checking listOfProduct is present in newlistOfProduct or not
function itemchecker(arr, list) {
  //if list.productName will already present in arr (newlistOfProducts)  then we will return true;
  // if list.productName will not present in arr (newlistOfProduct) then we will return false
  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].productName === list.productName) {
        return true;
      }
    }
    return false;
  }
}

console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));
