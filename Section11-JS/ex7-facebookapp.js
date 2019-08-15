// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// var userObj = {
//     username= "test",
//     pass="123"
// }; ?

// {
//     username= "test",
//     pass="123"
// }

// 2. Create an array which contains the object you have made above and name the array "database".

// var database = [userObj]; ?

var database = [
    {
        username: "norah",
        password: "123"
    },
    {
        username: "lim",
        password: "000"
    },
    {
        username: "perry",
        password: "321"
    },

];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
    {
        username: "jgtd",
        timeline: "Yay",
    },
    {
        username: "err",
        timeline: "sun shining today",
    },
    {
        username: "saas",
        timeline: "wassup",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's you password?");

function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                return true;
        }
    }
    return false;
}
function signIn(username, password){
   if (isUserValid (username, password)){
           console.log(newsFeed);
   }else{
        alert("Sorry, wrong username or password!");
    }
}
   //console.log(isUserValid(username, password));
//     if (user === database[0].username && 
//         pass === database[0].password){
//             console.log(newsFeed);
//    }else{
//        alert("Sorry, wrong username or password!");
//    }
//}

signIn(userNamePrompt, passwordPrompt);