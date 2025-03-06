// ページが読み込まれたら実行
window.onload = function() {
    console.log("ページ読み込み開始");

    // ロード画面を2秒間表示
    setTimeout(function () {
      console.log("3秒経過、ロード画面を非表示にします");

      // ロード画面を非表示にし、コンテンツを表示
      document.getElementById('loader').style.display = 'none';  // ロード画面を非表示
      document.getElementById('content').style.display = 'block';  // コンテンツを表示
    }, 2000);  // 2秒後に実行
  };


// ハンバーガーメニューの開閉
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
});

// メニュー内のリンクをクリックしたときにメニューを閉じる
document.querySelectorAll(".nav__item a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.classList.remove("open");
    });
});

//各写真が浮かび上がってくる演出(必要)
// スクロールイベントを監視
window.addEventListener('scroll', function() {
    const imageBoxes = document.querySelectorAll('.image-box');
    
    imageBoxes.forEach(function(box) {
        const rect = box.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.8) { // 80%の位置で表示
            box.classList.add('visible');
        }
    });
});

//アイコン押したらトップページ(必要)
document.getElementById('logo-icon').addEventListener('click', function() {
    // トップページ遷移
    window.location.href = 'index.html';  
});









  const translations = {
    ja: {
        humberger1: "日本食文化の象徴",
        humberger2: "店舗一覧",
        humberger3: "店舗紹介",
        humberger4: "店舗情報",
        sushitop: "日本食文化の象徴",
        sushisentence: "<br>　「寿司」は日本食文化を象徴する代表的な料理の一つであることは言うまでもない。一般的に「寿司」と耳にすると思い浮かぶのは「握り寿司」だろうが、「寿司」の種類は大きく分けて握り・軍艦・巻・押し・ちらしの5つに分類される。巻寿司は海苔で具材を巻いた形態で手軽に食べることができるため、家庭でも「手巻き寿司」や節分の「恵方巻」として振る舞われることもしばしばあるだろう。<br><br>　「寿司」は言わずもがな、その鮮度と素材の良さがクオリティを大きく左右する。料理人は魚の選定に非常に慎重を期し、適切なタイミングで仕入れることが重要である。仕入れた当日の鮮度が旨味の直結するものもあれば、数日間寝かせたり、昆布締めなど施すことにより身や旨味が凝縮されるものもある。また、寿司はその味だけでなく、見た目にも美しさが求められる。板前は握る際に手の温度や力加減、水分量に配慮し、ネタの大きさとシャリのバランスを考慮したうえで、素材の味を最大限に引き立てるように工夫を凝らす。そのため、「寿司」は単なる料理ではなく、一種の芸術性を帯びた作品とも言える。<br><br>　「寿司」は、海外でも多くの寿司屋が見られるほど世界中で人気な食べ物の一つとなっている。ここでは、所謂「コース料理」のみを提供しているような高級カウンター寿司屋ではなく、国内外問わず様々な人々が気軽に足を運ぶことができる、関西圏の誇る最強寿司屋を5つ紹介しよう。<br><br>",
        store_list: "店舗一覧",
        harukoma: "春駒",
        harukomasubtitle: "大阪屈指の飲み屋街である天満に位置する、コスパ最強江戸前寿司",
        daikousushi: "大興寿司",
        daikousushisubtitle: "キタ・ミナミに次ぐ繁華街である天王寺エリアで、３貫１５０円から",
        dodekasushi: "どでか寿司",
        dodekasushisubtitle: "店名通りの大盤振る舞いに留まらず、そのクオリティも一級品",
        sengokusushi: "仙石すし",
        sengokusushisubtitle: "名古屋屈指の最強寿司屋、「仙石すし」がここにある",
        chojiro: "にぎり長次郎",
        chojirosubtitle: "関西を中心に店舗展開しており、高級廻転寿司として名高い",
        other: "その他の寿司処",
        othersubtitle: "日本寿司名店録（北海道・石川・福井・福岡）",
        oshinagaki: "おしながき",
        oshinagaki2: "おしながき",
        oshinagaki3: "おしながき",
        oshinagaki4: "おしながき",
        oshinagaki5: "おしながき",
        store_details: "店舗紹介",
        harukomatoptitle: "春駒",
        harukomatoptitledetail: "　大阪駅から、大阪環状線（外回り）で一駅の天満駅にある江戸前寿司屋『春駒』。多くの寿司屋が立ち並ぶ天満エリアで本店・支店を問わず終日、大行列を成す同エリアNo.1の寿司屋である。<br><br>　メニューの種類は圧巻の100種以上であり、どの寿司ネタもサイズが大きく食べ応えもある。また、本店の名物である「あさりの赤出汁」はビッグサイズのあさりがゴロゴロ入っており、売り切れ御免の人気サイドメニューとなっている。ランチタイムの盛況具合では、本店・支店問わずディナー帯になると寿司ネタが完売続出となることもある。大阪最強とも呼べる『春駒』、是非とも早い時間に訪れていただきたい。",
        daikousushitoptitle: "大興寿司",
        daikousushitoptitledetail: "　梅田のキタエリア、難波のミナミエリアに次ぐ繁華街である天王寺エリアに『大興寿司』は店を構える。職人が握る寿司を堪能でき、マグロが３貫１５０円からという某回転寿司チェーン店も驚愕する圧巻のコスパである。看板のメニューが定期的に更新されており、訪れる度に異なる握りを楽しめることも魅力的だ。<br><br>　寿司だけではなく、「馬刺し」や「うなぎの肝」、立派な鯛のあら煮である「かぶと煮」などのサイドメニューが豊富であり、数十種類もの用意がある。",
        dodekasushitoptitle: "どでか寿司",
        dodekasushitoptitledetail: "　大阪駅から谷町線で一駅の南森町に店を構えている『どでか寿司』。ここは店名の通り、寿司の大きさを売りとしている。単にサイズが大きいだけでなく、鯛や鰯など、ものによってはネタを2枚重ねにして握るという太っ腹さには衝撃だ。握りに加え、巻物も当然ビッグサイズであり、納豆巻などでさえ太巻きとも思えるような大きさで提供されるというように、どのメニューを選んでも満足感を得られること間違いないだろう。<br><br>　店内は分煙となっているほか、大人数の歓送迎会なども受け付けているので、多種多様なシチュエーションで利用可能だ。",
        sengokusushitoptitle: "仙石すし",
        sengokusushitoptitledetail: "　主要関西圏から新幹線でおよそ50分、名古屋にもコスパ最強な老舗寿司屋が存在する。名駅から徒歩5分の好立地に『仙石すし』はある。ディナー時間はもちろんのこと、ランチ帯には圧巻リュームでSNS映えな海鮮丼を求めて、現在では全国から多くの客が足を運ぶようになった。<br><br>　ランチ帯で最も人気なメニューは「季節のスペシャルランチ海鮮丼」である。日によって異なる新鮮なおすすめ鮮魚が約8種も盛り込まれた逸品である。ここでは主に、有名なランチメニューを紹介したい。",
        chojirotoptitle: "にぎり長次郎",
        chojirotoptitledetail: "　主に関西圏で廻転寿司として事業展開しているチェーン店だが、カウンターだけの寿司屋に引けを取らないクオリティである。看板メニューの「本マグロ三昧」や、注文後に生簀から取り出して調理する「泳がし鯵」や「活アワビ」は新鮮さ抜群である。レギュラーメニューに加え、季節メニューが定期的に更新されるため、時には「赤貝」や「車海老」、「ボタン海老」といった高級ネタもメニュー表に名を連ねる。<br><br>　また、節分やひな祭りなどのイベントに即した商品や、店舗限定で季節会席も取り扱っており、さまざまな場面で利用できる。サイドメニューやデザートメニューも季節ごとに変更となるため、一年を通して様々な料理を愉しむことができる。",

        subchojiro: "※廻転寿司CHOJIRO・にぎり長次郎 西京極店は一部別メニュー※",
        store_map: "店舗情報",
        harukomashop: "春駒・本店",
        harukomatrain: "最寄り駅：大阪環状線 天満駅など",
        harukomatime: "営業時間：月・水・木・金・土日祝 11:00~21:30<br>※火 定休日。いずれも、ネタが無くなり次第終了。",
        harukomapay: "支払方法：現金・クレジットカードのみ",
        harukomareservation: "予約可否：不可",
        
        daikoushop: "大興寿司・本店",
        daikoutrain: "最寄り駅：大阪環状線 新今宮駅など",
        daikoutime: "営業時間：月～水・金・土日祝 11:00~21:00　※木 定休日、南店：木 通常営業",
        daikoupay: "支払方法：現金のみ",
        daikoureservation: "予約可否：平日のみ予約可",
        
        dodekashop: "どでか寿司",
        dodekatrain: "最寄り駅：大阪メトロ谷町線 南森町駅など",
        dodekatime: "営業時間：月～土 17:00~23:30",
        dodekapay: "現金：クレジットカードなど全般可能",
        dodekareservation: "予約可否：予約可",

        sengokushop: "仙石すし・本店",
        sengokutrain: "最寄り駅：名鉄本線 名古屋駅など",
        sengokutime: "営業時間：火～日 11:30~14:00・17:00~21:00",
        sengokupay: "支払方法：現金・クレジットカードなど全般可能",
        sengokureservation: "予約可否：予約可",
        
        chojiroshop: "にぎり長次郎（芦屋店）",
        chojirotrain: "最寄り駅：阪神本線 打出駅など",
        chojirotime: "営業時間：平日 11:00～15:00・17:00～23:00、土日祝 11:00～23:00",
        chojiropay: "支払方法：現金・クレジットカードなど全般可能",
        chojiroreservation: "予約可否：平日のみ予約可",






        //サブページ開始--------------------------------------------------------------------------------
        
        //ハンバーガーメニュー欄
        
        humberger0: "日本寿司名店録",
        humberger11: "回転寿司 トリトン<br>（北海道・北見市）",
        humberger12: "魚がし食堂<br>（石川県・金沢市）",
        humberger13: "魚心<br>（福井県・福井市）",
        humberger14: "博多豊一<br>（福岡県・博多市）",
        humberger15: "店舗情報",

        //寿司の説明その２

        sushitop2: "日本寿司名店録",
        sushisentence2: "<br>　街中の老舗寿司屋などを訪ねることはハードルが高いと考えたり、その雰囲気に恐れ入ってしまう人が多いだろう。実際、寿司というのは嗜好品であり、決して庶民的な食事とは言い難く、寿司屋を想像すると、どうしても堅苦しいイメージと直結してしまう。<br><br>　しかし、日本列島には関西圏に留まらず、気軽に訪店できてお手頃な価格で寿司が頂ける名店が各地に眠っている。北海道や北陸地方（富山県・石川県・福井県など）は言わずもがな、福岡県も海鮮で有名な地だ。これらの地を旅で訪れた際に、ぜひとも立ち寄っていただきたい寿司屋を幾らかばかり紹介しよう。<br><br>",



        //店舗の詳細情報


        toritontoptitle2: "回転寿し トリトン<br>（北海道）",
        toritondetail: "　『回転寿し トリトン』は、北海道のオホーツク・北見生まれの回転寿司である。回転寿司業界の激戦区である北海道でNO.1を目指して、自慢の目利きが当日厳選した素材を店舗に直接配送、その素材を魚の肉付きや脂の乗り具合を考慮して店内仕込みをする。その自慢のネタを以て握り、いかにお客様に気持ちよく召し上がっていただくかを考え、活気と笑顔が溢れる店内となっている。<br><br>　企業努力の成果もあり、同店のこだわり抜いた寿司を我々はリーズナブルな価格で頂ける。グランドメニューの一部を取り挙げると、天然まぐろ（270）・サーモン（220）・甘えび（170）であったり、北海道産のたこ足（270）・生ほっきひも軍艦（270）・ほたて（310）・醤油漬けいくら（430）（いずれも1皿2貫・税抜価格）で提供される。他の寿司屋では味わえない価格でハイクオリティを維持できているのは北海道発祥の回転寿司ならではだろう。<br><br>　なお、北海道だけでなく、東京都にもアトレ品川店・スカイツリータウン・ソラマチ店・池袋東武店の3店舗を展開しており、北海道に訪れなくとも同じクオリティを愉しむことができる。",

        uogashitoptitle2: "魚がし食堂<br>（石川県）",
        uogashidetail: "　三方を日本海に囲まれた石川県沖は暖流と寒流が交わる豊かな漁場である。変化に富んだ環境から様々な魚介が水揚げされる。その中でも、白身の王様と呼ばれて脂身が豊富な「のどぐろ」が有名である。<br><br>　石川県、特に金沢市は全国有数の観光地である。海鮮だけにフォーカスすれば、金沢駅から10分ほどの場所に「近江町市場」がある。しかし、同市場は食べ歩きなども楽しめる有名な観光地であるものの、国内外問わず観光客が押し寄せているため、商品価格は非常に高騰しており、同市場内に構えている寿司屋や海鮮丼屋に入るとその金額に驚きを隠せざるを得ない。<br><br>　そこで、地元民が推奨するのは、近江町市場から徒歩で20分ほど移動した所にある「金沢中央卸売市場」という別の市場である。中でも、ここの市場内にある『魚がし食堂』は低価格でハイクオリティな海鮮丼や寿司を提供している。近年、SNS等の影響で同店の存在が知られつつあり、長蛇の列が並ぶ日も増加しているようだが、未だに近江町市場に客足が殺到しているため、穴場スポットとして君臨している。",

        uoshintoptitle2: "魚心<br>（福井県）",
        uoshindetail: "　福井県も石川県と同様に北陸地方に属しており、豊富な魚介類に恵まれた環境に位置している。福井駅は大阪駅から2時間弱ほどであり、関西圏からのアクセスも抜群である。福井県が誇る最強の寿司屋である『魚心』は、越前鉄道 日華化学前駅から徒歩10分の場所に店を構えている。回転寿司だが、コロナ以降はレーンに寿司を流していないため、板前に直接注文する形となっている。<br><br>　同店では、握り手1人がテーブル5卓・カウンター15席ほどある店内の握りオーダーを物凄い勢いですべて捌いている。スピードだけではなく、仕事の丁寧さにも驚嘆することだろう。<br><br>　メニューは日替わりでホワイトボードに掲載されており、同店のインスタグラム（店舗情報に記載）で随時確認することができる。シャリを凌駕するほどのネタの大きさや量、そしてその新鮮さや脂身の口溶け具合に再び驚かされる。特に、程よい脂でもっちりとした身質の「福井サーモン」は必食である。",

        toyoichitoptitle2: "博多豊一<br>（福岡県）",
        toyoichidetail: "　福岡県の博多市も海鮮で有名である。博多駅構内やその周辺だけでも九州地方限定の回転寿司や地元の老舗寿司屋まで数多存在するが、ここでは一風変わった寿司屋を選んだ。<br><br>　『博多豊一』は博多港に隣接している寿司屋である。ここは、回転寿司でもカウンター寿司でもなくバイキング形式というスタイルを採用している。バイキングとは言うものの、食べ放題ではない。店内にはコーン軍艦やいくらから、サーモン・大トロ、さらにはイサキやカジキなど数十種類の寿司がショーケースに陳列されており、すべて一貫120円（税抜）で頂けるのだ。<br><br>　寿司だけではなく、浜焼や煮物、汁物も別途注文できる。客層は日本人よりも外国人の割合が高めであり、開店直後に訪れても1時間待ちは覚悟の大行列である。どれも新鮮で美味しく、バイキング形式という寿司業界では新たな形態も非常に興味深い。",

        //店舗の情報（マップなど）
        submap2: "店舗情報",

        toritonmap: "回転寿し トリトン・三輪店（1号店）",
        toritontrain: "最寄り駅：北海道北見バス 三輪",
        toritontime:"営業時間：月～金・土日祝 11:00~22:00<br>※定休日なし",
        toritonpay: "支払方法：電子マネーのみ不可",
        toritonreservation: "予約可否：不可",

        uogashimap: "魚がし食堂・中央市場店",
        uogashitrain: "最寄り駅：JR北陸本線 金沢駅など",
        uogashitime: "営業時間：月・火～金・土日祝 ※水 定休日<br>11:00~15:00・17:00~21:30",
        uogashipay: "支払方法：現金のみ",
        uogashireservation: "予約可否：予約可",

        uoshinmap: "回転寿司 にぎり屋魚心",
        uoshintrain: "最寄り駅：越前鉄道 日華化学前駅",
        uoshintime: "月～水・金 11:00~14:30・18:00~21:30<br>土日祝 11:00~15:30・17:30~21:30 ※木 定休日",
        uoshinpay: "現金・PayPayのみ",
        uoshinreservation: "予約不可",

        hakatamap: "博多豊一・ベイサイドプレイス博多",
        hakatatrain: "福岡市営地下鉄 呉服町駅",
        hakatatime: "営業時間：お問い合わせ <button class='phone'>📞</button>（092-262-2425）<br>※店休日はインスタグラムで確認してください。",
        hakatapay: "現金のみ",
        hakatareservation: "ランチ帯と日曜日は予約不可",

////////////////////////////////////英語//////////////////////////////////////////////////////////////

    },
    en: {
        humberger1: "SYMBOL of JAPANESE FOOD CULTURE",
        humberger2: "LIST of SUSHI RESTRAUNT",
        humberger3: "DETAILS of SUSHI RESTRAUNT",
        humberger4: "INFORMATION of SUSHI RESTRAUNT",
        sushitop: "Symbol of Japanese Food Culture",
        sushisentence: "<br>　It goes without saying that sushi is one of the most representative dishes that symbolize Japanese food culture. When you hear the word sushi, you probably think of nigiri sushi, but sushi can be broadly divided into five types: nigiri, gunkan, maki（rolled）, oshi（pushed）, and chirashi. <br><br>　Needless to say, the quality of sushi is greatly affected by its freshness and the quality of the ingredients. Sushi Chefs must be very careful when selecting fish and purchase them at the right time because the type of fish available to catch and the level of its flavor vary depending on the season. In addition, sushi is required to be beautiful not only in taste but also in appearance. When making the sushi, the Sushi chefs take into consideration the temperature of their hands, the strength of his hands, and the amount of moisture, and also considers the balance between the size of the topping and the rice, and makes every effort to bring out the flavor of the ingredients to the fullest. For this reason, sushi is not just food, but can also be considered one kind work of art. <br><br>　Sushi has become one of the most popular foods in the world, with many sushi restaurants now found overseas. Here, we will introduce five of the best sushi restaurants in the Kansai region that are casually people from Japan or overseas could visit.<br><br>",

        store_list: "LIST of SUSHI RESTRAUNT",
        harukoma: "Harukoma",
        harukomasubtitle: "One of the most famous sushi restraunt in Osaka",
        daikousushi: "Daikou Sushi",
        daikousushisubtitle: "Serving 3pieces of tuna sushi, ￥150 only!!",
        dodekasushi: "Dodeka Sushi",
        dodekasushisubtitle: "All kinds of Menu（Sushi & Rolled Sushi） are so BIG！",
        sengokusushi: "Sengoku Sushi",
        sengokusushisubtitle: "Instagrammable Seafood Bowl",
        chojiro: "Nigiri Chojiro",
        chojirosubtitle: "Expensive conveyor belt sushi restaurant",
        other: "Except KANSAI Region",
        othersubtitle: "HOKKAIDO・KANAZAWA・FUKUI・HAKATA",
        oshinagaki: "JAPANESE MENU<br>（￥）",
        oshinagaki2: "JAPANESE MENU<br>（￥）",
        oshinagaki3: "JAPANESE MENU<br>（￥）",
        oshinagaki4: "JAPANESE MENU<br>（￥）",
        oshinagaki5: "JAPANESE MENU<br>（￥）",


        store_details: "DETAILS of SUSHI RESTRAUNT",

        harukomatoptitle: "Edo-style Nigiri Sushi Harukoma（OSAKA）",
        harukomatoptitledetail: "　'Harukoma' is an Edomae sushi restaurant located in Tenma area. In the Tenma area, where many sushi restaurants are lined up, it is the No.1 sushi restaurant in the area, with long lines at both the main store and branch all day long. <br><br>　There are an impressive more than 100 types of menu, and each sushi topping is so large. In addition, the main store's specialty, clam red miso soup, is filled with many and large clams. It's the most popular side dish. Whenever you go, you have to wait in line many hours, however, it's worth to visit.",
        
        daikousushitoptitle: "DAIKOU SUSHI<br>（OSAKA）",
        daikousushitoptitledetail: "　Daiko Sushi is located in the Tennoji area, which is the thirdest famous sightseeing spots in Osaka. You can enjoy sushi made by a skilled chef, and the price is so reasobable. You can eat 3 pieces of tuna at ￥150. Another attractive feature is that the most employee could speak English, so you won't be confused the way to order or asking some questions. <br><br>　In addition, you can visit Daikou Sushi restraunt befor or after you enjoy the sightseeing spots called Shinsekai, Tsutenkaku and Abeno Harukas because the restraunt is located in Tennnoji area as mentioned earlier.",
        
        dodekasushitoptitle: "DODEKA SUSHI<br>（OSAKA）",
        dodekasushitoptitledetail: "　'Dodeka Sushi' is located in Minamimorimachi, one stop from Osaka Station on the Osaka Metro Tanimachi（T） Line. The meaning of Dodeka is BIG in English, so the English name of this restraunt is 'BIG SUSHI'. As the name suggests, the sushi they serve is so big. <br><br>　Of course, nigiri sushi is so big, inaddition, the rolled sushi is also naturally big, so you're sure to be satisfied no matter what menu you choose. ",
        
        sengokusushitoptitle: "SENGOKU SUSHI（NAGOYA）",
        sengokusushitoptitledetail: "　Nagoya also has a long-established sushi restaurant with the best value for money. 'Sengoku Sushi' is conveniently located just a 5-minute walk from Nagoya Station. Not only during dinner time, but during lunch time as well, many customers from all over the country now visit the restaurant in search of an impressive seafood bowl that looks great on social media. <br><br>　The most popular menu item during lunch hours is the Seasonal Special Lunch Seafood Bowl. It is a masterpiece that includes about 8 types of fresh. Also, when you visit Nagoya, you can enjoy the specific local foods: Miso Tonkatsu, Kishimen（kind of noodles）, Hitsumabushi.",
        
        chojirotoptitle: "NIGIRI CHOJIRO<br>（HYOGO）",
        chojirotoptitledetail: "　Although 'Chojiro' is a chain restaurant that operates mainly in the Kansai region as a conveyor belt sushi restaurant, the quality is comparable to that of sushi restaurants with only a counter seating restraunt. The signature dish, Bluefin Tuna Feast, as well as the Fresh Horse Mackerel and Live Abalone, which are taken out of the tank and cooked immediately after recieved the order, are extremely fresh. In addition to the regular menu, seasonal dishes are regularly updated, so sometimes high-end ingredients such as ark shell, tiger prawn, and botan shrimp are also on the menu. <br><br>　You order the menu from the tablet that compatible with English, Chinese and Korean, so you don't have to talk with staff and you can order easily.",

        subchojiro: "※SOME RESTAURANT HAVE THE DIFFERENT MENU and PRICE※",


        store_map: "INFORMATION of SUSHI RESTRAUNT",
        
        
        harukomashop: "Harukoma（OSAKA）",
        harukomatrain: "STA: Osaka Loop Line, Tenma sta.",
        harukomatime: "OPE: Except on Fri. 11:00~21:30",
        harukomapay: "PMT: Cash, Credit Card",
        harukomareservation: "RSV: Unavailable",


        daikoushop: "Daikou Sushi（OSAKA）",
        daikoutrain: "STA: Osaka Loop Line, Tennoji sta.",
        daikoutime: "OPE: Except on Thu. 11:00~21:00",
        daikoupay: "PMT: Cash only",
        daikoureservation: "RSV: Available only on Weekdays",


        dodekashop: "Dodeka Sushi（OSAKA）",
        dodekatrain: "STA: Osaka Metro（T）, Minamimorimachi sta.",
        dodekatime: "OPE: Except on Sun. 17:00~23:30",
        dodekapay: "PMT: All things Available",
        dodekareservation: "RSV: Available",


        sengokushop: "Sengoku Sushi（NAGOYA）",
        sengokutrain: "STA: Meitetsu, Nagoya sta.",
        sengokutime: "OPE: Except on Mon. 11:30~14:00・17:00~21:00",
        sengokupay: "PMT: All things Available",
        sengokureservation: "RSV: Available",


        chojiroshop: "Nigiri Chojiro（HYOGO）",
        chojirotrain: "STA: Hanshin Rail Way, Uchide sta.",
        chojirotime: "OPE: Weekdays 11:00~15:00・17:00~23:00, Weekends 11:00~23:00",
        chojiropay: "PMT: All things Available",
        chojiroreservation: "RSV: Available only on Weekdays",

        

        //サブページ----------------------------------------------------------------------------
        //HUMBERGER MENU
        
        humberger0: "THE FINEST SUSHI RESTAURANTS in JAPAN",
        humberger11: "TORITON<br>（HOKKAIDO）",
        humberger12: "UOGASHI SYOKUDO<br>（KANAZAWA）",
        humberger13: "UOSHIN<br>（FUKUI）",
        humberger14: "HAKATA TOYOICHI<br>（HAKATA）",
        humberger15: "INFORMATION of SUSHI RESTRAUNT",

        //寿司の説明その２

        sushitop2: "THE FINEST SUSHI RESTRAUNT in JAPAN",
        sushisentence2: "<br>　Sushi is one of the luxury Japanese foods and cannot eat it everyday easily. However, throughout the Japan, not just in the Kansai region, there are renowned sushi restaurants where you can enjoy sushi at reasonable prices. Hokkaido and the Hokuriku region（Kanazawa city, Fukui city and so on） go without saying, and Hakata city is also famous for its seafood. <br><br>　I would like to introduce a few sushi restaurants that you should definitely visit when you travel to these areas. I hope you to enjoy all over the Japan from Japanese foods to spectacular sighseeing spot! Also, I would like you say 'I want to come back Japan Again!!'<br><br>",



        //各店舗の詳細説明


        toritontoptitle2: "TORITON<br>（HOKKAIDO）",
        toritondetail: "　'Toriton' is a sushi restaurant that originated in Hokkaido. The restraunt is full of energy and smiles because they always consider how to entertain the customers. <br><br>　According to the company's efforts, you can enjoy the sushi with reasonable price. Some of the main menu items are tuna (270), salmon (220), sweet shrimp (170), Hokkaido octopus legs (270), Hokkaido raw hokki gunkan (270), Hokkaido scallops (310), and Hokkaido salmon roe marinated in soy sauce (430) (all served as 2 pieces per plate, excluding tax). The favorite sushi for foreigners  is Seafood salad gunkan and Salmon.<br><br>　In addition to Hokkaido region, there are three branches in Tokyo: Atre Shinagawa, Skytree Town Solamachi, and Ikebukuro Tobu, so you can enjoy the same quality without having to visit Hokkaido.",

        uogashitoptitle2: "UOGASHI SYOKUDO<br>（KANAZAWA）",
        uogashidetail: "　Ishikawa Prefecture has the rich seafood ground. The environment of ocean allows wide variety of seafood to be landed. Among them, Nodoguro (rosy seabass), known as the KING of white body fish, is so famous. <br><br>　Ishikawa Pref., especially Kanazawa City, is one of the leading sighseeing spots in Japan. If you focus only on seafood, you will find the Omicho Ichiba（Omichi Market） about 10 minutes from Kanazawa Station. However, although the market is the famous tourist destination where you can enjoy eating and walking around, the prices of foods have skyrocketed due to the influx of tourists from both Japan and abroad.<br><br>　Therefore, the locals recommend another market called the Kanazawa Chuou Ichiba（Central Wholesale Market）, located about 20 minutes on foot from the Omicho Market. At that area, 'Uogashi Shokudo' serves high-quality seafood bowls and sushi at low prices.",

        uoshintoptitle2: "UOSHIN<br>（FUKUI）",
        uoshindetail: "　Like Ishikawa Prefecture, Fukui Prefecture is also in the Hokuriku region and is located in an environment blessed with an abundance of seafood. Fukui Station is just under two hours from Osaka Station, so it is easy to access from the Kansai region. Also, Fukui prefecture is known as Dinosaur Prefecture. In this area, 'Uoshin' is the best sushi restaurant.<br><br>　At this restaurant, only one sushi chef handles all the sushi orders in the restaurant, which has five tables and about 15 counter seats, with incredible speed. You will be amazed not only by the speed makes sushi, but also by the carefulness of the work. You can check the menu on the restaurant's Instagram (username:uoshin024). <br><br>　For me, the 'Fukui Salmon', with its firm flesh and just the right amount of fat, is my recommendation for you. You must try to eat it!!",

        toyoichitoptitle2: "HAKATA TOYOICHI<br>（HAKATA）",
        toyoichidetail: "　Hakata City is also famous for seafood. I chose a unique sushi restaurant here. <br><br>　'Hakata Toyoichi' is a sushi restaurant adjacent to Hakata Port. This restaurant's style is not neither conveyor belt sushi nor counter sushi, but instead they installed a buffet style. Although it is called a buffet, it is not an all-you-can-eat buffet. Inside the restaurant, dozens of types of sushi are displayed in the showcase, from corn gunkan to salmon, swordfish and so on, and all can be enjoyed for 120 yen per piece (excluding tax). <br><br>　The rate of customer is more foreign than Japanese, and even if you visit right after opening, you will be prepared to wait an hour for a long queue.",

        //店舗の情報（マップ）
        submap2: "INFORMATION of SUSHI RESTRAUNT", 

        toritonmap: "TORITON（HOKKADIO）",
        toritontrain: "STA: Hokkaido Kitami bus, Miwa bus stop",
        toritontime:"OPE: Everyday 11:00~22:00",
        toritonpay: "PMT: Except Electronic money",
        toritonreservation: "RSV: Unabailable",

        uogashimap: "UOGASHI SYOKUDO（KANAZAWA）",
        uogashitrain: "STA: JR Hokuriku Line, Kanazawa sta.",
        uogashitime: "OPE: Except on Wed. 11:00~15:00・17:00~21:30",
        uogashipay: "PMT: Cash Only",
        uogashireservation: "RSV: Available",

        uoshinmap: "UOSHIN （FUKUI）",
        uoshintrain: "STA: Echizen Rail Way, Nikkakagakumae sta.",
        uoshintime: "OPE: Weekdays 11:00~14:30・18:00~21:30<br>（Except on Thu.）<br>Weekends 11:00~15:30・17:30~21:30",
        uoshinpay: "PMT: Cash・PayPay",
        uoshinreservation: "RSV: Unavailable",

        hakatamap: "HAKATA TOYOICHI（HAKATA）",
        hakatatrain: "STA: Fukuoka City Subway, Gofukucho sta. ",
        hakatatime: "OPE: Inquiry  <button> 📞 </button>（092-262-2425）",
        hakatapay: "PMT: Cash Only",
        hakatareservation: "RSV: Unavailable on Sun. and Lunch Time",







    }
};



