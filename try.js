const mathsteps = require('mathsteps');
const arg1 = process.argv[2];
const steps = mathsteps.solveEquation(arg1);

console.log("ORIGINAL_EQUATION");
console.log(steps[0].oldEquation.latex());
steps.forEach(step => {
    console.log(step.changeType)
    console.log(step.newEquation.latex())
});

