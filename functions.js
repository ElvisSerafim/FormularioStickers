var decrement = document.getElementById("minusCounter");
var increment = document.getElementById("addCounter");
var inputCounter = document.getElementById("inputCounter");
var messagemConfirmacao = document.getElementById("messagemConfirmacao");
var submit = document.getElementById("submit");
var check = document.getElementsByName("itemCheck");
var spanCheck = document.getElementsByName("checkmark");
var optionsStickers = document.getElementsByClassName("containerOptions");

/*Evento de decrementar o contador, onde o valor é diminuido e verificado se está em 
 0 para desabilitar a função de decrementar */
decrement.addEventListener("click", () => {
  if (parseInt(inputCounter.value) >= 1) {
    inputCounter.value = parseInt(inputCounter.value) - 1;
    if (parseInt(inputCounter.value) === 0) {
      decrement.style.fill = "#d3d7d2";
    }
  } else {
    decrement.style.fill = "#d3d7d2";
  }
});

/*Evento de incrementar o contador, onde o valor é incrementado e verificado se está em 
 0 para habilitar a função de decrementar */
increment.addEventListener("click", () => {
  if (parseInt(inputCounter.value) === 0) {
    decrement.style.fill = "#2f3676";
    decrement.addEventListener("mouseover", () => {
      //Adiciona o evento de hover no icone de decrementar do contador
      decrement.style.fill = "#191847";
    });
    decrement.addEventListener("mouseleave", () => {
      // Adiciona o evento de leave do mouse no icone de decrementar do contador
      if (parseInt(inputCounter.value) >= 1) {
        decrement.style.fill = "#2f3676";
      } else {
        decrement.style.fill = "#d3d7d2";
      }
    });
  }
  inputCounter.value = parseInt(inputCounter.value) + 1;
});

/*Esta é a função de enviar o form, onde é verificado se os campos de opções
de Stickers estão preenchidos e se a quantidade é diferente de 0*/
submit.addEventListener("click", () => {
  var flag = false;
  for (var i = 0; i < check.length; i++) {
    //Laço que verifica se tem alguma opção de sticker marcada
    if (check[i].checked === true) {
      flag = true;
    }
  }

  // Verifica se tem alguma opção escolhida e se a quantidade é maior que 0 para envio do form.
  if (flag === true && parseInt(inputCounter.value) > 0) {
    for (var j = 0; j < spanCheck.length; j++) {
      //Laço de repetição que muda as cores das opções caso estejam nas cores de Erro
      spanCheck[j].style.backgroundColor = "#2f3676";
      optionsStickers[j].style.color = "#071723";
    }
    messagemConfirmacao.classList.add("show"); // Exibindo messagem de sucesso
    inputCounter.style.backgroundColor = "#dde3e9";
    inputCounter.style.border = "1px solid #222";
    setTimeout(() => {
      messagemConfirmacao.classList.remove("show"); // Escondendo mensagem de sucesso após 7 segundos.
    }, 7000);
  } else if (flag === false) {
    // Caso não tenha nenhum selecionado, modifica as cores das opções e emite um alerta.
    alert("Nenhum sticker selecionado !");
    for (var k = 0; k < spanCheck.length; k++) {
      spanCheck[k].style.backgroundColor = "#ffb6ab";
      optionsStickers[k].style.color = "red";
    }
    inputCounter.style.backgroundColor = "#dde3e9";
    inputCounter.style.border = "1px solid #222";
  } else {
    // Caso não tenha nenhuma quantidade, modifica a cor do contador e emite um alerta.
    alert("Escolha a quantidade de Stickers !");
    inputCounter.style.backgroundColor = "#ffb6ab";
    inputCounter.style.border = "1px solid #e64d46";
    for (var x = 0; x < spanCheck.length; x++) {
      spanCheck[x].style.backgroundColor = "#2f3676";
      optionsStickers[x].style.color = "#071723";
    }
  }
});
