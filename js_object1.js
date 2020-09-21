// We will create an object in which we will put properties and methods

var userOne = {
    email: 'One@gmail.com',
    name: 'harshit',
    username: 'Harsh_it',
    password: 'pass123'

};

function check(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var gmail = document.getElementById('gmail').value;

    if(user===userOne.username && pass===userOne.password && gmail ===userOne.email ){
        alert('Data Matched User logged In');
        console.log('userOne Logged In just Now');
        return true;
    }
    else{
        alert('Data Not Matched');
        return false;
    }

}