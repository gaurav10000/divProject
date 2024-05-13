const express = require('express');
const router = express.Router();
const state = require('../seed');
const googleai = require('@google/generative-ai');
const genAI = new googleai.GoogleGenerativeAI('AIzaSyCLKP8FDYVzUvIkh-S_5SxlDgyy7DZcecU');
let storedData;
async function run(place, days) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const prompt = `create a trip plan for ${days} day in ${place}. in the following json format "[
      "day": "{day_placeholder}",
      "Morning": {
        "time": "{time_placeholder}",
        "activity": "[activity_placeholder]",
        "duration": "{duration_placeholder}",
      },
      "Afternoon": {
        "time": "{time_placeholder}",
        "activity": "[activity_placeholder]",
        "duration": "{duration_placeholder}",
      },
      "Evening": {
        "time": "{time_placeholder}",
        "activity": "[activity_placeholder]",
        "duration": "{duration_placeholder}",
      }
    ]" also provide multiple activities activities must be procise and short do  not create additional data `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replace(/^```/, '').replace(/^json\n?/, '').replace(/```$/, '');
    text = JSON.parse(text);
    storedData = text;
    // console.log(storedData);
    return storedData;
}
// const Product=require('../Models/Product');



router.get('/', (req, res) => {
    // const products=await Product.find({});
    res.render('product/index.ejs', { states: state });
})

router.get('/page/:name', (req, res) => {
    const { name } = req.params;
    const product = state.find((product) => product.name === name);
   
    const place = product.place;
    // res.send(place);
    res.render('product/state', { states: product , places: place });
})

router.get('/trip/:days/:place', async (req, res) => {
    const { days, place } = req.params;
    console.log(days, place)
    const data = await run(place, days);
    console.log(data);
    res.json({ data: data });
    // res.render('product/trip' , {days: days , placeval: place , plannerimage: statesimg });
});
router.get('/page/place/plan', isLoggedIn , (req,res)=>{
    res.render('product/planner' , {names: ''});
});
router.get('/page/:name/plan',isLoggedIn, (req, res) => {
    const { name } = req.params;
    const product = state.find((product) => product.name === name);
    res.render('product/planner' , {names: name});
})
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

module.exports = router;