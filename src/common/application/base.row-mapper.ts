export interface BaseRowMapper<TEntity> {
  rowToEntity(rowData: any): TEntity;
  rowArrayToEntities(rowArray: any[]): TEntity[];
}
