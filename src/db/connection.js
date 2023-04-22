const mongoose = require ("mongoose");
const connection = async () =>  {
try {
await mongoose.connect("mongodb+srv://samrajunejo1:SamraShahzad2020@cluster0.jruqfox.mongodb.net/Project-book?retryWrites=true&w=majority"


)
console.log("connected to db");
} catch (error) {

console.log (error);

}


};
connection();









