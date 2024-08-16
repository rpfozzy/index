// ОТПРАВИТЬ СВОЙ РЕСУРС ПАК
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("openModalBtn7");
var span7 = document.getElementsByClassName("close7")[0];

btn7.onclick = function() {
    modal7.style.display = "block";
}

span7.onclick = function() {
    modal7.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}

// File input handling
function handleFileSelect(event, fileNameId) {
    const fileName = event.target.files[0].name;
    document.getElementById(fileNameId).textContent = fileName;
}

document.getElementById("resourceFile").addEventListener("change", (event) => handleFileSelect(event, "resourceFileName"));
document.getElementById("photo").addEventListener("change", (event) => handleFileSelect(event, "photoFileName"));
document.getElementById("video").addEventListener("change", (event) => handleFileSelect(event, "videoFileName"));

function updateProgress(progress) {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progress');
  
  // Animate the progress bar
  progressBar.style.width = `${progress}%`;
  
  // Update the text smoothly
  let currentProgress = parseInt(progressText.textContent);
  const step = (progress - currentProgress) / 50; // 50 steps for smooth animation
  
  function animateText() {
    currentProgress += step;
    if ((step > 0 && currentProgress < progress) || (step < 0 && currentProgress > progress)) {
      progressText.textContent = `${Math.round(currentProgress)}%`;
      requestAnimationFrame(animateText);
    } else {
      progressText.textContent = `${progress}%`;
    }
  }
  
  requestAnimationFrame(animateText);
  
  // Add pulsating effect when progress is complete
  if (progress === 100) {
    progressBar.classList.add('pulsate');
  } else {
    progressBar.classList.remove('pulsate');
  }
}

document.getElementById("resourcePackForm").onsubmit = async function(event) {
  event.preventDefault();
  
  document.getElementById("progressContainer").style.display = "block";
  
  var formData = new FormData(this);
  var botToken = "6884297621:AAHaeVGWrXfFyE3XV8HkqeXWx2iToZVvWLw";
  var chatId = "1653222949";

  var messageText = `Новый ресурс пак от ${formData.get('username')}:\nОписание: ${formData.get('description')}`;

  updateProgress(10);
  
  // Отправка текста
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText
    })
  });

  updateProgress(40);
  
  var resourceFile = formData.get("resourceFile");
  var photo = formData.get("photo");

  if (resourceFile) {
    var resourceFileData = new FormData();
    resourceFileData.append("chat_id", chatId);
    resourceFileData.append("document", resourceFile);

    await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
      method: "POST",
      body: resourceFileData
    });
  }

  updateProgress(70);

  if (photo) {
    var photoData = new FormData();
    photoData.append("chat_id", chatId);
    photoData.append("photo", photo);
    photoData.append("caption", `Фото от ${formData.get('username')}`);

    await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: "POST",
      body: photoData
    });
  }

  updateProgress(100);

  setTimeout(() => {
    document.getElementById("progressContainer").style.display = "none";
    modal7.style.display = "none";
    alert("Ваш ресурс пак успешно отправлен!");
  }, 2000);
}