function changeLanguageIndex() {
    const lang = document.getElementById("language").value; // 選択された言語を取得

    // ハンバーガーメニューのテキストを変更
    document.getElementById("humberger1").querySelector("a").innerHTML = translations[lang].humberger1;
    document.getElementById("humberger2").querySelector("a").innerHTML = translations[lang].humberger2;
    document.getElementById("humberger3").querySelector("a").innerHTML = translations[lang].humberger3;
    document.getElementById("humberger4").querySelector("a").innerHTML = translations[lang].humberger4;

    // セクションのタイトルやテキストを変更
    document.getElementById("sushitop").innerHTML = translations[lang].sushitop;
    document.getElementById("sushisentence").innerHTML = translations[lang].sushisentence;

    // 店舗一覧セクション
    document.getElementById("store_list").innerHTML = translations[lang].store_list;

    // 各店舗名とサブタイトルのテキストを変更
    document.getElementById("harukoma").innerHTML = translations[lang].harukoma;
    document.getElementById("harukomasubtitle").innerHTML = translations[lang].harukomasubtitle;

    // 各店舗の詳細リンクのテキストを変更
    document.getElementById("daikousushi").innerHTML = translations[lang].daikousushi;
    document.getElementById("daikousushisubtitle").innerHTML = translations[lang].daikousushisubtitle;
    document.getElementById("dodekasushi").innerHTML = translations[lang].dodekasushi;
    document.getElementById("dodekasushisubtitle").innerHTML = translations[lang].dodekasushisubtitle;
    document.getElementById("sengokusushi").innerHTML = translations[lang].sengokusushi;
    document.getElementById("sengokusushisubtitle").innerHTML = translations[lang].sengokusushisubtitle;
    document.getElementById("chojiro").innerHTML = translations[lang].chojiro;
    document.getElementById("chojirosubtitle").innerHTML = translations[lang].chojirosubtitle;
    document.getElementById("other").innerHTML = translations[lang].other;
    document.getElementById("othersubtitle").innerHTML = translations[lang].othersubtitle;

    //おしながき
    document.getElementById("oshinagaki").innerHTML = translations[lang].oshinagaki;
    document.getElementById("oshinagaki2").innerHTML = translations[lang].oshinagaki2;
    document.getElementById("oshinagaki3").innerHTML = translations[lang].oshinagaki3;
    document.getElementById("oshinagaki4").innerHTML = translations[lang].oshinagaki4;
    document.getElementById("oshinagaki5").innerHTML = translations[lang].oshinagaki5;
    document.getElementById("subchojiro").innerHTML = translations[lang].subchojiro;

    //　各店舗詳細文章
    document.getElementById("store_details").innerHTML = translations[lang].store_details;
    document.getElementById("harukomatoptitle").innerHTML = translations[lang].harukomatoptitle;
    document.getElementById("harukomatoptitledetail").innerHTML = translations[lang].harukomatoptitledetail;
    document.getElementById("daikousushitoptitle").innerHTML = translations[lang].daikousushitoptitle;
    document.getElementById("daikousushitoptitledetail").innerHTML = translations[lang].daikousushitoptitledetail;
    document.getElementById("dodekasushitoptitle").innerHTML = translations[lang].dodekasushitoptitle;
    document.getElementById("dodekasushitoptitledetail").innerHTML = translations[lang].dodekasushitoptitledetail;
    document.getElementById("sengokusushitoptitle").innerHTML = translations[lang].sengokusushitoptitle;
    document.getElementById("sengokusushitoptitledetail").innerHTML = translations[lang].sengokusushitoptitledetail;
    document.getElementById("chojirotoptitle").innerHTML = translations[lang].chojirotoptitle;
    document.getElementById("chojirotoptitledetail").innerHTML = translations[lang].chojirotoptitledetail;

    //店舗情報
    document.getElementById("harukomashop").innerHTML = translations[lang].harukomashop;
    document.getElementById("harukomatrain").innerHTML = translations[lang].harukomatrain;
    document.getElementById("harukomatime").innerHTML = translations[lang].harukomatime;
    document.getElementById("harukomapay").innerHTML = translations[lang].harukomapay;
    document.getElementById("harukomareservation").innerHTML = translations[lang].harukomareservation;

    document.getElementById("daikoushop").innerHTML = translations[lang].daikoushop;
    document.getElementById("daikoutrain").innerHTML = translations[lang].daikoutrain;
    document.getElementById("daikoutime").innerHTML = translations[lang].daikoutime;
    document.getElementById("daikoupay").innerHTML = translations[lang].daikoupay;
    document.getElementById("daikoureservation").innerHTML = translations[lang].daikoureservation;


    document.getElementById("dodekashop").innerHTML = translations[lang].dodekashop;
    document.getElementById("dodekatrain").innerHTML = translations[lang].dodekatrain;
    document.getElementById("dodekatime").innerHTML = translations[lang].dodekatime;
    document.getElementById("dodekapay").innerHTML = translations[lang].dodekapay;
    document.getElementById("dodekareservation").innerHTML = translations[lang].dodekareservation;

    document.getElementById("sengokushop").innerHTML = translations[lang].sengokushop;
    document.getElementById("sengokutrain").innerHTML = translations[lang].sengokutrain;
    document.getElementById("sengokutime").innerHTML = translations[lang].sengokutime;
    document.getElementById("sengokupay").innerHTML = translations[lang].sengokupay;
    document.getElementById("sengokureservation").innerHTML = translations[lang].sengokureservation;

    document.getElementById("chojiroshop").innerHTML = translations[lang].chojiroshop;
    document.getElementById("chojirotrain").innerHTML = translations[lang].chojirotrain;
    document.getElementById("chojirotime").innerHTML = translations[lang].chojirotime;
    document.getElementById("chojiropay").innerHTML = translations[lang].chojiropay;
    document.getElementById("chojiroreservation").innerHTML = translations[lang].chojiroreservation;





    //----------------------------------------------------------------------------------------

}

