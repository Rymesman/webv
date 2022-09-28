var database = [
    {
        username: "Omoegbeleghan Prince",
        password: "4444"
    },
    {
        username: "Omoegbeleghan Florence",
        password: "omo1ofafrica"
    },
    {
        username: "Omoegbeleghan Frank",
        password: "Waw"
    },
    {
        username: "Omoegbeleghan Mark",
        password: "842",
    },
    {
        username: "Omoegbeleghan Oseahume",
        password: "2222"
    },
    {
        username: "Ray Baba",
        password: "1234"
    },
    {
        username: "Otumala freddy",
        password: "5555"
    }
]
var newsfeed = [
    {
        username: "Samuel Issac",
        timeline: "Drinking tea early this morning"
    },
    {
        username: "Racheal Smith",
        timeline: "Rocking my new dress with swag"
    },
    {
        username: "Paul Danealla",
        timeline: "Ready for work"
    }
]

function IsUserValid(username, password) {
    for(i=0; i < database.length; i++) {
        if(database[i].username === username && password === database[i].password) {
            return true;
        } 
    }
    return false;
};

function signIn(username, password) {
    if(IsUserValid(username, password)) {
        console.log(newsfeed); 
    } else {
        alert("Sorry,wrong username and password");
    }
};

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
