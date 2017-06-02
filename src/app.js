require('./css/style.css');
const people = require('./js/people.js');
const $      = require('jquery'); 

$.each(people, function(key, value){ 
  $('body').append('<h1>'+ people[key].name +'</h1>');
});

console.log(people[0].name);