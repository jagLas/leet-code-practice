function findDifference (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const ans1 = [];
    const ans2 = [];

    set1.forEach(num => {
        if(!set2.has(num)) ans1.push(num);
    })

    set2.forEach(num => {
        if(!set1.has(num)) ans2.push(num);
    })

    return [ans1, ans2];
}

console.log(findDifference([1,2,3],[1,4,5]))