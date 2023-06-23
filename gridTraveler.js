function gridTraveler(m, n) {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);

}

console.log(gridTraveler(0,1));
console.log(gridTraveler(1,0));
console.log(gridTraveler(1,1));
console.log(gridTraveler(1,2));
console.log(gridTraveler(2,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,3));

// Problem with bigger Matrix 
//console.log(gridTraveler(18,18));


//                                                   2,3
//                                1,3 (down)                                     2,2 (right)
//               0,3 (down)              1, 2 (right)                   1,2 (down)           1, 1 (right) 
//                               0,2 (down)     1, 1 (right)    0,2 (down)     1, 1 (right) 


// Time Complexity O(2^m+n) O(2^n)
// Space Complexity O(m+n)  O(n)