get '/games/new' do 
	@title = "Choose a Game"
	erb :'games/new'
end

get '/games/1' do 
	@title = "Play Game"
	erb :'games/show'
end