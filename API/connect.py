from flask import Flask, jsonify, request
import mysql.connector

# Utwórz połączenie z bazą danych MySQL
db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="sklep"
)

# Utwórz kursor do wykonywania zapytań SQL
cursor = db_connection.cursor()

# Inicjalizuj aplikację Flask
app = Flask(__name__)

# Definiuj endpoint do pobierania danych z bazy danych
@app.route('/api/dane')
def pobierz_dane():
    # Przykładowe zapytanie SQL
    zapytanie = "SELECT * FROM kategorie"

    # Wykonaj zapytanie
    cursor.execute(zapytanie)

    # Pobierz wyniki
    wyniki = cursor.fetchall()

    # Zamień wyniki na format JSON i zwróć jako odpowiedź
    return jsonify(wyniki)


if __name__ == '__main__':
    app.run(port=5000)
