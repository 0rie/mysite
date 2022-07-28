window.addEventListener('load', () => {
    setTimeout(() => {
        const target = document.getElementsByClassName("js-tweet-text tweet-text with-linebreaks");
        for(let i = 0; i < target.length; i++) {
            var text = target[i].str;
            text = text.replace()
            target[i].innerHTML = text
        }
        console.log(55)
    }, 3000);
});
