document.getElementById("loginBtn").addEventListener("click", function () {

  const usernameInput = document.getElementById("input-username");
  const username = usernameInput.value;
  console.log(username);


  //2.get the password
const inputPassword = document.getElementById("input-password");
  const password = inputPassword.value;
  console.log(password);


  // 3. match username and password
 if (username === "admin" && password === "admin123") {

    // // 3-1 true :::>>> alert> issue page
   alert("Login success");
    window.location.replace("/github-issue-management/issues.html");
 } else {
    // 3-1 false:::>> alert>return
    alert("Wrong username or password");
  }
return;

});