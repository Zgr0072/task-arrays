/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let numArr = data.split(',');
    let res = '';
    numArr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < numArr.length - 1; i++) {
        res += numArr[i] + ',';
    }
    res += numArr[numArr.length - 1];
    return res;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let res = [];
    let i = 0;
    data.forEach((element) => {
        if (element <= 100) {
            res.push(element);
        }
    });
    return res;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let res = [];
    for (var i = 0; i < array1.length; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }
    return res;
}
