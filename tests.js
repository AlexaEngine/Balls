describe('Ball Movement Tests', () => {
    // Mock the global document object if not running in a browser environment
    const doc = {
      getElementById: jest.fn().mockImplementation(() => ({
        style: {
          left: '',
          top: ''
        }
      }))
    };
  
    global.document = doc;
  
    // Import or redefine your functions here if necessary
    var velocityX = 10;
    var positionX = 0;
    const ballx = doc.getElementById("ballx");
  
    function updateX() {
      if (positionX + velocityX > 450 || positionX + velocityX < 0) {
        velocityX = -velocityX;
      }
      positionX += velocityX;
      ballx.style.left = `${positionX}px`;
    }
  
    var velocityXY = 10;
    var velocityYY = 10;
    var positionXY = 0;
    var positionYY = 0;
    const ballY = doc.getElementById("ballY");
  
    function update() {
      if (positionXY + velocityXY > 450 || positionXY + velocityXY < 0) {
        velocityXY = -velocityXY;
      }
      if (positionYY + velocityYY > 150 || positionYY + velocityYY < 0) {
        velocityYY = -velocityYY;
      }
      positionXY += velocityXY;
      ballY.style.left = `${positionXY}px`;
      positionYY += velocityYY;
      ballY.style.top = `${positionYY}px`;
    }
  
    test('updateX should reverse direction when hitting horizontal boundaries', () => {
      positionX = 451; // Simulate near boundary
      updateX();
      expect(velocityX).toBe(-10);
      expect(ballx.style.left).toBe('441px'); // Position after moving left
  
      positionX = -1; // Simulate near left boundary
      updateX();
      expect(velocityX).toBe(10);
      expect(ballx.style.left).toBe('9px'); // Position after moving right
    });
  
    test('update should reverse direction when hitting boundaries', () => {
      positionXY = 451; // Simulate near right boundary
      update();
      expect(velocityXY).toBe(-10);
  
      positionYY = 151; // Simulate bottom boundary
      update();
      expect(velocityYY).toBe(-10);
  
      positionXY = -1; // Near left boundary
      positionYY = -1; // Near top boundary
      update();
      expect(velocityXY).toBe(10);
      expect(velocityYY).toBe(10);
    });
  
  });
  
  