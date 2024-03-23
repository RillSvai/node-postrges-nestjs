export interface RowMapper<TEntity> {
  rowToEntity(row: any): TEntity;
  rowArrayToEntities(rowArray: any[]): TEntity[];
}
