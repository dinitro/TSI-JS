const boardBorder = 'black';
const boardBackground = "#468189ff";
const snakeCol = 'white';
const snakeBorder = 'darkblue';

let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
];

// True if changing direction.
let changingDirection = false;
// Horizontal velocity.
let dx = 10;
// Vertical velocity.
let dy = 0;

// Get canvas element.
const snakeboard = document.getElementById("snakeboard");
// Return two dimensional drawing context.
const snakeboardCtx = snakeboard.getContext("2d");

// Start game.
function play() {
    // Reset snake.
    snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
    ];

    // Reset velocity.
    dx = 10;
    dy = 0;

    // Reset changing direction flag.
    changingDirection = false;

    // Start game again.
    main();
}

document.addEventListener("keydown", change_direction);

// main function called to keep the game running.
function main() {
    if (has_game_ended()) return;
    
    changingDirection = false;
    
    setTimeout(function onTick() {
        clear_board();
        move_snake();
        draw_snake();
        // Call main again.
        main();
    }, 100)
}
  
// draw a border around the canvas.
function clear_board() {
    //  Colour to fill the drawing.
    snakeboardCtx.fillStyle = boardBackground;
    //  Colour for the border of the canvas.
    snakeboardCtx.strokeStyle = boardBorder;
    // Draw "filled" rectangle covering the canvas.
    snakeboardCtx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw "border" around canvas.
    snakeboardCtx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}
  
// Draw snake on canvas.
function draw_snake() {
    // Draw each part.
    snake.forEach(draw_snake_part)
}
  
// Draw one snake part.
function draw_snake_part(snakePart) {

    // Set the colour of the snake part.
    snakeboardCtx.fillStyle = snakeCol;
    // Set the border colour of the snake part.
    snakeboardCtx.strokeStyle = snakeBorder;
    // Draw "filled" rectangle representing snake part at coordinates.
    snakeboardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw border around the snake part.
    snakeboardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function has_game_ended() {
    // Check to see if snake has collided with itself.
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    // Check to see if snake collided with borders.
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function change_direction(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    // Prevent snake from reversing.

    if (changingDirection) return;
    changingDirection = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
        event.preventDefault()
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
        event.preventDefault()
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
        event.preventDefault()
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
        event.preventDefault()
    }
}

function move_snake() {
    // Create new snake's head.
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add new head to beginning body.
    snake.unshift(head);
    snake.pop();
}