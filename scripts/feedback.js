function validateForm() {
    var service = document.getElementById('rate1').checked || document.getElementById('rate2').checked || document.getElementById('rate3').checked || document.getElementById('rate4').checked || document.getElementById('rate5').checked;
    var recommend = document.getElementById('rate4-1').checked || document.getElementById('rate4-2').checked || document.getElementById('rate4-3').checked || document.getElementById('rate4-4').checked || document.getElementById('rate4-5').checked;
    var navigation = document.getElementById('rate5-1').checked || document.getElementById('rate5-2').checked || document.getElementById('rate5-3').checked || document.getElementById('rate5-4').checked || document.getElementById('rate5-5').checked;
    var design = document.getElementById('rate6-1').checked || document.getElementById('rate6-2').checked || document.getElementById('rate6-3').checked || document.getElementById('rate6-4').checked || document.getElementById('rate6-5').checked;
    var frequency = document.getElementById('rate7-1').checked || document.getElementById('rate7-2').checked || document.getElementById('rate7-3').checked || document.getElementById('rate7-4').checked || document.getElementById('rate7-5').checked;
    var value = document.getElementById('rate8-1').checked || document.getElementById('rate8-2').checked || document.getElementById('rate8-3').checked || document.getElementById('rate8-4').checked || document.getElementById('rate8-5').checked;
    var comments = document.getElementById('comments').value;

    if (!service || !recommend || !navigation || !design || !frequency || !value) {
        return false;
        
    }

    if (comments.length > 500) {
        alert("Your comments are too long. Please keep them under 500 characters.");
        return false;
    }
    return true;

}

function announcement(){
    console.log(validateForm());
    if(validateForm()){
        alert("Your feedback is submitted. Thank you and See you again!");
    } else {
        alert("Please answer all questions.");
    }
    
}

document.getElementById("submit-button").addEventListener("click", announcement);
