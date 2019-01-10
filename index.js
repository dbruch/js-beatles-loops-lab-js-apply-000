function theBeatlesPlay(musicianArr, instrumentArr) {
  var resultArr = [];
  for (var i = 0; i < musicianArr.length; i++) {
<<<<<<< HEAD
    var str = `${musicianArr[i]} plays ${instrumentArr[i]}`;
=======
    var str = '`${musicianArr[i]} plays ${guitar}.`';
>>>>>>> dc6a1ecbb626c41afbae6ad100512c1d2e2ceb23
    resultArr.push(str);
  }
  console.log(resultArr);
  return resultArr;
}

<<<<<<< HEAD
function johnLennonFacts(factArray) {
  var i = 0;
  while (i < factArray.length) {
    factArray[i] += '!!!';
    i++;
  }
  return factArray;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  var loveMsg = 'I love the Beatles!';
  do {
    loveArray.push(loveMsg);
    num++;
  } while (num < 15);
  return loveArray;
}
=======
>>>>>>> dc6a1ecbb626c41afbae6ad100512c1d2e2ceb23
