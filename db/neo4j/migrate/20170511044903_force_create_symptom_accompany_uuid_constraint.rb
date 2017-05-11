class ForceCreateSymptomAccompanyUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomAccompany, :uuid, force: true
  end

  def down
    drop_constraint :SymptomAccompany, :uuid
  end
end
