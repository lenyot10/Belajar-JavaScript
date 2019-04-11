//TUGAS
/*
const readline =require('readline-sync');
console.log ("hallo ini siapa ? silahkan masukan data anda:")
var nama = readline.question ("nama pegawai :")
var jam_kerja = readline.question("jam kerja :");

console.log("hallo " + nama +" "+ jam_kerja);
var gajih = 100000
var lembur= 1500
var temp = 0;
var rodi;
if(rodi = gajih + lembur * (jam_kerja-8)){
	temp = rodi
	console.log(nama +" "+jam_kerja +" "+ temp)
}
*/
//TUGAS


var jam_kerja_normal =8;
var jam_lembur = 0
var gaji_pokok = 100000;
var lembur_per_jam = 1500;

const r = require('readline-sync');
var nama_pegawai = r.question ('nama pegawai :');
var jumlah_jam_kerja = r.question(' Total jam kerja :');

	if (jumlah_jam_kerja > jam_kerja_normal){
		jam_lembur = jumlah_jam_kerja - jam_kerja_normal;
		gaji =(jam_lembur * lembur_per_jam) + gaji_pokok
	
	}
	else{
		jam_lembur =(jam_kerja_normal *0) + gaji_pokok;
		gaji = jam_lembur
		
	}
	for(var i = 0; i<jumlah_jam_kerja ;);
		console.log ("Total Gaji Adalah : "+" Rp. "+gaji);
		
	