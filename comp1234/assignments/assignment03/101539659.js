function part1() {
  // Start your code here for first part. There is no need to return any value.
  const studentID = "101539659";
  const fullName = "Joosung Ahn";
  const labProfessor = "Professor Zajaczkowski";
  const labSessionDay = "Wednesday";
  // const semester = "Fall 2023";

  let encodedStudentID = "";
  let encodedFullName = "";
  let encodedLabProfessor = "";
  let encodedLabSessionDay = "";

  for (let i = 0; i < studentID.length; i++) {
    encodedStudentID += String.fromCharCode(studentID.charCodeAt(i) + 1);
  }
  for (let i = 0; i < fullName.length; i++) {
    encodedFullName += String.fromCharCode(fullName.charCodeAt(i) + 1);
  }
  for (let i = 0; i < labProfessor.length; i++) {
    encodedLabProfessor += String.fromCharCode(labProfessor.charCodeAt(i) + 1);
  }
  for (let i = 0; i < labSessionDay.length; i++) {
    encodedLabSessionDay += String.fromCharCode(
      labSessionDay.charCodeAt(i) + 1
    );
  }

  document.write(
    `<div style="position: fixed; right: 0; bottom: 0">
      <p>
        <b>Student ID:</b> ${studentID} <b>Full Name:</b> ${fullName}
        <br>
        <b>Lab Professor:</b> ${labProfessor} <b>Lab Session Day:</b> ${labSessionDay}
      </p>
      <p>
        <b>Encoded Student ID:</b> ${encodedStudentID} <b>Encoded Full Name:</b> ${encodedFullName}
        <br>
        <b>Encoded Lab Professor:</b> ${encodedLabProfessor} <b>Encoded Lab Session Day:</b> ${encodedLabSessionDay}
      </p>
    </div>`
  );
}

function part2(num1, num2) {
  // Assign the return value to a variable named _return
  let _return = "";
  // Your code should start here
  num1 += 5;
  num2 -= 3;

  if (num1 < num2) {
    _return = -1;
  } else if (num1 === num2) {
    _return = 0;
  } else {
    _return = 1;
  }
  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}

function part3(num1, num2) {
  // Assign the return value to a variable named _return
  let _return = "";
  // To hold the sum of numbers for the divisibility condition
  let sum = 0;

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      _return += i;
      sum += i;
    }
  } else if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      _return += i;
      sum += i;
    }
  } else {
    _return = (num1 + num2).toString();
    sum = num1 + num2;
  }

  if (sum % 3 === 0) {
    _return = "Magic" + _return;
  }
  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}

function part4(array_index, array) {
  // Assign the return value to a variable named _return
  let _return = "";
  // Your code should start here
  if (array_index < 0 || array_index >= array.length) {
    _return = false;
  } else {
    if (array[array_index] === 0) {
      _return = true;
    } else if (array[array_index] % 2 === 0) {
      let sum = 0;
      for (let i = 0; i < array_index; i++) {
        sum += array[i];
      }
      _return = sum;
    } else {
      let sum = 0;
      for (let i = array_index + 1; i < array.length; i++) {
        sum += array[i];
      }
      _return = sum;
    }
  }

  if (_return === true) {
    _return = true;
  }
  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}

function part5(array) {
  // Assign the return value to a variable named _return
  let _return = "";
  // Your code should start here
  let odds = [];
  let evens = [];
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
      evenSum += array[i];
    } else {
      odds.push(array[i]);
      oddSum += array[i];
    }
  }

  array.length = 0;

  for (let i = 0; i < odds.length; i++) {
    array.push(odds[i]);
  }

  for (let i = 0; i < evens.length; i++) {
    array.push(evens[i]);
  }

  array.push(oddSum);
  array.push(evenSum);

  _return = array;
  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}
