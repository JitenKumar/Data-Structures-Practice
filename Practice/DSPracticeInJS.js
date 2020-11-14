// Arrays in JS
const array = ['jiten','jiten1','jiten2']
for (const ele in array){
    console.log(ele);
}
array.push('jiten3')
console.log(array.length)

array.find(el=> el==='jiten3')
const jiten3Index = array.findIndex(el=> el==='jiten3')

//removing the elements
array.splice(2,1)
console.log(array)


//sets in JS
// duplicate elements are not added in the Steps
// insertion order is not kept
// order is not guranteed in sets
// alway unique elements and searching and deleting the elements is the faster

const ids = new Set([1,2,3,5,54,543])
ids.add('jiten11')
ids.add(1)
ids.add(1)
console.log(ids)
//getting the values from sets

console.log(ids.has(3))
console.log(ids.has('jiten2'))

//Objects in JS

const person = {
    fistName:'max',
    age:25,
    hobbies:['Sports','Cricket','Guitar','Investing'],
    greet(){
        console.log('Hi I am', this.firstName)
    }
}
console.log(person.firstName);

person.lastName='Kumar'

delete person.lastName

delete person.age
console.log(person)
person.greet();


// Maps in JS
/*
Keys are Unique
Ordered 
Iterable
Pure data storage purpose not like the objects 
*/
const resultData = new Map()
resultData.set('average',24.3)
resultData.set('lastResult',null)
const germany = {name:'Germany',population:82}
resultData.set(germany, 234 )
for (const ele of resultData){
    console.log(el)
}

resultData.set('average',34.32)

resultData.delete(germany)


// Weakset and WeakMaps
// values and keys are Weakely Regerences
// GC will clear these if not used anywhere in the app

