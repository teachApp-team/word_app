require 'csv'

namespace :word_csv do
  task import: :environment do
    puts "importing start"
    CSV.foreach("db-words.csv", headers: true) do |row|
      puts "#{row[2]} を入れます。idは#{row[0]}"
      level = Level.find_by!(name: row[4])
      Word.create!({
        english: row[1],
        japanese: row[2],
        part: row[3],
        level_id: level.id
      })
    end
  end
end