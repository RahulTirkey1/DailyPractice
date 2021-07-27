function romanToInt(s) {
    let sum=0;
    let t={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    for(let i=0;i<s.length;i++){
        let f=s[i],l=s[i+1];
        if(t[f]<t[l]){
            sum-=t[f];
        }
        else{
            sum+=t[f];
        }
    }
    console.log(sum);
};
romanToInt('CDLXXIV');