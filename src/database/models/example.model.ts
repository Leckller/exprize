import { Optional } from 'sequelize';
import SequelizeUser from './ModelsSequelize/example.Sequelize';
import { User } from '../../types';

interface userMethods {
  createUser(fields: Optional<User, 'id'>): Promise<User>
  findUserByEmail(email: string): Promise<User | undefined>
}

type ErrorM = { message: string };

export default class UserModel implements userMethods {
  private db = SequelizeUser;

  async findUserByEmail(email: string): Promise<User | undefined> {
    const dbData = await this.db.findOne({ where: { email } });
    if (!dbData) return undefined;
    return dbData.dataValues;
  }

  async createUser(fields: Optional<User, 'id'>): Promise<User> {
    const { email, password } = fields;

    const createUser = await this.db.create({ email, password });

    return createUser.dataValues;
  }

  async deleteUser(id: number, email: string): Promise<void> {
    await this.db.destroy({ where: { id, email } });
  }
}