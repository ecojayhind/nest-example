import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true, // enables createdAt and updatedAt
  indexes: [
    {
      name: "user_phone_index",
      fields: ["phone"],
    },
  ],
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.BIGINT,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salt: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  is_verified: boolean;

  // verify token
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  verify_token: string;

  @Default("user")
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  declare created_at: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  declare updated_at: Date;
}
