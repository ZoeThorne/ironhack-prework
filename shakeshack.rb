class ShakeShop
	# Creates empty list of milkshakes
	def initialize
		@milkshakes = [ ]
	end

	# Creates method to add milkshakes to the list
	def add_milkshake(milkshake)
		@milkshakes.push(milkshake)
	end

	# Calculates total price of the milkshakes
	def checkout
		checkout_price = 0
		@milkshakes.each do |shake|
			checkout_price += shake.price_of_milkshake
		end
		checkout_price
	end
end

class MilkShake
	# Allows @base_price and @ingredients to be accessed outside the instance
	attr_reader :base_price, :ingredients

	# Sets base price and creates empty list of ingredients
  def initialize
    @base_price = 3
    @ingredients = [ ]
  end

  # Creates a method to add ingredients
  def add_ingredient(ingredient)
    @ingredients.push(ingredient)
  end


  def price_of_milkshake
	  #Let's establish what our counter should be before we start adding ingredients into the mix
  total_price_of_milkshake = @base_price
  #Add each ingredients price to our total
  @ingredients.each do |ingredient|
    total_price_of_milkshake += ingredient.price
  end
  #return  our total price to whoever called for it
   total_price_of_milkshake
end
end

class Ingredient
	# Allows @name and @price to be accessed outside of the instance
	attr_reader :name, :price
  def initialize(name, price)
    @name = name
    @price = price
  end
end

# Creates Nizar's Milkshake and adds ingredients
nizars_milkshake = MilkShake.new
banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)


# Creates Zoe's Milkshake and adds ingredients
zoes_milkshake = MilkShake.new
peanut_butter = Ingredient.new("Peanut Butter", 3)
zoes_milkshake.add_ingredient(peanut_butter)
zoes_milkshake.add_ingredient(chocolate_chips)

# Creates Nick's Milkshake and adds ingredients
nicks_milkshake = MilkShake.new
strawberry = Ingredient.new("Strawberry", 2)
nicks_milkshake.add_ingredient(strawberry)
nicks_milkshake.add_ingredient(banana)

# Creates list of total milkshakes and adds the three milkshakes to it
all_the_milkshakes = ShakeShop.new
all_the_milkshakes.add_milkshake(nizars_milkshake)
all_the_milkshakes.add_milkshake(zoes_milkshake)
all_the_milkshakes.add_milkshake(nicks_milkshake)

# Displays the individual costs and total price
puts nizars_milkshake.price_of_milkshake
puts zoes_milkshake.price_of_milkshake
puts nicks_milkshake.price_of_milkshake
puts "Total cost of milkshakes: #{all_the_milkshakes.checkout}"


# My next stage to improve this further would be to include user input
# (so new milkshakes would be created from the name and ingredients typed in)
# and create hashes so the milkshakes could be assigned names