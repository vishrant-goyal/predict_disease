class SymptomAccompany 
  include Neo4j::ActiveNode
  property :accompany, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
