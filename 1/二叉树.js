const bt = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}
// 先序遍历 递归
const preOrder = (tree) => {
  if (!tree) return


  preOrder(tree.left);
  preOrder(tree.right);
  console.log(tree.val);
}
preOrder(bt)
// 先序遍历 非递归
const preOrder2 = (tree) => {
  if (!tree) return

  // 新建一个栈
  const stack = [tree];

  while (stack.length > 0) {
    const n = stack.pop();
    console.log(n.val);
    // 负负为正
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}
preOrder2(bt)
