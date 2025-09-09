
class User{
    static id = 1;
    static cache = {
        "admin":"efewpfkrr4r43r3r3",
    };
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }

    static checkCache(){
        console.log(this.cache) // => accesible, (if both are static then it'll be worked this keyword)
        
    }
    static hasInCache(){
        this.checkCache()
    }

    static{
        console.log('Initialized')  // => will run once time always
    }
    

    static compareByAge(user1,user2){
        return user1.age - user2.age;
    }
    
    // static compareByIncome(user1,user2){
    //     return user1.income - user2.income;
    // }
    // static compareById(user1,user2){
    //     return user1.id - user2.id;
    // }
}

const user1 = new User("Chirag Soni",20,5000);
const user2 = new User("Raj Sharma",30,10000);
const user3 = new User("Rakesh Kumar",18,20000);

const users = [user1,user2,user3];

users.sort(User.compareByAge);
// users.sort(User.compareByIncome);
// users.sort(User.compareById);
// User.hasInCache()
console.log(users);