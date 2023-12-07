from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="management-db"
)

cursor = db_connection.cursor()

app = Flask(__name__)
CORS(app)

@app.route('/api/dane')
def pobierz_dane():
    query = "SELECT * FROM projects"
    cursor.execute(query)
    wyniki = cursor.fetchall()
    return jsonify(wyniki)

if __name__ == '__main__':
    app.run(port=5000)
