![Crud usage demo](./resources/readme-images/header-image.png)

# ML-Enabled Invoice Management Application

This application was made in an attempt to simplify and streamline the B2B account transactions with the help of machine learning. This application helps in predicting accurate range of settlement date for bill invoices catering to companies with all client bases.

I have used **XGBoost** Algorithm to create an ML model based on the previous fullfilment dates and delays of the client. This model is hosted on a **Flask server** that accepts the selected row data and fills the **aging-bucket** column of the table.

The database is made in **MySQL** and the backend is written in **Node.js** and **Express.js**.

<br></br>

## Installation

#### After downloading the project folder:

1. Navigate to the **frontend** folder and run

    ```bash
       npm install
    ```

2. Navigate to the **main-server** folder and run
    ```bash
       npm install
    ```
3. Navigate to **flask-server** folder and run

    ```bash
       %pip install flask_cors
    ```

    _Also install any other packages which may not be intstalled_

4. Find the used **dataset.sql** in the **resources** folder and import it in your MySQL Application

<br></br>

## Running the Application

1. Navigate to the **main-server** folder and run

    ```bash
       nodemon
    ```

2. Navigate to the **frontend** folder and run

    ```bash
       npm start
    ```

<br></br>

## Usage

### Crud Usage

![Crud usage demo](./resources/readme-images/crud-usage-gif.gif)
