let a = 153;
let b= a ;
let c = 0 ;
while(a>0){
    let rem = a%10;
    c+=rem ** 3;
    a= Math.floor(a/10);
}
    if (b == c){
        console.log("armstrong");
}else{
    console.log("not armstrong")
}