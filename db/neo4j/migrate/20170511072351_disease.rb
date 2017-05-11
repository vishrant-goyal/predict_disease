class Disease < Neo4j::Migrations::Base
  def up
    add_constraint :Disease, :uuid
  end

  def down
    drop_constraint :Disease, :uuid
  end
end
