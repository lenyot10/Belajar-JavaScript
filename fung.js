//FUNCTION (FUNGSI)
//BARIS PROGRAM YANG DIBUAT UNTUK TUJUAN TERTENTU DAN DAPAT DIGUNAKAN BERULANG-ULANG TANPA HARUS DI BUAT KEMBALI
	/*
CONTOHNYA :

1. Fungsi bawaan dari bahasa programan	
	log('hello')
	for(){}	]
	if()(nilai > 75)[
	while()
	length
2. Fungsi yang dibuat sendiri
	function nama_fungsi(parameter1,parameter2,dst){ /parameter itu inputan fungsi
	}
	
	
	function add_two_number(num1,num2){
		var result =num1+num2
		return result;
	}
		
		
	console.log(add_two_number(12,5));
	
	function luas_segitiga(alas,tinggi){
		var result = 1/2 * alas * tinggi
		return result 
	}
		console.log (luas_segitiga(2.4,2.6))
		console.log("")
		console.log (luas_segitiga(5,5));
		
		function c_to_k(c){
		var k =c + 273;
		return k;
		
	}
	var kel = 293
	f = k_to_f(kel)
	console.log(f)
	*/
	function k_to_c(k){
		var c = k-273
		return c 	
	}
	
	function k_to_f(k){
		var f = 1.8*k_to_c(k)+ 32;
		return f;
	
	}
	
	
	const readline =require('readline-sync');
var k= readline.question("masukkan suhu kelvin:");
var num1 = parseInt(k)
var hasil = k_to_f(num1);

console.log("Hasil adalah : "+ hasil);
