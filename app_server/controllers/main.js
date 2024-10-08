/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'Express' }); 
};
/* GET registration page */
const register = function(req, res){ 
res.render('register', { title: 'Registration' });
}; 
module.exports = { 
index,
register
};
