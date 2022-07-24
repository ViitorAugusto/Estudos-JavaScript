const inputTarefas = document.querySelector(`.input-tarefas`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefa = document.querySelector(`.tarefas`);

/* ------------------ criaLi ------------------*/
function criaLi () {
    let li = document.createElement(`li`);
    return li;
}

 inputTarefas.addEventListener(`keypress` function (e){
    console.log(e)
 })

/* ---------------- Fim criaLi ----------------*/

/* ---------------- criaTarefa ----------------*/


function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
}

/* -------------- Fim criaTarefa --------------*/




btnTarefa.addEventListener(`click`, function(){
    if (!inputTarefas.value) return;  // (lembrando) if com uma linha so nao precisa da chaves{}
    criaTarefa(inputTarefas.value);
    
});