num = 0
time = int(input("whats the time"))
if time <= 12 and time > 0:
  print(f"The time is {time}AM")
elif time >= 24 and time > 12:
  num = time - 12
  print(f"The time is {num}PM")
