function askForPassword() {
    const password = prompt("Введите пароль для доступа к сайту:");

    // Проверяем введенный пароль
    if (password === "нахрен общество канеки") {
        alert("Доступ предоставлен!");
        // Показываем контент
        document.getElementById("content").style.display = "block";
    } else {
        alert("Неверный пароль. Доступ запрещен.");
        // Закрываем страницу или выполняем дополнительные действия
        window.location.href = "https://example.com"; // Перенаправление на другую страницу
    }
}

// Вызываем функцию при загрузке страницы
window.onload = askForPassword;
function getRandomColor() {
    const colors = ['red', 'green', 'blue'];
    return colors[Math.floor(Math.random() * colors.length)];
}


for (let i = 0; i < 500; i++) {
    const strip = document.createElement('div');
    strip.className = 'strip';
    strip.style.left = Math.random() * 100 + 'vw';
    strip.style.backgroundColor = getRandomColor();
    strip.style.animationDuration = Math.random() * 1 + 0.5 + 's';
    document.body.appendChild(strip);
}


function showContent(id) {
    const video = document.getElementById('myVideo');
    const vidos = document.getElementById('myVidos');
    const vidos1 = document.getElementById('myVidos1');
    const vidos2 = document.getElementById('myVidos2');
    const vidos3 = document.getElementById('myVidos3');
    const vidos4 = document.getElementById('myVidos4');
    const vidos5 = document.getElementById('myVidos5');
    const vidos6 = document.getElementById('myVidos6');
    const vidos7 = document.getElementById('myVidos7');
    const vidos8 = document.getElementById('myVidos8');
    const vidos9 = document.getElementById('myVidos9');


    
    if (id !== 'about') {
        video.pause();
        video.currentTime = 0; 
    }
    
          if (id !== 'whoami'); {
    vidos.pause();
    vidos.currentTime = 0;
       }
       if (id !== 'work'); {
    vidos1.pause();
    vidos1.currentTime = 0;
       }
       if (id !== 'social'); {
    vidos2.pause();
    vidos2.currentTime = 0;
       }
       if (id !== 'roadmap-hacking'); {
    vidos3.pause();
    vidos3.currentTime = 0;
       }
       if (id !== 'roadmap-webdev'); {
    vidos4.pause();
    vidos4.currentTime = 0;
       }
       if (id !== 'education'); {
    vidos5.pause();
    vidos5.currentTime = 0;
       }
       if (id !== 'career'); {
    vidos6.pause();
    vidos6.currentTime = 0;
       }
       if (id !== 'education') {
        vidos7.pause();
        vidos7.currentTime = 0; 
    }
    if (id !== 'roadmap-hacking'); {
        vidos8.pause();
        vidos8.currentTime = 0;
           }
           if (id !== 'roadmap-webdev'); {
            vidos9.pause();
            vidos9.currentTime = 0;
               }
    

    document.querySelectorAll('.content-container').forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

   
    if (id === 'about') {
        
        return;
    }
    if (id === 'whoami'); {
        return;
    }
    if (id === 'work') {
        
        return;
    }
    if (id === 'social'); {
        return;
    }
    if (id === 'roadmap-hacking') {
       
        return;
    }
    if (id === 'roadmap-webdev'); {
        return;
    }
    if (id === 'education') {
        
        return;
    }
    if (id === 'career'); {
        return;
    }
    if (id === 'education'); {
        return;
    }
    if (id === 'roadmap-hacking') {
       
        return;
    }
    if (id === 'roadmap-webdev') {
       
        return;
    }
    

}

