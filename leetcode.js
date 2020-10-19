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

// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j 
// and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

var buddyStrings = function(A, B) {
    if(A.length != B.length) return false;
    if(A.length < 2) return false;
    if(A.length === 2){
        let temp = A[0];
        A[0] = A[1];
        A[1] = temp;
        if(A===B) return true;
    }  
    let count = 0;
    let locations = [];
    for(var index = 0; index < A.length; index++) {
        if(A[index] != B[index]){
            count++;
            locations.push(index);
        }
    }
    if(count != 2 && locations.length != 2){
        return false;
    }
    if(A[locations[0]] == B[locations[1]] && 
       A[locations[1]] == B[locations[0]]) {
        return true;
    }
    return false;
};

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
// Return the running sum of nums

const runningSum = function(nums) {
  var sum = 0;
  return nums.map(x => sum += x)
}

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};

// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. 
// The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. 
// carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

public class ParkingSystem {
    int[] p;
    
    public ParkingSystem(int big, int medium, int small) {
        p = new int[] { big, medium, small };
    }
    
    public bool AddCar(int carType) {    
        return --p[carType - 1] >= 0;
    }
}

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of 
// candies among them. Notice that multiple kids can have the greatest number of candies.

public class Solution 
{
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) 
    {
        int max = candies.Max();
        return candies.Select(x => (x + extraCandies) >= max).ToList();
    }
}

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
// so "a" is considered a different type of stone from "A".

public int NumJewelsInStones(string J, string S) {
    	if(J.Length == 0)
		{
			return 0;
		}
		int numb = 0;
		for (int i = 0; i < S.Length; i++)
		{
			if(J.Contains(S[i]))
			{
				numb++;
			}
		}
		return numb;
}
