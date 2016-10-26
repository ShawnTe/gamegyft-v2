get '/payments/new' do 
	erb :'payments/new'
end

get '/payments/:id' do 
	erb :'payments/show'
end