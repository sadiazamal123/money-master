
// Declaring variables

let incomeInput = document.getElementById('incomeInput')
let foodInput = document.getElementById('foodInput')
let rentInput = document.getElementById('rentInput')
let clothersInput = document.getElementById('clothersInput')
let calculateBtn = document.getElementById('calculateBtn')
let balanceField = document.getElementById('balanceField')
let totalExpenses = document.getElementById('totalExpenses')
let percentInput = document.getElementById('percentInput')
let saveBtn = document.getElementById('saveBtn')
let savingAmount = document.getElementById('savingAmount')
let remBalance = document.getElementById('remBalance')

// All listeners

//  calculate button
calculateBtn.addEventListener('click',function(){
    totalExpensesFunc()
    calculateBalance()
    negativeNumber()
    emptyInputValues()
})

//  save Button
saveBtn.addEventListener('click',function(){
    savePercent()
    overall()
    negativeNumber()
    emptyPercentValue()
})

// Function for checking input is empty or not
function emptyInputValues(){
    let incomeInputValue = incomeInput.value
    let foodInputValue = foodInput.value
    let rentInputValue = rentInput.value
    let clothersInputValue = clothersInput.value


    if(incomeInputValue === "" || foodInputValue === "" || rentInputValue === "" || clothersInputValue === ""){
        totalExpenses.innerText = "Please enter a number"
        balanceField.innerText = ""
    }
}

// Function for checking the percent input is empty or not
function emptyPercentValue(){
    let percentInputValue = percentInput.value

    if(percentInputValue === ""){
        savingAmount.innerText = "Please enter percentage value"
        remBalance.innerText = ""
    }
}

// Function for checking input value is a negative number or not
function negativeNumber(){
    let incomeInputValue = parseInt(incomeInput.value)
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value) 
    let percentInputValue = parseInt(percentInput.value)

    if(incomeInputValue < 0){
        totalExpenses.innerText = "Please enter a valid number"
        balanceField.innerText = ""
    }
    if(foodInputValue < 0){
        totalExpenses.innerText = "Please enter a valid number"
        balanceField.innerText = ""
    }
    if(rentInputValue < 0){
        totalExpenses.innerText = "Please enter a valid number"
        balanceField.innerText = ""
    }
    if(clothersInputValue < 0){
        totalExpenses.innerText = "Please enter a valid number"
        balanceField.innerText = ""
    }
    if(percentInputValue < 0){
        savingAmount.innerText = "Percentage cannot be negative"
        remBalance.innerText = ""
    }
    
}

// Function for calculating sum of expenses
function totalExpensesFunc(){
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value) 
    
    let overall = foodInputValue + rentInputValue + clothersInputValue

    if(overall < 0){
        totalExpenses.innerText = `Total expenses : Error` 
    }else{
        totalExpenses.innerText = `Total expenses : ` + overall
    }
    return totalExpensesFunc
}

// Function for calculating balance
function calculateBalance(){
    let incomeInputValue = parseInt(incomeInput.value)
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value)    

    let overall = incomeInputValue - (foodInputValue + rentInputValue + clothersInputValue)

    if(overall < 0){
        balanceField.innerText = `Expense cannot higher than income` 
    }
    else{
        balanceField.innerText = `Balance : ` + overall
    }
    return overall
}

// Function for calculating the percentage
function savePercent(){
    let incomeInputValue = parseInt(incomeInput.value)
    let percentInputValue = parseInt(percentInput.value)
    
    let overall = (incomeInputValue*percentInputValue)/100
    if(overall > calculateBalance()){
        savingAmount.innerText = ''
    }else{
        savingAmount.innerText = `Saving Amount : ` + overall
    }
    return overall
}

// Function for calculating the remaining balance
function overall(){
     let overall = calculateBalance()-savePercent()

    if(overall < 0){
        remBalance.innerText = `You cannot save more than expense` 
    }else{
        remBalance.innerText = `Remaining Balance : ` + overall
    }
}
