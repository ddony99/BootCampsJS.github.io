
/* console.log('start');
setTimeout(function(){
    console.log('Middle');
},5000)
console.log('end');

 */

console.log('start');
const longRunningTask = async function(){
    await setTimeout(function(){
        console.log('Long running task has been complete');
    },5000);
};
longRunningTask();
console.log('end');

function outerFunction(x) {
    function innerFunction(y){
        return x * y;
    }
    return innerFunction;
    
}

const add5 = outerFunction(5);
console.log(add5(5));

const numbers = [1,2,3,4,5,6,7]
// map create a tableau to manipulate without change the original table
let map = numbers.map((currVal) => {
    return currVal * 5;
})
console.log(map)