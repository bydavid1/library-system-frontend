export default function header() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    // console.log(user.token);
    return { "Authorization": user.token };
  } else {
    return {};
  }
}