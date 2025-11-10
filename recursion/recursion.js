// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }

//   console.log('All done!');
// }

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

//print 3
//countDown(2)
//print 2
//countDown(1)
//print 1
//countDown(0)
//print all done!
//must return otherwise it would continue

countDown(3);
