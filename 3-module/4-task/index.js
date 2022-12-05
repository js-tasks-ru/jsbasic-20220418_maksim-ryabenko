function showSalary(users, age) {
  let newUsers= [];
  let result = [];
  
  newUsers = users.filter((item) => item.age <= age);
  newUsers = newUsers.map((item, index) => {
    
    (index < (newUsers.length -1)) ? 
      result += (`${item.name}, ${item.balance}` + `\n`) : 
      result += (`${item.name}, ${item.balance}`);
  })
  return result;
}
