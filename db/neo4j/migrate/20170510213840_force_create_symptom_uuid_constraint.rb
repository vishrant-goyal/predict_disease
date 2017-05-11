class ForceCreateSymptomUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :Symptom, :uuid, force: true
  end

  def down
    drop_constraint :Symptom, :uuid
  end
end
