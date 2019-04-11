//array associative//
var data =[];
data['n']='abdul';
data['na']='aziz';

console.log(data);
//array associative > objek ({})


var data_1={nama:{"depan":"ucok","belakang":"kill"}};
var nama_depan = data_1["nama"]["depan"]; 
var nama_belakang = data_1["nama"]["belakang"];

console.log( nama_depan +" "+ nama_belakang);
console.log(data_1);

var data_2={nama:{"depan":"pendek","belakang":"tinggi"}};
console.log(data_2["nama"]["depan"] +" "+ data_2["nama"]["belakang"]);
