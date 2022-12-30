import Sequelize, { Model } from "sequelize";

class License extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        userId: Sequelize.INTEGER,
        // state: Sequelize.STRING,
        // country: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true
      }
    );

    return this;
  }

  static associate({User}) {
    this.belongsTo(User, {foreignKey: "userId", as: "user"});
  }
}

export default License;
