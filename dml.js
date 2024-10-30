//inserer Product 
INSERT INTO Product (Product_id, Product_Name, LastName, Category, Price)
VALUES 
(P01, 'Samsung Galaxy S20', 'Smartphone', '3299'),
(P02, 'ASSUS Notebook', 'Pc', '4599')
//insert custommer
INSERT INTO Custommer (Custommer_id, Custommer_Name , Custommer_Tel)
VALUES 
(C01 , 'Asma', 73621009),
(C02 , 'Refka', 71385823)
//insert Orders 
INSERT INTO Orders ( Custommer_id, Product_id, OrderDate, Quantitu, Total_amount)
VALUES
(C01, P02, null, 2, 9198),
(C01, P02 , 28/05/2020 , 1, 3299)