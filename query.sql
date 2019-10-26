SELECT 
human.username, pet.name,
kibbles.*
FROM 
kibbles INNER JOIN feeding_kibbles
ON kibbles.id = feeding_kibbles.kibbles_id
INNER JOIN feeding 
ON feeding.id = feeding_kibbles.feeding_id
INNER JOIN pet 
ON pet.id = feeding.pet_id
INNER JOIN human_pet
ON pet.id = human_pet.pet_id
INNER JOIN human
ON human.id = human_pet.human_id
WHERE human.id = 1;

