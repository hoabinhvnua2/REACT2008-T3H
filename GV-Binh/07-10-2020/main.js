 // var taskLists;
// var saveTask = localStorage.getItem('tasks');
// var inputTask;
// var itemList;
// taskLists = saveTask ? JSON.parse(saveTask) : [];

// function onInit() {
//     var list = '', taskLenght = taskLists.length;
//     itemList = document.getElementById('itemLists');
//     for (let index = 0; index < taskLenght; index++) {
//         list += '<li class="list-group-item">'+ taskLists[index] +'</li>';
//         itemList.innerHTML = list;
//     }
// }

// function addNewItem(event) {
//     event.preventDefault();
//     inputTask =  document.getElementById('taskName').value;
//     taskLists.unshift(inputTask);
//     localStorage.setItem('tasks', JSON.stringify(taskLists));
//     onInit();
// }

// onInit();

var formValue;


function submitForm(event) {
    event.preventDefault();
    // alert('Bạn chưa nhập user name')

    formValue = document.getElementById('registerForm').elements;

    console.log(formValue.length);
    var valueLength = formValue.length;
    for (let index = 0; index < valueLength; index++) {
        console.log(formValue[index].value);
    }
}