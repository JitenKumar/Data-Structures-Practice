/**
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
 * 
 * 
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sp=0,def=0,start=0;
    for(let i=0;i<gas.length;i++){
        sp=sp+gas[i]-cost[i];
        if(sp<0){
            def+=sp;
            start=i+1;
            sp=0;
        }
    }
    return (sp+def>=0)?start:-1;
    
};