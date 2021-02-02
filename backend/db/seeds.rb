# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# ColumnContent.create!(
#   column_id: 3,
#   content_title: '接頭語「in-」= not（否定）',
#   content: '接頭語の「in-」は、「否定（not）」の意味を表す。「incapable」は、「in-」に、「つかむ（take）」を意味する語根である「cap」と、「〜できる（able）」を意味する形容詞接尾語である「-able」が結合して「つかむことができない → 能力がない」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 3,
#   content_title: '接頭語「un-」= not（〜ではない）',
#   content: '接頭語の「un-」は、「〜ではない（not）」の意味を表す。「untouchable」は、「un-」に、「触れる」を意味する単語である「touch」と、「able（〜できる）」を意味する形容詞接尾語である「-able」が結合して「触れることができない → 触れてはならない」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 3,
#   content_title: '接頭語「dis-」= away（離れて）',
#   content: '接頭語の「dis-」は、「離れて（away）」という意味を表す。「distant」は、「dis-」に、「立つ（stand）」を意味する語根である「sta」と、形容詞接尾語で「〜な」を意味する「ant」が結合して「離れて立つような → 離れた」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 3,
#   content_title: '接頭語「pre-」= before（前に）',
#   content: '接頭語の「pre-」は、「前に（before）」の意味を表す。「predict」は、「pre-」に、「言う（say）」を意味する語根である「dict」が結合して「前もって言う → 予測する」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 3,
#   content_title: '接頭語「ex-」= out（外に）',
#   content: '接頭語の「ex-」は、「外に（out）」という意味を表す。「exclude」は、「ex-」に、「閉じる（shut）」を意味する語根である「clude」が結合して「外に出して閉じる → 〜を除く」という意味になった。',
# )

# Column.create!(
#   column_name: '超基本接尾辞',
#   info: '超基本的な接尾辞が収録されています。単語初心者は学習前にぜひ一読',
# )
# ColumnContent.create!(
#   column_id: 4,
#   content_title: '接尾語「-ful」= full（〜に満ちた）',
#   content: '接尾語の「-ful」は、「〜に満ちた（full）」という意味を表す。「careful」は、「care（注意）」を意味する単語に「-ful」が結合して「注意に満ちた → 注意深い」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 4,
#   content_title: '接尾語「-able」= able（〜できる）',
#   content: '接尾語の「-able」は、「〜できる（able）」という意味を表す。「capable」は、「つかむ（take）」を意味する語根である「cap」に「-able」が結合して「つかむことができる → 能力がある」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 4,
#   content_title: '接頭語「-ist」= 人',
#   content: '接尾語の「-ist」は、「人」の意味を表す。「specialist」は、「特別な（especial）」を意味する語根である「special」と、「人」を意味する「-ist」が結合して「専門家」という意味になった。',
# )
# ColumnContent.create!(
#   column_id: 4,
#   content_title: '接頭語「-ology」= 学問',
#   content: '接尾語の「-ology」は、「学問」の意味を表す。「psychology」は、「心（psycho）」を意味する語根である「psycho」と、「学問」を意味する「-ology」が結合して「心理学」という意味になった。',
# )

Column.create!(
  column_name: '英単語の基本語源その1',
  info: '覚えておくと良い基本的な語源を収録しています。',
)
ColumnContent.create!(
  column_id: 5,
  content_title: '接尾語「-able」= able（〜できる）',
  content: '語根の「port」は、「運ぶ（carry）」という意味のラテン語「portare」が由来。「import」は、「中に（in, into）」の意味の接頭語である「im = in」と「port」が結合して「輸入する」という意味になった。',
)
ColumnContent.create!(
  column_id: 5,
  content_title: '語根「form」= form（形づくる）',
  content: '語根の「form」は、「形づくる（form）」という意味のラテン語「formare」が由来。「reform」は、「再び（again）」の意味の接頭語である「re-」と「form」が結合して「改良する」という意味になった。',
)
ColumnContent.create!(
  column_id: 5,
  content_title: '語根「vis」= see（見る）',
  content: '語根の「vis」は、「見る（see）」という意味のラテン語「videre」が由来。「televison」は、「遠く（far）」の意味の接頭語である「tele-」と「vis」、そして「もの」を意味する名詞接尾語である「-ion」が結合して「テレビ(放送)」という意味になった。',
)
ColumnContent.create!(
  column_id: 5,
  content_title: '語根「sta, st」= stand（立つ）',
  content: '語根の「sta, st」は、「立つ（stand）」という意味のラテン語「stare」が由来。「stable」は、「sta」と「〜できる」の意味の接尾語である「-able」が結合して「立つことができる → 安定した」という意味になった。',
)
ColumnContent.create!(
  column_id: 5,
  content_title: '語根「ject」= throw（投げる）',
  content: '語根の「ject」は、「投げる（throw）」という意味のラテン語「jacere」が由来。「project」は、「前へ（forward）」の意味の接頭語である「pro-」と「ject」が結合して「前へ投げる → 計画」という意味になった。',
)


Column.create!(
  column_name: '英単語の基本語源その2',
  info: '覚えておくと良い基本的な語源を収録しています。',
)
ColumnContent.create!(
  column_id: 6,
  content_title: '語根「spect」= look（見る）',
  content: '語根の「spect」は、「見る（look）」という意味のラテン語「specere」が由来。「suspect」は、「〜の下（under）」の意味の接頭語である「sus- = sub-」と「spect」が結合して「下から見る → 疑う」という意味になった。',
)
ColumnContent.create!(
  column_id: 6,
  content_title: '語根「mit」= send（送る）',
  content: '語根の「mit」は、「送る（send）」という意味のラテン語「mittere」が由来。「transmit」は、「〜の向こうに（across）」の意味の接頭語である「trans-」と「mit」が結合して「向こうに送る → 伝える」という意味になった。',
)
ColumnContent.create!(
  column_id: 6,
  content_title: '語根「tain」= hold（保つ）',
  content: '語根の「tain」は、「保つ（hold）」という意味のラテン語「tenere」が由来。「contain」は、「共に（together）」の意味の接頭語である「con- = com-」と「tain」が結合して「共に保つ → 含む」という意味になった。',
)
ColumnContent.create!(
  column_id: 6,
  content_title: '語根「duct」= lead（導く）',
  content: '語根の「duct」は、「導く（lead）」という意味のラテン語「ducere」が由来。「introduction」は、「中に（inward）」の意味の接頭語である「intro-」と「duct」、そして「こと」を意味する名詞接尾語である「-ion」が結合して「中に導くこと → 紹介」という意味になった。',
)
ColumnContent.create!(
  column_id: 6,
  content_title: '語根「press」= press（押す）',
  content: '語根の「press」は、「押す（press）」という意味のラテン語「pressare」が由来。「express」は、「外に（out）」の意味の接頭語である「ex-」と「press」が結合して「外に押し出す → 表現する」という意味になった。',
)



