/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const sw = process.stdout.columns
let w = 0
let d = 1

function draw () {
  setTimeout(draw, 1000/12)

  if (w > sw - 1 || w < 0) {
    d = -d
  }

  w += d


  let output = ''
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.5) {
      output += '\x1b[36m' + '░'
    } else {
      output += '\x1b[36m' + '▒'
    }
  }
  console.log(output)
}


draw()
