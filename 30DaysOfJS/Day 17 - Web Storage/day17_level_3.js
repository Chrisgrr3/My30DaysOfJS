// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount =  {
    firstName: 'Chris',
    lastName: 'Guerrero',
    incomes: [

    ],
    expenses: [

    ],

    totalIncome = function() {
        let total = 0;
        for(let i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i]
        }
        return total
    },

    totalExpense = function {
        let total = 0
        for(let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i]
        }
        return total
    },

    accountInfo = function() {
        console.group("First Name:")
        console.log(this.firstName)
        console.groupEnd()
        console.group("Last Name:")
        console.log(this.lastName)
        console.groupEnd()
        console.group("Expenses:")
        console.log(this.expenses)
        console.groupEnd()
        console.group("Incomes:")
        console.log(this.incomes)
        console.groupEnd()
        return [this.firstName, this.lastName, this.expenses, this.incomes]
    },

    addIncome = function(i){
        this.incomes.push(i)
    },

    addExpense = function(e) {
        this.expenses.push(e)
    },

    accountBalance = function() {
        console.log(`Your current account balance is \$${this.balance}.`)
        return this.balance
    }
}