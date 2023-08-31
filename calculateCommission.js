const calculateEarnings = (sales) => {
    const itemValues = {
      a: 239.99,
      b: 129.75,
      c: 99.95,
      d: 350.89,
    };
  
    let totalSales = 0;
    for (const item in sales) {
      if (itemValues.hasOwnProperty(item)) {
        totalSales += itemValues[item] * sales[item];
      }
    }
  
    const baseEarnings = 200;
    const commissionRate = 0.09;
    const totalEarnings = baseEarnings + totalSales * commissionRate;
  
    console.log(`total sales: ${totalSales.toFixed(2)}`);
    console.log(`total earnings: ${totalEarnings.toFixed(2)}`);
  }
  
  // Testcase 1
  const sales1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  calculateEarnings(sales1);
  
  // Testcase 2
  const sales2 = {
    a: 12,
    b: 20,
    d: 2,
  };
  calculateEarnings(sales2);
  
  // Testcase 3
  const sales3 = {
    a: 23,
    d: 15,
  };
  calculateEarnings(sales3);
  