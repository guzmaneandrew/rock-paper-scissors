function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors']
   
    let max = Math.floor(rockPaperScissors.length - 1)
    let random = Math.floor(Math.random() * (max + 1))
    let randomSelection = rockPaperScissors[random]
    return randomSelection
}
