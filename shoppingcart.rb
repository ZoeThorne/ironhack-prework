class ShoppingCart

	# Adds empty list of items
  def initialize
    @items = []
  end

  # Adds new items to the cart
  def add_item(item)
  	@items.push(item)
  end

  # Calculates total price of cart
  def checkout
  	checkout_price = 0
		@items.each do |item|
			checkout_price += item.price
		end

		# Applies storewide discount of 10% if 5 or more items in cart
		if @items.count >= 5
			checkout_price = checkout_price/1.1
		else
		checkout_price
		end
  end
end

class Item 
  def initialize(name, price)
      @name = name
      @price = price
  end

  # Sets base price for normal items
  def price
      base_price = @price
  end
end

class Houseware < Item

	# Creates 5% discount if item costs more that £100
  def price
      base_price = @price
      if base_price >=100
      	discount_price = base_price/1.05
      	discount_price.to_i
      else
      	base_price
      end
  end
end

class Fruit < Item

	# Creates 10% discount if today is a weekend
  def price
  	require 'date'
      base_price = @price
      today = Date.today
      if (today.saturday?) || (today.sunday?)
      	discount_price = base_price/1.1
      	discount_price.to_i
      else
      	base_price
      end
  end
end

# Base prices of items
banana = Fruit.new("Banana", 10)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
hoover = Houseware.new("Vacuum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)

# Displays prices for easy checking
puts "Here are today's prices:"
puts "Bananas: #{banana.price}"
puts "Orange Juice: #{oj.price}"
puts "Rice: #{rice.price}"
puts "Vacuum Cleaner: #{hoover.price}"
puts "Anchovies: #{anchovies.price}"

# Creates new instance and calculates total
joshs_cart = ShoppingCart.new
joshs_cart.add_item(oj)
joshs_cart.add_item(rice)
puts "Josh's total comes to: #{joshs_cart.checkout}. Have a nice day!"

# Creates new instance and calculates total
zoes_cart = ShoppingCart.new
zoes_cart.add_item(banana)
zoes_cart.add_item(oj)
zoes_cart.add_item(rice)
zoes_cart.add_item(hoover)
zoes_cart.add_item(anchovies)
puts "Zoe's total comes to: #{zoes_cart.checkout}. Have a nice day!"