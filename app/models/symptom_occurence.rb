class SymptomOccurence 
  include Neo4j::ActiveNode
  property :occurence, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
