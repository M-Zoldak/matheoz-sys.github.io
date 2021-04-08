const addBtn = document.querySelector('.add');

//POPUP
const popup = document.querySelector('.popup');
const submitBtn = document.querySelector('.submit');
const select = document.querySelector('select');
const text4Notice = document.querySelector('#noticetext')
const warningMsg = document.querySelector('.warning');

//NOTES
const notes = document.querySelector(".notices");


// NAV

addBtn.addEventListener('click', ()=>{
    popup.classList.add('active');
})

function deleteAll(){
    if(confirm("Are you sure, that you want to delete all of notes?" )){
    notes.innerHTML = ""
    }
}

//POPUP ACTIONS
//Adding new note
submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(select.value=='none'){
        warningMsg.textContent = "Choose type of notice!";
    }else{
        createNote();
    }

})


let id = 0;
const createNote = () =>{
    const note = document.createElement('div');
    note.setAttribute("id", id);
    let text = text4Notice.value;
    let noteClass = select.value;
    let title = select.value.charAt(0).toUpperCase() + select.value.slice(1);
    note.innerHTML = 
    `
    <div class="note ${noteClass}">
    <div class="note__title">${title}<div class="UIopt"><i class="fas fa-edit" onclick="edit(${id})"></i><i class="fas fa-minus-circle" onclick="deleteNote(${id})"></i></div></div>
    <div class="note__text">${text}</div>
    </div>        `
    notes.appendChild(note);
    id++;
    select.value = "none";
    text4Notice.value = "";
    popup.classList.remove("active");
}

function edit(id){
    const note = document.getElementById(id);
    let editBtn = note.querySelector('.fa-edit');
    editBtn.classList.add('active');
    let textEdit = note.querySelector(".note__text");
    textEdit.setAttribute("contenteditable", "true");
    textEdit.focus();
    textEdit.addEventListener("blur", ()=>{
        textEdit.setAttribute("contenteditable", "false");
        editBtn.classList.remove('active');
    })
}

function deleteNote(id){
    const note = document.getElementById(id);
    if(confirm("Are you sure to delete this note?")){notes.removeChild(note)}
}

