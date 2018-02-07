var car = {
    make: 'Honda',
    'first name': 'fred',
    'last name': 'flintstone',
    drive: '4W',
    price: 100000,
    validDrivers: [ 'fred', 'wilma']
}

var fred = {
    name: 'fred',
    email: 'fred@gmail.com'
}

var wilma = {
    name: 'wilma',
    email: 'wilma@gmail.com'
}

var flintstones = [ fred, wilma ];

//Print the email addresses of the flintstones

var i = 0;
while (i < flintstones.length) {
    console.log("email: " + flintstones[i]['email']);
i++;
}
     
    
   
