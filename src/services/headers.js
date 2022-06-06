export default function header(useJson = false) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    // console.log(user.token);
    if (useJson) {
      return {
        "Authorization": user.token,
        'Content-Type':'application/json'
      }
    }
    return { "Authorization": user.token };
  } else {
    return {};
  }
}
