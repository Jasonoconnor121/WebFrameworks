/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'Straw Bows' }); 
};
/* GET registration page */
const register = function(req, res){ 
res.render('register', { title: 'Registration' });
}; 
/* GET Classes page */
const classes = function(req, res){ 
    res.render('classTimes', { title: 'Registration' });
    }; 
module.exports = { 
index,
register,
classes
};
