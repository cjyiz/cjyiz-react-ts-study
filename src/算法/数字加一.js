const plusOnes = (digits) => {
    // 该方法不行，没有考虑整数溢出的情况
    const str = digits.join('')
    const plus = Number(str) + 1
    const res = plus.toString().split('')
}
const plusOne = (digits) => {
    const len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1
        console.log('最后的操作', i, digits[i])

        const a = digits[i] % 10
        console.log('是0旧进位', a)
        if (a) {
            console.log('不是0就跳出', a, digits)
            return digits
        }
        console.log('结束前', digits)
        if (digits[0] === 10) {
            console.log('最后的结asdasd果', digits)
            digits.unshift(1)
            digits[1] = 0
            console.log('最后的结果', digits)
            return digits
        }
        digits[i] = 0
        console.log('结束前的操作', digits)

    }
}
console.log(plusOne([9, 9, 9, 9, 9]))