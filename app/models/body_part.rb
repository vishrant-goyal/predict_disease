class BodyPart 
  include Neo4j::ActiveNode
  property :body_part, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end
