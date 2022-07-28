window.setInterval( function(){
	const target = document.getElementsByClassName('js-tweet-text tweet-text with-linebreaks ');
	for(let i = 0; i < target.length; i++) {
		var text = target[i].textContent;
		text = text.replace(/かな。|かな？/g, 'かにゃ？🐱\n')
		text = text.replace(/ろ。/g, 'ろにゃ🐱\n')
		text = text.replace(/だ。|！|です。/g, 'にゃ🐱\n')
		text = text.replace(/。|！|です。/g, 'にゃん🐱\n')
		text = text.replace(/。/g, 'にゃ🐱\n')
		target[i].innerHTML = text
		console.log(4)
	}
	console.log(90)
}, 1000);

