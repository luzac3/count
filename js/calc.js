function calc(){
    // 要素を追加する位置を取得
    const display = document.getElementbyId("display");

    // 追加する要素を作成
    const add_element = document.createElement("p");

    // 数字を格納する変数を宣言
    let number_set = "";

    for(let i = 1; i <= 100; i++){
        // 3と5両方の倍数のとき
        if(i % 3 == 0 && i % 5 == 0){
            // FizzBuzz
            str = "FizzBuzz";
        }

        if(i % 3 == 0 || i % 5 == 0){
            // 3の倍数のとき
            if(i % 3 == 0){
                // Fizz
                str = "Fizz";
            }
            // 5の倍数のとき
            if(i % 5 == 0){
                // Buzz
                str = "Buzz";
            }
        }else{
            // 加工なし
            str = i;
        }
        // 要素にテキストを設定
        add_element.textContent(str);

        // 要素を追加
        add_element.lastElementChild(add_element);
    }
}