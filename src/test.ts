import { extract } from "."

const HomeModel = {
    data: [
        '.tiptip',
        {
            image: 'img => src',
            url: '=> href',
            title: '+ div .al-c',
            summary: '+ div .fs-12 | trim'
        }
    ]
}
let html = `<div id="storyPinked">

<h3>TIÊU ĐIỂM TRUYỆN HÔM NAY</h3>

<article>
        <a href="/21523/beastars" class="tiptip" data-tiptip="tiptip-21523"><img src="https://img.blogtruyen.com/thumb/182_182/manga/21/21523/cover18.jpg" alt=""></a>
        <div class="hidden tiptip-content" id="tiptip-21523">
            <p class="al-c color-lightgreen line-height-15 fs-14 bold">Beastars</p>
            <p class="line-height-15 fs-12">
                    

Truyện đoạt giải thưởng&nbsp;Manga Taisho 2018 (Giải manga mới hay nhất của năm)Beastars là&nbsp;một bộ Slice of Life mang bối cảnh xã hội mới: một xã hội&nbsp;mà tất cả loài vật ăn thịt và ăn cỏ đều sống chung với nhau - dưới phương tiện tăm tối hơn rất nhiều.Bộ truyện theo chân cậu sói xám Legosi, thành...
            </p>
        </div>
        <a href="/16198/munou-na-nana" class="tiptip" data-tiptip="tiptip-16198"><img src="https://img.blogtruyen.com/thumb/182_182/manga/16/16198/cover.jpg" alt=""></a>
        <div class="hidden tiptip-content" id="tiptip-16198">
            <p class="al-c color-lightgreen line-height-15 fs-14 bold">Munou na Nana</p>
            <p class="line-height-15 fs-12">
                    
Cuộc chiến giữa "Con người" và "Kẻ thù của nhân loại"
            </p>
        </div>
        <a href="/9082/fate-kaleid-liner-prisma-illya-3rei-jikan-fs" class="tiptip" data-tiptip="tiptip-9082"><img src="https://img.blogtruyen.com/thumb/182_182/manga/9/9082/014 015 color.jpg" alt=""></a>
        <div class="hidden tiptip-content" id="tiptip-9082">
            <p class="al-c color-lightgreen line-height-15 fs-14 bold">Fate/kaleid liner PRISMA☆ILLYA 3rei!! [Jikan FS]</p>
            <p class="line-height-15 fs-12">
                    
Sau khi hiểu ra được thân phận của Miyu và hạ gục lá bài thứ 8, Miyu lại bị hai kẻ lạ mặt bắt đi. Chuyện gì sẽ xảy ra sau đó? Liệu Illya có cứu được Miyu?
            </p>
        </div>
        <a href="/22331/ookii-kouhai-wa-suki-desu-ka" class="tiptip" data-tiptip="tiptip-22331"><img src="https://img.blogtruyen.com/thumb/182_182/manga/22/22331/picture.jpg" alt=""></a>
        <div class="hidden tiptip-content" id="tiptip-22331">
            <p class="al-c color-lightgreen line-height-15 fs-14 bold">Ookii Kouhai wa Suki Desu ka</p>
            <p class="line-height-15 fs-12">
                    
Một kouhai hết mực cưng chiều senpai của mình? Một câu chuyện tình yêu đầy "Không cân xứng"!!Fanpage:https://www.facebook.com/ja.translations.umu

JA Translations

            </p>
        </div>
        <a href="/23010/ma-vuong-va-dung-si" class="tiptip" data-tiptip="tiptip-23010"><img src="https://img.blogtruyen.com/thumb/182_182/manga/23/23010/capture.PNG" alt=""></a>
        <div class="hidden tiptip-content" id="tiptip-23010">
            <p class="al-c color-lightgreen line-height-15 fs-14 bold">Ma vương và dũng sĩ</p>
            <p class="line-height-15 fs-12">
                    
Đây là một bộ truyện hiếm hoi cung cấp đọc giả các kiến thức về kinh tế học, tiền tệ, nhân chủng học, tâm lý học được lồng ghép một cách thú vị xuyên suốt mạch truyện.Nội dung kể về dũng sĩ loài người, nickname là Anh Hùng solo PK với nữ Ma Vương, nhưng Ma Vương lại đáp trả bằng 1 bài giảng về...
            </p>
        </div>
</article>
</div>`
console.log(extract(html, HomeModel))