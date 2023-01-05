const selection = [7, 3, 5, 8, 2, 9, 4, 15, 6];
const selectionSort = (arr) => {
    let i, j, min;
    for (i = 0; i < selection.length - 1; i++) {
        min = i;
        for (j = i + 1; j < selection.length; j++)
            if (arr[j] < arr[min])
                min = j

        let t = arr[min]
        arr[min] = arr[i]
        arr[i] = t;


    }
     console.log(arr);

}
//  2, 3, 4,  5, 6,7, 8, 9, 15
//2, 3,  5, 8, 7,9, 4, 15, 6
//  2, 3,  5, 8, 7,9, 4, 15, 6
// 2, 3,  4, 8, 7,9, 5, 15, 6
selectionSort(selection)