class ForceCreateSymptomReliefUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomRelief, :uuid, force: true
  end

  def down
    drop_constraint :SymptomRelief, :uuid
  end
end
