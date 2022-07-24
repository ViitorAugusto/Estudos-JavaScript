const inputTarefas = document.querySelector(`.input-tarefas`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefa = document.querySelector(`.tarefa`);

btnTarefa.addEventListener(`click`, function(){
    console.log(inputTarefas.value)
});