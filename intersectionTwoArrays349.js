function intersection (nums1, nums2) {
    const set1 = new Set(nums1);
    const ans = new Set();

    nums2.forEach(num => {
        if(set1.has(num) && !ans.has(num)) ans.add(num);
    })

    return Array.from(ans);
}

console.log(intersection([1,2,2,3],[1,1,3,4,5]))