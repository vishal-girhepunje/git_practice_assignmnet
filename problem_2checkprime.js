
	let num=17;

	let fact=0;

	for(let i=1;i<=num;i++){
		if(num%i==0){
		fact++;
		}
	}
	if(fact==2){
	console.log(num,"is prime num");
	}else{
	console.log(num,"is not prim num);
	}	