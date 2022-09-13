 let num=1221;
 let rev=0;
 let temp=num;
 while(num>0){
    rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10;
    }
    if(num==rev){
        console.log("Yes");
    }else{
        console.log("No");
    }