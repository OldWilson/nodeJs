var twoSum = function(nums, target) {
    let result;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                break;
            }
        }
    }
    console.log(result);
    return result;
};

const nums = [-3, 4, 3, 0];
const target = 0;
twoSum(nums, target);