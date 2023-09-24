class Queue {
  constructor () {
    this.items = {}
    this.rear = 0 
    this.front = 0
  }

  enqueue (element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue () {
    if (this.isEmpty()) {
      return null
    }
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty () {
    return this.rear - this.front === 0
  }

  peek () {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.front]
  }

  size () {
    return this.rear - this.front
  }

  clear () {
    this.items = {}
    this.front = 0
    this.rear = 0
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