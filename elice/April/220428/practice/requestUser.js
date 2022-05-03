import API from "./api";

function transformUser(user) {
    //user.email -> email
    //user.name.first, user.name.last -> name - `${user.name.first} ${user.name.last}`
    //user.picture.large -> pictureUrl
    //user.login.username -> username
    //user.location.country.
    //user.location.state,
    //user.location.city 
    //-> location - `${user.location.country}, ${user.location.state}, ${user.location.city}`
    //user.dob.age -> user.age
    const { first, last } = user.name
    const { country, state, city } = user.location
    
    const email = user.email
    const name = `${first} ${last}`
    const pictureUrl = user.picture.large
    const username = user.login.username
    const location = `${country}, ${state}, ${city}`
    const age = user.dob.age
    
    return { email, name, pictureUrl, username, location, age }
    
}

function filterByAge(user) {
    return user.age >= 40
}

const requestUsers = () => {
// 유저 정보를 변화하고, 필터링하는 코드를 작성해보세요.
  return API.fetchUsers()
  .then((users) => {
    
    return users
            .map(transformUser)
            .filter(filterByAge)
  });
};

export default requestUsers;
