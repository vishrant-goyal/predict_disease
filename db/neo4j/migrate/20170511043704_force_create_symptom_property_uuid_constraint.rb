class ForceCreateSymptomPropertyUuidConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :SymptomProperty, :uuid, force: true
  end

  def down
    drop_constraint :SymptomProperty, :uuid
  end
end
