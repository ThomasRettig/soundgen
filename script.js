const buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => {
		let audioFile = document.getElementById(`audio1`);
		if (audioFile.paused) {
			audioFile.play();
		} else {
			audioFile.pause();
		}
	});
}
