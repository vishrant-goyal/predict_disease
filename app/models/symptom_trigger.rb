class SymptomTrigger 
  include Neo4j::ActiveNode
  property :trigger, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end


# SEED DATA
# Coughing
# Jarring movements
# Stress
# Drinking alcohol
# Menstrual cycle
# Eating certain foods
# Allergens or irritants
# Exertion
# Smoking
# Changes in temperature
# Exposure to cold air
# Lying down for long
#            Sitting for long
#                    Standing up for long
#                                Deep breath
#                                  Change in head/body position
#                                  Medications or recreational drugs
#                                  Chewing
#                                  Change in sleep patterns
#                                  Clenching or grinding teeth
#                                  Hormonal changes

# ["Coughing", "Jarring movements", "Stress", "Drinking alcohol", "Menstrual cycle", "Eating certain foods", "Allergens or irritants",
# "Exertion", "Smoking", "Changes in temperature", "Exposure to cold air", "Lying down for long", "Sitting for long",
# "Standing up for long", "Deep breath", "Change in head/body position", "Medications or recreational drugs", "Chewing",
# "Change in sleep patterns", "Clenching or grinding teeth", "Hormonal changes"]