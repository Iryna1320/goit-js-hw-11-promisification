const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise(reslove => {
    reslove(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
  });

  return promise;
};

const logger = promise => console.table(promise);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
