let login = (email, password) => {
  let emailnya = "nafiz@gmail.com";
  let passwordnya = 1111;

  function goHome() {
    return "halaman home";
  }
  function backLogin() {
    return "gagal login";
  }
  if (emailnya == email && passwordnya == password) {
    document.write(goHome());
  } else {
    document.write(backLogin());
  }
};

let user = prompt("Masukan emailnya");
let sandi = prompt("Masukan PASSWORDNYA?");
login(user, sandi);
