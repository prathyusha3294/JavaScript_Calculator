(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value; // Use 'screen.value' to update the input value
        })
    });

    equal.addEventListener('click', function() {
        if (screen.value !== '') {
            try {
                // Use eval to calculate the expression
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                // Display error if the expression is invalid
                screen.value = "Error";
            }
        }
    });
     // Clear the screen when the clear button is clicked
     clear.addEventListener('click', function() {
        screen.value = '';
    });

})();
