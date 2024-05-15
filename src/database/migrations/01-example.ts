import { DataTypes, Model, QueryInterface } from "sequelize"
import { User } from "../../types";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('users', {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING(20), allowNull: false },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
}