// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: '',
    lastName: '',
    incomes : [
        {
            income: 0,
            description: ''
        }
    ],
    expenses : [
        {
            income: 0,
            description: ''
        }
    ],
    totalIncome : function() {

    },
    totalExpense: function() {

    },
    accountInfo: function() {

    },
    addIncome: function() {

    },
    addExpense: function() {

    },
    accountBalance: function() {

    }
}

// ** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// 2. Imagine you are getting the above users collection from a MongoDB database. 
 
    // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  

// console.log(users)
function signUp(email, userName, password) {
    let userExists = false;

    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'

    let date = new Date();
    let dateString = `${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} AM`

    for(let i = 0; i < users.length; i++) {
        if(users[i].email.toLowerCase() == email.toLowerCase()) {
            userExists = true;
        }
    }
    if(userExists) {
        console.log(`${email} already has an account. Please sign in instead.`)
    } else {
        let newUser = {
            _id: (function(letters) {
                let result = ''
                for(let i = 0; i < 6; i++) {
                    result += letters.charAt(Math.floor(Math.random() * letters.length))
                }
                return result;
            })(chars),
            userName: userName,
            email: email,
            password: password,
            createdAt: dateString,
            isLoggedIn: true
        }
        users.push(newUser);
    }
}

signUp('chrisgrr3@gmail.com', 'cg123', 'Alabaster')
// signUp('ChrISgrr3@gMaIl.com', 'cg1222', 'Coconuts')

    // b. Create a function called signIn which allows user to sign in to the application

function signIn(email, password) {
    let userExists = false;
    let userIndex;
    for(let i = 0; i < users.length; i++) {
        if(users[i].email == email){
            userExists = true
            userIndex = i;
            break
        }
    }
    if(userExists && password == users[userIndex].password) {
        users[userIndex].isLoggedIn = true;
        console.log(`You have successfully logged in.`)
        // console.log(users[userIndex])
    } else if(userExists && password !== users[userIndex].password) {
        console.log(`You have input the wrong password for the account belonging to ${email}`)
    } else {
        console.log('The user does not exist. Please sign up instead.')
    }
}
signIn('chrisgrr3@gmail.com', 'Alabaster')


// 3. The products array has three elements and each of them has six properties. 

    // a. Create a function called rateProduct which rates the product 
    
function rateProduct(productId, userEmail, rating) {
    if(rating > 5 | rating < 0) {
        console.log('You may only rate within a scale of 0 - 5.')
        return -1;
    }
    let userIndex;
    let productIndex;
    let userExists = false;
    let productExists = false
    for(let user in users) {
        if(users[user].email == userEmail) {
            userIndex = user
            userExists = true;
            break;
        }
    }
    if(userExists == false) {
        console.log('The user does not exist, so they can\'t leave a rating.')
        return -1;
    }
    for(let product in products) {
        if(products[product]._id == productId) {
            productIndex = product
            productExists = true
            break;
        }
    }
    if(productExists == false) {
        console.log(`The product does not exist. A rating could not be left.`)
        return -1;
    }
    products[productIndex]['ratings'].push({userId: users[userIndex]._id, rate: rating})
    console.log(products[productIndex]['ratings'])
}
rateProduct('hedfcg', 'chrisgrr3@gmail.com', 4)


    // b. Create a function called averageRating which calculate the average rating of a product

function averageRating(productId) {
    let productIndex;
    let sum = 0
    let count = 0
    for(let i = 0; i < products.length; i++) {
        if(products[i]._id == productId) {
            productIndex = i;
        }
    }
    products[productIndex]['ratings'].forEach(function(el) {
        sum += el.rate;
        count ++;
    })
    const average = parseFloat(sum / count);
    console.log(average)
}
averageRating('hedfcg')


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

