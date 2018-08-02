let express = require("express");
let users = require("./state").users;

const app = express();

app.get("/users",function(req,res,next){   
    return res.send(users);
});

app.get("/users/1",function(req,res,next){
 return res.send(users[0]);
});

app.post("/users", function(req,res,next){
    let newUser = {
        "_id": 1,
        "name": "Melinda Carbonite",
        "occupation": "Informant",
        "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
      };
      users.push(newUser);
      res.json(newUser);
})

app.put("/users/1", function(req,res,next){
    users[0].name = "hannah harrison";
    res.json(users[0]);
})

app.delete("/users/1", function(req,res,next){
    users.pop()
    return res.send("deleted");
})

app.listen(3002, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3002");
    })

// app.use(function(request,response,next){


    // if (request.path == "/users" && request.method == "GET") { 
    //     return response.send(users);
    // } 
    // if (request.path == "/users/1" && request.method == "GET") { 
    //     return response.send(users[3]);
    // } 
    // if (request.path == "/users" && request.method == "POST") { 
    //     users.push({
    //         "_id": 6,
    //         "name": "Dave",
    //         "occupation": "student",
    //         "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
    //    })
    // } 

    // if (request.path == "/users/1" && request.method == "PUT") { 
    //    users[0].name = "hannah harrison";
      
    // } 
    // if (request.path == "/users/1" && request.method == "DELETE") { 
    //     users.pop()
    //     return response.send("deleted");
        
    // } 
   

//     return response.send(users);
//  });
 
//     if (request.path == "/users" && request.method == "GET") { 
//         return response.send(users);
//     } 
//     if (request.path == "/users/1" && request.method == "GET") { 
//         return response.send(users[3]);
//     } 
//     if (request.path == "/users" && request.method == "POST") { 
//         users.push({
//             "_id": 6,
//             "name": "Dave",
//             "occupation": "student",
//             "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
//        })
//     } 

//     if (request.path == "/users/1" && request.method == "PUT") { 
//        users[0].name = "hannah harrison";
      
//     } 
//     if (request.path == "/users/1" && request.method == "DELETE") { 
//         users.pop()
//         return response.send("deleted");
        
//     } 
   

//     return response.send(users);
//  });
 

