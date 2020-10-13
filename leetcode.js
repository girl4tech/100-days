// Number of Recent Calls Problem

// Question : You have a RecentCounter class which counts the number of recent requests within a certain time frame.
// Implement the RecentCounter class:
// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, 
// and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). 
// Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

// constraints :
// 1 <= t <= 109
// Each test case will call ping with strictly increasing values of t.
// At most 104 calls will be made to ping.


class RecentCounter {
    
    constructor(){
        this.counter;
        this.requests = [];
        this.range = [];
    }

    ping = function(t) {
        if(t>0){
            this.counter = 0;
            this.requests.push(t);
            this.range[0] = t-3000;
            this.range[1] = t;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i] >= this.range[0] && this.requests[i] <= this.range[1]){
                    this.counter ++;
                }
            }
            return this.counter;
        }     
        return null;
    };
}

// Complement of Base 10 Integer Problem

// Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  
// Note that except for N = 0, there are no leading zeroes in any binary representation.
// The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  
// For example, the complement of "101" in binary is "010" in binary.
// For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

var bitwiseComplement = function(N) {
    let sum = 0;
    //convert to binary
    let binary = [];
    let k = 1;
    while(!N<1){
        let quotient = Math.floor(N / 2);
        let remainder = N % 2;
        if(remainder===0){
            binary.unshift(0);
        }
        else {
            binary.unshift(1);
        }
        N = quotient;
    }
    if(binary.length === 0) return 1; 
    
    //find complement
    for(var i=0; i<binary.length; i++){
        if(binary[i]===0){
            binary[i] = 1;
        }
        else{
            binary[i] = 0;
        }
    } 
    //convert complemenet to base 10
    for(var j=0; j<binary.length; j++){
        let exponent = binary.length - k;
        let power = Math.pow(2, exponent);
        sum += binary[j] * power;
        k += 1;
    }    
    return sum;
};


// Binary Search

// Given a sorted (in ascending order) integer array nums of n elements and a target value, 
// write a function to search target in nums. If target exists, then return its index, otherwise return -1.

var search = function(nums, target) {
    let start=0, end=nums.length-1; 
    while (start<=end){ 
        let mid=Math.floor((start + end)/2); 
        if (nums[mid]===target) return nums.indexOf(nums[mid]); 
        else if (nums[mid] < target)  
             start = mid + 1; 
        else
             end = mid - 1; 
    }   
    return -1;     
};

// Given a string s, remove duplicate letters so that every letter appears once and only once. 
// You must make sure your result is the smallest in lexicographical order among all possible results.

var removeDuplicateLetters = function(s) {
    let uniqueChars = [];
    let chars = s.split('');
    for(var i=0; i<chars.length; i++){
        if(!uniqueChars.includes(chars[i])){
            uniqueChars.push(chars[i]);
        }
    }
    let result = uniqueChars.sort();
    return result.toString().replace(/,/g,"");
};
