import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.POSTGRES_CONNECTION, {
  dialect: 'postgres',
  logging: false
})

export class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    session_token: {
      type: DataTypes.STRING
    },
    session_expiration: {
      type: DataTypes.DATEONLY
    }
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: false
  }
)