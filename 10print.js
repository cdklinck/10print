/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000)
  let output = ''
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.5) {
      output += '<3'
    } else {
      output += '/'
    }
  }
  console.log(output)
}


draw()
