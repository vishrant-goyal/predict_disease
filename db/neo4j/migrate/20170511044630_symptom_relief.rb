class SymptomRelief < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomRelief, :uuid
  end

  def down
    drop_constraint :SymptomRelief, :uuid
  end
end
