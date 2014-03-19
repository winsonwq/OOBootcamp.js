function Geek(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  var skills = {};

  this.addSkill = function (skill) {
    skills[skill] = true;
  };

  this.removeSkill = function (skill) {
    delete skills[skill];
  };

  this.getSkills = function (iterator) {
    if(!iterator) return;
    for(var skill in skills) {
      iterator.call(this, skill);
    }
  };

}

Geek.prototype.writeCode = function (code) {
  console.log(this.name + " is writing code '" + code + "'");
};

var lucy = new Geek('Lucy', 20, 'girl');
lucy.addSkill('javascript');
lucy.addSkill('ruby');
lucy.addSkill('C#');
lucy.addSkill('C++');
lucy.removeSkill('C++');

lucy.getSkills(function (skill) {
  console.log(skill);
});

lucy.writeCode('console.log(1);');
