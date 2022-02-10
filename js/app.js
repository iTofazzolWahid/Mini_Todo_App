const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById('heading').innerText = `Seems it's ${day} 🤗`;
// Add Item To Table 
function addItem() {
    const inputValue = document.getElementById('input-field');
    if (inputValue.value == '') {
        const alertModel = document.getElementById('alert-Modal');
        const modalContent = document.getElementById('modal-content');
        alertModel.style.zIndex = '1';
        alertModel.style.opacity = '1';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';

        const closeButton = document.getElementById('btn-close');

        closeButton.addEventListener('click', function() {
            alertModel.style.zIndex = '-1';
            alertModel.style.opacity = '0';
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'translateY(-40px)';
        });

    } else {
        const tr = document.createElement('tr');
        tr.classList.add('single-item');
        tr.innerHTML = `<td class="item-name">${inputValue.value}</td>
    <td class="status">In Progress</td>
    <td class="actions"><button class="btn btn-success me-2 complete"><ion-icon name="checkmark-outline"></ion-icon></button><button class="btn btn-danger delete"><ion-icon name="trash-outline"></ion-icon></button></td>`;
        document.getElementById('table-body').appendChild(tr);

        inputValue.value = '';


        //Finish Task

        const completeButton = document.getElementsByClassName("complete");
        for (const button of completeButton) {
            button.addEventListener("click", function(e) {
                const trackTodoItem = e.target.parentNode.parentNode.parentNode.childNodes[0];
                trackTodoItem.style.textDecoration = 'line-through';
                trackTodoItem.style.color = 'rgb(25, 135, 83)';
                const trackStatus = e.target.parentNode.parentNode.parentNode.childNodes[2];
                trackStatus.innerText = 'Completed';
                trackStatus.style.color = '#198753';
            })
        }


        //Delete Task

        const deleteButton = document.getElementsByClassName("delete");
        for (const button of deleteButton) {
            button.addEventListener("click", function(e) {
                const trackTr = e.target.parentNode.parentNode.parentNode.parentNode;
                trackTr.removeChild(e.target.parentNode.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode);
            })
        }
    }


}

// Keyboard Enter Event in Input 

const enterPress = document.getElementById('input-field');
enterPress.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addItem();
    }
})