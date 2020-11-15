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

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

public int NumIdenticalPairs(int[] nums)
{
	var result = 0;
	var currIndex = 1;
	var currValue = nums[0];
	var iCount = nums.Length;
	for (var i = currIndex; i <= iCount; i++)
	{
		if (i == iCount) 
		{
			if (++currIndex == iCount)
				break;
			i = currIndex;
			currValue = nums[i-1];
		}
		if (nums[i] == currValue)
			result++;
	}
	return result;
}

// Given an array, rotate the array to the right by k steps, where k is non-negative.
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that
// he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies);
    var result = [];
    for(var i =0;i<candies.length;i++){
        result.push(candies[i] + extraCandies >= max);
    }
    return result;
};

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j]) count++;
        }
    }
    return count;
};

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
// so "a" is considered a different type of stone from "A".

var numJewelsInStones = (J, S) => {
    let chars = J.split('');
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (chars.includes(S.charAt(i))) {
            count++;
        }
    }   
    return count;
};

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var multiples3or5 = function(){
    let sum = 0;
    for(let i=0; i<1000; i++){
        if (i%3 === 0 || i%5 === 0){
            sum+=i;
        }
    }
// answer = 233168
    return sum;
}
console.log(multiples3or5());

// Codewars - Find the odd int
function findOdd(A) {
  let res = 0;
  for(let i=0; i<A.length; i++){
    res = res ^ A[i];
  }
  return res;
}

// Codewars - Count characters in your string
function count (string) { 
  let result = {};
  if(string==="")return result;
  for(let i=0; i<string.length; i++){
    result[string[i]] = (result[string[i]] || 0) + 1;
  }
   return result;
}

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function evenFibSum(){
    var sum = 0;
    var firstNum = 1;
    var secondNum = 1;

    while (secondNum < 4000000) {
    secondNum = firstNum + secondNum;
    firstNum = secondNum - firstNum;
    sum += secondNum % 2 === 0 ? secondNum : 0;

   }
// answer : 4613732
    console.log(sum);
}

// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
var numberOfSteps  = function(num) {
    var steps = 0;
    while (num > 0) {
        if (num % 2 == 0) {
            num = num / 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return steps;
};

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
var subtractProductAndSum = function(n) {
    const digits = n.toString()
    let sum = 0, product = 1
    for (let digit of digits) {
        sum += Number(digit)
        product *= Number(digit)
    }
    return product - sum
};

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

// Given a string representing a numerical value and a unit, e.g. "12px", return the value and units 
function valAndUnits(s){
    let units = [];
    let answer = {};
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i) <=122 && s.charCodeAt(i) >=97 || s[i] === '%'){
            units.push(s[i]);
        }
    } 
   answer.val = parseFloat(s);
   answer.units = units.toString().replace(/,/g, '');
   return answer;
}
// refactored solution :
function valAndUnits(s) {
  var val = parseFloat(s);
  return {
    val: val,
    units: s.replace(val, '').trim()
  }
}

// We all want to climb the leaderboard. Even given some of the massive scores on there, it's nice to know how close you are...
// In this kata you will be given a username and their score, your score (not your real score) and you need to 
// calculate how many kata you need to complete to beat their score, by 1 point exactly.
// Note : this kata has some reported issues with problem description and testing
function leaderB(user, user_score, your_score){
  let difference = user_score - your_score; 
  if(difference===0) return "Only need one!"
  if(Math.sign(difference) < 0 ) return "Winning!";
  let div = Math.trunc(difference / 3);
  if(div*3===difference){
      if(difference > 1000){
          return `To beat ${user}'s score, I must complete ${div} Beta kata and 0 8kyu kata. Dammit!`;
      }
      return `To beat ${user}'s score, I must complete ${div} Beta kata and 0 8kyu kata.`;
  }
  let kata = difference - (div*3);
  if(difference > 1000){
      return `To beat ${user}'s score, I must complete ${div} Beta kata and ${kata} 8kyu kata. Dammit!`;
  }
  return `To beat ${user}'s score, I must complete ${div} Beta kata and ${kata} 8kyu kata.`;
}

// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
var numberOfSteps  = function(num) {
    let steps = 0
    while(num>0) {
        const target = num/2
        if (target === Math.floor(target)) {
            num/=2
        }else{
            num--
        }
        steps++        
    }
    return steps
};

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
var toLowerCase = function(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        let ascii = str.charCodeAt(i);
        let toLower = ascii >= 65 && ascii <= 90  ? 32 : 0;
        result += String.fromCharCode(ascii + toLower);
    }  
    return result;
};
//optimization using destructuring and map
var toLowerCase = function(str) {
    return [...str].map(s => {
        const code = s.charCodeAt()
        return (code >= 65 && code <= 90) ? String.fromCharCode(code + 32) : s
    }).join('')
};

// Given a string s and an integer array indices of the same length.
//The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
function restoreString(s, indices) {
  let str = s.split('');
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[indices[i]] = str[i];
  }

  return Object.values((obj)).join('');
}

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr.includes(2*arr[i])){
            return true;
        }
    }
    return false;
};
