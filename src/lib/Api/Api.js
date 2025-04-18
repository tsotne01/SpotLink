
export const handleRegistration = async (data) => {
  localStorage.setItem("username", data.username);
  localStorage.setItem("email", data.email);
  localStorage.setItem("password", data.password);
  console.log("username from localstorage", localStorage.getItem("username"));
  console.log("email from localstorage", localStorage.getItem("email"));
  console.log("password from localstorage", localStorage.getItem("password"));
};

export const handleSignIn = (data) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  if (email === data.email && password === data.password) {
    console.log("succesfully authorized!");
  } else {
    console.log("wrong credentials!");
  }
};

export const getUser = async () => {
  const email = localStorage.getItem("email") || "";
  const username = localStorage.getItem("username") || "";
  const password = localStorage.getItem("password") || "";

  return {
    email: email,
    username: username,
    password: password,
  };
};

export const logOut = async () => {
  localStorage.setItem("email", "");
  localStorage.setItem("username", "");
  localStorage.setItem("password", "");
};
