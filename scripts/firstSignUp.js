let initCoding = code();

function code(){
  //console.log("function code");
  var arrayCode = []
  for (let i = 0; i <= 5; i++) {
    let randomCode = Math.floor(Math.random()*10);
    arrayCode.push(randomCode);
  }
  alerta(arrayCode);
}

function alerta(arrayCode){
  swal.fire({
    title: "¡Bienvenido!",
    text: `Éste es tu codigo de registro: ${arrayCode}`,
    icon: "success",
    confirmButtonText: "Continuar"
  });
}

let cancel = document.querySelector("#cancelButton").addEventListener("click", cancelSignUp);

function cancelSignUp(){
  swal.fire({
    title: "Cancelar",
    text: "¿Seguro que quiere cancelar su registro?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar registro",
    confirmButtonText: "Continuar registro",
  });
}


let continueButton = document.querySelector("#continueButton").addEventListener("click", continueB);

function continueB(){
  document.location.href = "./formSignUp.html"
}
