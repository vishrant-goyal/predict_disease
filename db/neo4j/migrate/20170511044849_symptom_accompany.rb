class SymptomAccompany < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomAccompany, :uuid
  end

  def down
    drop_constraint :SymptomAccompany, :uuid
  end
end
