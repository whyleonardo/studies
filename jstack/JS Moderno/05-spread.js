const user = {
  firstName: 'Christian',
  lastName: 'Leonardo',
  age: 24,
  instagram: '@whyleonardo_',
  skills: ['Front-End', 'Mobile'],
  active: false
}

const newUser = {
  ...user,
  skills: [...user.skills, 'Back-End'],
  active: true
}

console.log(user)
console.log(newUser)

