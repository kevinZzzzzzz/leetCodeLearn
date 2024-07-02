const isValid = (s) => {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      stack.push(s[i])
    } else if (stack.pop() !== map[s[i]]) return false
  }
  console.log(stack)
  return !stack.length // 栈为空
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(')) // false