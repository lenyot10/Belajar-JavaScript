	const r = require('readline-sync');
	var nama_pegawai = r.question ('nama pegawai :');
	var jumlah_hari_kerja= r.question(' Total hari kerja :');
	
	var jam_kerja_normal =8;
	var jam_lembur = 0
	var gaji_pokok = 100000;
	var lembur_per_jam = 1500;
	var arr	= [];
	var gaji= 0;
	var total_gajih= 0;
	
	for ( var i = 0; i < jumlah_hari_kerja ; i++){
		hari = i+1
		var jumlah_jam_perhari = r.question('total jam kerja perhari - '+hari +" : ");
		if (jumlah_jam_perhari > jam_kerja_normal){
			jam_lembur = jumlah_jam_perhari - jam_kerja_normal;
			gaji =(jam_lembur * lembur_per_jam) + gaji_pokok
				arr[i]=gaji;
		}
		
		else{
			jam_lembur =(jam_kerja_normal *0) + gaji_pokok ;
			gaji = jam_lembur
			arr[i]=gaji;
		}
	}
		for (var i=0; i < jumlah_hari_kerja ; i++){
			hari = i+1;
			total_gajih = total_gajih + arr[i];
			console.log ("Total Gaji Adalah : "+" Rp. "+arr[i]);
		}
	
	console.log("Total GajiH Anda Adalah : "+"Rp. "+total_gajih);