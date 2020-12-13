require 'csv'

namespace :word_csv do
  task import: :environment do
    puts "importing start"
    begin
    rescue
      puts "一旦飛ばします"
    end
  end
end