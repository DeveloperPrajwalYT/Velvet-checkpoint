<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkpoint 1</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
<style>
body {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: #1a1a1a;
  margin: 0;
  padding: 0;
  color: #ffffff;
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333333;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

h1 {
  margin-bottom: 20px;
  font-size: 32px;
  color: #ff5733;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
}

.subscribeBtn {
  background-color: #ff5733;
  color: white;
}

.lootlinkBtn {
  background-image: linear-gradient(45deg, #ffcc00, #ff6600);
  color: #222;
}

.linkversiteBtn {
  background-image: linear-gradient(45deg, #ff6600, #ffcc00);
  color: #222;
}
</style>
</head>
<body>
<div class="container">
  <h1>Welcome to Velvet X Key System</h1>
  <p>Unlock exclusive content by subscribing:</p>
  <button class="subscribeBtn" onclick="window.open('https://www.youtube.com/@iamiakk', '_blank')">Subscribe</button>
</div>

<script>
setTimeout(function() {
  document.querySelector('.container').style.display = 'none';
  document.body.innerHTML += `
    <div class="container">
      <h1>VELVET X Key system (1/1)</h1>
      <p>Choose your path:</p>
      <button class="lootlinkBtn" id="lootlinkBtn">Lootlink</button>
      <button class="linkversiteBtn" id="linkversiteBtn">Linkversite</button>
    </div>
  `;
  
  document.getElementById('lootlinkBtn').addEventListener('click', function() {
    window.open('https://loot-link.com/s?pofP', '_blank');
  });
  
  document.getElementById('linkversiteBtn').addEventListener('click', function() {
    window.open('https://link-center.net/1034813/velvet-x-key-system', '_blank');
  });
}, 10000);
</script>
</body>
</html>
  
