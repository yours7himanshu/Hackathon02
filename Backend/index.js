
// Fetch Tours data from the backend

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 4000

// database connection
mongoose.set("strictQuery",false);
const connect = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
console.log('MongoDB database connected....');
    }catch(err){
console.log('MongoDB database connection failed');
        
    }
}

connect();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours',tourRoute );


// const port = 9000; // Use a different port number, e.g., 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// fetch('/api/tours')
//     .then((response) => response.json())
//     .then((data) => {
//         // Handle the received data and display it in the #tours-list element
//         const toursList = document.getElementById('tours-list');
        
//         // Loop through the data and create HTML elements for each tour
//         data.forEach((tour) => {
//             const tourElement = document.createElement('div');
//             tourElement.classList.add('tour-item'); 
//             tourElement.innerHTML = `
//                 <h3>${tour.title}</h3>
//                 <p>City: ${tour.city}</p>
//                 <p>Price: $${tour.price}</p>
//                 <!-- Add more information as needed -->
//             `;
            
//             // Append the tour element to the tours list
//             toursList.appendChild(tourElement);
//         });
//     })
//     .catch((error) => {
//         console.error('Error fetching tours:', error);
//     });
