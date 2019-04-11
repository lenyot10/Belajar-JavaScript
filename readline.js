//READLINE()
const readline =require('readline-sync');
console.log ("hallo ini siapa ? silahkan masukan data anda:")
var nama_depan = readline.question("nama depan :");
var nama_tengah = readline.question('nama tengah:');
var nama_belakang = readline.question('nama belakang:');

console.log ("ohh , Hallo "+ nama_depan +" "+nama_tengah +" "+ nama_belakang);