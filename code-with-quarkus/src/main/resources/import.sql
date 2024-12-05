-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
 -- insert into myentity (id, field) values(1, 'field-1');
 -- insert into myentity (id, field) values(2, 'field-2');
 -- insert into myentity (id, field) values(3, 'field-3');
 -- alter sequence myentity_seq restart with 4;

INSERT INTO person (birth, status, id, name) VALUES ('1910-02-01', 0, 1, 'Stef');
alter sequence person_seq restart with 2;
INSERT INTO dog (id, name, owner_id) VALUES (1, 'Rex', 1);
alter sequence dog_seq restart with 2;