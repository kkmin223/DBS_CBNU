exports.add_game = `INSERT INTO game (company_id, name,release_date,price,description,system_requirements,rating,img) VALUES (?,?,?,?,?,?,?,?)` // 게임 등록
exports.add_category = `INSERT INTO category (company_id,game_name,category) VALUES (?,?,?)` //카테고리 추가
exports.add_language = `INSERT INTO language (company_id,game_name,language) VALUES (?,?,?)` // 언어 추가