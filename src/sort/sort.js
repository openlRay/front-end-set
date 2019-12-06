/**
 * 平均复杂度：o(n^2)    空间复杂度：o(1)    稳定性：稳定

       步骤： 1、比较相邻的元素。如果第一个比第二个大，就交换他们两个；

                   2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样，最后的元素应该会是最大的数；

                   3、针对所有的元素重复以上的步骤，除了最后一个；

                   4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 * @param {*} array 
 */
function bubbleSort(array) {
  if (!Array.isArray(array)) return
  if (array.length <= 1) return array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

function selectionSort(array) {
  if (!Array.isArray(array)) return
  if (array.length <= 1) return array
  let length = array.length
  let index
  for (let i = 0; i < length; i++) {
    index = i
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[index]) {
        index = j
      }
    }
    if (index >= 0) {
      ;[array[i], array[index]] = [array[index], array[i]]
    }
  }
  return array
}

function insertionSort(array) {
  if (!Array.isArray(array)) return
  if (array.length <= 1) return array
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let current = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = current
  }
  return array
}

function shellSort(array) {
  if (!Array.isArray(array)) return
  if (array.length <= 1) return array
  let len = arr.length
  for (let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let current = array[i]
      let j = i
      while (j > 0 && array[j - gap] > current) {
        array[j] = array[j - gap]
        j -= gap
      }
      array[j] = current
    }
  }
  return array
}

function mergeSort(array) {
  if (!Array.isArray(array)) return
  if (array.length <= 1) return array
  let len = arr.length
}

function quickSort(array, left, right) {
  if (left > right) return
  let temp = array[left]
  let i = left
  let j = right
  while (i !== j) {
    while (array[j] >= temp && i < j) {
      j--
    }
    if (i < j) {
      array[i] = array[j]
      i++
    }
    while (array[i] < temp && i < j) {
      i++
    }
    if (i < j) {
      array[j] = array[i]
      j--
    }
  }
  array[i] = temp
  quickSort(array, left, i - 1)
  quickSort(array, i + 1, right)
  return array
}
let arr = [23, 45, 2, 1, 34, 7, 45, 78, 2, 1, 45]
console.log(quickSort(arr, 0, arr.length - 1))
