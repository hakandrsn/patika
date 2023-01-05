const insertion = [22, 27, 16, 2, 18, 6]
//1.aşama 22 27 doğru
//2.aşama 27 16 yanlış
//22-16-27
//16-22-27
//27-2 yanlış
//16-22-2-27
//16-2-22-27
//2-16-22-27
//27-18 yanlış
//2-16-22-18-27
//2-16-18-22-27
//2-16-18-22-27-6 yanlış
//2-16-18-22-6-27
//2-16-18-6-22-27
//2-16-6-18-22-27
//2-6-16-18-22-27

//fonksiyonu
const insertionMethod = (array) => {
    let key, k, n = array.length
    for (let i = 1; i < n; i++) {
        key = array[i];
        k = i - 1;

        while (k >= 0 && array[k] > key) {
            array[k + 1] = array[k];
            k = k - 1;
        }
        array[k + 1] = key;

    }
    console.log(array)
}
//insertionMethod(insertion)

//Big-O gösterimi O(N) — Linear Complexity'dir çünkü veri arttıkça süreside artacaktır.

// Time complexity average case durumuna girer dizinin ortalarında yer alıyor.

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