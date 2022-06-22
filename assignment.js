const termInfo = [
    {term : "first" , physics : 85, maths : 87},
    {term : "second" , physics : 84, maths : 88},
    {term : "third" , physics : 83, maths : 89}
]

const mathMarks = termInfo.map(({maths}) => maths)
const physicsMarks = termInfo.map(({physics}) => physics)

let totalMarksMaths = 0
let totalMarksPhysics = 0

mathMarks.forEach( mark =>{
    totalMarksMaths += mark
})
physicsMarks.forEach(mark =>{
    totalMarksPhysics += mark
})

console.log(`The math marks are ${mathMarks} total math marks is ${totalMarksMaths}`)
console.log(`The physics marks are ${physicsMarks} total physics marks is ${totalMarksPhysics}`)