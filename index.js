// code your solution here

function superbowlWin(record) {
  let winningYear = record.find((obj) => obj.result === "W");

  if (winningYear) {
    return winningYear.year;
  }
}
