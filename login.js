function cadastrar() {
  var usuario = document.getElementById("novoUsuario").value;
  var senha = document.getElementById("novoSenha").value;

  if (usuario == "" || senha == "") {
    alert("Os campos precisam ser preenchidos");
    return;
  }

  localStorage.setItem("emailCadastrado", usuario);
  localStorage.setItem("senhaCadastrado", senha);

  alert("Usuario cadastrado com suceso!");
}

function logar() {
  var usuario = document.getElementById("loginUsuario").value;
  var senha = document.getElementById("senhaUsuario").value;

  var usuarioSalvo = localStorage.getItem("emailCadastrado");
  var senhaSalvo = localStorage.getItem("senhaCadastrado");

  if (usuario == usuarioSalvo && senha == senhaSalvo) {
    alert("Login efetuado com sucesso!");
    location.href = "index.html";
  } else {
    alert("Login negado!");
  }
}
