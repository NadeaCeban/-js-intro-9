// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;
for(const city of cities){
    if(city.length % 2 !== 0){

   
firstOddLengthCity = city; 
break;
}
}
console.log(firstOddLengthCity);


// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

let citiesLength6orMore = [] ;
for(const city of cities){
    if(city.length >= 6 ) citiesLength6orMore.push(city); 


}
console.log(citiesLength6orMore);


// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]

let  citiesHasi = [];
for(const city of cities){
    if(city.toLowerCase().includes('i'))  citiesHasi.push(city);
}
console.log(citiesHasi);