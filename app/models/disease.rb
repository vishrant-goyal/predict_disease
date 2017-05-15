class Disease
  include Neo4j::ActiveNode
  property :name, type: String
  property :created_at, type: DateTime
  property :updated_at, type: DateTime

  has_many :in, :body_parts, type: :OCCURS_IN
  has_many :in, :symptom_occurences, type: :FREQUENCY
  has_many :in, :symptom_properties, type: :HAS_PROPERTY
  has_many :in, :symptom_triggers, type: :TRIGGERED_BY
  has_many :in, :symptom_reliefs, type: :RELIEVED_BY
  has_many :in, :symptom_accompanies, type: :ACCOMPANIED_BY
  has_many :in, :symptoms, type: :HAS_SYMPTOMS
end

# SEED DATA

# Cataract
# Dry macular degeneration
# Stroke
# Farsightedness
# Nearsightedness
# Migraine with aura
# Astigmatism
# Iritis
# Retinal Detachment
# Optic neuritis
# Wet macular degeneration
# Angina
# Heart attack
# Panic attacks and disorder
# Asthma
# Pericarditis
# Heart burn
# Pneumonia
# Bronchitis
# Influenza (flu)
# Hay fever
# Emphysema
# GERD
# Laryngytis
# Irritable bowel syndrome
# Celiac disease
# Traveler's diarrhea
# Viral gastroenteritis (stomach flu)
# Colitis
# Food poisoning
# Meniere's disease
# Heart arrhythmia
# Migraine
# Encephalitis
# Meningitis
# Concussion
# TMJ disorders
# Anemia
# Gas and gas pains
# Colon cancer
# Intestinal Obstruction
# Pancreatitis
# Kidney stones
# Peptic ulcer
#
# ["Cataract", "Dry macular degeneration", "Stroke", "Farsightedness", "Nearsightedness", "Migraine with aura", "Astigmatism",
# "Iritis", "Retinal Detachment", "Optic neuritis", "Wet macular degeneration", "Angina", "Heart attack",
# "Panic attacks and disorder", "Asthma", "Pericarditis", "Heart burn", "Pneumonia", "Bronchitis", "Influenza (flu)",
# "Hay fever", "Emphysema", "GERD", "Laryngytis", "Irritable bowel syndrome", "Celiac disease", "Traveler's diarrhea",
# "Viral gastroenteritis (stomach flu)", "Colitis", "Food poisoning", "Meniere's disease", "Heart arrhythmia", "Migraine",
# "Encephalitis", "Meningitis", "Concussion", "TMJ disorders", "Anemia", "Gas and gas pains", "Colon cancer", "Intestinal Obstruction",
# "Pancreatitis", "Kidney stones", "Peptic ulcer"]