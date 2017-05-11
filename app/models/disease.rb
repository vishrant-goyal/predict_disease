class Disease
  include Neo4j::ActiveNode
  property :name, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime

  has_many :in, :body_parts, type: :OCCURS_IN
  has_many :in, :symptom_occurences, type: :FREQUENCY
  has_many :in, :symptom_properties, type: :HAS_PROPERTY
  has_many :in, :symptom_triggers, type: :TRIGGERED_BY
  has_many :in, :symptom_reliefs, type: :RELIEVED_BY
  has_many :in, :symptom_accompany, type: :ACCOMPANIED_BY
  has_many :in, :symptoms, type: :HAS_SYMPTOMS
end
