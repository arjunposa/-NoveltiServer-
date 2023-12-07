const mongoose = require("mongoose");
const colors = require("colors");

async function connectToDB(){
    try{
        const conn = await mongoose.connect('mongodb+srv://nagarjunaposa9:4yymmUsAN1Q8E3ll@cluster0.c6eougy.mongodb.net/?retryWrites=true&w=majority', {});
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
    catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit();
      }
}

module.exports = connectToDB



// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {});
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.bold);
//     process.exit();
//   }
// };
// module.exports = connectDB;