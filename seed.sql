-- INSERT INTO human (username, email, password) VALUES ('john','john@email.com', 'password');
-- INSERT INTO human (username, email, password) VALUES ('jane','jane@email.com', 'password');

-- INSERT INTO pet (name, dob, breed) VALUES ('jo', '2012-02-21', 'chihuahua');
-- INSERT INTO pet (name, dob, breed) VALUES ('peanut', '2012-02-21', 'poodle');

-- INSERT INTO human_pet (human_id, pet_id) VALUES (1,1);
-- INSERT INTO human_pet (human_id, pet_id) VALUES (2,1);
-- INSERT INTO human_pet (human_id, pet_id) VALUES (1,2);

-- INSERT INTO appointment (clinic_id, pet_id, date, time) VALUES (1, 1, '2019-12-31', '2019-12-31 14:00:00 Asia/Singapore');
-- INSERT INTO appointment (clinic_id, pet_id, date, time) VALUES (1, 2, '2019-10-31', '2019-10-31 17:00:00 Asia/Singapore');

-- INSERT INTO clinic (human_id, name, address, phone) VALUES (1, 'Island Vet', '114 Jurong East Street 13, #01-404, Singapore 600114', 65605991);
-- INSERT INTO clinic (human_id, name, address, phone) VALUES (1, 'My Family Vet', '265 Bukit Batok East Ave 4, #01-403, Singapore 650265', 65660448);

-- INSERT INTO weight (pet_id, date, record) VALUES (1, '2019-10-23', 5.1);
-- INSERT INTO weight (pet_id, date, record) VALUES (1, '2019-10-23', 5.1);
-- INSERT INTO weight (pet_id, date, record) VALUES (1, '2019-10-24', 5.2);
-- INSERT INTO weight (pet_id, date, record) VALUES (1, '2019-10-25', 5.1);
-- INSERT INTO weight (pet_id, date, record) VALUES (1, '2019-10-26', 5.0);

INSERT INTO allergy (pet_id, symptom, food) VALUES (1, 'vomit', 'banana');
INSERT INTO allergy (pet_id, symptom, food) VALUES (1, 'vomit', 'orange');

-- INSERT INTO kibbles (human_id, brand, description, weight, price, date_purchased, date_opened, date_expiry) VALUES (1, 'Hill''s', 'Science Diet', 4, 34.50, '2019-08-01', '2019-09-01', '2020-12-31');
-- INSERT INTO kibbles (human_id, brand, description, weight, price, date_purchased, date_opened, date_expiry) VALUES (2, 'Royal Canine', 'Small Dog Diet', 5, 39.90, '2019-08-01', '2019-09-01', '2020-12-31');

-- INSERT INTO feeding (pet_id, daily_frequency, portion_weight,plan_name) VALUES (1, 2, 200, 'my feeding plan 1');

-- INSERT INTO feeding_kibbles (kibbles_id, feeding_id) VALUES (1,1);