let submitButton = document.querySelector('#submit');
let radioGroups = new Set();
document.querySelectorAll('input[type = "radio"]').forEach(input => radioGroups.add(input.name))

//validate all questions must be selected
function validateAnsweredQuestions() {
    let valid = true;

    radioGroups.forEach(name => {
        let isCheck = document.querySelector(`input[name = "${name}"]:checked`);
        if (!isCheck){
            valid = false;
        }
    })

    if (!valid){
        alert('Please answer all questions before submit.')
    }

    return valid;
}

function getCountryCount(){
    let vietnamCount = 0;
    let japanCount = 0;
    let jamaicaCount = 0;

    //Get count for each country
    radioGroups.forEach(name => {
        let checkedRadio = document.querySelector(`input[name = "${name}"]:checked`)
        let label = document.querySelector(`label[for="${checkedRadio.id}"] span`);
        let answerText = label.innerHTML;

        switch (name) {
            case "fav_type":
                switch(answerText){
                    case "Cultural Exploration":
                        vietnamCount++;
                        break;
                    case "Tropical Relaxation":
                        jamaicaCount++;
                        break;
                    case "Modern Tradition":
                        japanCount++;
                        break;
                    }
                break;
            case "adv_level":
                switch(answerText){
                    case "Love Adventures":
                        vietnamCount++;
                        break;
                    case "Relaxing Charm":
                        jamaicaCount++;
                        break;
                    case "Gentle Exploration":
                        japanCount++;
                        break;
                    }
                break;
            case "fav_weather":
                switch(answerText){
                    case "Scenic Varied":
                        vietnamCount++;
                        break;
                    case "Warm Tropical":
                        jamaicaCount++;
                        break;
                    case "Comfortable Seasonal":
                        japanCount++;
                        break;
                    }
                break;
            case "fav_food":
                switch(answerText){
                    case "Spicy Flavorful":
                        vietnamCount++;
                        break;
                    case "Tropical Seafood":
                        jamaicaCount++;
                        break;
                    case "Elegant Delicate":
                        japanCount++;
                        break;
                    }
                break;
            case "budget":
            switch(answerText){
                case "Affordable Value":
                    vietnamCount++;
                    break;
                case "Moderate Unique":
                    jamaicaCount++;
                    break;
                case "Flexible Premium":
                    japanCount++;
                    break;
                }
                break;
            case "free_time":
            switch(answerText){
                case "Market Exploring":
                    vietnamCount++;
                    break;
                case "Beach Relaxing":
                    jamaicaCount++;
                    break;
                case "Garden Wandering":
                    japanCount++;
                    break;
                }
                break;
            case "fav_activity":
            switch(answerText){
                case "Adventure and Nature":
                    vietnamCount++;
                    break;
                case "Water Sports":
                    jamaicaCount++;
                    break;
                case "Cultural Festivals":
                    japanCount++;
                    break;
                }
                break;
        }
    })
    return {
        vietnam: vietnamCount,
        japan: japanCount,
        jamaica: jamaicaCount
    }
}

function calculateIdealCountry(){
    let vietnamResult = getCountryCount().vietnam;
    let japanResult = getCountryCount().japan;
    let jamaicaResult = getCountryCount().jamaica;

    console.log(`VN: ${vietnamResult}, JP: ${japanResult}, JM: ${jamaicaResult}`);
    
    if (vietnamResult > japanResult && vietnamResult > jamaicaResult){
        submitButton.addEventListener('click', window.open('vietnam.html', '_blank'))
    } else if (japanResult > vietnamResult && japanResult > jamaicaResult){
        submitButton.addEventListener('click', window.open('japan.html', '_blank'))
    } else if (jamaicaResult > vietnamResult && jamaicaResult > japanResult) {
        submitButton.addEventListener('click', window.open('jamaica.html', '_blank'))
    } else if (vietnamResult == japanResult && vietnamResult > jamaicaResult) {;
        submitButton.addEventListener('click', window.open('vietnam.html', '_blank'))
    } else if (japanResult == jamaicaResult && japanResult > vietnamResult){
        submitButton.addEventListener('click', window.open('japan.html', '_blank'))
    } else if (jamaicaResult == vietnamResult && jamaicaResult > japanResult){
        submitButton.addEventListener('click', window.open('jamaica.html', '_blank'))
    }
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateAnsweredQuestions()){
        getCountryCount();
        calculateIdealCountry();
    }
})        