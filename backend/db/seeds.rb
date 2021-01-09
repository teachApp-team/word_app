# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Column.create!(
#   column_name: '接頭辞・接尾辞その1',
#   info: '超基本的な接頭辞・接尾辞が収録されています。単語初心者は学習前にぜひ一読',
# )

# Column.create!(
#   column_name: '超基本接頭辞',
#   info: '超基本的な接頭辞が収録されています。単語初心者は学習前にぜひ一読',
# )
ColumnContent.create!(
  column_id: 3,
  content_title: '接頭語「in-」= not（否定）',
  content: '接頭語の「in-」は、「否定（not）」の意味を表す。「incapable」は、「in-」に、「つかむ（take）」を意味する語根である「cap」と、「〜できる（able）」を意味する形容詞接尾語である「-able」が結合して「つかむことができない → 能力がない」という意味になった。',
)
ColumnContent.create!(
  column_id: 3,
  content_title: '接頭語「un-」= not（〜ではない）',
  content: '接頭語の「un-」は、「〜ではない（not）」の意味を表す。「untouchable」は、「un-」に、「触れる」を意味する単語である「touch」と、「able（〜できる）」を意味する形容詞接尾語である「-able」が結合して「触れることができない → 触れてはならない」という意味になった。',
)
ColumnContent.create!(
  column_id: 3,
  content_title: '接頭語「dis-」= away（離れて）',
  content: '接頭語の「dis-」は、「離れて（away）」という意味を表す。「distant」は、「dis-」に、「立つ（stand）」を意味する語根である「sta」と、形容詞接尾語で「〜な」を意味する「ant」が結合して「離れて立つような → 離れた」という意味になった。',
)
ColumnContent.create!(
  column_id: 3,
  content_title: '接頭語「pre-」= before（前に）',
  content: '接頭語の「pre-」は、「前に（before）」の意味を表す。「predict」は、「pre-」に、「言う（say）」を意味する語根である「dict」が結合して「前もって言う → 予測する」という意味になった。',
)
ColumnContent.create!(
  column_id: 3,
  content_title: '接頭語「ex-」= out（外に）',
  content: '接頭語の「ex-」は、「外に（out）」という意味を表す。「exclude」は、「ex-」に、「閉じる（shut）」を意味する語根である「clude」が結合して「外に出して閉じる → 〜を除く」という意味になった。',
)

Column.create!(
  column_name: '超基本接尾辞',
  info: '超基本的な接尾辞が収録されています。単語初心者は学習前にぜひ一読',
)
ColumnContent.create!(
  column_id: 4,
  content_title: '接尾語「-ful」= full（〜に満ちた）',
  content: '接尾語の「-ful」は、「〜に満ちた（full）」という意味を表す。「careful」は、「care（注意）」を意味する単語に「-ful」が結合して「注意に満ちた → 注意深い」という意味になった。',
)
ColumnContent.create!(
  column_id: 4,
  content_title: '接尾語「-able」= able（〜できる）',
  content: '接尾語の「-able」は、「〜できる（able）」という意味を表す。「capable」は、「つかむ（take）」を意味する語根である「cap」に「-able」が結合して「つかむことができる → 能力がある」という意味になった。',
)
ColumnContent.create!(
  column_id: 4,
  content_title: '接頭語「-ist」= 人',
  content: '接尾語の「-ist」は、「人」の意味を表す。「specialist」は、「特別な（especial）」を意味する語根である「special」と、「人」を意味する「-ist」が結合して「専門家」という意味になった。',
)
ColumnContent.create!(
  column_id: 4,
  content_title: '接頭語「-ology」= 学問',
  content: '接尾語の「-ology」は、「学問」の意味を表す。「psychology」は、「心（psycho）」を意味する語根である「psycho」と、「学問」を意味する「-ology」が結合して「心理学」という意味になった。',
)




