class SymptomAccompany 
  include Neo4j::ActiveNode
  property :accompany, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime



end

# SEED DATA

# Fever
# Cough
# Diarrhea
# Abdominal swelling
# Vomiting
# Nausea
# Passing gas
# Rashes
# Weight loss
# Black or bloody stools
# Constipation
# Anxiety
# Difficulty in swallowing
# Irregular heartbeat
# Fainting
# Unexplained fatigue
# Headache
# Wheezing
# Pain in neck, jaw, arms, shoulder or back
# Confusion or trouble talking
# Eye pain
# Numbness or weakness
# Eye redness
# Eye strain
# Eye swelling
# Other sensory disturbances
# Sweating
# Hoarse voice
# Sore throat
# Running nose
# Appetite loss
# Heavy breathing
# Shortness of breath
# Watery or itchy eyes
# Muscle aches
# Joint aches
# Cramping
# Buzzing or ringing in ear
# Blurred vision
# Double vision
# Personality, behavior or mental status changes
# Restlessness
# Siezures
# Stiff neck
# Stiff back
# Tender scalp
# Jaw pain
# Tremors
# Nervousness
# Trouble sleeping

# ["Fever", "Cough", "Diarrhea", "Abdominal swelling", "Vomiting", "Nausea", "Passing gas", "Rashes", "Weight loss",
# "Black or bloody stools", "Constipation", "Anxiety", "Difficulty in swallowing", "Irregular heartbeat", "Fainting",
# "Unexplained fatigue", "Headache", "Wheezing", "Pain in neck, jaw, arms, shoulder or back", "Confusion or trouble talking",
# "Eye pain", "Numbness or weakness", "Eye redness", "Eye strain", "Eye swelling", "Other sensory disturbances", "Sweating",
# "Hoarse voice", "Sore throat", "Running nose", "Appetite loss", "Heavy breathing", "Shortness of breath", "Watery or itchy eyes",
# "Muscle aches", "Joint aches", "Cramping", "Buzzing or ringing in ear", "Blurred vision", "Double vision",
# "Personality, behavior or mental status changes", "Restlessness", "Siezures", "Stiff neck", "Stiff back", "Tender scalp",
# "Jaw pain", "Tremors", "Nervousness", "Trouble sleeping"]