CREATE DATABASE DBS_project;

USE dbs_project;

create table Manager(	-- 1st
	id			varchar(45)	NOT NULL,	-- primary key
    password	varchar(45)	NOT NULL,
    name		varchar(45)	NOT NULL,
    phone		varchar(45)	NOT NULL,
	CONSTRAINT PK_Manager PRIMARY KEY (id)
);

create table User(	-- 2nd
	id			varchar(45)	NOT NULL,	-- primary key
    name		varchar(45)	NOT NULL,
    password	varchar(45)	NOT NULL,
    birthdate	Date		NOT NULL,	-- for rating
    email		varchar(45)	NOT NULL	UNIQUE,	-- 게임키를 받아야 하니까
	phone		varchar(45),
    city		varchar(45),
    ku			varchar(45),
    dong		varchar(45),
    manager_id	varchar(45)	NOT NULL,	-- foreign key
    CONSTRAINT PK_User PRIMARY KEY (id),
    CONSTRAINT FK_User_Manager FOREIGN KEY (manager_id) REFERENCES Manager(id)
);

create table Company(	-- 3rd
	id			varchar(45)	NOT NULL,	-- primary key
    name		varchar(45)	NOT NULL,
    password	varchar(45)	NOT NULL,
    phone		varchar(45)	NOT NULL,	-- 회사 전화 번호
    city		varchar(45),
    ku			varchar(45),
    dong		varchar(45),
    homepage	varchar(45)	NOT NULL,
    manager_id	varchar(45)	NOT NULL,	-- foreign key
	CONSTRAINT PK_Companny PRIMARY KEY (id),
	CONSTRAINT FK_Company_Manager FOREIGN KEY (manager_id) REFERENCES Manager(id)
);

create table Game(	-- 4th
	company_id			varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    name				varchar(45)	NOT NULL,	-- partial key (will combine to be PK)
    release_date		date		NOT NULL,	-- 배포일자
    price 				int			NOT NULL,
    description 		text,					-- 상세설명
    system_requirements	text,
    rating				varchar(45)	NOT NULL,
    CONSTRAINT PK_Game PRIMARY KEY (company_id, name),
    -- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=whydda&logNo=221397918586 여기 사이트를 참고했다.
	CONSTRAINT FK_Game_Company FOREIGN KEY (company_id) REFERENCES Company(id)
);

create table Regist(	-- 5th
	company_id	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    game_name	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
	manager_id	varchar(45)	NOT NULL,	-- foreign key
	regist_date	date		NOT NULL,
    CONSTRAINT PK_Regist PRIMARY KEY (company_id, game_name),
	CONSTRAINT FK_Regist_Company FOREIGN KEY (company_id) REFERENCES Company(id),
	CONSTRAINT FK_Regist_Game FOREIGN KEY (company_id, game_name) REFERENCES Game(company_id, name),
	CONSTRAINT FK_Regist_Manager FOREIGN KEY (manager_id) REFERENCES Manager(id)
);
    
	-- "order"이 키워드인듯. 그래서 일단 order -> Gameorder로 바꿔서 했음.
create table Gameorder(	-- 6th
	user_id		varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    company_id	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    game_name	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    order_date	date		NOT NULL,
    order_no	int			NOT NULL,
    email		varchar(45)	NOT NULL,
    amount		int			NOT NULL,
    CONSTRAINT PK_Gameorder PRIMARY KEY (user_id, company_id, game_name),
	CONSTRAINT FK_Gameorder_User FOREIGN KEY (user_id) REFERENCES User(id),
	CONSTRAINT FK_Gameorder_Company FOREIGN KEY (company_id) REFERENCES Company(id),
	CONSTRAINT FK_Gameorder_Game FOREIGN KEY (company_id, game_name) REFERENCES Game(company_id, name)
);

create table Cart(	-- 7th
	user_id		varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    company_id	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    game_name	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    cart_no		int			NOT NULL,
    amount		int			NOT NULL,
    CONSTRAINT PK_Cart PRIMARY KEY (user_id, company_id, game_name),
	CONSTRAINT FK_Cart_User FOREIGN KEY (user_id) REFERENCES User(id),
	CONSTRAINT FK_Cart_Company FOREIGN KEY (company_id) REFERENCES Company(id),
	CONSTRAINT FK_Cart_Game FOREIGN KEY (company_id, game_name) REFERENCES Game(company_id, name)
);

create table Category(	-- 8th
	company_id	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    game_name	varchar(45)	NOT NULL,	-- entity's key (will combine to be PK)
	category	varchar(45)	NOT NULL,	-- key (will combine to be PK)
    CONSTRAINT PK_Category PRIMARY KEY (company_id, game_name, category),
	CONSTRAINT FK_Category_Company FOREIGN KEY (company_id) REFERENCES Company(id),
	CONSTRAINT FK_Category_Game FOREIGN KEY (company_id, game_name) REFERENCES Game(company_id, name)
);

create table Language(	-- 9th
	company_id	varchar(45)	NOT NULL,	-- foreign key (will combine to be PK)
    game_name	varchar(45)	NOT NULL,	-- entity's key (will combine to be PK)
	language	varchar(45)	NOT NULL,	-- key (will combine to be PK)
    CONSTRAINT PK_Language PRIMARY KEY (company_id, game_name, language),
	CONSTRAINT FK_Language_Company FOREIGN KEY (company_id) REFERENCES Company(id),
	CONSTRAINT FK_Language_Game FOREIGN KEY (company_id, game_name) REFERENCES Game(company_id, name)
);

ALTER TABLE game  -- 승인 여부 추가
ADD approval BOOLEAN DEFAULT FALSE NOT NULL;

 -- 이미지 칼럼 추가
ALTER TABLE game ADD img mediumblob;

-- 카테고리 CASCADE 추가
ALTER TABLE `dbs_project`.`category` 
DROP FOREIGN KEY `FK_Category_Company`,
DROP FOREIGN KEY `FK_Category_Game`;
ALTER TABLE `dbs_project`.`category` 
ADD CONSTRAINT `FK_Category_Company`
  FOREIGN KEY (`company_id`)
  REFERENCES `dbs_project`.`company` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `FK_Category_Game`
  FOREIGN KEY (`company_id` , `game_name`)
  REFERENCES `dbs_project`.`game` (`company_id` , `name`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- 언어 CASCADE 추가
ALTER TABLE `dbs_project`.`language` 
DROP FOREIGN KEY `FK_Language_Company`,
DROP FOREIGN KEY `FK_Language_Game`;
ALTER TABLE `dbs_project`.`language` 
ADD CONSTRAINT `FK_Language_Company`
  FOREIGN KEY (`company_id`)
  REFERENCES `dbs_project`.`company` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `FK_Language_Game`
  FOREIGN KEY (`company_id` , `game_name`)
  REFERENCES `dbs_project`.`game` (`company_id` , `name`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- 게임 CASCADE 추가
ALTER TABLE `dbs_project`.`game` 
DROP FOREIGN KEY `FK_Game_Company`;
ALTER TABLE `dbs_project`.`game` 
ADD CONSTRAINT `FK_Game_Company`
  FOREIGN KEY (`company_id`)
  REFERENCES `dbs_project`.`company` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;