// データの定義
// 大分類
let cate1 = [
    '---',                  // 未選択
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具',

    // 課題にて追加
    '調理器具',
];

// 小分類
let cate2 = [
    // 未選択
    ['---'],
    // 家具のカテゴリ
    ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],
    // ベッド・マットレスのカテゴリ
    ['ベッド', '寝具', 'マットレス'],
    // 収納家具・収納グッズ'のカテゴリ
    ['家具・ラック', '収納システム'],
    // 子ども家具
    ['子ども部屋家具', 'ベビー家具・ベビーグッズ'],
    
    // 課題にて追加// 調理器具
    ['包丁', 'まな板', '鍋'],
    
];

// 商品の定義
// 課題にてpriceを追加
var itemList = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 10000 },
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 5000 },
    { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'], price: 3000 },
    { id: '0004', name: 'ソファ', tags: ['ソファ'], price: 3000 },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: 2000 },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: 2000 },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: 4000 },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'], price: 5000 },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: 8000 },
    { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'], price: 4000 },
    { id: '0011', name: 'ナイフ', tags: ['包丁'], price: 1000 },
    { id: '0012', name: 'プラスチックまな板', tags: ['まな板'], price: 500 },
    { id: '0013', name: '大鍋', tags: ['鍋'], price: 600 },

];



//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');
// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');
// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    // for (let i = 0; i < cate1.length; i++) {
    //     // option要素を新規に作成
    //     let option = document.createElement('option');
    //     option.value = cate1[i];    // optionの値に配列の値を代入
    //     option.text = cate1[i];     // optionの表示文字列に配列の値を代入
    //     cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    // }



    cate1.forEach((element) => {console.log();
        let option= document.createElement('option');
        option.value = element;
        option.text = element;
        cate1Element.appendChild(option)
    });
};



// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    // for (let i = 0; i < cate2[idx].length; i++) {
    //     // option要素を新規に作成
    //     let option = document.createElement('option');
    //     option.value = cate2[idx][i];    // optionの値に配列の値を代入
    //     option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
    //     cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    // }

    cate2.forEach((element) => {
        console.log();
        let option = document.createElement('option');
        option.value = element;
        option.text = element;
        cate2Element.appendChild(option);
    })
};


//　商品一覧の表示の巻子
function viewItemList(tag) {
    itemListElement.innerHTML = '';
    // for (let i = 0; i < itemList.length; i++) {
    //     if (itemList[i].tags.some(t => t === tag)) {
    //         // li要素を作成
    //         let li = document.createElement('li');
    //         // テキスト情報を作成
    //         let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name);
    //         // ul要素に追加
    //         li.appendChild(text);
    //         itemListElement.appendChild(li);
    //     }
    // }

    // for(const tanatsugu in itemList){
    itemList.forEach((tanatsugu) => {
        if (tanatsugu.tags.some(t => t === tag)){
                let li = document.createElement('li');
                let text = document.createTextNode(tanatsugu.id + ':' + tanatsugu.name + ':' + tanatsugu.price);
                li.appendChild(text);
                itemListElement.appendChild(li);
            }       
        });
    }


//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function () {
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択にあわせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
});

// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function () {
    // 選択されば値を取得
    let val = cate2Element.value;
    viewItemList(val);

});

//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();



//本章で作成した最終プログラムをもとに次の機能追加をしていきましょう。
//1.大分類、小分類を増やす
//大分類に「調理器具」、小分類には「調理器具」にあった項目を任意で複数追加
//2.商品を増やす
//1で作成した分類に合わせて、商品を複数追加
//→完了

//3.商品定義において、プロパティ名price（価格）を追加（値は自由）
//4.for文で書かれている部分を配列の特徴を活かした別のfor文で記述する

