new DataTable('#citizen-list');

/******************** GROUP CREATION ************************/

const groupCreationInit = function() {
	var carousel = new bootstrap.Carousel($('#carousel-creation'));
	carousel.pause()

	$('#intro-3-valid').on('click', async function () {
		let moneyName = $('#money-name').val()
		let password = $('#input-password').val()
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
		$('#download-link').prop("download", moneyName + ".json")
	})

	$('#money-name').on('input', function() {
		if($('#money-name').val().length >= 3){
			$('#intro-2-valid').removeClass('disabled');
		} else {
			$('#intro-2-valid').addClass('disabled');
		}
	})

	$('.input-password').on('input', function() {
		if($('#input-password').val().length >= 6
			&& $('#input-password').val() === $('#input-password-validation').val()){
			$('#intro-3-valid').removeClass('disabled');
		} else {
			$('#intro-3-valid').addClass('disabled');
		}
	})
}()

/******************** LOADING (TODO) ************************/
const loadfile = function() {
	let filecontent = null

	$("#load-group").on("click", function() {
		$("#file-import").click()
	})

	const changeStatus = (status) => {
		$('#status').html(status);
	}

	const setProgress = (e) => {
		const fr = e.target;
		const loadingPercentage = Math.round(100 * e.loaded / e.total);

		$('#progress-bar').prop("style", "width: " + loadingPercentage + "%");
	}

	const loaded = (e) => {
		const fr = e.target;
		OrganicManager(JSON.parse(fr.result))
	}

	const errorHandler = (e) => {
		changeStatus('Error: ' + e.target.error.name);
	}

	function processFile(file) {
		const fr = new FileReader();

		fr.readAsText(file);
		fr.addEventListener('loadstart', changeStatus('Start Loading'));
		fr.addEventListener('load', changeStatus('Loaded'));
		fr.addEventListener('loadend', loaded);
		fr.addEventListener('progress', setProgress);
		fr.addEventListener('error', errorHandler);
		fr.addEventListener('abort', changeStatus('Interrupted'));
	}

	$("#file-import").on("change", (event) => {
		const file = event.target.files[0]
		processFile(file)
	});
}()

const OrganicManager = function(jsonData) {
	const data = jsonData
}
