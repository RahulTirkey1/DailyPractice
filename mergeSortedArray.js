function merge(nums1,m,nums2,n){
    /*
    nums1=[...nums1,...nums2];
    nums1=nums1.filter(e=>e>0);
    nums1.sort(); */
    /*console.log(m,n);
    let count=0
    for(let i=m;i<m+n;i++){
        nums1[i]=nums2[count];
        ++count;
    }
    nums1.sort(function(a,b){
        return (a<b)?-1:(a>b)?1:0
    });
    console.log(nums1); */

    let nums3=[];
    // console.log(m,n)
    let i=0,x=0,y=0;
    while(i<(m+n)){
        // console.log('Hello')
        if(x<m){
        if(nums1[x]<nums2[y]){
            nums3.push(nums1[x])
            x++;
        }else{
            nums3.push(nums2[y])
            y++;
        }
        }
        i++;
    }
 //   console.log(nums2.slice(y));
    if(x<=m-1){
        for(let i=x;i<m;i++){
            nums3.push(nums1[i]);
        }
    //    nums3=[...nums3,...nums1.slice(x,m)]
    }else{
        for(let i=y;i<n;i++){
            nums3.push(nums2[i]);
        }
        // nums3=[...nums3,...nums2.slice(y)]
    }
    console.log(nums3)
}
/*
merge([-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    55
    [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],
    99); */
merge([1,2,3,0,0,0],3,[2,5,6],3);    

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
*/

