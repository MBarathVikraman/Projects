import requests
API_KEY="fca_live_SCo4ipwNRuXequfjOh6QbGFJy5iI4TBRMPNqhQjJ"
BASE_URL=f"https://api.freecurrencyapi.com/v1/latest?apikey={API_KEY}"
CURRENCIES=["EUR","USD","INR","JPY","AUD","CNY","GBP"]

def convert_currency(base):
    currencies=','.join(CURRENCIES)
    url=f"{BASE_URL}&base_currency={base}&currencies={currencies}"
    try:
        response=requests.get(url)
        data=response.json()
        return data["data"]
    except:
        print("Invalid Currency")
        return None
    
while True:
    base=input("Enter base currency(q for quit): ").upper()
    if base=="Q":
        break
    data=convert_currency(base)
    if not data:
        continue
    final=input("Enter output currency(a for all): ").upper()
    amount=int(input("Enter the amount to be converted from: "))
    del data[base]
    if (final=="A"):
        for ticker, value in data.items():
            print(f"{ticker}: {amount*value}")
    else:
        print(f"{final}: {amount*data[final]}")