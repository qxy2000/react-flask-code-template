from flask import Flask, request, jsonify
from flask_cors import CORS
from api import get_message_route, update_message_route

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/message/init', methods=['GET'])
def init_message():
    return get_message_route()

@app.route('/api/message/update', methods=['POST'])
def update_message():
    data = request.get_json()
    return update_message_route(data)


if __name__ == '__main__':
    app.run(debug=True, port=5002)
