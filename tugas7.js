const r = require('readline-sync');
function run_program(){
	var nama_pemesan= r.question ('Nama:');
	var rute_bis= r.question(' Rute bis 1/2/3 :');
	
	input_rute_bis = false;
	while(input_rute_bis== false ){
		if (rute_bis== "1" || rute_bis == "2" || rute_bis == "3"){
			input_rute_bis = true;
		}
		else{
			console.log("\ PERHATIAAN!! " + " \n" +"Data yang anda masukan salah");
		rute_bis = r.question ("Pilih jenis kendaraan [1/2/3] : ");
		
		}
	}
	
	var kelas= r.question ('kelas AC/NA:');
	var jumlah_kursi= r.question(' jumlah kursi :')

	if (rute_bis=='1'){
		var rute = "jakarta-bandung";
		if (kelas == 'ac' || kelas =="AC"){
			harga = 130000;
		}
		else if(kelas == 'na' || kelas =='NA'){
			harga = 90000;
		}
	}
	else if(rute_bis=='2'){
		var rute = "bandung - jakarta";
		if (kelas == 'ac' || kelas =="AC"){
			harga = 150000;
		}
		else if(kelas == 'na' || kelas =='NA'){
			harga = 70000;
		}
	}
	else if(rute_bis =='3'){
		var rute = "jakarta-tasik";
		if (kelas == 'ac' || kelas =="AC"){
			harga = 70000;
		}
		else if(kelas == 'na' || kelas =='NA'){
			harga = 50000;
		}
	}
	
	var total_bayar = harga * jumlah_kursi;
	
			console.log("Nama pemesan adalah"+ nama_pemesan );
			console.log("Rute anda adalah "+ rute_bis );
			console.log("Harga satuan bis adalah "+ "Rp ." + harga );
			console.log("jumlah kursi anda adalah "+ jumlah_kursi );
			console.log("total bayar anda adalah "+ "Rp ." + total_bayar);
			
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
			