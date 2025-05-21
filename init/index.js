const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing = require("../models/listing.js");

const url="mongodb://127.0.0.1:27017/wonderlust";

main().then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(url);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6815b55fc62c62ad2c54c2a2"}))
    await Listing.insertMany(initData.data);
    console.log("data");
}

initDB();

