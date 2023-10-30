<?php

$values = [4, 1, 2, 4, 5, 1, 2, 4];
$windowSize = 3;

// expected = [[1,4],[1,5], [2,4]]

function arrayMinMaxGroup($values, $windowSize) {
  var_dump($values);
  return [];
}

print arrayMinMaxGroup($values, $windowSize);
