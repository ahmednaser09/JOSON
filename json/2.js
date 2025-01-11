function countProperties(jsonObject) {
    
    const keys = Object.keys(jsonObject);
    
    
    return keys.length;
}


const person = {
    name: "Ahmed naser",
    age: 24,
    email: "ahmed@example.com"
};

const numberOfProperties = countProperties(person);
console.log(" ", numberOfProperties);  
