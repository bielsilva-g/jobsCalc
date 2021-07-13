const Database = require("./config");

const initidb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, 
        avatar TEXT, 
        monthly_budget INT,
        days_per_week INT, 
        hours_per_day INT,
        vacation_per_year INT,
        value_hour FLOAT  
    )`);

    await db.exec(`CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, 
        daily_hours INT, 
        total_hours INT,
        created_at DATETIME
    )`);

    await db.run(`INSERT INTO profile(
        name, 
        avatar, 
        monthly_budget,
        days_per_week, 
        hours_per_day,
        vacation_per_year,
        value_hour
    ) VALUES (
        "Gabriel",
        "https://github.com/bielsilva-g.png",
        4000,
        5,
        6,
        4,
        33.33
    )`);

    await db.run(`INSERT INTO jobs(
        name, 
        daily_hours, 
        total_hours,
        created_at
    ) VALUES (
        "eZSign",
        2,
        1,
        1624573270445
    )`);

    await db.run(`INSERT INTO jobs(
        name, 
        daily_hours, 
        total_hours,
        created_at
    ) VALUES (
        "Blip",
        3,  
        30,
        1624573270445
    )`);

    await db.close();
  },
};

initidb.init();
