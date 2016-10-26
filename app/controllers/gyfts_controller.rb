get '/gyfts/new' do 
	@title = "Send Gyft"
	erb :'gyfts/new'
end

get '/gyfts/:id' do
	@title = "Your Gyft" 
	erb :'gyfts/show'
end