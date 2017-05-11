class ForceCreateSymptomTriggerUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomTrigger, :uuid, force: true
  end

  def down
    drop_constraint :SymptomTrigger, :uuid
  end
end
