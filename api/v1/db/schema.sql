DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id INTEGER PRIMARY KEY autoincrement,
	name TEXT,
	email TEXT,
	phone INTEGER,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_lookup (
	owner_id INTEGER ,
	contact_id INTEGER,
);


SELECT contact_id FROM user_lookup WHERE owner_id = ? 