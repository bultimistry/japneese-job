// Example of a simple dropdown menu using JavaScript
// Example of language switching based on user selection
const languageButtons = document.querySelectorAll('.language-selector button');

languageButtons.forEach(button => {
    button.addEventListener('click', function() {
        const selectedLanguage = this.textContent;
        if (selectedLanguage === 'EN') {
            window.location.href = 'index.html';
        } else if (selectedLanguage === 'JP') {
            window.location.href = 'index_jp.html';
        }
    });
});

