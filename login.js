document.getElementById('login-submit').addEventListener('click',function(){

    //get userEmail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get userPAssword
    
    

    const passWordField = document.getElementById('user-password');
    const userPassword = passWordField.value;
    
    //check user email and pass
    if(userEmail == 'saku@gmail.com' && userPassword == 'Password'){
        window.location.href = 'banking.html'
    }
})