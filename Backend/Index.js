const express  = require('express')
const app = express();
const bodyParser = require('body-parser');
const db = require('./Connection/Connection');
const cors =  require('cors');
const users  = require('./Routes/UserRoute/userRouter');
const foodItem = require('./Routes/FoodItemRoutes/FoodItemRouter');
const profile = require('./Routes/ProfileRoute/ProfileRouter');
const address = require('./Routes/AddressRoutes/AddressRouter');
const card = require('./Routes/CardRoutes/CardRouter');
const reviews = require('./Routes/ReviewsRoutes/ReviewsRouter');
const rest = require('./Routes/RestRoutes/RestRouter');
const category = require('./Routes/CategoryRoutes/CategoryRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', users);
app.use('/',foodItem);
app.use('/', profile);
app.use('/', address);
app.use('/', card);
app.use('/images',express.static('uploads/'));
app.use('/',reviews);
app.use('/',rest);
app.use('/',category)


app.listen(PORT,()=>{
    console.log(`server is listning at port ${PORT}`)
})
