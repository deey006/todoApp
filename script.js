const createTask = document.querySelector('.create-task')
const footer = document.querySelector('.footer-buttons')
const addTaskBtn = document.querySelector('.add-task')
const cancelBtn = document.querySelector('.cancel')
const plusBtn = document.querySelector('.plus')
const addedTop = document.querySelector('.create-top')
const addedLine = document.querySelector('.line')
const titleInput = document.querySelector('#title-input')
const deadlineInput = document.querySelector('#deadline-input')
const commentInput = document.querySelector('#comment')
const submitBtn = document.querySelector('.submit-btn')
const cardContainer = document.querySelector('.card-container')
const recentList = document.querySelector('.recent-list')

// GLOBAL VARIABLES
let li_P;
let title_H3; 
let date_P; 
let comment_P; 
let isValid = false
let pass = false


addedTop.style.display ='none'
addedLine.style.display ='none'


// OPEN THE ADD FORM PAGE 
function openAddTask () {
    createTask.style.display ='flex'

}
// CLOSE THE ADD FORM PAGE
function closeAddform () {
    createTask.style.display ='none'
}

// CREATING HTML ELEMENTS
function createElements () {
    // CREATING DIV ELEMENTS
    let cardEl = document.createElement('div')
    let dateEl = document.createElement('div')
    let commentEl = document.createElement('div')
    let titleEl = document.createElement('div')
    let liEl = document.createElement('li')
    // ADDING CLASSLISTS TO THE CREATED DIV ELEMENTS
    cardEl.classList.add('cards')
    titleEl.classList.add('card-title')
    dateEl.classList.add('days-left')
    commentEl.classList.add('card-body')
    // CREATING TEXT ELEMENT
    title_H3 = document.createElement('h3')
    date_P = document.createElement('p')
    comment_P = document.createElement('p')
    li_P = document.createElement('p')
    // ATTACHING THE TEXT ELEMENTS TO THE DIV ELEMENTS
    titleEl.appendChild(title_H3)
    dateEl.appendChild(date_P)
    commentEl.appendChild(comment_P)
    liEl.appendChild(li_P)
    //  ATTACHING THE DIV ELEMENTS TO A DIV CONTAINER
    cardEl.appendChild(titleEl)
    cardEl.appendChild(dateEl)
    cardEl.appendChild(commentEl)
    // ATTACHING THE DIV CONTAINER TO AN OVERALL CONTAINER
    cardContainer.append(cardEl)
    recentList.append(liEl)
}

function innerText () {
    createElements()
    title_H3.innerText = titleInput.value;
    date_P.innerText =  commentInput.value;
    comment_P.innerText = 'Deadline:' + " " + deadlineInput.value
    li_P.innerHTML = titleInput.value;
}

// validating form
function validateForm () {
    // USING CONSTRAINT API
    isValid = form.checkValidity();
    if  (!isValid){
        titleInput.style.border = '2px solid red'
        deadlineInput.style.border = '2px solid red'
        commentInput.style.border = '2px solid red'
    }else {
        innerText()
        titleInput.style.border = '2px solid green'
        deadlineInput.style.border = '2px solid green'
        commentInput.style.border = '2px solid green'
        addedTop.style.display ='block'
        addedLine.style.display ='block'    
        return;
    }
}

// ADDING A TASK FUCTION
function addTask (e) {
    e.preventDefault()
    // GETTING VALUES FROM THE ADD TASK INPUT FIELD
     validateForm()

}

// ADDING EVENTS TO ELEMENTS
addTaskBtn.addEventListener('click', openAddTask)
plusBtn.addEventListener('click', openAddTask)
cancelBtn.addEventListener('click', closeAddform)
submitBtn.addEventListener('click', addTask)