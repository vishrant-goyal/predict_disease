class SymptomRelief 
  include Neo4j::ActiveNode
  property :relief, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end

# SEED DATA

# Holding things close
# Holding things far from face
# Squinting
# Brighter light
# Resting
# Lying down in dark
# OTC pain medication
# Avoiding certain foods
# Eating certain foods
# Antacids
# Bending forward
# Drinking more water
# Eating more fiber

# ["Holding things close", "Holding things far from face", "Squinting", "Brighter light", "Resting", "Lying down in dark",
# "OTC pain medication", "Avoiding certain foods", "Eating certain foods", "Antacids", "Bending forward", "Drinking more water",
# "Eating more fiber"]