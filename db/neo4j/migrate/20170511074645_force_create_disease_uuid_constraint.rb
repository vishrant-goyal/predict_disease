class ForceCreateDiseaseUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :Disease, :uuid, force: true
  end

  def down
    drop_constraint :Disease, :uuid
  end
end
