// Завдання 1
const users = [
    {user:`Alex`, balance: 1500},
    {user:`Mia`, balance: 200},
    {user:`Gulliver`, balance: 1700},
    {user:`Bob`, balance: 1000},
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0 );
console.log(totalBalance);

// Завдання 2
const friends = [
    {user: 'Alex', friend: 'John',},
    {user: 'Noah', friend:'Olivia',},
    {user: 'Olivia', friend:'John',},
    {user: 'Mia', friend: 'Mia',},
    {user: 'John', friend:'Olivia',},
    {user: 'Alice', friend:'Noah',},
    {user: 'Bob',friend: 'Bob',},
    {user: 'Gulliver', friend:'Olivia',},
];
const getUserFriend = (nameFriend) =>{
return friends.filter(user => user.friend === nameFriend);
};
const oliviaFriend = getUserFriend('Olivia');
console.log(oliviaFriend);

// Завдання 3
const usersFriend = [
    {name:`Alex`, friends: 7},
    {name:`Mia`, friends: 2},
    {name:`Gulliver`, friends: 9},
    {name:`Bob`,friends: 1},
];
const getUsersByFriendCount = (a, b) => {
    return usersFriend.sort((a, b) => a.friends - b.friends);
};
const user = getUsersByFriendCount(usersFriend).map(user => user.name);
console.log(user);

// Завдання 4 
const userss = [
    {user: 'Alex', skills: 'cooking',},
    {user: 'Noah', skills:'sport',},
    {user: 'Olivia',skills:'meditation',},
    {user: 'Mia', skills: 'reading',},
];
const sort = userss.sort((a, b)=>{
    const result = a.skills[0] > b.skills[0];
    if(result){
        return 1;
    }
    if(!result){
        return -1;
    }
});
const result = sort.map(sort => sort.user);
console.log(result);