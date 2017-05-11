class SymptomProperty 
  include Neo4j::ActiveNode
  property :property, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
