get '/payments/new' do 
	@title = "Make a Payment"
	erb :'payments/new'
end

get '/payments/:id' do 
	@title = "Transaction Complete"
	erb :'payments/show'
end