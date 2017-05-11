class SymptomTrigger 
  include Neo4j::ActiveNode
  property :trigger, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
