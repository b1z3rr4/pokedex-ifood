class CoachModel {
    constructor(id, name, age, city){
        this.id = id;
        this.name = name;
        this.age = age;
        this.city = city || '';
    }
}

module.exports = CoachModel;