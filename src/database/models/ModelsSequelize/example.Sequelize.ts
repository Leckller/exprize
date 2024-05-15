import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { User } from '../../../types';

export type UserWithNoId = Optional<User, 'id'>;
export type UserModelType = Model<User, UserWithNoId>;
type UserSequelizeCreate = ModelDefined<User, UserWithNoId>;

const SequelizeUser: UserSequelizeCreate = db.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
  password: { type: DataTypes.STRING(20), allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'users',
  timestamps: false,
});

export default SequelizeUser;
