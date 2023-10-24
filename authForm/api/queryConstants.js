export const insertUser = (id, firstName, lastName, email, passwordHash) =>
`INSERT INTO Users (Id, FirstName, LastName, Email, PasswordHash) 
 VALUES (${id}, ${firstName}, ${lastName}, ${email}, ${passwordHash});`;