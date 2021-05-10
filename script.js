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
const footerMenu = document.querySelector('.footer-menu')
const footerButtons = document.querySelector('.footer-buttons')
const toRemove = document.querySelector('#to-remove')
const completeEl = document.querySelector('#complete')
const incompleteEl = document.querySelector('#incomplete')
const pendingEl = document.querySelector('#pending')


// GLOBAL VARIABLES
let li_P;
let title_H3; 
let date_P; 
let comment_P; 
let isValid = false
let pass = false
let isChecking = 0
toRemove.style.display = 'block'
// TOGGLE NAVBAR
function toggleClass() {
    footerButtons.classList.toggle('left')
}
addedTop.style.display ='none'
addedLine.style.display ='none'

// date input setting minumum date to today's date
let date = new Date()
let year = date.getFullYear()
let month = ("0" + (date.getMonth() + 1 )).slice(-2)
let day =  ("0" + date.getDate()).slice(-2)
let maxDate = (year + '-' + month + ('-' + day))
deadlineInput.setAttribute('min', maxDate)

// OPEN THE ADD FORM PAGE 
function openAddTask () {
    createTask.style.display ='flex'

}
// CLOSE THE ADD FORM PAGE
function closeAddform () {
    createTask.style.display ='none'
    submitBtn.disabled = false
    plusBtn.disabled = false   
    addedTop.style.display ='none'
    addedLine.style.display ='none' 
}

// let btnDelete

// CREATING HTML ELEMENTS
function createElements () {
    // CREATING DIV ELEMENTS
    let cardEl = document.createElement('div')
    let dateEl = document.createElement('div')
    let commentEl = document.createElement('div')
    let titleEl = document.createElement('div')
    let cardButtons = document.createElement('div')
    let liEl = document.createElement('li')
    btnComplete = document.createElement('button')
    btnDelete = document.createElement('button')

    // ADDING CLASSLISTS TO THE CREATED DIV ELEMENTS
    cardEl.classList.add('cards')
    titleEl.classList.add('card-title')
    dateEl.classList.add('card-body')
    commentEl.classList.add('days-left')
    cardButtons.classList.add('card-buttons')
    btnComplete.classList.add('task-complete')
    btnDelete.classList.add('delete-task')
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
    cardButtons.appendChild(btnComplete)
    cardButtons.appendChild(btnDelete)
    //  ATTACHING THE DIV ELEMENTS TO A DIV CONTAINER
    cardEl.appendChild(titleEl)
    cardEl.appendChild(dateEl)
    cardEl.appendChild(commentEl)
    cardEl.appendChild(cardButtons)
    // ATTACHING THE DIV CONTAINER TO AN OVERALL CONTAINER
    cardContainer.append(cardEl)
    recentList.append(liEl)
}

let btnComplete;
let btnDelete
function innerText () {
    createElements()
    title_H3.innerText = titleInput.value;
    date_P.innerText =  commentInput.value;
    comment_P.innerText = 'Deadline:' + " " + deadlineInput.value
    li_P.innerHTML = titleInput.value;
    btnDelete.innerHTML = 'Delete'
    btnComplete.innerHTML = 'Complete'
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
        submitBtn.disabled = true
        plusBtn.disabled = true  
        addedTop.style.display ='block'
        addedLine.style.display ='block' 
 
        return;
    }
}
let total = 0
let isComplete = 0
let ispending = 0
let isIncomplete = 0
let secondTotal;
function add (e) {
    if(e.target === btnComplete)
        isComplete += 1
        secondTotal -= 1
        let completePercentage = (isComplete/ispending) * 100
        completeEl.innerText = `${completePercentage}%`        
}
// deleting Todos
function clicked(e) {
    isChecking --
    total --
    let incompletePercentage = (secondTotal/total) * 100
    incompleteEl.innerText = `${incompletePercentage}%`    
    pendingEl.innerText = `${incompletePercentage}%`    
if(secondTotal === 0){
    incompleteEl.innerText = `${0}%`    
    pendingEl.innerText = `${0}%`    
}
    if (isChecking > 0){
        toRemove.style.display = 'none'
    }else{
        toRemove.style.display = 'block'
        li_P.innerHTML = 'No Recently Added Task';
    }

    e.path[2].remove()
}

// ADDING A TASK FUCTION
function addTask (e) {
    e.preventDefault()
    isChecking ++
    ispending++
    total ++
    // GETTING VALUES FROM THE ADD TASK INPUT FIELD
     validateForm()
     secondTotal = total
     if (isChecking > 0){
        toRemove.style.display = 'none'
        incompleteEl.innerText = `${(total / total) * 100}%`    
        pendingEl.innerText = `${(total / total) * 100}%`       
    }else{
        toRemove.style.display = 'block'
    }
     btnDelete.addEventListener('click', clicked)
     btnComplete.addEventListener('click', add)
     
}


// ADDING EVENTS TO ELEMENTS
footerMenu.addEventListener('click', toggleClass)
addTaskBtn.addEventListener('click', openAddTask)
plusBtn.addEventListener('click', openAddTask)
cancelBtn.addEventListener('click', closeAddform)
submitBtn.addEventListener('click', addTask)
