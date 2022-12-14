const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes');
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(methodOverride('_method'));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars.engine({ defaultLayout: 'main' ,
  extname:'.hbs',
  helpers: {
    sum: (a,b) => a+b},
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

const db = require('./config/db');

// Connect db
db.connect(); 
 
// var mysql = require('mysql'); // nhúng module mysql vào trang
// const con = mysql.createConnection ({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database: 'test',  //tên database muốn kết nối
// });

// con.connect(function(err) {
//   if (err) throw err;
//   else{
//     app.get('/',(req,res)=>{
//       res.send('search');
//       console.log('5');
//     })
//   }
// });


route(app); 
// app.post('/signup', function(req, res){
//   var a = {
//       b : {
//       c :'2',
//       d:'3',
//     },
//   };
//   res.render('movie',{a:a}); 
// })
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  