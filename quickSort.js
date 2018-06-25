function quickSort(arr) {
  const p = arr.length - 1
  const pivot = arr[p]

  let left = []
  let right = []

  arr.map(
    value => {
      if (value > pivot) right.push(value)
      else if (value < pivot) left.push(value)
    }
  )
  if (left.length > 1) left = quickSort(left)
  if (right.length > 1) right = quickSort(right)
  left.push(pivot)
  return left.concat(right)
};

module.exports = quickSort
