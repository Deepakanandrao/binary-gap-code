
    // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {

   var binRep = toBinaryArray(N);
   console.log("Binary of "+ N+" is = "+binRep);
   var biGap = [];


   for (var i=0;i<binRep.length;i++){

        if(binRep[i]==='0' && binRep[i+1]==='0'){
            var count = 0;
            for(var j=i;j<binRep.length;j++){
                ++count;
                if(binRep[j+1]==='1') {break;} else {continue;}
            }
            console.log(count);
            biGap.push(count);
        }
   }

   console.log(biGap.toString());
   console.log( "Binary gap = " +Math.max.apply(null,biGap));

}

function toBinaryArray(N){
return N.toString(2).split('');
}

solution(2251);

