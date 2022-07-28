window.addEventListener('load', () => {
    setTimeout(() => {
        const target = document.getElementsByClassName('js-tweet-text tweet-text with-linebreaks ');
        for(let i = 0; i < target.length; i++) {
            var text = target[i].textContent;
            text = text.replace(/。/g, 'にゃん')
            target[i].innerHTML = text
            console.log(text)
        }
        console.log(59)
    }, 3000);
});
