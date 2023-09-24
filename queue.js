class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    return this.items.shift()
  }

  peek () {
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  clear () {
    this.items = []
  }

  print () {
    console.log(this.items.toString())
  }
}

const queue = new Queue()
console.log(queue.isEmpty()) // true
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.peek()) // John
queue.enqueue('Camila')
console.log(queue.size()) // 3
console.log(queue.isEmpty()) // false
queue.dequeue()
queue.dequeue()
console.log(queue.size()) // 1
queue.print() // Camila