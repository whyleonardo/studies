const user = {
  firstName: 'Christian',
  lastName: 'Leonardo',
  fullName: function () {
    return console.log(`${this.lastName} ${this.firstName}`);
  },
  age: 24,
  instagram: '@whyleonardo_',
  skills: ['Front-End', 'Mobile']
}

const { firstName, lastName, skills, ...info } = user
const [primary] = skills

console.log(info)