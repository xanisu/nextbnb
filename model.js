import { Sequelize, Model, DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'

const sequelize = new Sequelize(process.env.POSTGRES_CONNECTION, {
  dialect: 'postgres',
  logging: false
})

console.log(process.env.POSTGRES_CONNECTION)

class User extends Model {}

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
    timestamps: false,
    hooks : {
      beforeCreate: async (user) => {
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        user.password = await bcrypt.hash(user.password, salt)
      }
    }
  }
)

User.prototype.isPasswordValid = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export {sequelize, User}