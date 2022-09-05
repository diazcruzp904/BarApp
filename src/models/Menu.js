import {Sequelize, DataTypes} from "sequelize"
import db from "../utils/db.js" //this is bringing in the database

const menu = db.define ('menus', {

      // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,//need to define that this is the primary 
    autoIncrement: true //this addes from the pervious and adds 1 
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  updatedAt: false //postgress from supabase this is like a column in the database that we currently dont have or use , we can implement if we want to 
})

export default menu




