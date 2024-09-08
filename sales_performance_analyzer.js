//Task1: Create a Function to Calculate Average Sales
let sales = [0,0,0]
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

    //Task3:Create a Function to Identify Top and Bottom Performers
    const salesData = [

        { name: 'Alice', sales: [12000, 15000, 13000] },
        
        { name: 'Bob', sales: [7000, 6000, 7500] },
        
        { name: 'Charlie', sales: [3000, 4000, 3500] },
        
        { name: 'Diana', sales: [9000, 8500, 9200] },
    ]

    function findTopAndBottomPerformers(salesData){
        return salesData.reduce((result, salesperson) => {
            const totalSales = salesperson.sales.reduce((sum,sale) => sum + sale, 0);
            if (!result. topPerformer || totalSales > result. topPerformer. totalSales){
                result.topPerformer = {name: salesperson.name, totalSales}};
             if (!result. bottomPerformer || totalSales < result. bottomPerformer. totalSales){
                result.bottomPerformer = {name: salesperson.name, totalSales};
            }
        return result;
    }
    )}
    const result = findTopAndBottomPerformers(salesData);
    console.log(result)
// False output, I don't know why it just use diana's data.

    //Task4 Combine Functions to Generate a Performance Report
    function generatePerformanceReport(salesData){
        calculateAverageSales(salesData);
        determinePerformanceRating(salesData);
        findTopAndBottomPerformers(salesData);
    }
    console.log(salesData)

    //Task5:Test Your Functions with Sample Data
    //Did it during Task 3
