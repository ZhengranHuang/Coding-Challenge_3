//Task1: Create a Function to Calculate Average Sales
let sales = [200,100,100,200]
function calculateAverageSales(sales){
    const totalSales = sales.reduce((sum,number) => sum + number);
    return totalSales / sales.length;
}
console.log("AverageSales:$", calculateAverageSales(sales))
