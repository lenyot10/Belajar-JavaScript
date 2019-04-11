//nilai ujian -> angka => 90

/* uba angka -> 
   85-100      : A
   70-84	   : B
   55-69 	   : C
   40-54	   : D
   0-39		   : E

//studi kasus    : nilai = 41

var nilai = 700;
	if(nilai >= 85 && nilai <= 100){
	console.log('A');
	}
	else if (nilai >= 70 && nilai <= 84){
	console.log ('B');
	}
	else if (nilai >= 55 && nilai <= 69 ){
	console.log('C');
	}
	else if (nilai >= 40 && nilai <= 54 ){
	console.log('D');
	}
	else if(nilai >= 0 && nilai <= 39 ){
		console.log ('E');
	}
	else if(nilai>= 500 && nilai <= 600){ 
		console.log ('MAAF DATA YANG ANDA CARI SUDAH DIMAKAN')
	}
	else if (nilai >= 700 && nilai <= 800){
		console.log ('maaf janda yang kamu cari sudah kabur')
	}
	else {
		console.log('MAAF DATA YANG ANDA INPUT TIDAK VALID')
	}
	
	
	
	//TUGAS BILANGAN PRIMA
	pr = false;
	for (var i = 2; i <= 20; i++){
		if (i == 2){
			pr = true;
		}
		else{
			for(j = 2; j < i;j++){
				if(i%j==0){
					pr =false;
					break;
				
				}
				pr = true;
			}	
		
		if(pr == true ){
			console.log(i);
		}
	}
	}
	
	var array =[30, 10, 22, 03, 100, 02, 11, 70, 80, 17];
	var akhir = array.length;
	var terbesar  = 0;
	for (var i = 0; i < akhir; i++){
		if ( array[i]>array[terbesar] ){
			terbesar = i;
			
		}
	}
	console.log(array[terbesar]);//100
	console.log(terbesar); //4 indek 
	console.log('\n')
	
	
	var array =[30, 10, 22, 03, 100, 02, 11, 70, 80, 17];
	var akhir = array.length;
	var terbesar  = 0;
	for (var i = 0; i < akhir; i++){
		if ( array[i]<array[terbesar] ){
			terbesar = i;
			
		}
	}
	console.log(array[terbesar]);//02
	console.log (terbesar);//05
	*/
	//while
	var array =[30, 10, 22, 03, 100, 02, 11, 70, 80, 17];
	var akhir = array.length;
	var besar = 0;
	var i = 0;
    while(i<akhir){
		
		if (array[i]>array[besar]){
			besar = i;
	
		}
		i++;
	}
	console.log(array[besar]);
	console.log(besar);
	console.log('\n');
	
	//Do while
	var array =[30, 10, 22, 03, 100, 02, 11, 70, 80, 17];
	var akhir = array.length;
	var terkecil  = 0;
	var i =0;
 do{
	 if (array[i]<array[terkecil]){
		terkecil = i;
	 }
	 i++;
 }while (i < akhir);
	
	console.log(array[terkecil]);
	console.log(terkecil);
	