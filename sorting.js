//SORTING (PENGURUTAN DATA
//BUBBLE SORT (MENGURUTKAN DATA DENGAN CARA MEMBANDINGKAN SATU SATU DATA)

	/*var arr = [5, 1, 4, 2,8];
	var n	= arr.length;
	var temp= 0; 
	var step =0;
	for (var i = 0; i< n ; i++){
		for(var j = 0; j < n -1; j++){
			if(arr[j]>arr[j+1]){
			temp	 = arr[j+1];
			arr[j+1] = arr[j];
			arr[j]	 = temp;
			
			}
		}
		step = i+1
	}
	console.log ("jumlah angka "+step);
	 console.log(arr);
	
	
	var arr = [5, 1, 4, 2,8];
	var n	= arr.length;
	var temp= 0; 
	var step =0;
	for (var i = 0; i< n ; i++){
		var tukar = false
		for(var j = 0; j < n -1; j++){
			if(arr[j]<arr[j+1]){
			temp	 = arr[j+1];
			arr[j+1] = arr[j];
			arr[j]	 = temp;
			tukar	 = true;
			}
		}
		if(tukar == false){
			break;
		}
		step = i+1
	}
	console.log ("jumlah angka "+step);
	console.log(arr);
//SELECTION SORT
//nyari yang terkecil dan di pisahkan .

	var arr = [64,25,12,22,11]
	console.log(arr);
	
	var n   = arr.length
	
	
	var temp = 0
	for(i    = 0; i < n; i++){
	 var index_terkecil=i;
		for (j=i+1; j < n;j++){
			if(arr[j]<arr[index_terkecil]){
				index_terkecil= j;
		
			}
		}
		
		if(arr[i] > arr[index_terkecil]){
		temp = arr[i];
			arr[i]= arr[index_terkecil];
			arr[index_terkecil] = temp;
		
		}
	}
	console.log(arr);
		*/
		
		var arr = [64,25,12,22,11]
	console.log(arr);
	
	var n   = arr.length
	
	var temp = 0
	for(i    = 0; i < n; i++){
	 var index_terkecil=i;
		for (j=i+1; j < n;j++){
			if(arr[j]>arr[index_terkecil]){
				index_terkecil= j;
		
			}
		}
		
		if(arr[i] < arr[index_terkecil]){
		temp = arr[i];
			arr[i]= arr[index_terkecil];
			arr[index_terkecil] = temp;
		
		}
	}
	console.log(arr);
		