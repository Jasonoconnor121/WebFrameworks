/* GET home page */
const index = function(req, res){
    try{ 
        res.render('index', { title: 'Straw Bows',
            pageInfo: {
                email: 'Enter Email',
                password: 'Enter Password',
                button: 'Login',
                passwordHelp: 'Minimum 8 Characters - Must include 1 Symbol or Number',
                linkText: 'Register here'
            }
        });
        } catch (error) {
        console.error("Error in index controller:", error);
        res.status(500).send("Internal Server Error");
        }
};

/* GET registration page */
const register = function(req, res){ 
res.render('register', { title: 'Registration',
    pageInfo: {
        text1: 'Personal Details',
        text2: 'Minimum 8 Characters - Must include 1 Symbol or Number',
        text3: 'Address details',
        button: 'Register'
    }
 });
}; 

/* GET Classes page */
const classes = function(req, res){ 
    res.render('classTimes', { title: 'Registration',
        pageInfo: {
            card1Title: 'Beginner Archery Class',
            card1Text1: 'Are you new to archery and looking for somewhere to start?',
            card1Text2: 'Consider joining the Beginner Archery Class to get started!',
            card1Button: 'View Class Info',
            card1ID: '671e7a81a7fcdf06ba6ffe04',
            card2Title: 'Advanced Archery',
            card2Text1: 'An advanced class designed for archery aficianados to meet peers, have competions and hone their aim!',
            card2Text2: 'Sign up below',
            card2Button: 'View Class Info',
            card2ID: '671e7b80a7fcdf06ba6ffe05',
            card3Title: 'Fun Games',
            card3Text1: 'Interesting in taking aim at something more fun than a straw target? Try our fun games class, where targets include apples, baloon animals and more!',
            card3Text2: 'Sign up now!',
            card3Button: 'View Class Info',
            card3ID: '671e7c27a7fcdf06ba6ffe06'
        }
     });
}; 
module.exports = { 
index,
register,
classes
};

