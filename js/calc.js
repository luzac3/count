window.onload = function(){
    // 要素を追加する位置を取得
    const display = document.getElementById("display");

    // Fragmentノードを作成
    const fragment = document.createDocumentFragment();

    // 数字を格納する変数を宣言
    let number_set = "";

    for(let i = 1; i <= 100; i++){
        // 追加する要素を作成
        const add_element = document.createElement("li");

        // 3と5両方の倍数のとき
        if(i % 3 == 0 && i % 5 == 0){
            str = "FizzBuzz";
        // 3の倍数のとき
        }else if(i % 3 == 0){
            str = "Fizz";
        // 5の倍数のとき
        }else if(i % 5 == 0){
            str = "Buzz";
        }else{
            str = i;
        }

        // 要素にテキストを設定
        add_element.textContent = str;

        // 要素を追加
        display.appendChild(add_element);

        // Fragmentノードに追加
        fragment.appendChild(add_element);
    }

    // 書き込み
    display.appendChild(fragment);
}