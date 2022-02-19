import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');


formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


const STORAGE_KEY = "feedback-form-state";


populateTextarea()




function onFormInput(event) {
    
let formData = localStorage.getItem(STORAGE_KEY);

    formData = formData ? JSON.parse(formData) : {};

        formData[event.target.name] = event.target.value;



     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    // console.log(formData);


};


function onFormSubmit(event) {
     const formData = new FormData(formEl);
    formData.forEach((key, value) => console.log(`${value}: ${key}`));

    event.preventDefault();

      event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);  
    
   

    // console.log(formData);
   
};


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedMessageParced = JSON.parse(savedMessage);
    

     if (savedMessageParced) {
         Object.entries(savedMessageParced).forEach(
        ([name, value]) => (formEl.elements[name].value = value),
    );
    }

   
}