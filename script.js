const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const fileName = document.getElementById('fileName');
const dropArea = document.getElementById('dropArea');

// Trigger file input click when button is clicked
uploadBtn.addEventListener('click', function(){
	fileInput.click();
});

// Display selected file name
fileInput.addEventListener('change', function(){
	if (fileInput.files.length > 0) {
		fileName.textContent = fileInput.files[0].name;
	}else {
		fileName.textContent = "No File Chosen";
	}
});

// drag & drop

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
   dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e){
	e.preventDefault();
	e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
   dropArea.addEventListener(eventName, () => dropArea.classList.add('dragover'), false);
   
});

['dragleave', 'drop'].forEach(eventName => {
   dropArea.addEventListener(eventName, () => dropArea.classList.remove('dragover'), false);
});

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e){
	const dt = e.dataTransfer;
	const files = dt.files;

	if (files.length > 0) {
		fileInput.files = files;
		fileName.textContent = files[0].name;
	}
}