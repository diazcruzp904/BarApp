import { Sequelize } from "sequelize"; // this is from documentation of Sequelize

//we made an object of the DB and we put our url from supa base and added our strin from settings 
const db = new Sequelize("postgresql://postgres:BarApp2022@@db.frptznwrmsbtberywlqk.supabase.co:5432/postgres")

export default db