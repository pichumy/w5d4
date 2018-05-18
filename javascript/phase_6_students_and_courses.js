function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;

  this.courses = [];


}

Student.prototype.name = function(){
  return this.fname + " " + this.lname;

};

Student.prototype.enroll = function(course){
  if(!this.courses.includes(course)){
  course.addStudent(this);
  this.courses.push(course);
}
};

Student.prototype.courseLoad = function(){
  let hashbrown = {};
  this.courses.forEach((course) => {
    if (hashbrown[course.department] === undefined){
      hashbrown[course.department] = course.credits;
    }else {
      points = hashbrown[course.department];
      hashbrown[course.department] = course.credits + points;
    }
  });
  return hashbrown;
};

function Course(name, department, credits){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student){
  if(!this.students.includes(student)){
    this.students.push(student);
    student.enroll(this);
  }
};
