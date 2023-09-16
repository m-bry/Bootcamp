function updateTime() {
    var timeElement = document.getElementById('time');
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var time = hours + ':' + minutes + ':' + seconds;
    timeElement.textContent = time;
  }
  
  function changeBackgroundColor() {
    var colors = [
      '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B',
      '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',
      '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',
      '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'
    ];
    var body = document.body;
    var currentColor = body.style.backgroundColor;
    var currentIndex = colors.indexOf(currentColor);
    var nextIndex = (currentIndex + 1) % colors.length;
    body.style.backgroundColor = colors[nextIndex];
  }

  updateTime();
  setInterval(updateTime, 1000);
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 1000);