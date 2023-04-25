import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config'
import path from "path";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, 'entities/**.{js,ts}');
  const migrationsPath: string = path.join(__dirname, 'migrations/**.{js,ts}');

  if(process.env.NODE_ENV === 'test'){
    return {
      type: 'sqlite',
      database: ':memory',
      synchronize: true,
      entities: [entitiesPath]
    }
  }

  if(!process.env.DATABASE_URL) throw new Error(`Env var DATABASE_URL doesn't exist`);

  return {
    type: 'postgres',
    url: process.env.DATABASE_URL!,
    synchronize: false, 
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath]
  }
}

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export default AppDataSource;