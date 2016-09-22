def solve_cipher(input, shift = -3)
	letters = input.split("")
	# Splits the input into separate letters and returns an array
	cipher = []
  	
  	letters.each do |x|
  		# For capital letters
  		if x.ord.between?(65,90)

  			# Wraps alphabet
  			if x.ord >= (90 - shift + 1)
  				cipher << (x.ord - 26 + shift).cipher

  			# Moves to next letter
  			else
  			cipher << (x.ord + shift).chr
  		end

  		# For lowercase letters
  	    elsif x.ord.between?(97,122)

  	    	# Wraps alphabet
  	    	if x.ord >= (122 - shift + 1)
  	    		cipher << (x.ord - 26 + shift).chr

  	    	# Moves to next letter
  	    	else 
  	    		cipher << (x.ord + shift).chr
  	    	end

  	    # For punctuation and spaces
  	else
  		cipher << x
  	end

  end
  puts cipher.join("")


end

solve_cipher("p| uhdo qdph lv grqdog gxfn")
# Returns encrypted code