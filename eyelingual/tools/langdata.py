# -*- coding: utf-8 -*-
"""
Source data for every Eyelingual card.

Phrase ids are shared across all languages: s01-01 in Korean is the same
sentence as s01-01 in Arabic. That is deliberate — it keeps the recording
scripts comparable, lets a fix to an English label propagate everywhere, and
means audio folders have identical filenames across languages.

Fields per phrase:  id, en, x (target script), p (romanisation for the clinician)
`p` is empty for languages already written in Latin script.

Mandarin additionally carries `t` (traditional) because it is the only card
with a 简/繁 toggle.
"""

# ---------------------------------------------------------------- config ----
COMMON_LATIN = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'

LANGS = [
    dict(code="zh",  slug="zh",  english="Mandarin",   native="普通话",
         htmlLang="zh-Hans", dir="ltr", tts="zh-CN", romanLabel="Pinyin",
         scriptToggle=True, reviewedBy="Danlin Zeng", reviewedOn="2026-07-27",
         font='"PingFang SC","Noto Sans CJK SC","Source Han Sans SC","Hiragino Sans GB","Microsoft YaHei","Heiti SC",sans-serif'),

    dict(code="yue", slug="yue", english="Cantonese",  native="廣東話",
         htmlLang="yue-Hant", dir="ltr", tts="zh-HK", romanLabel="Jyutping",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"PingFang HK","PingFang TC","Hiragino Sans CNS","Noto Sans CJK HK","Noto Sans CJK TC","Microsoft JhengHei","Heiti TC",sans-serif'),

    dict(code="pa",  slug="pa",  english="Punjabi",    native="ਪੰਜਾਬੀ",
         htmlLang="pa", dir="ltr", tts="pa-IN", romanLabel="Romanisation",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"Gurmukhi MN","Gurmukhi MT","Noto Sans Gurmukhi","Noto Serif Gurmukhi","Raavi",sans-serif'),

    dict(code="fa",  slug="fa",  english="Farsi",      native="فارسی",
         htmlLang="fa", dir="rtl", tts="fa-IR", romanLabel="Romanisation",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"SF Arabic","Geeza Pro","Noto Sans Arabic","Noto Naskh Arabic","Tahoma",sans-serif'),

    dict(code="ar",  slug="ar",  english="Arabic",     native="العربية",
         htmlLang="ar", dir="rtl", tts="ar-SA", romanLabel="Romanisation",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"SF Arabic","Geeza Pro","Noto Sans Arabic","Noto Naskh Arabic","Tahoma",sans-serif'),

    dict(code="ko",  slug="ko",  english="Korean",     native="한국어",
         htmlLang="ko", dir="ltr", tts="ko-KR", romanLabel="Romanisation",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"Apple SD Gothic Neo","Noto Sans KR","Noto Sans CJK KR","Malgun Gothic",sans-serif'),

    dict(code="ja",  slug="ja",  english="Japanese",   native="日本語",
         htmlLang="ja", dir="ltr", tts="ja-JP", romanLabel="Rōmaji",
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic",sans-serif'),

    dict(code="vi",  slug="vi",  english="Vietnamese", native="Tiếng Việt",
         htmlLang="vi", dir="ltr", tts="vi-VN", romanLabel=None,
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font=COMMON_LATIN),

    dict(code="tl",  slug="tl",  english="Tagalog",    native="Tagalog",
         htmlLang="fil", dir="ltr", tts="fil-PH", romanLabel=None,
         scriptToggle=False, reviewedBy=None, reviewedOn=None,
         font=COMMON_LATIN),
]

# homepage grid, row-major, exactly as sketched
GRID = [["zh", "yue", "pa"], ["fa", "ar", "ko"], ["ja", "vi", "tl"]]

# ---------------------------------------------------------------- stages ----
STAGES = [
    dict(id="intro",    num="01", title="Intro",         note=None,  ids=["s01-01","s01-02","s01-03","s01-04"]),
    dict(id="acuity",   num="02", title="Vision",        note=None,  ids=["s02-01","s02-02","s02-03","s02-04","s02-05","s02-06","s02-07"], diplopiaAfter="s02-06"),
    dict(id="motility", num="03", title="Eye movements", note="Demonstrate and the patient will mirror you.", ids=["s03-01","s03-02","s03-03","s03-04","s03-05","s03-06"]),
    dict(id="drops",    num="04", title="Drops",         note=None,  ids=["s04-01","s04-02","s04-03","s04-04","s04-05","s04-06","s04-07","s04-08"]),
    dict(id="slitlamp", num="05", title="Slit lamp",     note=None,  ids=["s05-01","s05-02","s05-03","s05-04","s05-05","s05-06","s05-07"]),
    dict(id="closing",  num="06", title="Closing",       note=None,  ids=["s06-01","s06-02"]),
]

EN = {
 "s01-01":"I'm the doctor, I'm going to check your eyes.",
 "s01-02":"Please sit here.",
 "s01-03":"Please take off your glasses.",
 "s01-04":"Does it hurt? Point to where.",
 "s02-01":"Please read the smallest line you can see.",
 "s02-02":"How many fingers?",
 "s02-03":"Can you see this?",
 "s02-04":"Tell me if you see the light move.",
 "s02-05":"Look at my nose.",
 "s02-06":"Do you see two of me?",
 "s02-07":"Is it worse looking this way?",
 "s03-01":"Look at my finger. Don't move your head.",
 "s03-02":"Look up.",
 "s03-03":"Look down.",
 "s03-04":"Look left.",
 "s03-05":"Look right.",
 "s03-06":"Look far away.",
 "s04-01":"Are you allergic to any medications?",
 "s04-02":"I'm going to put drops in your eye.",
 "s04-03":"Please look up.",
 "s04-04":"This is an analgesic for your eyes. It may sting for a few seconds.",
 "s04-05":"This drop will dilate your pupils.",
 "s04-06":"Your vision will be blurry for about 6 hours.",
 "s04-07":"Please close your eyes.",
 "s04-08":"Don't rub your eyes.",
 "s05-01":"Chin on the rest.",
 "s05-02":"Forehead against the bar.",
 "s05-03":"Don't pull your head back.",
 "s05-04":"The light is bright. Please bear with it.",
 "s05-05":"Look at my ear.",
 "s05-06":"I'm going to touch your eyelid.",
 "s05-07":"Almost done.",
 "s06-01":"The exam is finished. Thank you.",
 "s06-02":"We will use an interpreter to explain the results.",
}

DIP_EN = "If you see two — how are they arranged? Point."
DIP_LABELS = ["Single", "Side by side", "One above"]

# --------------------------------------------------------------- MANDARIN ---
ZH = {
 "s01-01":("我是医生，我来检查您的眼睛。","我是醫生，我來檢查您的眼睛。","Wǒ shì yīshēng, wǒ lái jiǎnchá nín de yǎnjīng."),
 "s01-02":("请坐这里。","請坐這裡。","Qǐng zuò zhèlǐ."),
 "s01-03":("请把眼镜摘下来。","請把眼鏡摘下來。","Qǐng bǎ yǎnjìng zhāi xiàlái."),
 "s01-04":("痛吗？哪里痛？请指一下。","痛嗎？哪裡痛？請指一下。","Tòng ma? Nǎlǐ tòng? Qǐng zhǐ yíxià."),
 "s02-01":("请念您能看到的最小的一行。","請念您能看到的最小的一行。","Qǐng niàn nín néng kàndào de zuì xiǎo de yì háng."),
 "s02-02":("几根手指？","幾根手指？","Jǐ gēn shǒuzhǐ?"),
 "s02-03":("看得见吗？","看得見嗎？","Kàn de jiàn ma?"),
 "s02-04":("看到光移动请告诉我。","看到光移動請告訴我。","Kàndào guāng yídòng qǐng gàosu wǒ."),
 "s02-05":("请看我的鼻子。","請看我的鼻子。","Qǐng kàn wǒ de bízi."),
 "s02-06":("您看到两个我吗？","您看到兩個我嗎？","Nín kàndào liǎng ge wǒ ma?"),
 "s02-07":("看这个方向更严重吗？","看這個方向更嚴重嗎？","Kàn zhège fāngxiàng gèng yánzhòng ma?"),
 "s03-01":("请看我的手指，头不要动。","請看我的手指，頭不要動。","Qǐng kàn wǒ de shǒuzhǐ, tóu búyào dòng."),
 "s03-02":("往上看。","往上看。","Wǎng shàng kàn."),
 "s03-03":("往下看。","往下看。","Wǎng xià kàn."),
 "s03-04":("往左看。","往左看。","Wǎng zuǒ kàn."),
 "s03-05":("往右看。","往右看。","Wǎng yòu kàn."),
 "s03-06":("看远处。","看遠處。","Kàn yuǎnchù."),
 "s04-01":("您对药物过敏吗？","您對藥物過敏嗎？","Nín duì yàowù guòmǐn ma?"),
 "s04-02":("我要给您点眼药水。","我要給您點眼藥水。","Wǒ yào gěi nín diǎn yǎnyàoshuǐ."),
 "s04-03":("请往上看。","請往上看。","Qǐng wǎng shàng kàn."),
 "s04-04":("这是眼睛的麻药，可能会刺痛几秒钟。","這是眼睛的麻藥，可能會刺痛幾秒鐘。","Zhè shì yǎnjīng de máyào, kěnéng huì cìtòng jǐ miǎozhōng."),
 "s04-05":("这是散瞳药水。","這是散瞳藥水。","Zhè shì sàntóng yàoshuǐ."),
 "s04-06":("您的视力会模糊大约六个小时。","您的視力會模糊大約六個小時。","Nín de shìlì huì móhu dàyuē liù ge xiǎoshí."),
 "s04-07":("请闭上眼睛。","請閉上眼睛。","Qǐng bì shàng yǎnjīng."),
 "s04-08":("不要揉眼睛。","不要揉眼睛。","Búyào róu yǎnjīng."),
 "s05-01":("下巴放在这里。","下巴放在這裡。","Xiàba fàng zài zhèlǐ."),
 "s05-02":("额头靠着这里。","額頭靠著這裡。","Étóu kàozhe zhèlǐ."),
 "s05-03":("头不要往后退。","頭不要往後退。","Tóu búyào wǎng hòu tuì."),
 "s05-04":("灯会很亮，请忍一下。","燈會很亮，請忍一下。","Dēng huì hěn liàng, qǐng rěn yíxià."),
 "s05-05":("请看我的耳朵。","請看我的耳朵。","Qǐng kàn wǒ de ěrduo."),
 "s05-06":("我要碰一下您的眼皮。","我要碰一下您的眼皮。","Wǒ yào pèng yíxià nín de yǎnpí."),
 "s05-07":("快好了。","快好了。","Kuài hǎo le."),
 "s06-01":("检查完了，谢谢您。","檢查完了，謝謝您。","Jiǎnchá wán le, xièxie nín."),
 "s06-02":("我们会用翻译跟您解释检查结果。","我們會用翻譯跟您解釋檢查結果。","Wǒmen huì yòng fānyì gēn nín jiěshì jiǎnchá jiéguǒ."),
}
ZH_DIP = ("如果看到两个，是怎么排的？请指一下。","如果看到兩個，是怎麼排的？請指一下。")
ZH_DIP_OPTS = [("一个","一個"),("左右","左右"),("上下","上下")]

# -------------------------------------------------------------- CANTONESE ---
YUE = {
 "s01-01":("我係醫生，我幫你檢查對眼。","Ngo5 hai6 ji1sang1, ngo5 bong1 nei5 gim2caa4 deoi3 ngaan5."),
 "s01-02":("請坐喺呢度。","Cing2 co5 hai2 ni1dou6."),
 "s01-03":("請除低眼鏡。","Cing2 ceoi4dai1 ngaan5geng2."),
 "s01-04":("痛唔痛？邊度痛？指俾我睇。","Tung3 m4 tung3? Bin1dou6 tung3? Zi2 bei2 ngo5 tai2."),
 "s02-01":("請讀你睇到最細嗰行。","Cing2 duk6 nei5 tai2dou2 zeoi3 sai3 go2 hong4."),
 "s02-02":("幾多隻手指？","Gei2do1 zek3 sau2zi2?"),
 "s02-03":("睇唔睇到？","Tai2 m4 tai2dou2?"),
 "s02-04":("見到光郁請話我知。","Gin3dou2 gwong1 juk1 cing2 waa6 ngo5 zi1."),
 "s02-05":("望住我個鼻。","Mong6zyu6 ngo5 go3 bei6."),
 "s02-06":("你係咪見到兩個我？","Nei5 hai6mai6 gin3dou2 loeng5 go3 ngo5?"),
 "s02-07":("望呢邊會唔會嚴重啲？","Mong6 ni1bin1 wui5 m4 wui5 jim4zung6 di1?"),
 "s03-01":("望住我隻手指，唔好郁個頭。","Mong6zyu6 ngo5 zek3 sau2zi2, m4hou2 juk1 go3 tau4."),
 "s03-02":("望上。","Mong6 soeng6."),
 "s03-03":("望落。","Mong6 lok6."),
 "s03-04":("望左。","Mong6 zo2."),
 "s03-05":("望右。","Mong6 jau6."),
 "s03-06":("望遠啲。","Mong6 jyun5 di1."),
 "s04-01":("你有冇藥物敏感？","Nei5 jau5mou5 joek6mat6 man5gam2?"),
 "s04-02":("我要幫你滴眼藥水。","Ngo5 jiu3 bong1 nei5 dik6 ngaan5joek6seoi2."),
 "s04-03":("請望上。","Cing2 mong6 soeng6."),
 "s04-04":("呢啲係眼嘅麻藥，可能會刺痛幾秒。","Ni1di1 hai6 ngaan5 ge3 maa4joek6, ho2nang4 wui5 ci3tung3 gei2 miu5."),
 "s04-05":("呢啲係散瞳藥水。","Ni1di1 hai6 saan3tung4 joek6seoi2."),
 "s04-06":("你嘅視力會矇大概六個鐘。","Nei5 ge3 si6lik6 wui5 mung4 daai6koi3 luk6 go3 zung1."),
 "s04-07":("請閉埋眼。","Cing2 bai3maai4 ngaan5."),
 "s04-08":("唔好捽眼。","M4hou2 zeot1 ngaan5."),
 "s05-01":("下巴放喺呢度。","Haa6baa1 fong3 hai2 ni1dou6."),
 "s05-02":("額頭貼住呢度。","Ngaak6tau4 tip3zyu6 ni1dou6."),
 "s05-03":("個頭唔好向後退。","Go3 tau4 m4hou2 hoeng3 hau6 teoi3."),
 "s05-04":("個燈好光，請忍一忍。","Go3 dang1 hou2 gwong1, cing2 jan2 jat1 jan2."),
 "s05-05":("望住我隻耳仔。","Mong6zyu6 ngo5 zek3 ji5zai2."),
 "s05-06":("我要掂一掂你嘅眼皮。","Ngo5 jiu3 dim6 jat1 dim6 nei5 ge3 ngaan5pei4."),
 "s05-07":("就快好喇。","Zau6 faai3 hou2 laa3."),
 "s06-01":("檢查完喇，多謝。","Gim2caa4 jyun4 laa3, do1ze6."),
 "s06-02":("我哋會搵翻譯同你解釋結果。","Ngo5dei6 wui5 wan2 faan1jik6 tung4 nei5 gaai2sik1 git3gwo2."),
}
YUE_DIP = ("如果見到兩個，係點樣排？指俾我睇。", "Jyu4gwo2 gin3dou2 loeng5 go3, hai6 dim2joeng2 paai4? Zi2 bei2 ngo5 tai2.")
YUE_DIP_OPTS = [("一個","Jat1 go3"),("左右","Zo2 jau6"),("上下","Soeng6 haa6")]

# ---------------------------------------------------------------- PUNJABI ---
PA = {
 "s01-01":("ਮੈਂ ਡਾਕਟਰ ਹਾਂ, ਮੈਂ ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਦੀ ਜਾਂਚ ਕਰਾਂਗਾ।","Main daktar haan, main tuhadian akhan di janch karanga."),
 "s01-02":("ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ।","Kirpa karke ithe baitho."),
 "s01-03":("ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਉਤਾਰੋ।","Kirpa karke ainak utaro."),
 "s01-04":("ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ।","Dard hai? Kithe? Ishara karo."),
 "s02-01":("ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ।","Jo sabh ton chhoti line disdi hai oh parho."),
 "s02-02":("ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ?","Kinnian unglan?"),
 "s02-03":("ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ?","Ki ih disda hai?"),
 "s02-04":("ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ।","Je raushni hildi dise tan dasso."),
 "s02-05":("ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ।","Mere nakk vall dekho."),
 "s02-06":("ਕੀ ਤੁਹਾਨੂੰ ਮੈਂ ਦੋ ਦਿਸਦਾ ਹਾਂ?","Ki tuhanu main do disda haan?"),
 "s02-07":("ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ?","Is pase dekhan te vadh hunda hai?"),
 "s03-01":("ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ।","Meri ungal vall dekho. Sir na hilao."),
 "s03-02":("ਉੱਪਰ ਦੇਖੋ।","Uppar dekho."),
 "s03-03":("ਹੇਠਾਂ ਦੇਖੋ।","Hethan dekho."),
 "s03-04":("ਖੱਬੇ ਦੇਖੋ।","Khabbe dekho."),
 "s03-05":("ਸੱਜੇ ਦੇਖੋ।","Sajje dekho."),
 "s03-06":("ਦੂਰ ਦੇਖੋ।","Dur dekho."),
 "s04-01":("ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ?","Ki tuhanu kise davai ton allergy hai?"),
 "s04-02":("ਮੈਂ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਵਾਂਗਾ।","Main tuhadi akh vich boondan pavanga."),
 "s04-03":("ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ।","Kirpa karke uppar dekho."),
 "s04-04":("ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ।","Ih akh sunn karan vali davai hai. Kujh sakint chubh sakdi hai."),
 "s04-05":("ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ।","Ih boond putli kholh devegi."),
 "s04-06":("ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ।","Nazar lagbhag chhe ghante dhundli rahegi."),
 "s04-07":("ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ।","Kirpa karke akhan band karo."),
 "s04-08":("ਅੱਖਾਂ ਨਾ ਮਲੋ।","Akhan na malo."),
 "s05-01":("ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ।","Thodi ithe rakho."),
 "s05-02":("ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ।","Mattha is patti nal lagao."),
 "s05-03":("ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ।","Sir pichhe na karo."),
 "s05-04":("ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ।","Raushni tez hai. Thorha bardasht karo."),
 "s05-05":("ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ।","Mere kann vall dekho."),
 "s05-06":("ਮੈਂ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਾਂਗਾ।","Main tuhadi palak nu chhuhanga."),
 "s05-07":("ਲਗਭਗ ਹੋ ਗਿਆ।","Lagbhag ho gia."),
 "s06-01":("ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ।","Janch puri ho gai. Dhanvaad."),
 "s06-02":("ਅਸੀਂ ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ।","Asin natije samjhaun lai dubhashiye di varton karange."),
}
PA_DIP = ("ਜੇ ਦੋ ਦਿਸਦੇ ਹਨ, ਕਿਵੇਂ ਹਨ? ਇਸ਼ਾਰਾ ਕਰੋ।","Je do disde han, kiven han? Ishara karo.")
PA_DIP_OPTS = [("ਇੱਕ","Ikk"),("ਨਾਲ-ਨਾਲ","Nal-nal"),("ਉੱਪਰ-ਹੇਠਾਂ","Uppar-hethan")]

# ------------------------------------------------------------------ FARSI ---
FA = {
 "s01-01":("من دکتر هستم، چشم‌های شما را معاینه می‌کنم.","Man doktor hastam, cheshm-hâye shomâ râ mo'âyene mikonam."),
 "s01-02":("لطفاً اینجا بنشینید.","Lotfan injâ beneshinid."),
 "s01-03":("لطفاً عینک خود را بردارید.","Lotfan eynak-e khod râ bardârid."),
 "s01-04":("درد دارید؟ کجا؟ اشاره کنید.","Dard dârid? Kojâ? Eshâre konid."),
 "s02-01":("کوچک‌ترین خطی که می‌بینید بخوانید.","Kuchaktarin khatti ke mibinid bekhânid."),
 "s02-02":("چند انگشت؟","Chand angosht?"),
 "s02-03":("این را می‌بینید؟","In râ mibinid?"),
 "s02-04":("اگر نور حرکت کرد به من بگویید.","Agar nur harekat kard be man beguyid."),
 "s02-05":("به بینی من نگاه کنید.","Be bini-ye man negâh konid."),
 "s02-06":("آیا مرا دوتا می‌بینید؟","Âyâ marâ do tâ mibinid?"),
 "s02-07":("وقتی به این طرف نگاه می‌کنید بدتر است؟","Vaqti be in taraf negâh mikonid badtar ast?"),
 "s03-01":("به انگشت من نگاه کنید. سرتان را تکان ندهید.","Be angosht-e man negâh konid. Saretân râ tekân nadahid."),
 "s03-02":("به بالا نگاه کنید.","Be bâlâ negâh konid."),
 "s03-03":("به پایین نگاه کنید.","Be pâin negâh konid."),
 "s03-04":("به چپ نگاه کنید.","Be chap negâh konid."),
 "s03-05":("به راست نگاه کنید.","Be râst negâh konid."),
 "s03-06":("به دور نگاه کنید.","Be dur negâh konid."),
 "s04-01":("به دارویی حساسیت دارید؟","Be dâruyi hassâsiyat dârid?"),
 "s04-02":("در چشم شما قطره می‌ریزم.","Dar cheshm-e shomâ qatre mirizam."),
 "s04-03":("لطفاً به بالا نگاه کنید.","Lotfan be bâlâ negâh konid."),
 "s04-04":("این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد.","In qatre bihessi-ye cheshm ast. Momken ast chand sâniye besuzad."),
 "s04-05":("این قطره مردمک را گشاد می‌کند.","In qatre mardomak râ goshâd mikonad."),
 "s04-06":("دید شما حدود شش ساعت تار خواهد بود.","Did-e shomâ hodud-e shesh sâ'at târ khâhad bud."),
 "s04-07":("لطفاً چشمانتان را ببندید.","Lotfan cheshmânetân râ bebandid."),
 "s04-08":("چشمانتان را نمالید.","Cheshmânetân râ namâlid."),
 "s05-01":("چانه را اینجا بگذارید.","Châne râ injâ bogzârid."),
 "s05-02":("پیشانی را به این میله تکیه دهید.","Pishâni râ be in mile tekye dahid."),
 "s05-03":("سرتان را عقب نکشید.","Saretân râ aqab nakeshid."),
 "s05-04":("نور تند است. کمی تحمل کنید.","Nur tond ast. Kami tahammol konid."),
 "s05-05":("به گوش من نگاه کنید.","Be gush-e man negâh konid."),
 "s05-06":("پلک شما را لمس می‌کنم.","Pelk-e shomâ râ lams mikonam."),
 "s05-07":("تقریباً تمام شد.","Taqriban tamâm shod."),
 "s06-01":("معاینه تمام شد. متشکرم.","Mo'âyene tamâm shod. Moteshakkeram."),
 "s06-02":("برای توضیح نتایج از مترجم استفاده می‌کنیم.","Barâye towzih-e natâyej az motarjem estefâde mikonim."),
}
FA_DIP = ("اگر دوتا می‌بینید، چگونه قرار دارند؟ اشاره کنید.","Agar do tâ mibinid, chegune qarâr dârand? Eshâre konid.")
FA_DIP_OPTS = [("یکی","Yeki"),("کنار هم","Kenâr-e ham"),("بالا و پایین","Bâlâ o pâin")]

# ----------------------------------------------------------------- ARABIC ---
AR = {
 "s01-01":("أنا الطبيب، سأفحص عينيك.","Anâ at-tabîb, sa-afhas 'aynayk."),
 "s01-02":("من فضلك اجلس هنا.","Min fadlik ijlis hunâ."),
 "s01-03":("من فضلك اخلع نظارتك.","Min fadlik ikhla' nazzâratak."),
 "s01-04":("هل تشعر بألم؟ أشر إلى مكانه.","Hal tash'ur bi-alam? Ashir ilâ makânih."),
 "s02-01":("اقرأ أصغر سطر تراه.","Iqra' asghar satr tarâh."),
 "s02-02":("كم إصبعاً؟","Kam isba'an?"),
 "s02-03":("هل ترى هذا؟","Hal tarâ hâdhâ?"),
 "s02-04":("أخبرني إذا رأيت الضوء يتحرك.","Akhbirnî idhâ ra'ayta ad-daw' yataharrak."),
 "s02-05":("انظر إلى أنفي.","Unzur ilâ anfî."),
 "s02-06":("هل ترانِي اثنين؟","Hal tarânî ithnayn?"),
 "s02-07":("هل يزداد سوءاً عند النظر هكذا؟","Hal yazdâd sû'an 'inda an-nazar hâkadhâ?"),
 "s03-01":("انظر إلى إصبعي. لا تحرك رأسك.","Unzur ilâ isba'î. Lâ tuharrik ra'sak."),
 "s03-02":("انظر إلى الأعلى.","Unzur ilâ al-a'lâ."),
 "s03-03":("انظر إلى الأسفل.","Unzur ilâ al-asfal."),
 "s03-04":("انظر إلى اليسار.","Unzur ilâ al-yasâr."),
 "s03-05":("انظر إلى اليمين.","Unzur ilâ al-yamîn."),
 "s03-06":("انظر إلى البعيد.","Unzur ilâ al-ba'îd."),
 "s04-01":("هل لديك حساسية من أي دواء؟","Hal ladayk hassâsiya min ayy dawâ'?"),
 "s04-02":("سأضع قطرة في عينك.","Sa-ada' qatra fî 'aynak."),
 "s04-03":("من فضلك انظر إلى الأعلى.","Min fadlik unzur ilâ al-a'lâ."),
 "s04-04":("هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ.","Hâdhihi qatra mukhaddira lil-'ayn. Qad tusabbib wakhzan li-bid' thawân."),
 "s04-05":("هذه القطرة توسع حدقة العين.","Hâdhihi al-qatra tuwassi' hadaqat al-'ayn."),
 "s04-06":("ستكون رؤيتك ضبابية نحو ست ساعات.","Satakûn ru'yatak dabâbiya nahwa sitt sâ'ât."),
 "s04-07":("من فضلك أغمض عينيك.","Min fadlik aghmid 'aynayk."),
 "s04-08":("لا تفرك عينيك.","Lâ tafruk 'aynayk."),
 "s05-01":("ضع ذقنك هنا.","Da' dhaqnak hunâ."),
 "s05-02":("ألصق جبهتك بهذا الشريط.","Alsiq jabhatak bi-hâdhâ ash-sharît."),
 "s05-03":("لا تسحب رأسك للخلف.","Lâ tashab ra'sak lil-khalf."),
 "s05-04":("الضوء ساطع. تحمل قليلاً.","Ad-daw' sâti'. Tahammal qalîlan."),
 "s05-05":("انظر إلى أذني.","Unzur ilâ udhnî."),
 "s05-06":("سألمس جفنك.","Sa-almus jafnak."),
 "s05-07":("أوشكنا على الانتهاء.","Awshaknâ 'alâ al-intihâ'."),
 "s06-01":("انتهى الفحص. شكراً لك.","Intahâ al-fahs. Shukran lak."),
 "s06-02":("سنستعين بمترجم لشرح النتائج.","Sanasta'în bi-mutarjim li-sharh an-natâ'ij."),
}
AR_DIP = ("إذا رأيت اثنين، كيف يظهران؟ أشر.","Idhâ ra'ayta ithnayn, kayfa yazharân? Ashir.")
AR_DIP_OPTS = [("واحد","Wâhid"),("جنباً إلى جنب","Janban ilâ janb"),("واحد فوق الآخر","Wâhid fawq al-âkhar")]

# ----------------------------------------------------------------- KOREAN ---
KO = {
 "s01-01":("저는 의사입니다. 눈을 검사하겠습니다.","Jeoneun uisaimnida. Nuneul geomsahagesseumnida."),
 "s01-02":("여기 앉으세요.","Yeogi anjeuseyo."),
 "s01-03":("안경을 벗어 주세요.","Angyeongeul beoseo juseyo."),
 "s01-04":("아프세요? 어디가 아픈지 가리켜 주세요.","Apeuseyo? Eodiga apeunji garikyeo juseyo."),
 "s02-01":("보이는 가장 작은 줄을 읽어 주세요.","Boineun gajang jageun jureul ilgeo juseyo."),
 "s02-02":("손가락 몇 개예요?","Songarak myeot gaeyeyo?"),
 "s02-03":("이게 보이세요?","Ige boiseyo?"),
 "s02-04":("빛이 움직이면 말씀해 주세요.","Bichi umjigimyeon malsseumhae juseyo."),
 "s02-05":("제 코를 보세요.","Je koreul boseyo."),
 "s02-06":("제가 두 명으로 보이세요?","Jega du myeongeuro boiseyo?"),
 "s02-07":("이쪽을 볼 때 더 심한가요?","Ijjogeul bol ttae deo simhangayo?"),
 "s03-01":("제 손가락을 보세요. 고개를 움직이지 마세요.","Je songarageul boseyo. Gogaereul umjigiji maseyo."),
 "s03-02":("위를 보세요.","Wireul boseyo."),
 "s03-03":("아래를 보세요.","Araereul boseyo."),
 "s03-04":("왼쪽을 보세요.","Oenjjogeul boseyo."),
 "s03-05":("오른쪽을 보세요.","Oreunjjogeul boseyo."),
 "s03-06":("멀리 보세요.","Meolli boseyo."),
 "s04-01":("약물 알레르기가 있으세요?","Yangmul allereugiga isseuseyo?"),
 "s04-02":("눈에 안약을 넣겠습니다.","Nune anyageul neokgesseumnida."),
 "s04-03":("위를 봐 주세요.","Wireul bwa juseyo."),
 "s04-04":("눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다.","Nun machwiyagimnida. Myeot cho dongan ttakkeumhal su itseumnida."),
 "s04-05":("이 안약은 동공을 확장시킵니다.","I anyageun donggongeul hwakjangsikimnida."),
 "s04-06":("약 6시간 동안 시야가 흐려집니다.","Yak yuksigan dongan siyaga heuryeojimnida."),
 "s04-07":("눈을 감아 주세요.","Nuneul gama juseyo."),
 "s04-08":("눈을 비비지 마세요.","Nuneul bibiji maseyo."),
 "s05-01":("턱을 여기에 대세요.","Teogeul yeogie daeseyo."),
 "s05-02":("이마를 여기에 대세요.","Imareul yeogie daeseyo."),
 "s05-03":("머리를 뒤로 빼지 마세요.","Meorireul dwiro ppaeji maseyo."),
 "s05-04":("빛이 밝습니다. 조금만 참아 주세요.","Bichi balkseumnida. Jogeumman chama juseyo."),
 "s05-05":("제 귀를 보세요.","Je gwireul boseyo."),
 "s05-06":("눈꺼풀을 만지겠습니다.","Nunkkeopureul manjigesseumnida."),
 "s05-07":("거의 다 됐습니다.","Geoui da dwaesseumnida."),
 "s06-01":("검사가 끝났습니다. 감사합니다.","Geomsaga kkeutnatseumnida. Gamsahamnida."),
 "s06-02":("통역사를 통해 결과를 설명해 드리겠습니다.","Tongyeoksareul tonghae gyeolgwareul seolmyeonghae deurigesseumnida."),
}
KO_DIP = ("두 개로 보이면 어떻게 보이나요? 가리켜 주세요.","Du gaero boimyeon eotteoke boinayo? Garikyeo juseyo.")
KO_DIP_OPTS = [("하나","Hana"),("좌우","Jwau"),("위아래","Wiarae")]

# --------------------------------------------------------------- JAPANESE ---
JA = {
 "s01-01":("医師です。目を診察します。","Ishi desu. Me o shinsatsu shimasu."),
 "s01-02":("ここに座ってください。","Koko ni suwatte kudasai."),
 "s01-03":("眼鏡を外してください。","Megane o hazushite kudasai."),
 "s01-04":("痛みますか？どこか指さしてください。","Itamimasu ka? Doko ka yubisashite kudasai."),
 "s02-01":("見える一番小さい行を読んでください。","Mieru ichiban chiisai gyō o yonde kudasai."),
 "s02-02":("指は何本ですか？","Yubi wa nanbon desu ka?"),
 "s02-03":("これが見えますか？","Kore ga miemasu ka?"),
 "s02-04":("光が動いたら教えてください。","Hikari ga ugoitara oshiete kudasai."),
 "s02-05":("私の鼻を見てください。","Watashi no hana o mite kudasai."),
 "s02-06":("私が二人に見えますか？","Watashi ga futari ni miemasu ka?"),
 "s02-07":("こちらを見るとひどくなりますか？","Kochira o miru to hidoku narimasu ka?"),
 "s03-01":("私の指を見てください。頭は動かさないでください。","Watashi no yubi o mite kudasai. Atama wa ugokasanaide kudasai."),
 "s03-02":("上を見てください。","Ue o mite kudasai."),
 "s03-03":("下を見てください。","Shita o mite kudasai."),
 "s03-04":("左を見てください。","Hidari o mite kudasai."),
 "s03-05":("右を見てください。","Migi o mite kudasai."),
 "s03-06":("遠くを見てください。","Tōku o mite kudasai."),
 "s04-01":("薬のアレルギーはありますか？","Kusuri no arerugī wa arimasu ka?"),
 "s04-02":("目薬をさします。","Megusuri o sashimasu."),
 "s04-03":("上を見てください。","Ue o mite kudasai."),
 "s04-04":("目の麻酔薬です。数秒しみることがあります。","Me no masuiyaku desu. Sūbyō shimiru koto ga arimasu."),
 "s04-05":("この目薬は瞳孔を広げます。","Kono megusuri wa dōkō o hirogemasu."),
 "s04-06":("約6時間、見えにくくなります。","Yaku rokujikan, mienikuku narimasu."),
 "s04-07":("目を閉じてください。","Me o tojite kudasai."),
 "s04-08":("目をこすらないでください。","Me o kosuranaide kudasai."),
 "s05-01":("顎をここに乗せてください。","Ago o koko ni nosete kudasai."),
 "s05-02":("額をここにつけてください。","Hitai o koko ni tsukete kudasai."),
 "s05-03":("頭を後ろに引かないでください。","Atama o ushiro ni hikanaide kudasai."),
 "s05-04":("光が眩しいです。少し我慢してください。","Hikari ga mabushii desu. Sukoshi gaman shite kudasai."),
 "s05-05":("私の耳を見てください。","Watashi no mimi o mite kudasai."),
 "s05-06":("まぶたに触ります。","Mabuta ni sawarimasu."),
 "s05-07":("もうすぐ終わります。","Mōsugu owarimasu."),
 "s06-01":("診察は終わりです。ありがとうございました。","Shinsatsu wa owari desu. Arigatō gozaimashita."),
 "s06-02":("結果は通訳を通して説明します。","Kekka wa tsūyaku o tōshite setsumei shimasu."),
}
JA_DIP = ("二つ見える場合、どのように並んでいますか？指さしてください。","Futatsu mieru baai, dono yō ni narande imasu ka? Yubisashite kudasai.")
JA_DIP_OPTS = [("一つ","Hitotsu"),("左右","Sayū"),("上下","Jōge")]

# ------------------------------------------------------------- VIETNAMESE ---
VI = {
 "s01-01":("Tôi là bác sĩ, tôi sẽ khám mắt cho ông/bà.",""),
 "s01-02":("Xin mời ngồi đây.",""),
 "s01-03":("Xin tháo kính ra.",""),
 "s01-04":("Có đau không? Xin chỉ chỗ đau.",""),
 "s02-01":("Xin đọc dòng nhỏ nhất mà ông/bà nhìn thấy.",""),
 "s02-02":("Mấy ngón tay?",""),
 "s02-03":("Ông/bà có thấy cái này không?",""),
 "s02-04":("Nếu thấy ánh sáng di chuyển, xin cho tôi biết.",""),
 "s02-05":("Xin nhìn vào mũi tôi.",""),
 "s02-06":("Ông/bà có thấy hai người tôi không?",""),
 "s02-07":("Nhìn về hướng này có nặng hơn không?",""),
 "s03-01":("Xin nhìn ngón tay tôi. Đừng quay đầu.",""),
 "s03-02":("Nhìn lên.",""),
 "s03-03":("Nhìn xuống.",""),
 "s03-04":("Nhìn sang trái.",""),
 "s03-05":("Nhìn sang phải.",""),
 "s03-06":("Nhìn ra xa.",""),
 "s04-01":("Ông/bà có dị ứng thuốc nào không?",""),
 "s04-02":("Tôi sẽ nhỏ thuốc vào mắt.",""),
 "s04-03":("Xin nhìn lên.",""),
 "s04-04":("Đây là thuốc tê mắt. Có thể xót vài giây.",""),
 "s04-05":("Thuốc này sẽ làm giãn đồng tử.",""),
 "s04-06":("Mắt sẽ mờ khoảng sáu tiếng.",""),
 "s04-07":("Xin nhắm mắt lại.",""),
 "s04-08":("Đừng dụi mắt.",""),
 "s05-01":("Đặt cằm vào đây.",""),
 "s05-02":("Áp trán vào thanh này.",""),
 "s05-03":("Đừng ngả đầu ra sau.",""),
 "s05-04":("Đèn rất sáng. Xin chịu khó một chút.",""),
 "s05-05":("Xin nhìn vào tai tôi.",""),
 "s05-06":("Tôi sẽ chạm vào mí mắt.",""),
 "s05-07":("Sắp xong rồi.",""),
 "s06-01":("Khám xong rồi. Cảm ơn ông/bà.",""),
 "s06-02":("Chúng tôi sẽ nhờ thông dịch viên giải thích kết quả.",""),
}
VI_DIP = ("Nếu thấy hai hình, chúng nằm thế nào? Xin chỉ.","")
VI_DIP_OPTS = [("Một",""),("Cạnh nhau",""),("Trên dưới","")]

# ----------------------------------------------------------------- TAGALOG --
TL = {
 "s01-01":("Doktor po ako, titingnan ko ang inyong mga mata.",""),
 "s01-02":("Maupo po kayo rito.",""),
 "s01-03":("Pakitanggal po ang inyong salamin.",""),
 "s01-04":("Masakit po ba? Ituro po ninyo kung saan.",""),
 "s02-01":("Pakibasa po ang pinakamaliit na linyang nakikita ninyo.",""),
 "s02-02":("Ilang daliri po?",""),
 "s02-03":("Nakikita po ba ninyo ito?",""),
 "s02-04":("Sabihin po ninyo kung gumagalaw ang ilaw.",""),
 "s02-05":("Tingnan po ninyo ang ilong ko.",""),
 "s02-06":("Nakikita po ba ninyo akong dalawa?",""),
 "s02-07":("Mas malala po ba kapag tumitingin sa ganitong direksyon?",""),
 "s03-01":("Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo.",""),
 "s03-02":("Tumingin po sa itaas.",""),
 "s03-03":("Tumingin po sa ibaba.",""),
 "s03-04":("Tumingin po sa kaliwa.",""),
 "s03-05":("Tumingin po sa kanan.",""),
 "s03-06":("Tumingin po sa malayo.",""),
 "s04-01":("May allergy po ba kayo sa kahit anong gamot?",""),
 "s04-02":("Lalagyan ko po ng patak ang mata ninyo.",""),
 "s04-03":("Tumingin po sa itaas.",""),
 "s04-04":("Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo.",""),
 "s04-05":("Palalakihin po nito ang balintataw ninyo.",""),
 "s04-06":("Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras.",""),
 "s04-07":("Ipikit po ninyo ang mga mata.",""),
 "s04-08":("Huwag pong kuskusin ang mata.",""),
 "s05-01":("Ipatong po ang baba dito.",""),
 "s05-02":("Idikit po ang noo sa bar na ito.",""),
 "s05-03":("Huwag pong iurong ang ulo.",""),
 "s05-04":("Maliwanag po ang ilaw. Pasensya po sandali.",""),
 "s05-05":("Tingnan po ninyo ang tainga ko.",""),
 "s05-06":("Hahawakan ko po ang talukap ng mata ninyo.",""),
 "s05-07":("Malapit na pong tapos.",""),
 "s06-01":("Tapos na po ang pagsusuri. Salamat po.",""),
 "s06-02":("Gagamit po tayo ng interpreter para ipaliwanag ang resulta.",""),
}
TL_DIP = ("Kung nakikita ninyong dalawa, paano po nakaayos? Ituro po ninyo.","")
TL_DIP_OPTS = [("Isa",""),("Magkatabi",""),("Magkapatong","")]

DATA = {
    "zh":  (ZH,  ZH_DIP,  ZH_DIP_OPTS),
    "yue": (YUE, YUE_DIP, YUE_DIP_OPTS),
    "pa":  (PA,  PA_DIP,  PA_DIP_OPTS),
    "fa":  (FA,  FA_DIP,  FA_DIP_OPTS),
    "ar":  (AR,  AR_DIP,  AR_DIP_OPTS),
    "ko":  (KO,  KO_DIP,  KO_DIP_OPTS),
    "ja":  (JA,  JA_DIP,  JA_DIP_OPTS),
    "vi":  (VI,  VI_DIP,  VI_DIP_OPTS),
    "tl":  (TL,  TL_DIP,  TL_DIP_OPTS),
}
