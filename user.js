var users = [
    {
        "id": 1,
        "password": "123",
        "username": "goldroger",
        "name": "Gol D. Roger",
        "position": "Pirate King"
    },
    {
        "id": 2,
        "password": "123",
        "username": "frank",
        "name": "Sir Crocodile",
        "position": "Former-Shichibukai"
    },
];

exports.findAll = function() {
    return users;
};
exports.login = (username, password) => {
   const u = users.find(function(user){
        return user.username === username && user.password === password;
    });
    return u;
};
 
exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i];
    }
};