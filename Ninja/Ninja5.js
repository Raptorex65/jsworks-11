// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location:'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'] 
};

console.log(user);
console.log(user.name);

// dot notation
user.age = 35;
console.log(user.age);

// square bracket notation
console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

// storing objects in an array...
const blogs = [
    { title: 'why mac and cheese rules', likes:30},
    { title: '10 things to make with marmite', likes: 50 }
];


//function within object 
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location:'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    // function kısa şekli
    logout(){
        console.log('the user logged out');
    }
    logblogs(){
        //console.log(this.blogs);
        console.log('this user has written the foollowing blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};


