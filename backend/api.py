from functions.get_message import get_message
from functions.update_message import update_message

def get_message_route():
    print("get_message")
    return get_message()

def update_message_route(data):
    print("update_message")
    return update_message(data)