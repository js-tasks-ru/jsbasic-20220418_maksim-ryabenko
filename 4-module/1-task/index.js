function makeFriendsList(friends) {
  let friendList = document.createElement("UL");

  for( let friend of friends) {
    friend = `<li>${friend.firstName} ${friend.lastName} </li>`;
    friendList.insertAdjacentHTML('beforeEnd', friend);
  }

  return friendList;
}
