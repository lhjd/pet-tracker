CREATE TABLE IF NOT EXISTS human (
    id SERIAL PRIMARY KEY,
    -- username TEXT,
    email TEXT,
    password TEXT
    -- phone INTEGER,
    -- first_name TEXT,
    -- last_name TEXT
);

CREATE TABLE IF NOT EXISTS pet (
    id SERIAL PRIMARY KEY,
    name TEXT,
    dob DATE,
    breed TEXT
);

CREATE TABLE IF NOT EXISTS human_pet (
    id SERIAL PRIMARY KEY,
    human_id INTEGER,
    pet_id INTEGER
);

CREATE TABLE IF NOT EXISTS appointment (
    id SERIAL PRIMARY KEY,
    clinic_id INTEGER,
    pet_id INTEGER,
    date DATE,
    time TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS clinic (
    id SERIAL PRIMARY KEY,
    human_id INTEGER,
    name TEXT,
    address TEXT,
    phone INTEGER
);

CREATE TABLE IF NOT EXISTS weight (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER,
    date DATE,
    record DECIMAL
);

CREATE TABLE IF NOT EXISTS allergy (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER,
    symptom TEXT,
    food TEXT
);

CREATE TABLE IF NOT EXISTS kibbles (
    id SERIAL PRIMARY KEY,
    human_id INTEGER,
    brand TEXT,
    description TEXT,
    weight DECIMAL,
    price DECIMAL,
    date_purchased DATE,
    date_opened DATE,
    date_expiry DATE
);

CREATE TABLE IF NOT EXISTS feeding (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER,
    daily_frequency INTEGER,
    portion_weight DECIMAL,
    plan_name TEXT
);

CREATE TABLE IF NOT EXISTS feeding_kibbles (
    id SERIAL PRIMARY KEY,
    kibbles_id INTEGER,
    feeding_id INTEGER
);





