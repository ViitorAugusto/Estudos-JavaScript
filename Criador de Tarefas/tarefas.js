const inputTarefas = document.querySelector(`.input-tarefas`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefa = document.querySelector(`.tarefa`);

/* ------------------ criaLi ------------------*/
function criaLi () {
    let li = document.createElement(`li`);
    return li;
}


/* ---------------- Fim criaLi ----------------*/

/* ---------------- criaTarefa ----------------*/


function criaTarefa (textoInput) {
    const li = criaLi()
}

/* -------------- Fim criaTarefa --------------*/




btnTarefa.addEventListener(`click`, function(){
    if (!inputTarefas.value) return;  // (lembrando) if com uma linha so nao precisa da chaves{}
    criaTarefa(inputTarefas.value);
    
});