function bankM() {
  let money = 500;

  let depositCash = (cash) => (money += cash);

  let checkBalance = () => console.log(money);

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
}

const bank = bankM();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
