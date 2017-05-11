class SymptomOccurence < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomOccurence, :uuid
  end

  def down
    drop_constraint :SymptomOccurence, :uuid
  end
end
