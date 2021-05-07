
//1
var array=[];
function a(){
    for(var i = 1;i < 256; i++)
    {
        array[i-1]=i;
    }
    return array;
}
console.log(a());

//2
var pairsum=0;
function p(){
    for(var i = 0;i <= 1000;i++){
        if(i%2==0){
            pairsum += i;
        }
    }
    return pairsum;
}
console.log(p());

//3
var oddsum=0;
function p(){
    for(var i = 0;i < 5000;i++){
        if(i%2 != 0){
            oddsum += i;
        }
    }
    return oddsum;
}
console.log(p());

//4
var array=[1,3,5,7,9,10];
var sum=0;
function itera(){
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(itera());

//5
var array=[10,4,11,-5,3,1,25];
var arrord=[];
var max=0;
function mayor(){
    for(var i = 0; i < array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max;
}
console.log(mayor());

//6
var arr=[2,4,6,8,10];
var prom=0;
function avg(){
    for(var i = 0; i < arr.length; i++){
        prom += arr[i];
    }
    return prom;
}
console.log(avg()/arr.length);

//7
var arr=[];
function impar(){
    for(var i = 1; i < 50; i+=2){
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(impar());

//8
var arr=[1,2,3,4,5,6,7];
var cont=0;
function mayor(y){
    for(var i = 0; i < arr.length; i++){
        if(y<arr[i]){
            cont +=1;
        }
    }
    return cont;
}
console.log("Hay " + mayor(3) + " numeros mayores");

//9
var arr=[1,3,5,-5];
function cuadrado(){
    for(var i = 0; i < arr.length ; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(cuadrado());

10
var arr=[-2,-1,0,1,2];
function negativos(){
    for(var i = 0; i < arr.length ; i ++){
        if(arr[i]<0)
        {
            arr[i]=0;
        }
    }
    return arr;
}
console.log(negativos());

//11
var arr=[1,2,3,4,5];
var newarr=[];
var max=-Infinity;
var min=Infinity;
var avg=0;
function mam(){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i];
        }
        avg+=arr[i];
    }
    newarr.push(max);
    newarr.push(min);
    newarr.push(avg/arr.length)
    return newarr;
}
console.log(mam());

//12
var arr=[1,2,3,4,5];
var temp1=0;
var temp2=0;
function cambio(){
    temp1 = arr[0];
    temp2 = arr[arr.length-1];
    arr[0]=temp2;
    arr[arr.length-1]=temp1;
    return arr;
}
console.log(cambio());

13
var arr=[-2,3,-1,4,0]
function replace(){
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i]<0)
        {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(replace());