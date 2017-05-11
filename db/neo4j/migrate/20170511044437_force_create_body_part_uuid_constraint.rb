class ForceCreateBodyPartUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :BodyPart, :uuid, force: true
  end

  def down
    drop_constraint :BodyPart, :uuid
  end
end
