var taskLists;
var inputTask;
var saveLocal = localStorage.getItem('task');
var itemLists;


taskLists = saveLocal ? JSON.parse(saveLocal) : [];


function onInit() {
    var list = '', taskLength = taskLists.length;
    itemLists = document.getElementById('itemLists');
    for (let index = 0; index < taskLength; index++) {
        list += '<li class="list-group-item">' + taskLists[index] + '</li>';
        itemLists.innerHTML = list;
    }
}
function addNewItem(event) {

    event.preventDefault();
    inputTask = document.getElementById('taskName').value;
    // itemLists = document.getElementById('itemLists');
    taskLists.unshift(inputTask);
    // console.log(taskLists);

    localStorage.setItem('task', JSON.stringify(taskLists));

    // var taskLength = taskLists.length;
    // var list = '';

    // for (let index = 0; index < taskLength; index++) {

    //     console.log(taskLists[index]);
    //     list += '<li class="list-group-item">' + taskLists[index] + '</li>';
    //     itemLists.innerHTML = list;
    // }
    onInit();

}
onInit();

