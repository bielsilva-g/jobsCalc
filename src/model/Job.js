const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    let jobs = await db.all(`SELECT * from jobs`);

    await db.close();

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at,
    }));
  },

  async update(newData, id) {
    const db = await Database();

    await db.run(`UPDATE jobs SET
      name = "${newData.name}", 
      daily_hours = ${newData["daily-hours"]}, 
      total_hours = ${newData["total-hours"]}
    WHERE id = ${id}    
    `);

    await db.close();
  },

  async delete(id) {
    const db = await Database();

    await db.run(`DELETE from jobs WHERE id = ${id}`);

    await db.close();
  },

  async create(newData) {
    const db = await Database();

    await db.run(`INSERT INTO jobs(
      name, 
      daily_hours, 
      total_hours,
      created_at
    ) VALUES (
      "${newData.name}",
      ${newData["daily-hours"]},  
      ${newData["total-hours"]},
      ${newData.created_at}
    )`);

    await db.close();
  },
};
