const neko1 = "https://0rie.github.io/nyanko/neko1.jpg";
window.addEventListener('load', () => {
	setTimeout(() => {
		const target = document.getElementsByClassName("css-9pa8cd");
		for(let i = 0; i < target.length; i++) {
			target[i].src = neko1;
			target[i].parentNode.style.backgroundImage = `url(${neko1})`;
		}
	}, 3000);
});

