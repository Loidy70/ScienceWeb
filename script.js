document.addEventListener("DOMContentLoaded", function () {
  // Atomic Structure Animation
  const atomicCanvas = document.getElementById('atomic-animation');
  const ctx = atomicCanvas.getContext('2d');
  
  let angle = 0;
  
  function animateAtomicStructure() {
    ctx.clearRect(0, 0, atomicCanvas.width, atomicCanvas.height); 

    
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2, false); 
    ctx.fillStyle = '#ff6347';
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI * 2, false); 
    ctx.strokeStyle = '#aaa';
    ctx.stroke();
    ctx.closePath();
    
    
    const electronX = 150 + 80 * Math.cos(angle);
    const electronY = 150 + 80 * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(electronX, electronY, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = '#4682b4';
    ctx.fill();
    ctx.closePath();
    
    angle += 0.05; 

    requestAnimationFrame(animateAtomicStructure); 
  }

  animateAtomicStructure(); 

  // Vector Projectile Animation, but this one is not working
  const projectileCanvas = document.getElementById('projectile-animation');
  const projectileCtx = projectileCanvas.getContext('2d');
  
  let velocity = 30;
  let angle = 45 * Math.PI / 180; 
  let gravity = 9.8;
  let time = 0;
  let x = 0;
  let y = projectileCanvas.height - 10;

  function projectileMotion() {
    projectileCtx.clearRect(0, 0, projectileCanvas.width, projectileCanvas.height); 
    
    
    x = velocity * Math.cos(angle) * time;
    y = projectileCanvas.height - (velocity * Math.sin(angle) * time - (0.5 * gravity * time * time));

    
    projectileCtx.beginPath();
    projectileCtx.arc(x, y, 5, 0, Math.PI * 2);
    projectileCtx.fillStyle = 'red';
    projectileCtx.fill();

    time += 0.1; 
    
    if (y >= projectileCanvas.height) {
      time = 0; 
    } else {
      requestAnimationFrame(projectileMotion);
    }
  }

  projectileMotion(); 

  // Photoelectric Effect Animation, also this one is not working, if possible you can fix it
  const photoelectricCanvas = document.getElementById('photoelectric-animation');
  const photoelectricCtx = photoelectricCanvas.getContext('2d');
  
  let electronX = 150;
  let electronY = 250;
  let lightFrequency = 1;
  let electronSpeed = 2;

  function photoelectricEffect() {
    photoelectricCtx.clearRect(0, 0, photoelectricCanvas.width, photoelectricCanvas.height); 

    
    photoelectricCtx.fillStyle = '#B0B0B0';
    photoelectricCtx.fillRect(0, 250, 300, 50);

    
    photoelectricCtx.fillStyle = '#FFFF00';
    photoelectricCtx.beginPath();
    photoelectricCtx.arc(150, 50, 10, 0, Math.PI * 2);
    photoelectricCtx.fill();

  
    if (electronY <= 150) {
      electronX = 150 + Math.random() * 50 - 25; 
      electronY = 250;
      electronSpeed = 4 + Math.random() * 2;
    }

    
    electronY -= electronSpeed;

  
    photoelectricCtx.fillStyle = '#FF0000';
    photoelectricCtx.beginPath();
    photoelectricCtx.arc(electronX, electronY, 5, 0, Math.PI * 2);
    photoelectricCtx.fill();

    requestAnimationFrame(photoelectricEffect); 
  }

  photoelectricEffect(); 
});

