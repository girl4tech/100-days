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


