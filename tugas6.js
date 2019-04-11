
const r = require('readline-sync');
function run_program(){
	var plat_nomor = r.question ('Plat nomor :');
	var jenis_kendaraan= r.question(' Jenis kendaraan :');
	
	input_jenis_kendaraan = false;
	while(input_jenis_kendaraan == false ){
		if (jenis_kendaraan == "1" || jenis_kendaraan == "2"){
			input_jenis_kendaraan = true;
		}
		else{
			console.log("\ PERHATIAAN!! " + " \n" +"Data yang anda masukan salah");
		jenis_kendaraan = r.question ("Pilih jenis kendaraan [1/2] : ");
		
		}
	}
	var jam_masuk= r.question('Jam masuk:');
	jam_masuk = parseInt(jam_masuk);
	
	input_jam_masuk = false ;
	while (input_jam_masuk ==true){
		if(jam_masuk >= 0 && jam_masuk < 24){
			input_jam_masuk = true;
		}
		else{
			console.log("\ SILAHKAN MASUKAN JAM YANG BENAR BRO ")
			jam_masuk= r.question('Jam masuk:');
			jam_masuk = parseInt(jam_masuk);
		}
	}
	
	var jam_keluar= r.question('Jam keluar:');
	jam_keluar = parseInt(jam_keluar);
	
	input_jam_keluar = false ;
	while (input_jam_keluar ==false){
		if(jam_keluar>= 0 && jam_keluar < 24){
			input_jam_keluar = true;
		}
		else{
			console.log("\ SILAHKAN MASUKAN JAM YANG BENAR BRO ")
			jam_keluar = r.question('Jam keluar:');
			jam_keluar= parseInt(jam_keluar);
		}
	}
	jam_masuk = parseInt(jam_masuk);
	jam_keluar = parseInt(jam_keluar);
	if(jam_keluar < jam_masuk ){
		jam_keluar = jam_keluar + 24;
	}
	

	var harga_jam_pertama;
	var harga_jam_berikutnya;
	
	if (jenis_kendaraan=='1'){
		kendaraan = "mobil";
		harga_jam_pertama = 5000;
		harga_jam_berikutnya = 3000;
		var lama_parkir = jam_keluar - jam_masuk
		if(lama_parkir <=0)
		{
				lama_parkir = 1
		}
		var lama_jam_berikutnya = lama_parkir - 1
		var bayar_jam_berikutnya = lama_jam_berikutnya * harga_jam_berikutnya	
		var total_bayar = harga_jam_pertama + bayar_jam_berikutnya 
	}
	
	else if (jenis_kendaraan == "2"){
		kendaraan = "motor"
		harga_jam_pertama = 3000;
		harga_jam_berikutnya = 1500;
		var lama_parkir = jam_keluar - jam_masuk 
		if(lama_parkir <=0)
		{
				lama_parkir = 1
		}
		var lama_jam_berikutnya = lama_parkir - 1
		var bayar_jam_berikutnya = lama_jam_berikutnya * harga_jam_berikutnya	
		var total_bayar = harga_jam_pertama + bayar_jam_berikutnya 
	}

		
	console.log ("plat nomor anda adalah "+ plat_nomor );
	console.log ("jenis kendaraan anda adalah "+ kendaraan );
	console.log ("lama parkir anda adalah "+" Rp . "+ lama_parkir);
	console.log ("total bayar anda adalah "+" Rp . "+ total_bayar);
	console.log ("Semoga pelayanan kami memuaskan :");
}
	
	run_program();
	var run = true
	while(run==true){
		var ask = r.question("input data baru ? Y/N: ");
		if(ask == "Y" || ask == "y"){
			run_program();
			run = true
		}
		else{
			run = false
		}
	}