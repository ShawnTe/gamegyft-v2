get '/gyfts/new' do
	erb :'gyfts/new'
end

get '/gyfts/:id' do
	erb :'gyfts/show'
end

post '/gyfts' do
	redirect '/payments/new'
end
