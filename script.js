// SpendWise JavaScript Foundation

// Store application data
let totalBudget = 0;
let totalExpenses = 0;

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Get budget from the user
let budgetInput = prompt("Enter your total budget:");

// Convert the input to a number
totalBudget = Number(budgetInput);

// Get expenses from the user
let expenseInput = prompt("Enter your total expenses:");

// Convert the input to a number
totalExpenses = Number(expenseInput);

// Calculate remaining balance
let remainingBalance = calculateRemainingBalance(
    totalBudget,
    totalExpenses
);

// Display results in the browser console
console.log("=== SpendWise Budget Summary ===");
console.log("Total Budget: " + totalBudget);
console.log("Total Expenses: " + totalExpenses);
console.log("Remaining Balance: " + remainingBalance);