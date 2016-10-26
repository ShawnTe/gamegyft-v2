get '/games/new' do 
	@title = "Choose a Game"
	erb :'games/new'
end

get '/games/:id' do 
	@title = "Play Game"
	erb :'games/show'
end