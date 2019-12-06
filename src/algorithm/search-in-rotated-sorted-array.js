function search(nums, target) {
  if (nums == null || nums.length == 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = start + (end - start) / 2;
    if (nums[mid] == target) {
      return mid;
    }
    //前半部分有序,注意此处用小于等于
    if (nums[start] <= nums[mid]) {
      //target在前半部分
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

  }
  return -1;

}
console.log(search([4, 5, 6, 7, 0, 1, 2], 4))