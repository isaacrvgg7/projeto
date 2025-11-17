document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeMensagem").value;
  const email = document.getElementById("emailMensagem").value;
  const numero = document.getElementById("numeroMensagem").value;
  const cpf = document.getElementById("cpfMensagem").value;

  const texto = `Olá, meu nome é ${nome} (${email}) meu número é (${numero}) e meu cpf é (${cpf})`;
  const url = `https://wa.me/5527999795327?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
