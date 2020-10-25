// Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.


var imena = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var bodovi = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

function grade(students, points){
  var sentence = '';
  for(var i = 0; i < students.length; i++){
    sentence += students[i] + ' acquired ' + points[i] + ' and ';
    if (points[i] < 51){
      sentence += 'failed to complete the exam.\n'
      continue;
    } 
    if (points[i] < 61){
      sentence += 'earned a 6.\n';
      continue;
    }
    if (points[i] < 71){
      sentence += 'earned a 7.\n';
      continue;
    }
    if (points[i] < 81){
      sentence += 'earned an 8.\n';
      continue;
    }
    if (points[i] < 91){
      sentence += 'earned a 9.\n';
      continue;
    }
    sentence += 'earned a 10\n'
  }
  console.log(sentence)
}


console.log(grade(imena, bodovi))