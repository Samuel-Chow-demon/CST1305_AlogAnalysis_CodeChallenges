var removeDuplicates = function(nums) {

    let iCheckIdx = 0;
    let iCheckValue = nums[iCheckIdx];

    let iReplaceIdx = 1;

    while (iCheckIdx < nums.length)
    {
        if (nums[iCheckIdx] !== iCheckValue)
        {
            nums[iReplaceIdx] = nums[iCheckIdx];

            iReplaceIdx++;
            iCheckValue = nums[iCheckIdx];
        }
        iCheckIdx++;
    }
    return iReplaceIdx;
};

// Testing arrays
let nums = [0,0,1,1,1,2,2,3,3,4];
let nums2 = [-1,-1,1,2,2,10,10,30,30,45];
let nums3 = [10,10,101,101,111,222,222,222,322,422];
let nums4 = [-10,-5,-5,-1,-1,2,2,4,4,4];
let nums5 = [0,0,0,0,1,2,2,2,2,4];

function TestAndPrint(nums)
{
    const arrUniqueNum = removeDuplicates(nums);
    const arr = nums.slice(0, arrUniqueNum);
    console.log(`array unique number : ${arrUniqueNum}, ${arr}`);
}

TestAndPrint(nums);
TestAndPrint(nums2);
TestAndPrint(nums3);
TestAndPrint(nums4);
TestAndPrint(nums5);