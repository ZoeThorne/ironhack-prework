number = 1

while number <= 100
	result = ""
	first_num = number.to_s
	#starts the while loop and turns the number into a string

	if number % 3 == 0
	result << "Fizz"
	end
	# adds 'Fizz' to the result if divisible by 3

	if number % 5 == 0
	result << "Buzz"
	end
	# adds 'Buzz' to the result if divisible by 3

	if first_num[0] == "1"	
	result << "Bang"
	end
	# adds 'Bang' to the result if first number is a 1

	if number % 3 != 0 && number % 5 != 0 && first_num[0] != "1"
	result << number.to_s
	# adds the original number to the result if none of the above
	end
	puts result
	number = number + 1
	# adds one to the counter

end
	
	

