document.addEventListener("DOMContentLoaded", function () {
  // Atomic Structure Animation
  const atomicCanvas = document.getElementById('atomic-animation');
  const ctx = atomicCanvas.getContext('2d');
  
  let angle = 0;
  
  function animateAtomicStructure() {
    ctx.clearRect(0, 0, atomicCanvas.width, atomicCanvas.height); // Clear the canvas

    // the nucleus
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2, false);
    ctx.fillStyle = '#ff6347';
    ctx.fill();
    ctx.closePath();
    
    // an electron orbit
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#aaa';
    ctx.stroke();
    ctx.closePath();
    
    // rotating electron (simplified)
    const electronX = 150 + 80 * Math.cos(angle);
    const electronY = 150 + 80 * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(electronX, electronY, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = '#4682b4';
    ctx.fill();
    ctx.closePath();
    
    angle += 0.05; // Control speed of rotation

    requestAnimationFrame(animateAtomicStructure); 
  }

  animateAtomicStructure(); 

  // Newton's First Law Animation
  const law1Canvas = document.getElementById('law1-animation');
  const ctx1 = law1Canvas.getContext('2d');
  
  let posX = 50;
  let velocity = 0;
  
  function animateLaw1() {
    ctx1.clearRect(0, 0, law1Canvas.width, law1Canvas.height); // Clear the canvas
    
    // Draw the object (e.g., a square object)
    ctx1.fillStyle = '#4682b4';
    ctx1.fillRect(posX, 150, 50, 50);
    
    // Move the object 
    posX += velocity;
    
    // Apply a force (e.g., change in velocity)
    velocity = 2; // For simplicity, let's say the object moves with constant velocity
    
    requestAnimationFrame(animateLaw1); 
  }

  animateLaw1(); 
});
