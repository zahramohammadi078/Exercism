export class GradeSchool {
    constructor() {
      this.rosterData = {};
    }
  
    roster() {
      const copy = {};
      for (const grade in this.rosterData) {
        copy[grade] = [...this.rosterData[grade]]; 
      }
      return copy;
    }
  
    add(name, grade) {
      for (const key in this.rosterData) {
        const index = this.rosterData[key].indexOf(name);
        if (index !== -1) {
          this.rosterData[key].splice(index, 1);
        }
      }
  
      if (!this.rosterData[grade]) {
        this.rosterData[grade] = [];
      }
  
      this.rosterData[grade].push(name);
  
      this.rosterData[grade].sort();
    }
  
    grade(gradeNumber) {
      return this.rosterData[gradeNumber] ? [...this.rosterData[gradeNumber]] : []; 
    }
  }
  