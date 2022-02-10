/**
 * This is a helper function that helps us render the grid
 * place our ships after entering the name
 */

function secondViewRender() {
  const main = document.querySelector('main');
  const placingContainer = document.createElement('div');
  let axisButton = document.getElementById('axis-btn')
  _toggleAxis(axisButton);
  _shipRendering();
}

/**
 * Renders the ship based on its size and doesn't allow
 * you to go over the limit of the matrix while placing ships
 */

function _shipRendering() {
  let axisButton = document.getElementById('axis-btn');
  // Filling the matrix with the board divs
  const columnPlacing = document.querySelectorAll('.column-placing');
  let tempArray = Array.from(columnPlacing);
  let board = zeros([10, 10]);
  let k = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = tempArray[k];
      k++;
    }
  }
  
  if (document.getElementById('axis-btn').textContent === 'AXIS: X') {
  board[0][0].addEventListener('mouseenter', () => {
    for (let j = 1; j <= 5; j++) {
      document.querySelector(`${board[0][0]}:nth-child(${j})`).style.background = 'red';
    }
  })
  
  board[0][0].addEventListener('mouseout', () => {
    for (let j = 1; j <= 5; j++) {
      document.querySelector(`${board[0][0]}:nth-child(${j})`).style.background = 'none';
    }
  })
 } else if (document.getElementById('axis-btn').textContent === 'AXIS: Y') {
    board[0][0].addEventListener('mouseenter', () => {
    for (let j = 1; j <= 5; j++) {
      document.querySelector(`.column-placing:nth-child(${j + 10})`).style.background = 'red';
    }
  })
  
  board[0][0].addEventListener('mouseout', () => {
    for (let j = 1; j <= 5; j++) {
      document.querySelector(`.column-placing:nth-child(${j})`).style.background = 'none';
    }
  })
 }
  
  
//   if (axisButton.textContent === 'AXIS: X') {
//     console.log('first if statement');
//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//         board[i][j].addEventListener('mouseenter', () => {
//           /* If ship exceeds board, change aesthetics to indicate
//           that */
//           if (j > 5) {
//             board[i][j].style.background = 'rgba(255, 0, 0, 0.6)';
//             board[i][j].style.cursor = 'not-allowed';
//           } else {
//             // If it doesn't exceed board, change bg-color

//             // IMPORTANT: CODE IS NOT SUPPOSED TO REACH BOTH OF THESE
//             console.log('weird1');
//             for (let index = j; index < j + 5; index++) {
//               board[i][index].style.background = 'rgba(222, 228, 228, 0.7)';
//             }
//           }
//         });
//         board[i][j].addEventListener('mouseout', () => {
//           // Remove styling when mouse leaves div
//           for (let index = j; index < j + 5; index++) {
//             if (board[i][index] !== undefined)
//             board[i][index].style.background = 'none';
//           }
//         });
//       }
//     }
//   } else if (axisButton.textContent === 'AXIS: Y') {
//     console.log('second if statement');
//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//         board[i][j].addEventListener('mouseenter', () => {
//           /* If ship exceeds board, change aesthetics to indicate
//           that*/
//           if (i + 5 >= 11) {
//             board[i][j].style.background = 'rgba(255, 0, 0, 0.6)';
//             board[i][j].style.cursor = 'not-allowed';
//           } else {
//             // IMPORTANT: CODE IS NOT SUPPOSED TO REACH BOTH OF THESE
//             console.log('weird2');
//             // It it doesn't exceed board, change bg-color
//             for (let index = i; index < i + 5; index++) {
//               board[index][j].style.background = 'rgba(222, 228, 228, 0.7)';
//             }
//           }
//         });
//         board[i][j].addEventListener('mouseout', () => {
//           // Remove styling when mouse leaves div
//           for (let index = i; index < i + 5; index++) {
        
//               board[index][j].style.background = 'none';
        
//           }
//         });
//       }
//     }
//   }
}

/**
 * Toggles the axis of ship placing
 */
function _toggleAxis(axisButton) {
  axisButton.addEventListener('click', () => {
    if (axisButton.textContent === 'AXIS: X') {
      axisButton.textContent = 'AXIS: Y';
    } else if (axisButton.textContent === 'AXIS: Y') {
      axisButton.textContent = 'AXIS: X';
    }
    _shipRendering();
  });
}

function zeros(dimensions) {
  var array = [];

  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }

  return array;
}

// MAIN PROGRAM:
secondViewRender();

