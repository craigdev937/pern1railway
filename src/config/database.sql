CREATE DATABASE pern1railway;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE friends(
    id uuid DEFAULT uuid_generate_v4(),
    PRIMARY KEY (id),
    first VARCHAR(255),
    last VARCHAR(255),
    age SMALLINT,
    info TEXT,
    image VARCHAR(255)
);


