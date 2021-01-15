WordBook.seed(:id,
  { 
    id: 1,
    name: 'ターゲット1900',
    description: "ターゲット1900は大学受験において最も使用されている単語帳です。定期テストからセンター試験・国立2次・早慶レベルまで対応しています。｢受験に出る順｣にパート分けされているため、目標レベルに適したパートのみを徹底的に覚えることができます。",
    image: Rails.root.join("db/fixtures/development/images/word_book001.png").open
  },
  { 
    id: 2, 
    name: 'システム英単語', 
    description: "システム英単語は広く使われている単語帳の１つです。特に関関同立やGMARCH、早慶、旧帝大以上の大学を目指す人におすすめです。システム英単語は入試問題を研究し、そこから得られたデータをもとに、作成されました。そのため効率よく勉強したい人にはおすすめです。", 
    image: Rails.root.join("db/fixtures/development/images/word_book002.png").open
  },
  { 
    id: 3, 
    name: 'ターゲット英熟語1000', 
    description: "英熟語ターゲット1000は大学受験界で、定番の熟語帳です。英語がニガテで、英熟語をまだ勉強していない方におすすめです。内容がシンプルで、よく出題される英熟語にしぼってまとめられています。そのため入試まで時間がなく、短い時間で英熟語を対策していきたいという時にもおすすめです。",
    image: Rails.root.join("db/fixtures/development/images/word_book003.png").open
  },
)
