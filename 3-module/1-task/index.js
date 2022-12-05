function namify(users) {
  let result = [];
  result = users.map((item) => {
    return item.name;
  })
  return result;
}
