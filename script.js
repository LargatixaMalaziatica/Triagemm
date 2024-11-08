document.getElementById("triage-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os dados do paciente
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    // Obter os sintomas selecionados
    const symptoms = document.querySelectorAll('input[name="symptom"]:checked');
    let symptomCount = symptoms.length;

    // Lógica para determinar a prioridade
    let priority = "";

    if (symptomCount >= 5 || age > 60) {
        priority = "Alta | Vermelho";
    } else if (symptomCount >= 3) {
        priority = "Média | Amarelo";
    } else {
        priority = "Baixa | Verde";
    }

    // Exibir o resultado da triagem
    const resultDiv = document.getElementById("triage-result");
    resultDiv.innerHTML = `<strong>Nome:</strong> ${name}<br>
                           <strong>Idade:</strong> ${age}<br>
                           <strong>Prioridade de Atendimento:</strong> ${priority}`;
});