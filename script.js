'use strict';

const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// prompt user to select a media stream, pass that to the video element and play it
const selectMediaStream = async function () {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play;
		};
	} catch (error) {
		console.error('error selecting media stream:', error);
	}
};

button.addEventListener('click', async () => {
	// disable button
	button.disabled = true;
	// start pic-in-pic
	await videoElement.requestPictureInPicture();
	// reset button
	button.disabled = false;
});
