class ForceCreateSymptomOccurenceUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomOccurence, :uuid, force: true
  end

  def down
    drop_constraint :SymptomOccurence, :uuid
  end
end
