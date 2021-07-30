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

/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
*/
