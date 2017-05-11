class BodyPart < Neo4j::Migrations::Base
  def up
    add_constraint :BodyPart, :uuid
  end

  def down
    drop_constraint :BodyPart, :uuid
  end
end
