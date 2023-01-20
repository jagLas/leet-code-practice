// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    const set = new Set(nums);
    for (let i = 0; i < nums.length; i++){
        let dif = target - nums[i];
        if (set.has(dif)) {
            let j = nums.indexOf(dif);
            if (j !== i) {
                return [i, j];
            }
        }
    }
};

nums = [2,7,11,15]
target = 9
console.log(twoSum(nums, target))

nums = [3,2,4]
target = 6
console.log(twoSum(nums, target))

nums =
[2,4,11,3]
target = 6
console.log(twoSum(nums, target))