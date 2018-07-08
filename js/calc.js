function calc(){
    // 要素を追加する位置を取得
    const display = document.getElementbyId("display");

    // 追加する要素を作成
    const add_element = document.createElement("p");

    // 数字を格納する変数を宣言
    let number_set = "";

    for(let i = 0; i< 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            //
        }

        if(i % 3 == 0 || i % 5 == 0){
            if(i % 3 == 0){
                //
            }
            if(i % 5 == 0){
                //
            }
        }else{
            //
            str = i;
        }
        // 要素にテキストを設定
        add_element.textContent(str);

        // 要素を追加
        add_element.lastElementChild(add_element);
    }
}