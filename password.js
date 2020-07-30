let number =document.querySelector('#numbers');
let symbol =document.querySelector('#symbols');
let letter =document.querySelector('#letters');
let toggler1 = document.getElementsByClassName('togle_button')[0];
let switchers1 = document.getElementsByClassName('switcher')[0];
let toggler2 = document.getElementsByClassName('togle_button')[1];
let switchers2 = document.getElementsByClassName('switcher')[1];
 let toggler3 = document.getElementsByClassName('togle_button')[2];
let switchers3 = document.getElementsByClassName('switcher')[2];  



number.addEventListener( 'click' , function(event){
    console.log( '>>>>>>>',switchers1)
    switchers1.classList.toggle('day');
    toggler1.classList.toggle('light_mode');
    console.log(switchers1)
});
symbol.addEventListener( 'click' , function(event){
    console.log( '>>>>>>>',switchers2)
    switchers2.classList.toggle('day');
    toggler2.classList.toggle('light_mode');
    console.log(switchers2)
});
letter.addEventListener( 'click' , function(event){
    console.log( '>>>>>>>',switchers3)
    switchers3.classList.toggle('day');
    toggler3.classList.toggle('light_mode');
    console.log(switchers3)
});