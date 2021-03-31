
export const CjText = () => {
  const compare = (x, y) => {
    if (x < y) {
      return -1
    } else if (x > y) {
      return 1
    } else {
      return 0
    }
  }
  const cc = (arr, k) => {
    let newArr = [];
    let arr2 = []
    let arr3 = []
    if (arr.length === k) {
      return 0
    }
    arr.map((item, index) => {
      // 删除本身的，查找arr2中是否有重复的
      const isDumplated = arr2.indexOf(item)
      if (isDumplated === -1) {
        // 如果还有重复元素，
        const a = arr.filter((e) => e === item);
        newArr.push({ [item]: a.length })
        arr2.push(item)
        arr3.push(a.length)
      }
    });
    arr3.sort(compare)
    console.log('arr3', arr3)
    let count = 0
    let cc = 0
    let final = 0
    if (k < arr.length && arr3.length === 1) {
      return 1
    }
    for (let i = 0; i < arr3.length; i++) {
      count = count + arr3[i]
      if (count > k) {
        final = arr3.length - i
        console.log('最后的结果1', final)
        return final
      } else if (count === k) {
        final = arr3.length - 1 - i
        console.log('最后的结果2', final)
        return final
      }
    }
    return final
  }


  const a = cc([4,3,1,1,3,3,2]
    , 3)
  console.log('最终输出', a)

};