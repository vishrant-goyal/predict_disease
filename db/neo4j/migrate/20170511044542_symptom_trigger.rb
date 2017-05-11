class SymptomTrigger < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomTrigger, :uuid
  end

  def down
    drop_constraint :SymptomTrigger, :uuid
  end
end
