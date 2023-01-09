
    function Queue() {
      // 属性
      this.items = []
      // 1 将元素加入到队列中
      Queue.prototype.enqueue = function(ele) {
        this.items.push(ele)
      }
      // 2 从队列中删除前端元素
      Queue.prototype.dequeue = function() {
        return this.items.shift()
      }
      // 3 查看前端元素
      Queue.prototype.front = function() {
        return this.items[0]
      }
      // 4 查看队列是否为空
      Queue.prototype.isEmpty = function() {
        return this.items.length === 0
      }
      // 5 查看元素个数
      Queue.prototype.size = function() {
        return this.items.length
      }
      // tostring
      Queue.prototype.toString = function() {
        let resultString = ''
        for(let i = 0; i < this.items.length; i++) {
          resultString += this.items[i] + ''
        }
        return resultString
      }
    }
