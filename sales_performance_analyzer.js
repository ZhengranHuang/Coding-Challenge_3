//Task1: Create a Function to Calculate Average Sales
let sales = [10000,10000,5000]
function calculateAverageSales(sales){
    const totalSales = sales.reduce((sum,number) => sum + number);
    return totalSales / sales.length;
}
console.log("AverageSales:$", calculateAverageSales(sales))

//Task2: Create a Function to Determine Performance Rating
function determinePerformanceRating(sales){
    if(calculateAverageSales(sales)>10000){
        return "Excellent";
    } else if(calculateAverageSales(sales)>=7000){
        return "Good";
    } else if(calculateAverageSales(sales)>=4000){
            return "Satisfactory";
    } else if(calculateAverageSales(sales)<4000){
        return "Needs Improvement";
    }}
    console.log("PerformanceRating:", determinePerformanceRating(sales))
    