const inputTarefas = document.querySelector(`.input-tarefas`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefa = document.querySelector(`.tarefas`);


/* ------------------ criaLi ------------------*/
function criaLi () {
    let li = document.createElement(`li`);
    return li;
}
/* ---------------- Fim criaLi ----------------*/
 


/* ---------------- keypress ----------------*/

inputTarefas.addEventListener(`keypress`, function (e){
    if (e.keyCode === 13) {
        if (!inputTarefas.value) return; 
        criaTarefa(inputTarefas.value);
       
    }
    
 }) // Ley Code do Enter é = 13
/* ---------------- Fim keypress ----------------*/



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