class Symptom
  include Neo4j::ActiveNode
  property :name, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime

  has_many :out, :body_parts, type: :OCCURS_IN
  has_many :out, :symptom_occurences, type: :FREQUENCY
  has_many :out, :symptom_properties, type: :HAS_PROPERTY
  has_many :out, :symptom_triggers, type: :TRIGGERED_BY
  has_many :out, :symptom_reliefs, type: :RELIEVED_BY
  has_many :out, :symptom_accompanies, type: :ACCOMPANIED_BY
end

# SEED DATA

# Abdominal Pain
# Chest Pain
# Cough
# Diarrhea
# Dizziness
# Headaches
# Heart Palpitations
# Vision Problems
# ["Abdominal Pain", "Chest Pain", "Cough", "Diarrhea", "Dizziness", "Headaches", "Heart Palpitations", "Vision Problems"]