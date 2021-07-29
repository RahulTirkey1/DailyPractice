function plusOne(digits) {

    /*
    Worst Approach
    let sum=[],count=0;
   if(digits[digits.length-1]===9){sum.push(0);count++;}
    else{sum.push(digits[digits.length-1]+1)}
    if(digits.length>1){
        for(let i=digits.length-2;i>=0;i--){
          if(digits[i]===9){
              if(count>0){
                  count--;
                  sum.push(0);
              count++;
              }
              else{
                  sum.push(9);
                  count=0;
              }  
          }
            else{
                if(count>0){
                    count--;
                    sum.push(digits[i]+1)
                  //  count++;
                }
                else{
                    sum.push(digits[i])
                    count=0;
                }
            }
        }
    }
    if(digits[0]==9){
        if(count>0){
            sum.push(1);
        }
     }
    sum.reverse();
    console.log(sum); */


//         -------------------Average Approach---------------------------
/*

    let sum=String(BigInt(digits.join(''))+ BigInt(1)).split('').map(n => parseInt(n)); */
    let sum=[];
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]===9){
            digits[i]=0;
        }else{
            digits[i]+=1;
            break;
        }
    }

        if(digits[0]===0){
            let sum=[...digits];
            
            sum[0]=1;
            sum.push(0);
            console.log(sum);
        }
        else{
        console.log(digits);
        }
 //   console.log(sum)
    };
    plusOne([9,9,9])
//plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])   
