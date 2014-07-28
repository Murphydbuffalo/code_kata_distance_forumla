var distance = function(pointA, pointB){
  var xDiff = Math.abs(pointA[0] - pointB[0]);
  var yDiff = Math.abs(pointA[1] - pointB[1]);
  var squaredSum = Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
  var unroundedSolution = Math.sqrt(squaredSum);
  var roundedSolution = Math.floor(unroundedSolution * 1000)/1000;
  console.log(roundedSolution); 
}

distance([0, 0], [0, 0])
distance([3, 0], [0, 0])
distance([0, 0], [0, -5])
distance([-3, 1], [0, 0])
