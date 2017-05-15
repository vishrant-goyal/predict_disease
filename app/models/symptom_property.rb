class SymptomProperty
  include Neo4j::ActiveNode
  property :property, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime


end

# SEED DATA

# Acute, or began suddenly
# Burning
# Chronic
# Crampy
# Dull
# Gnawing
# Steady
# Sharp
# Worsening or progressing
# Intermittent or episodic
# Intense
# Severe
# Sudden
# Squeezing or pressure
# Dry
# Wet
# Sweating
# Producing sputum or phlegm
# Sudden
# Spinning sensation
# Unsteady
# Lightheaded or faint
# Throbbing
# Starts gradually
# Starts suddenly
# Occurs for few seconds to 1-2 minutes
# Occurs for 15-30 minutes
# Remains for few hours
# Occurs daily at a certain time
# Faster than normal
# Slower than normal
# Blurry vision
# Blurry vision for distant objects
# Blurry vision for nearby objects
# Bright zigzag lines
# Hazy or dim vision
# Double vision
# Fading of colors
# Flashing of lights
# Glare with bright lights
# Inability to distinguish in colors
# Minimal side vision
# Distorted vision
# Hallucinations
# Poor night vision
# Vision loss, partial or total

# ["Acute, or began suddenly", "Burning", "Chronic", "Crampy", "Dull", "Gnawing", "Steady", "Sharp", "Worsening or progressing",
# "Intermittent or episodic", "Intense", "Severe", "Sudden", "Squeezing or pressure", "Dry", "Wet", "Sweating",
# "Producing sputum or phlegm", "Sudden", "Spinning sensation", "Unsteady", "Lightheaded or faint", "Throbbing", "Starts gradually",
# "Starts suddenly", "Occurs for few seconds to 1-2 minutes", "Occurs for 15-30 minutes", "Remains for few hours",
# "Occurs daily at a certain time", "Faster than normal", "Slower than normal", "Blurry vision", "Blurry vision for distant objects",
# "Blurry vision for nearby objects", "Bright zigzag lines", "Hazy or dim vision", "Double vision", "Fading of colors",
# "Flashing of lights", "Glare with bright lights", "Inability to distinguish in colors", "Minimal side vision", "Distorted vision",
# "Hallucinations", "Poor night vision", "Vision loss, partial or total"]