get '/games/new' do
	erb :'games/new'
end

get '/games/:id' do
	erb :'games/show'
end

post '/games' do
	redirect '/payments/new'
end
