const express = require('express');
const router = express.Router();
//URL:localhost3000
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/greenwich', (req, res) => {
  res.render('greenwichvietnam')
})

router.get('/demo', (req, res) => {
  var city = 'hanoi'
  var district = 'cau giay'
  var street = '2 Pham van bach'
  var image = 'https://ap.greenwich.edu.vn/FGW_logo_d.jpg'
  var year = '2023'   //integer
  var graduate = true   //bollean
  res.render('demo', 
    {
      city, 
      district, 
      duong: street,
      image,
      year,
      graduate,
    })
})

router.get('/test', (req, res) =>{
  var countries = ['vietnam', 'singapore', 'thailand', 'malaysia']
  var sport = ['footbal', 'badminton', 'swimming', 'volleyball']
  res.render('country', {countries, sport})
})

router.get('/admin', (req, res) => {
  res.render('admin', { layout: 'admin_layout.hbs'})
})


router.get('/', (req, res) => {
    var city = 'HN'
    res.render("home", {year: '2023'}, city)

})


module.exports = router;
