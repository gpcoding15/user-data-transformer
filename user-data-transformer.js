const filterUsersMoreThan24YearsOld = (users) => {
    return users
    .filter(user => user.age >=25)
    .map(user => (
        ({username: user.name.toLowerCase(), isAdult: true})
    ))
};

module.exports = { filterUsersMoreThan24YearsOld }