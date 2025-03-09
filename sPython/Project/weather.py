# pip install requests
import requests

def weather():
    inputa = input("Enter city name: ")
    inputs = inputa.title()
    url = f"https://api.weatherapi.com/v1/current.json?key=9c9940e9e1bf4e4ca6013952243112&q={inputs}&aqi=yes"
    response = requests.get(url)
    data = response.json()
    print(f"{data['location']['name']}, {data['location']['country']}")
    print(f"{data['current']['temp_c']}, {data['current']['condition']['text']}")

weather()