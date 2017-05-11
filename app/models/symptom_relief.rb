class SymptomRelief 
  include Neo4j::ActiveNode
  property :relief, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
