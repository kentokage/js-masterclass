// * Priority queue
// * a data structure where each element has a priority. elements with higher priorities are served before elements with lower priorities
// * higher number denotes lower priority
// * time: O(logn)

class Node {
    constructor(value, priority) {
        this.v = value;
        this.p = priority;
    }
}

// Write a min binary heap - lower number means higher priority
// Each node has a val and a priority. use the priority to build the heap
// Enqueue (enqueue) method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
// Dequeue (extract) method removes root element, returns it, and rearranges heap using priority

class PriortyQueue {
    constructor() {
        this.values = [];
    }

    getParentIndex = (index) => Math.floor((index - 1) / 2);

    enqueue(value, priority) {
        let v = this.values;
        let index = v.push(new Node(value, priority)) - 1;
        let parentIndex = this.getParentIndex(index);
        let node = v[index];
        let parent = v[parentIndex];

        while (node && parent && node.p < parent.p) {
            [v[index], v[parentIndex]] = [v[parentIndex], v[index]];
            index = parentIndex;
            if (index === 0) break;
            parentIndex = this.getParentIndex(index);
            node = v[index];
            parent = v[parentIndex];
        }
    }

    print() {
        console.log(this.values);
    }

    dequeue() {
        // swap root and last
        // while leftIndex is < length
        // sink down
        //   check which one is smaller, swap

        if (!this.values.length) return undefined;

        const v = this.values;

        this.swap(v, 0, v.length - 1);

        const removed = v.pop();
        const length = v.length;

        let parentIndex = 0;

        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;

        while (leftIndex < length) {
            // if rightIndex is out of bounds, just compare left child with parent
            if (rightIndex >= length) {
                if (v[leftIndex].p < v[parentIndex].p) {
                    this.swap(v, parentIndex, leftIndex);
                }
                break;
            } else {
                if (v[rightIndex].p < v[leftIndex].p) {
                    if (v[rightIndex].p < v[parentIndex].p) {
                        this.swap(v, rightIndex, parentIndex);
                        parentIndex = rightIndex;
                    } else {
                        break;
                    }
                } else {
                    if (v[leftIndex].p < v[parentIndex].p) {
                        this.swap(v, leftIndex, parentIndex);
                        parentIndex = leftIndex;
                    } else {
                        break;
                    }
                }
            }

            leftIndex = 2 * parentIndex + 1;
            rightIndex = 2 * parentIndex + 2;
        }

        return removed;
    }

    swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
}

let myHeap = new PriortyQueue();

myHeap.enqueue("dude", 41);
myHeap.enqueue("dude", 39);
myHeap.enqueue("dude", 33);
myHeap.enqueue("dude", 18);
myHeap.enqueue("dude", 27);
myHeap.enqueue("dude", 12);
myHeap.enqueue("dude", 55);
// myHeap.enqueue(1);
// myHeap.enqueue(45);
// myHeap.enqueue(199);
myHeap.print();

// * removing from a heap
/*  remove the root
    replace with the most recently added
    adjust (sink down)
    sink down?
    - the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap/min-heap or the minimum element in a min-heap) and restoring the properties is
    called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
*/

console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
console.log(myHeap.dequeue());
myHeap.print();
