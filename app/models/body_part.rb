class BodyPart 
  include Neo4j::ActiveNode
  property :body_part, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end


# SEED DATA

# Abdomen
# Lower Abdomen
# Middle Abdomen
# Upper Abdomen
# Right Side
# Left Side
# Chest
# Both Sides
# Around Eyes
# Forehead
# Neck
# Throat
# Around Temples
# Left Eye
# Right Eye
# Both Eyes

# ["Abdomen", "Lower Abdomen", "Middle Abdomen", "Upper Abdomen", "Right Side", "Left Side", "Chest", "Both Sides",
# "Around Eyes", "Forehead", "Neck", "Throat", "Around Temples", "Left Eye", "Right Eye", "Both Eyes"]