function changeLanguage() {
    const lang = document.getElementById("language2").value; // 選択された言語を取得

    // サブページに翻訳を適用する
    document.getElementById("sushitop2").innerHTML = translations[lang].sushitop2;
    document.getElementById("sushisentence2").innerHTML = translations[lang].sushisentence2;
    
    
    //サブページハンバーガー
    document.getElementById("humberger0").querySelector("a").innerHTML = translations[lang].humberger0;
    document.getElementById("humberger11").querySelector("a").innerHTML = translations[lang].humberger11;
    document.getElementById("humberger12").querySelector("a").innerHTML = translations[lang].humberger12;
    document.getElementById("humberger13").querySelector("a").innerHTML = translations[lang].humberger13;
    document.getElementById("humberger14").querySelector("a").innerHTML = translations[lang].humberger14;
    document.getElementById("humberger15").querySelector("a").innerHTML = translations[lang].humberger15;
    
        
        document.getElementById("toritontoptitle2").innerHTML = translations[lang].toritontoptitle2;
        document.getElementById("uogashitoptitle2").innerHTML = translations[lang].uogashitoptitle2;
        document.getElementById("uoshintoptitle2").innerHTML = translations[lang].uoshintoptitle2;
        document.getElementById("toyoichitoptitle2").innerHTML = translations[lang].toyoichitoptitle2;
    
        document.getElementById("toritondetail").innerHTML = translations[lang].toritondetail;
        document.getElementById("uogashidetail").innerHTML = translations[lang].uogashidetail;
        document.getElementById("uoshindetail").innerHTML = translations[lang].uoshindetail;
        document.getElementById("toyoichidetail").innerHTML = translations[lang].toyoichidetail;
    
        document.getElementById("submap2").innerHTML = translations[lang].submap2;

        document.getElementById("toritonmap").innerHTML = translations[lang].toritonmap;
        document.getElementById("toritontrain").innerHTML = translations[lang].toritontrain;
        document.getElementById("toritontime").innerHTML = translations[lang].toritontime;
        document.getElementById("toritonpay").innerHTML = translations[lang].toritonpay;
        document.getElementById("toritonreservation").innerHTML = translations[lang].toritonreservation;

        document.getElementById("uogashimap").innerHTML = translations[lang].uogashimap;
        document.getElementById("uogashitrain").innerHTML = translations[lang].uogashitrain;
        document.getElementById("uogashitime").innerHTML = translations[lang].uogashitime;
        document.getElementById("uogashipay").innerHTML = translations[lang].uogashipay;
        document.getElementById("uogashireservation").innerHTML = translations[lang].uogashireservation;

        document.getElementById("uoshinmap").innerHTML = translations[lang].uoshinmap;
        document.getElementById("uoshintrain").innerHTML = translations[lang].uoshintrain;
        document.getElementById("uoshintime").innerHTML = translations[lang].uoshintime;
        document.getElementById("uoshinpay").innerHTML = translations[lang].uoshinpay;
        document.getElementById("uoshinreservation").innerHTML = translations[lang].uoshinreservation;

        document.getElementById("hakatamap").innerHTML = translations[lang].hakatamap;
        document.getElementById("hakatatrain").innerHTML = translations[lang].hakatatrain;
        document.getElementById("hakatatime").innerHTML = translations[lang].hakatatime;
        document.getElementById("hakatapay").innerHTML = translations[lang].hakatapay;
        document.getElementById("hakatareservation").innerHTML = translations[lang].hakatareservation;

        document.getElementById("").innerHTML = translations[lang];
        document.getElementById("").innerHTML = translations[lang];
        document.getElementById("").innerHTML = translations[lang];
        document.getElementById("").innerHTML = translations[lang];
    
}


