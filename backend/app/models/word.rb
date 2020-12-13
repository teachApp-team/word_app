class Word < ApplicationRecord
  has_many :results
  belongs_to :level

  scope :testable, -> (student_id:, limit:) {
    order("RAND()")
      .joins("LEFT OUTER JOIN `results` ON `results`.`id` = `words`.`id` AND `results`.`student_id` = #{student_id}")
      .select("words.*", "count(results.id) AS results")
      .group('words.id')
      .order('results asc')
      .limit(limit)
  }

  def self.get_testable(student_id:, limit:)
    question_words = testable(student_id: student_id, limit: limit)
    words = question_words.map do |word|
      choices = where(part: word.part).to_a
      choices = choices.shuffle.slice(0, 3)
      choices.unshift(word)
      choices
    end
    words
  end
end


# Word.where(level: 20).order("RAND()").left_joins(:results).select("words.*", "count(results.id) AS results").group('words.id').order('results asc').limit(10)
# Word.where(level: 20).order("RAND()").joins("LEFT OUTER JOIN `results` ON `results`.`id` = `words`.`id` AND `results`.`student_id` = #{1}").select("words.*", "count(results.id) AS results").group('words.id').order('results asc').limit(10)