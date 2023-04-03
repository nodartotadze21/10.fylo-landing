 
 const emailInput = document.getElementById('top-mail-input');
 const submitButton = document.getElementById('get-started');


 
 submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   
   if (emailInput.value === '') {
     alert('Please enter your email address.');  
   } else {
     alert(`Thank you! We've sent an email to ${emailInput.value}. Please check your inbox for further instructions.`);
   }
 });
 