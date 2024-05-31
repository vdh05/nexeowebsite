class CircularQueue {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.queue = [];
      this.front = this.rear = -1;
    }
  
    enqueue(data) {
      if (this.isFull()) {
        console.error("Queue overflow");
        return;
      }
      if (this.isEmpty()) {
        this.front = this.rear = 0;
      } else {
        this.rear = (this.rear + 1) % this.maxSize;
      }
      this.queue[this.rear] = data;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.error("Queue underflow");
        return null;
      }
      const data = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.maxSize;
      }
      return data;
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.maxSize === this.front;
    }
  }
  
  // Export the CircularQueue class for import in other files
  export default CircularQueue;
  