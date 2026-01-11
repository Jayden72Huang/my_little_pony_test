/**
 * 文件功能：数据库 Schema 统一导出配置
 * 文件目的：提供统一的数据库 schema 导入入口，支持在不同数据库类型之间灵活切换
 */

// this file is used to export the schema for the database
// export * from './schema.sqlite'; // sqlite schema, used when DATABASE_PROVIDER=sqlite or DATABASE_PROVIDER=turso
// export * from './schema.mysql'; // mysql schema, used when DATABASE_PROVIDER=mysql
// export * from './schema.postgres'; // postgres schema, used when DATABASE_PROVIDER=postgresql
export * from './schema.postgres';
