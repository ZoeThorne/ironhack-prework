def wordsort(sentence)
	#defines the function

	split_sentence = sentence.split(/\W/)
	#splits the sentence and removes punctuation

	return split_sentence.sort{ |a,b|  a.upcase <=> b.upcase}
	#custom sort function
end

puts wordsort("My name is Inigo Montoya. You killed my father. Prepare to die!")
#calls the function
