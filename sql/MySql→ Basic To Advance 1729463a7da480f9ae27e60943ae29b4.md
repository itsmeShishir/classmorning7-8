# MySql→ Basic To Advance

### **1. Introduction to MySQL**

### **1.1 What is MySQL?**

- **Definition:** 
MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL).
- **Uses:** Web applications, data warehousing, e-commerce, logging applications, etc.
- **Advantages:** Speed, reliability, ease of use, and strong community support.

### **1.2 Installation and Setup**

- **Installation Steps:**
    - Download MySQL from the [official website](https://dev.mysql.com/downloads/).
    - Follow installation instructions for your operating system (Windows, macOS, Linux).
    - Configure MySQL server and set a root password.
- **Connecting to MySQL:**
    - Using MySQL Command Line Client:
        
        ```bash
        
        mysql -u root -p
        ```
        
    - Using GUI tools like MySQL Workbench.

### **1.3 MySQL vs Other Databases**

- **Comparison with PostgreSQL, SQL Server, SQLite:**
    - Highlight differences in features, performance, licensing, and use cases.

---

### **2. Basic Concepts**

### **2.1 Databases, Tables, Rows, and Columns**

- **Database:** A collection of related tables.
- **Table:** Consists of rows and columns.
- **Row (Record):** A single data entry.
- **Column (Field):** A single data attribute.

### **2.2 Data Types**

- **Numeric Types:** INT, FLOAT, DECIMAL
- **String Types:** VARCHAR, CHAR, TEXT
- **Date and Time Types:** DATE, DATETIME, TIMESTAMP
- **Example: Creating a Table with Various Data Types**
    
    ```sql
    
    CREATE DATABASE SchoolDB;
    USE SchoolDB;
    
    CREATE TABLE Students (
        StudentID INT PRIMARY KEY AUTO_INCREMENT,
        FirstName VARCHAR(50),
        LastName VARCHAR(50),
        BirthDate DATE,
        Email VARCHAR(100),
        GPA DECIMAL(3,2)
    );
    ```
    

---

### **3. CRUD Operations**

CRUD stands for Create, Read, Update, Delete – the four basic operations for managing data in a database.

### **3.1 CREATE**

- **Inserting Data into a Table**
    
    ```sql
    
    INSERT INTO Students (FirstName, LastName, BirthDate, Email, GPA)
    VALUES ('John', 'Doe', '2000-05-15', 'john.doe@example.com', 3.75);
    
    ```
    

### **3.2 READ**

- **Selecting Data from a Table**
    
    ```sql
    
    SELECT * FROM Students;
    ```
    
- **Selecting Specific Columns**
    
    ```sql
    
    SELECT FirstName, LastName, Email FROM Students;
    ```
    

### **3.3 UPDATE**

- **Updating Existing Records**
    
    ```sql
    
    UPDATE Students
    SET Email = 'john.doe@newdomain.com', GPA = 3.85
    WHERE StudentID = 1;
    ```
    

### **3.4 DELETE**

- **Deleting Records from a Table**
    
    ```sql
    
    DELETE FROM Students
    WHERE StudentID = 1;
    ```
    

---

### **4. SQL Queries**

### **4.1 SELECT Statements**

- **Basic SELECT**
    
    ```sql
    
    SELECT * FROM Students;
    ```
    
- **SELECT with WHERE Clause**
    
    ```sql
    
    SELECT FirstName, LastName FROM Students
    WHERE GPA > 3.5;
    ```
    

### **4.2 Filtering Data**

- **Using Operators: =, <, >, <=, >=, <>**
    
    ```sql
    
    SELECT * FROM Students
    WHERE BirthDate >= '2000-01-01';
    ```
    
- **Using LIKE for Pattern Matching**
    
    ```sql
    SELECT * FROM Students
    WHERE Email LIKE '%@example.com';
    ```
    

### **4.3 Sorting Data**

- **ORDER BY Clause**
    
    ```sql
    
    SELECT * FROM Students
    ORDER BY LastName ASC, FirstName DESC
    ```
    

### **4.4 Grouping Data**

- **GROUP BY Clause**
    
    ```sql
    
    SELECT GPA, COUNT(*) AS NumberOfStudents
    FROM Students
    GROUP BY GPA;
    ```
    
- **HAVING Clause**
    
    ```sql
    
    SELECT GPA, COUNT(*) AS NumberOfStudents
    FROM Students
    GROUP BY GPA
    HAVING COUNT(*) > 1;
    ```
    

---

### **5. Joins**

Joins are used to combine rows from two or more tables based on related columns.

### **5.1 INNER JOIN**

- **Example: Retrieving Students with Their Enrollments**
    
    ```sql
    
    SELECT Students.FirstName, Students.LastName, Enrollments.CourseID
    FROM Students
    INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;
    ```
    

### **5.2 LEFT (OUTER) JOIN**

- **Example: All Students and Their Enrollments (if any)**
    
    ```sql
    
    SELECT Students.FirstName, Students.LastName, Enrollments.CourseID
    FROM Students
    LEFT JOIN Enrollments ON Students.StudentID = Enrollments.StudentI
    ```
    

### **5.3 RIGHT (OUTER) JOIN**

- **Example: All Enrollments and the Corresponding Students**
    
    ```sql
    
    SELECT Students.FirstName, Students.LastName, Enrollments.CourseID
    FROM Students
    RIGHT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;
    ```
    

### **5.4 FULL (OUTER) JOIN**

- **Note:** MySQL does not support FULL OUTER JOIN directly. It can be simulated using UNION.
    
    ```sql
    
    SELECT Students.FirstName, Students.LastName, Enrollments.CourseID
    FROM Students
    LEFT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
    UNION
    SELECT Students.FirstName, Students.LastName, Enrollments.CourseID
    FROM Students
    RIGHT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;
    
    ```
    

---

### **6. Indexes**

Indexes improve the speed of data retrieval operations on a database table.

### **6.1 Creating Indexes**

- **Single-Column Index**
    
    ```sql
    
    CREATE INDEX idx_lastname ON Students (LastName);
    ```
    
- **Composite Index**
    
    ```sql
    
    CREATE INDEX idx_name_gpa ON Students (LastName, GPA);
    
    ```
    

### **6.2 Using Indexes**

- **Query Optimization Example**
    
    ```sql
    
    EXPLAIN SELECT * FROM Students
    WHERE LastName = 'Doe';
    
    ```
    

### **6.3 Removing Indexes**

```go
go
Copy code
```sql
DROP INDEX idx_lastname ON Students;
```

```

---

### **7. Advanced Topics**

### **7.1 Stored Procedures**

- **Definition:** A set of SQL statements that can be stored and executed on the server.
- **Creating a Stored Procedure**
    
    ```sql
    
    DELIMITER //
    
    CREATE PROCEDURE GetStudentByID(IN student_id INT)
    BEGIN
        SELECT * FROM Students WHERE StudentID = student_id;
    END //
    
    DELIMITER ;
    
    ```
    
- **Calling a Stored Procedure**
    
    ```sql
    
    CALL GetStudentByID(1);
    
    ```
    

### **7.2 Triggers**

- **Definition:** A trigger is a set of actions that are executed automatically in response to certain events on a table.
- **Creating a Trigger**
    
    ```sql
    
    CREATE TRIGGER before_student_insert
    BEFORE INSERT ON Students
    FOR EACH ROW
    BEGIN
        SET NEW.Email = LOWER(NEW.Email);
    END;
    
    ```
    

### **7.3 Views**

- **Definition:** A virtual table based on the result-set of an SQL statement.
- **Creating a View**
    
    ```sql
    
    CREATE VIEW StudentGPA AS
    SELECT FirstName, LastName, GPA
    FROM Students;
    
    ```
    
- **Using a View**
    
    ```sql
    
    SELECT * FROM StudentGPA WHERE GPA > 3.5;
    
    ```
    

### **7.4 Transactions**

- **Definition:** A sequence of operations performed as a single logical unit of work.
- **Using Transactions**
    
    ```sql
    
    START TRANSACTION;
    
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
    
    COMMIT;
    
    ```
    
- **Rollback Example**
    
    ```sql
    
    START TRANSACTION;
    
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
    -- Suppose an error occurs here
    ROLLBACK;
    
    ```
    

### **7.5 Optimization**

- **Query Optimization Techniques:**
    - Using indexes effectively
    - Avoiding SELECT *
    - Limiting the use of subqueries
    - Analyzing query execution plans with EXPLAIN
- **Example: Optimizing a Query**
    
    ```sql
    
    -- Original Query
    SELECT * FROM Students WHERE LastName = 'Doe';
    
    -- Optimized Query with specific columns and index
    CREATE INDEX idx_lastname ON Students (LastName);
    SELECT FirstName, LastName, Email FROM Students WHERE LastName = 'Doe';
    
    ```
    

---

###