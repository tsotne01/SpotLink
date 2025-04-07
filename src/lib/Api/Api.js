export const handleRegistration = (data) => {
  localStorage.setItem("username", data.username);
  localStorage.setItem("email", data.email);
  localStorage.setItem("password", data.password);
  console.log("username from localstorage", localStorage.getItem("username"));
  console.log("email from localstorage", localStorage.getItem("email"));
  console.log("password from localstorage", localStorage.getItem("password"));
};

export const handleSignIn = (data)=>{
    const email = localStorage.getItem('email');
    const password = localStorage.getItem("password")
    if(email === data.email && password ===data.password){
        console.log("succesfully authorized!");
    }else{
        console.log("wrong credentials!");
    }
}