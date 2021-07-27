/*function calculateTestTime(startDate, endDate) {
    
    let s = new Date(startDate).getTime() / 1000 / 60
    let e = new Date(endDate).getTime() / 1000 / 60
    let t = e - s
    console.log(Math.floor(t)) 
    
  }
  calculateTestTime('2021-07-24T06:51:00.000Z','2021-07-24T08:10:00.000Z'); */

  function calc(nums){
    let max=nums[0],sum=nums[0];let f=0,l=0;
    for(let i=1;i<nums.length;i++){
      if((sum+nums[i])>nums[i]){
        sum+=nums[i];
      }
      else{
        sum=nums[i];
        if(nums[i]>max){f=i}
      }
      if(max>sum){
        max=max;
      }
      else{
        max=sum;l=i;
        
      }
    }

    for(let i=f;i<=l;i++){
      console.log(nums[i]);
    }
  }
  calc([-2, -3, 4, -1, -2, 1, 5, -3]);