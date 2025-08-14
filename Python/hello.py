while True:
    try:
        time = float(input("Enter the time: "))
        if 0 <= time <= 24:
            hour = int(time)
            minutes = int(round((time - hour) * 60))
            if hour == 0 or hour == 24:
                print(f"The time is 12:{minutes:02d} {'AM' if hour == 0 else 'PM'}")
            elif 1 <= hour <= 12:
                print(f"The time is {hour}:{minutes:02d}AM")
            elif 13 <= hour <= 23:
                num = hour - 12
                print(f"The time is {num}:{minutes:02d}PM")
            else:
                print("Invalid time entered. Please enter a value between 0 and 24.")
        else:
            print("Invalid time entered. Please enter a value between 0 and 24.")
    except ValueError:
        print("Invalid input. Please enter a number between 0 and 24.")