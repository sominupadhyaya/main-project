

const arr = [1,2,3,4,5]

const iterator = num => num+5
const newArr = arr.map(iterator)
//1st itr => newArr[] => newArr[6]
console.log(newArr);

const array = [
{name : 'Somin',grade : 12,isDead : false},
{name : 'Surab',grade : 13,isDead : false},
{name : 'Oscar',grade : 14,isDead : false},
{name : 'Salman',grade : 15,isDead : false},
{name : "firstTerm" , english : 80 }
]


const  gradeArray = array.map((obj) =>{
    const grade = obj.grade
    return grade
})

console.log(gradeArray)



