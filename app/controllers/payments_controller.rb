get '/payments/new' do
	erb :'payments/new'
end

get '/payments/:id' do
	erb :'payments/show'
end

# handled in payments.js
# post '/payments' do
# 	p "Got payment info!"
# 	redirect '/payments/1'
# end
