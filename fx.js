// This is a JS port of the text effects from: https://github.com/noatpad/noatblog-theme/tree/master
// just include this in the HTML Document and anything using the original styles should work
// 

document.addEventListener('DOMContentLoaded', function(event){

    Array.from(document.querySelectorAll('.fx')).forEach(function(fx_element) {
        let letters = fx_element.innerHTML.split('');
        fx_element.innerHTML = '';
        fx_element.classList.remove('fx');
        let delayCount = 0;

        function appendLetters(value, index, array) {
            delayCount -= .12; // using negative values to load the delay instantly
            let letterSpan = document.createElement('span');
            letterSpan.classList.add('fx');
            letterSpan.classList.add('processed');
            letterSpan.style.animationDelay = delayCount + 's'; 
            letterSpan.innerHTML = value;
            letterSpan.classList.add(...fx_element.classList);
            fx_element.appendChild(letterSpan);
        }
        
        letters.forEach(appendLetters);
    });
});
