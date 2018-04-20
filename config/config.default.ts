import * as dotenv from 'dotenv'
import { EggAppConfig, PowerPartial } from 'egg'

// load env vars
dotenv.config()

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & IBizConfig>

// app special config scheme
export interface IBizConfig {
  sourceUrl: string
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & IBizConfig

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524206818890_7093'

  config.graphql = {
    agent: false,
    app: true,
    router: '/graphql'
  }

  config.sequelize = {
    dialect: 'mysql',
    database: 'eggteagraphql',
    host: '127.0.0.1',
    password: process.env.PWD,
    port: '3306',
    username: process.env.MYSQL_USER
  }

  config.security = {
    csrf: {
      ignore: () => true
    }
  }

  // add your config here
  config.middleware = ['graphql']

  return config
}
