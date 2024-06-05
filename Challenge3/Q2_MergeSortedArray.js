

var merge = function(nums1, m, nums2, n) {
    
    let ichkedNum1Idx = 0;
    for (let i = 0; i < n; i++)
    {
        for (let j = ichkedNum1Idx ; j < m + n; j++)
        {
            if (nums2[i] < nums1[j] || (nums1[j] === 0 && j >= (m + i)))
            {
                nums1.splice(j, 0, nums2[i]);
                ichkedNum1Idx = j + 1;
                break;
            }
        }
    }
    nums1.splice(m + n);
};

let nums1 = [1,2,3,0,0,0];
let m = 3;

let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);