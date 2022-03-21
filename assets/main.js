// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const webdesign = {
  name: `Web Design`,
  period: 3,
  grade: 100,
  description: `codeing and stuff`,
  difficulty: `hard/medium`,
  instructor: `Rob Dominguize`
}
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`${webdesign.name} is my class durring period ${webdesign.period}. We do ${webdesign.description} and most of the time it is ${webdesign.difficulty}.`);

// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const math = {
  name: `Pre-Cal`,
  period: 1,
  grade: 99,
  description: `funky math problems`,
  difficulty: `very hard`,
  instructor: `Bobi Zareva`
}
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function someInfo(course) {
  console.log(`${course.name} is a class and it is ${course.difficulty}.`);
  return course;
}

someInfo(webdesign);
someInfo(math);

// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function updateCourse(aCourse, newName) {
  aCourse.name = newName;
  console.log(`the course title has been updated to ${aCourse.name}`)
}

// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.name} is a course about ${anyCourse.description}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
const myCourses = [webdesign, math];

myCourses.map((course) => {
  talkAboutMyCourses(course);
})


// const myCourses = [
//   {
//     title: `Pre-Cal`,
//     subject: `math`,
//     instructor: `Bobi Zareva`,
//   },
//   {
//     title: `Honors Chem`,
//     subject: `science`,
//     instructor: `Devon Lusa`,
//   },
//   {
//     title: `Web Design`,
//     subject: `computers`,
//     instructor: `Rob Dominguize`,
//   },
//   {
//     title: `Ceramics`,
//     subject: `art`,
//     instructor: `Casey Gillispey`,
//   },
// ];
//
// const map = myCourses.map();
// console.log(map);
