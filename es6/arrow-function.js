
const number_list = [1, 2, 3, 4, 5];
const numbers = number_list.map(number => number * 2 );
console.log(numbers);

const alert_my_name = (name) => console.log(`Hello ${name}`);
alert_my_name('Minhaj');

const race = "100m";
const winners = ['Minhaj', 'Sohel', 'Kabiraj'];
const win = winners.map((winner, i) => ({name : winner, race, place : i+1}));
console.table(win);

const ages = [20, 12, 30, 40, 50, 60 , 40, 35, 89];

const old = ages.filter(age => age >= 40);
console.log(old);

const header = document.querySelector('.text-center');
header.addEventListener('click', function(){
    this.classList.toggle('test');
});





