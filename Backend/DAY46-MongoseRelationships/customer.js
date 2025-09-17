const mongoose=require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("Connection SuccesFull");
}
).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema= new Schema({
   item : String,
   price : Number,
});

const customerSchema= new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order"
        }
    ]
});

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

// const addCustomer = async()=>{
//     let cust1= new Customer({
//         name: "Aman Srivastava",
//     });

//     let order1 = await Order.findOne({item:"Samosa"});
    
//     let order2 = await Order.findOne({item:"Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let results = await cust1.save();
//     console.log(results);
// }

// addCustomer();

// const addOrder= async()=>{
//     let res=await Order.insertMany([
//         { item :"Samosa", price:20},
//         { item :"Cold Drink", price:40},
//         { item :"Chocolate", price:50},  
//     ]);
//     console.log(res);
// }

// addOrder();


//POPULATE
// Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.

const findCustomer = async()=>{
    //let results = await Customer.find({});
    let results = await Customer.find({}).populate("orders");
    console.log(results);
    console.log(results[0]);
}

findCustomer();
