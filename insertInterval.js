/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
    let inserted = false;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= newInterval[0]) {
            intervals.splice(i, 0, newInterval);
            inserted = true;
            break;
        }
    }

    if(!inserted) {
        intervals.push(newInterval);
    }

    scrunch(intervals);
    
    return intervals;
};

var scrunch = function(intervals) {
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][1]) {
            intervals.splice(i + 1, 1);
            i--;
        } else if (intervals[i][1] >= intervals[i + 1][0]){
            let newInterval = [intervals[i][0], intervals[i + 1][1]];
            intervals.splice(i, 2, newInterval)
            i--;
        }
    }

    return intervals;
}

// scrunch([[1,2],[3,5], [4,8], [6,7],[8,10],[12,16]])

let intervals = [[1,3],[6,9]]
let newInterval = [2,5]
// console.log(insert(intervals, newInterval))

let intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]]
let newIntervals2 = [4,8]
// console.log(insert(intervals2, newIntervals2))

let int = [[1,5]];
let newInt = [2,3];
console.log(insert(int, newInt));