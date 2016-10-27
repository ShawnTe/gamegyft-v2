get '/payments/new' do
	@title = "Make a Payment"
	erb :'payments/new'
end

get '/payments/1' do
	@title = "Transaction Complete"
	erb :'payments/show'
end

# handled in payments.js
# post '/payments' do
# 	p "Got payment info!"
# 	redirect '/payments/1'
# end
