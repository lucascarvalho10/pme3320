// Função para gerar valores aleatórios dentro de um intervalo específico
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar os valores na tabela e aplicar lógica de cores e texto
function updateTableValuesAndColor() {
  // Gerar valores aleatórios para cada parâmetro
  var umidadeValue = getRandomValue(60, 68);
  var temperaturaValue = getRandomValue(26, 29);
  var umidadeSoloValue = getRandomValue(10, 19);
  var phSoloValue = getRandomValue(2, 3.5);

  // Atualizar os elementos na tabela com os novos valores
  document.getElementById("umidade").textContent =
    umidadeValue.toFixed(0) + "%";
  document.getElementById("temperatura").textContent =
    temperaturaValue.toFixed(0) + "°C";
  document.getElementById("umidade-solo").textContent =
    umidadeSoloValue.toFixed(0) + "%";
  document.getElementById("ph-solo").textContent = phSoloValue.toFixed(1);
}

// Chamar a função inicialmente para exibir os primeiros valores e cores
updateTableValuesAndColor();

// Atualizar os valores e cores a cada 20 segundos
setInterval(updateTableValuesAndColor, 20000);
