let elForm = $(".form");
let elInput = $(".form__input");
let elText1 = $(".text-change-1");
let elText2 = $(".text-change-2");
let elText3 = $(".text-change-3");
const elExpensisForm = $(".form-xarajat");
const elExpenceInput = $(".expence-input");
const elNameInput = $(".name-input");
const elExpenceList = $(".expence-list");


let budgetArr = [];
let array2 = [];
let balance = [];
const array3 = [];
const array4 = [];


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    let elBugInput = elInput.value.trim() *1;
    elInput.value = "";
    balance.push(elBugInput)

    elText1.textContent = balance.reduce((xisobla, element) => xisobla + element, 0);
    elText3.textContent = balance.reduce((xisobla, element) => xisobla + element, 0) - array2.reduce((xisobla, item) => xisobla + item, 0) + array4.reduce((xisobla, item) => xisobla + item, 0);
    
})  


const renderBudget = function(item, htmlElement) {
    item.forEach(item => {
        let newItem = document.createElement("li")
        newItem.setAttribute("class", "d-flex justify-content-between w-75 ms-auto me-auto mb-3 fw-bold text-primary")
        let newTitle = document.createElement("p")
        let newText = document.createElement("p")
        let newButton = document.createElement("button")

        newButton.setAttribute("class", "remove btn btn-danger")
        newButton.textContent = "Remove"
        newTitle.textContent = item.name;
        newText.textContent = item.amount;

        newButton.dataset.delete = item.name;

        elText2.textContent = array2.reduce((acc, item) => acc + item, 0) - array3.reduce((acc, item) => acc + item, 0)
        elText3.textContent = balance.reduce((acc, element) => acc + element, 0) - array2.reduce((acc, item) => acc + item, 0) + array4.reduce((acc, item) => acc + item, 0);

        htmlElement.appendChild(newItem);
        newItem.appendChild(newTitle);
        newItem.appendChild(newText);
        newItem.appendChild(newButton);
    })
}

elExpensisForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
  
    const expenceInputValue = elExpenceInput.value *1;
    const nameInputValue = elNameInput.value;
  
  
    elExpenceInput.value = null;
    elNameInput.value = null;
  
    const myBudget = {
      amount: expenceInputValue,
      name: nameInputValue,
    }
  
    budgetArr.push(myBudget);
    array2.push(myBudget.amount);
  
    elExpenceList.innerHTML = null;
  
    renderBudget(budgetArr, elExpenceList);
  })
  


  elExpenceList.addEventListener("click", (evt) => {
    if(evt.target.matches(".remove")){
  
      const removeId = evt.target.dataset.delete;
      const findElement = budgetArr.findIndex(item => item === removeId);
  
  
      budgetArr.splice(findElement, 1);
  
      elExpenceList.innerHTML = null;
  
      renderBudget(budgetArr, elExpenceList);
    }
  })