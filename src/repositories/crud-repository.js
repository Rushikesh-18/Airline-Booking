const { Logger } = require("../config");
class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
        
      const response = await this.model.create(data);
      return response;
    } catch (error) {
        Logger.error("Error details:", error); 
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: destroy");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: getAll");
      throw error;
    }
  }

  async update(data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: data.id,
        },
      });
    } catch (error) {
      Logger.error("Something went wrong in crud repo: update");
      throw error;
    }
  }
}

module.exports = crudRepository;
