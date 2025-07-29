let moneyName = ""
let password = ""
/******************** CREATE INSTANCE ************************/
$('#start-new-instance').on('click', function () {
	$('#intro-0').modal('show')
})

$('#intro-0-valid').on('click', function () {
	$('#intro-0').modal('hide')
	$('#intro-1').modal('show')
})

$('#intro-1-valid').on('click', function () {
	$('#intro-1').modal('hide')
	$('#intro-2').modal('show')
})

$('#intro-2-valid').on('click', function () {
	moneyName = $('#money-name').val()
	$('#intro-2').modal('hide')
	$('#intro-3').modal('show')
})

$('#intro-3-valid').on('click', async function () {
	password = $('#input-password').val()
	const sk = organicMoney.Blockchain.randomPrivateKey()
	let utf8Encode = new TextEncoder();
	const skBase64 = utf8Encode.encode(sk);
	const encryptedSk = await organicMoney.Blockchain.aesEncrypt(skBase64, password)

	let content = {
		name: moneyName,
		sk: encryptedSk,
		pk: organicMoney.Blockchain.publicFromPrivate(sk)
	}

	let blob = new Blob([JSON.stringify(content, null, 2)], {
		type: "application/json",
	});
	const blobUrl = URL.createObjectURL(blob)
	$('#download-link').prop("href", blobUrl)
	$('#download-link').prop("download", moneyName + ".js")
	$('#intro-3').modal('hide')
	$('#intro-4').modal('show')
})

$('#intro-4-valid').on('click', function () {

	$('#intro-4').modal('hide')
	$('#intro-5').modal('show')
})

$('#intro-5-valid').on('click', function () {
	$('#intro-5').modal('hide')
	$('#intro-6').modal('show')
})

$('#intro-6-valid').on('click', function () {
	$('#intro-6').modal('hide')
	$('#intro-7').modal('show')
})

$('#intro-7-valid').on('click', function () {
	$('#intro-7').modal('hide')
	$('#intro-8').modal('show')
})

$('#intro-8-valid').on('click', function () {
	$('#intro-8').modal('hide')
})

$('#money-name').on('input', function() {
	if($('#money-name').val().length >= 3){
		$('#intro-2-valid').prop('disabled', false);
	} else {
		$('#intro-2-valid').prop('disabled', true);
	}
})

$('.input-password').on('input', function() {
	if($('#input-password').val().length >= 6
			&& $('#input-password').val() === $('#input-password-validation').val()){
		$('#intro-3-valid').prop('disabled', false);
	} else {
		$('#intro-3-valid').prop('disabled', true);
	}
})

/******************** LOADING (TODO) ************************/
const changeStatus = (status) => {
	document.getElementById('status').innerHTML = status;
}

const setProgress = (e) => {
	const fr = e.target;
	const loadingPercentage = 100 * e.loaded / e.total;

	document.getElementById('progress-bar').value = loadingPercentage;
}

function setFolderProgress(index, total) {
	const loadingPercentage = index / total;

	document.getElementById('folder-progress-bar').value = loadingPercentage;
}

const loaded = (e) => {
	const fr = e.target;
	var result = fr.result;

	changeStatus('Finished Loading!');
	console.log('Result:', result);
}

const errorHandler = (e) => {
	changeStatus('Error: ' + e.target.error.name);
}

function processFile(file) {
	const fr = new FileReader();

	fr.readAsDataURL(file);
	fr.addEventListener('loadstart', changeStatus('Start Loading'));
	fr.addEventListener('load', changeStatus('Loaded'));
	fr.addEventListener('loadend', loaded);
	fr.addEventListener('progress', setProgress);
	fr.addEventListener('error', errorHandler);
	fr.addEventListener('abort', changeStatus('Interrupted'));
}

function processFolder(folder) {
	for (let i = 0; i < event.target.files.length; i++) {
		setFolderProgress(i, event.target.files.length);
		processFile(event.target.files[i]);
	}
}

document.querySelector("#folder-import").addEventListener("change", (event) => {
	const folder = document.querySelector("#folder-import").files;
	processFolder(folder)
});

