const input = document.getElementById("favchap");
const btn = document.getElementsByTagName("button");
const list = document.querySelector("#list");


btn[0].addEventListener('click',() => {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('class', 'delete')
    deleteButton.innerText = "❌";

    if(input.value == "")
    {
        input.focus(); 
        return;
    }

    const li = document.createElement('li');
    li.innerText = input.value;
    li.appendChild(deleteButton)
    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    })

    input.value = '';
})




