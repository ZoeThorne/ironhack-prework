number = 1

while number <= 100
	result = ""
	first_num = number.to_s

	if number % 3 == 0
	result << "Fizz"
	end

	if number % 5 == 0
	result << "Buzz"
	end

	if first_num[0] == "1"	
	result << "Bang"
	end

	if number % 3 != 0 && number % 5 != 0 && first_num[0] != "1"
	result << number.to_s
	end
	puts result
	number = number + 1

end
	
	

