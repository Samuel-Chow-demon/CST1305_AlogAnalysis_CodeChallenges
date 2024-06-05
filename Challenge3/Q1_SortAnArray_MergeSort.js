function merge(leftHalf, rightHalf) 
 {
    let sortedArray = [];
    while(leftHalf.length && rightHalf.length) 
    {
        if (leftHalf[0] < rightHalf[0]) 
        {
            sortedArray.push(leftHalf.shift());
        } else {
            sortedArray.push(rightHalf.shift());
        }
    }

    return [...sortedArray, ...leftHalf, ...rightHalf];
};

var sortArray = function(nums) {
    
    if (nums.length <= 1)
    {
        return nums;
    }

    const mid = (nums.length / 2) | 0; // use bitwise 0 to have a ability of floor
    const leftHalf = nums.slice(0, mid);
    const rightHalf = nums.slice(mid);

    return merge(sortArray(leftHalf), sortArray(rightHalf));
};

nums = [5,2,3,1];
console.log(sortArray(nums));