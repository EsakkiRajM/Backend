## Database- Day -2: MySQL   

**Design DB model for Guvi Zen class**   

 - I have mentioned all queries in this file.

 - I have completed and submitted Design DB model task, kindly check and verify it.   

 - I have attached `Output image` for your reference  

 - #### student table:   

**create query:**

``` bash
CREATE TABLE student (
	student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    student_email VARCHAR(50)
);
```

**insert query:**

``` bash
INSERT INTO student (student_id, student_name, student_email) VALUES 
(1, "Esakki Raj", "esakkiraj1150@gmail.com"),
(2, "Susila", "susilaesakki@gmail.com"),
(3, "sakthi", "sakthi@gmail.com"),
(4, "kumaran", "kumaran@gmail.com"),
(5, "ranjith", "ranjith@gmail.com")
```

    **Output:**
    ``` bash 
    select * from student;
    ```

 ![output image](Output/student.PNG)