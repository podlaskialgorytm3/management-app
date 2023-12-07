from flask import Flask

app = Flask(__name__)

# Ten endpoint jest dostępny pod adresem /hello
@app.route('/hello')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(port=5000)
