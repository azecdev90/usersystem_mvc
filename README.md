![NODEJS](https://user-images.githubusercontent.com/58860019/74439780-20fbdc00-4e6d-11ea-9a92-8864d8344db9.jpeg)

# UserSystem_MVC
This is user and login system based on Javascript technology. This software is my implementation MVC design pattern with simple functionality for users. Goal of MVC architecture is to divide software in separate but interconnected parts. Also basic security implementation is part of this software.

##
1. [Architecture](#architecture)
2. [Security](#Security)
3. [Packages](#Packages)

## Architecture
#### 1. Assets - This directory contain SASS, Less and similars files.
#### 2. Controllers - Directory with controllers of application. (C - component of MVC architecture)
#### 3. Models - Models directory contains files for databases.(M - component of MVC architecture)
#### 4. Node_modules - Folder contains files for Node modules.
#### 5. Public - Folder for CSS,JS and similars files. 
#### 6. Routes - Route folders is folder where are application routes divided in seperate files to implement better routes organisation. 
#### 7. Tests - Folder contain files for writing tests.
#### 8. Views - Files for end users. (V component of MVC architecture)
---

## Security
Basic security measures are implemented in this software. 
1. Validation with Express validator
2. XSS protection with Helmet package
3. Bcrypt is implemented to keep passwords safe in MongoDb
---

## Packages
#### 1. [Bcrypt](https://www.npmjs.com/package/bcryptjs)
#### 2. [Body-parser](https://www.npmjs.com/package/body-parser)
#### 3. [EJS](https://www.npmjs.com/package/ejs)
#### 4. [Express](https://www.npmjs.com/package/express)
#### 5. [Express Session](https://www.npmjs.com/package/express-session)
#### 6. [Express Validator](https://www.npmjs.com/package/express-validator)
#### 7. [Gulp](https://www.npmjs.com/package/gulp)
#### 8. [Gulp-Sass](https://www.npmjs.com/package/gulp-sass)
#### 9. [Helmet](https://www.npmjs.com/package/helmet)
#### 10. [MongoDB](https://www.npmjs.com/package/mongodb)
#### 11. [Mongoose](https://www.npmjs.com/package/mongoose)
---