// スマホ版の画面幅でテキストを変更する関数
function changeSubtitleForMobile() {
    // 画面幅が480px以下の場合
    if (window.innerWidth <= 480) {
        document.getElementById('harukomasubtitle').textContent = '大阪最高峰江戸前寿司';
        document.getElementById('daikousushisubtitle').textContent = '天王寺で鮪が3貫150円';
        document.getElementById('dodekasushisubtitle').textContent = '驚愕サイズな超新鮮ネタ';
        document.getElementById('sengokusushisubtitle').textContent = '名古屋最強映え海鮮丼';
        document.getElementById('chojirotoptitle').innerHTML = '長次郎'
        document.getElementById('chojirosubtitle').textContent = 'ちょっといい日に';
        document.getElementById('other').innerHTML = '日本<br>寿司名店';
        document.getElementById('othersubtitle').textContent = '北海道・北陸・博多';
        document.getElementById('sushisentence').innerHTML = '<br>　「寿司」は日本食文化を象徴する代表的な料理の一つであることは言うまでもない。「寿司」の種類は大きく分けて握り・軍艦・巻・押し・ちらしの5つに分類される。<br><br>　「寿司」は言わずもがな、その鮮度と素材の良さがクオリティを大きく左右する。料理人は魚の選定に非常に慎重を期し、適切なタイミングで仕入れることが重要である。また、寿司はその味だけでなく、見た目にも美しさが求められるため、「寿司」は単なる料理ではなく、一種の芸術性を帯びた作品とも言える。<br><br>　「寿司」は、海外でも多くの寿司屋が見られるほど世界中で人気な食べ物の一つとなっている。ここでは、老若男女・国内外を問わず様々な人々が気軽に足を運ぶことができる、関西圏の誇る最強寿司屋を5つ紹介しよう。<br><br>';
        document.getElementById('subchojiro').textContent = '※西京極店など一部店舗は別メニュー※';
    } else {
        // それ以外の画面幅の場合は元のテキストに戻す
        document.getElementById('harukomasubtitle').textContent = '大阪屈指の飲み屋街である天満に位置する、コスパ最強江戸前寿司';
        document.getElementById('daikousushisubtitle').textContent = 'キタ・ミナミに次ぐ繁華街である天王寺エリアで、3貫150円から';
        document.getElementById('dodekasushisubtitle').textContent = '店名通りの大盤振る舞いに留まらず、そのクオリティも一級品';
        document.getElementById('sengokusushisubtitle').textContent = '名古屋屈指の最強寿司屋、「仙石すし」がここにある';
        document.getElementById('chijirosubtitle').textContent = '関西を中心に店舗展開しており、高級廻転寿司として名高い';
        document.getElementById('other').textContent = 'その他の寿司処';
        document.getElementById('othersubtitle').textContent = '日本寿司名店録（北海道・石川・福井・福岡）';
        document.getElementById('sushisentence').innerHTML = '<br>　「寿司」は日本食文化を象徴する代表的な料理の一つであることは言うまでもない。一般的に「寿司」と耳にすると思い浮かぶのは「握り寿司」だろうが、「寿司」の種類は大きく分けて握り・軍艦・巻・押し・ちらしの5つに分類される。巻寿司は海苔で具材を巻いた形態で手軽に食べることができるため、家庭でも「手巻き寿司」や節分の「恵方巻」として振る舞われることもしばしばあるだろう。<br><br>　「寿司」は言わずもがな、その鮮度と素材の良さがクオリティを大きく左右する。料理人は魚の選定に非常に慎重を期し、適切なタイミングで仕入れることが重要である。仕入れた当日の鮮度が旨味の直結するものもあれば、数日間寝かせたり、昆布締めなど施すことにより身や旨味が凝縮されるものもある。また、寿司はその味だけでなく、見た目にも美しさが求められる。板前は握る際に手の温度や力加減、水分量に配慮し、ネタの大きさとシャリのバランスを考慮したうえで、素材の味を最大限に引き立てるように工夫を凝らす。そのため、「寿司」は単なる料理ではなく、一種の芸術性を帯びた作品とも言える。<br><br>　「寿司」は、海外でも多くの寿司屋が見られるほど世界中で人気な食べ物の一つとなっている。ここでは、老若男女・国内外を問わず様々な人々が気軽に足を運ぶことができる、関西圏の誇る最強寿司屋を5つ紹介しよう。<br><br>';
        document.getElementById('chojirotoptitle').textContent = 'にぎり長次郎';
        document.getElementById('subchojiro').textContent = '※廻転寿司CHOJIRO・にぎり長次郎 西京極店は一部別メニュー※';
        document.getElementById('').textContent = '';
    }
}

// ページ読み込み時にフレーズを変更
changeSubtitleForMobile();

// 画面サイズ変更時にもフレーズを変更
window.addEventListener('resize', changeSubtitleForMobile);



document.getElementById("scrollLeft").addEventListener("click", function() {
    const container = document.querySelector(".harukomamenu1");
    container.scrollBy({
        left: -200,  // 200px分左にスクロール
        behavior: 'smooth'  // スムーズにスクロール
    });
});

document.getElementById("scrollRight").addEventListener("click", function() {
    const container = document.querySelector(".harukomamenu1");
    container.scrollBy({
        left: 200,  // 200px分右にスクロール
        behavior: 'smooth'  // スムーズにスクロール
    });
});






