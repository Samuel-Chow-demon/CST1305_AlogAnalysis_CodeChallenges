var sortArray = function(nums) {
    return nums.sort((n1, n2)=>(n1 - n2));
};

nums = [5,2,3,1];
console.log(sortArray(nums));