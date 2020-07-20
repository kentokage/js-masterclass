// *compare and constrast min and max heaps

// * what is binary heap
// * it is similar to binary search tree
// * in a MaxBinaryHeap, the parent nodes are always larger than child nodes
// * in a MinBinaryHeap, the parent nodes are always smaller than child nodes
// * there is no order to left or right

// * heap is a pyramid / pile of stuff

// * Max
/* * each parent has at most two child noes
  * parent is always greater than child nodes
  * max binary heap the parent is always greater than children, but no guarantees between sibling nodes, no relatiionship between siblings
  * should be as compact as possible. All children of each node are as full as they can be and left children are filled out first
  * before it moves down

*/

// * Min similar as Max

// * Used for..
// * priority queues, which are very commonly used data structures

// * used quite a bit with graph traversal algos
// * You can use a list or array to represent a binary heap

// * For any index of an array n...(parent)
// * the left child is stored at 2n + 1
// * the right child is at 2n + 2

// * For any child node at index n...
// * Its parent is at index (n - 1) / 2 (floor it)
// * with just little bit of math, we can represent heaps using arrays

// * Big O
/*
    * insertion - logn, no worst case
    * removal - logn, no worst case
    * search - n / 2 on avg, but with constants, it is n 

    logn because we have to compare it only logn times, becuase we compare the parent / children

    * no possibility of being a worst case because of it's properties, can't have right heavy tree


*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // * add to the end, then bubble up
    // * bubble up
    // 1) compare with parent, swap if bigger
    // 2) compare with parent again, swap if bigger
    // - create a var called index which is the length of the values property - 1
    // - create a var called parentIndex which is the floor of (index - 1) /2 (floor it
    // - keep looping as long as the values element at the parentIndex is less than the values element at the child, and not at the root
    //   - swap the value of the values element at the parentIndex with the value of the element property at the child index
    //   - set the index to be the parentIndex, and start over!
    insert(n) {
        let v = this.values;
        let index = v.push(n) - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (v[index] > v[parentIndex]) {
            [v[index], v[parentIndex]] = [v[parentIndex], v[index]];
            index = parentIndex;
            if (index === 0) break;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    print() {
        console.log(this.values);
    }

    extractMax() {
        // swap root and last
        // while leftIndex is < length
        // sink down

        if (!this.values.length) return undefined;

        const v = this.values;

        this.swap(v, 0, v.length - 1);

        const removed = v.pop();
        const length = v.length;

        let parentIndex = 0;

        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;

        while (leftIndex < length) {
            if (rightIndex >= length) {
                if (v[leftIndex] > v[parentIndex]) {
                    this.swap(v, parentIndex, leftIndex);
                }
                break;
            } else {
                if (v[rightIndex] > v[leftIndex]) {
                    if (v[rightIndex] > v[parentIndex]) {
                        this.swap(v, rightIndex, parentIndex);
                        parentIndex = rightIndex;
                    } else {
                        break;
                    }
                } else {
                    if (v[leftIndex] > v[parentIndex]) {
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

let myMax = new MaxBinaryHeap();

myMax.insert(41);
myMax.insert(39);
myMax.insert(33);
myMax.insert(18);
myMax.insert(27);
myMax.insert(12);
myMax.insert(55);
// myMax.insert(1);
// myMax.insert(45);
// myMax.insert(199);
myMax.print();

// * removing from a heap
/*  remove the root
    replace with the most recently added
    adjust (sink down)
    sink down?
    - the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is
    called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
*/

console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
console.log(myMax.extractMax());
myMax.print();
