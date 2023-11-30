let array = [];
let budgetedAmount = 1000;
let avalableBalance = 0;

if (localStorage.sumTotal) {
  avalableBalance = JSON.parse(localStorage.getItem("sumTotal"));
  budgetedAmount = budgetedAmount - avalableBalance;
}

userAvalableBalance.innerHTML = `${budgetedAmount}.00`;
userTotalExpenses.innerHTML = `${avalableBalance}.00`;

if (localStorage.items) {
  array = JSON.parse(localStorage.getItem("items"));
}

const addItems = () => {
  if (
    productName.value == "" &&
    productCost.value == "" &&
    productQuantity.value == ""
  ) {
  } else {
    let total = productCost.value * productQuantity.value;

    budgetedAmount = budgetedAmount - total;
    avalableBalance = avalableBalance + total;
    console.log(typeof avalableBalance, budgetedAmount);

    userAvalableBalance.innerHTML = `${budgetedAmount}.00`;
    userTotalExpenses.innerHTML = `${avalableBalance}.00`;

    let obj = {
      Name: productName.value,
      Cost: productCost.value,
      Quantity: productQuantity.value,
      Total: total,
    };
    array.push(obj);
    productName.value = "";
    productCost.value = "";
    productQuantity.value = "";
    localStorage.setItem("items", JSON.stringify(array));
    localStorage.setItem("total", JSON.stringify(avalableBalance));
  }
};