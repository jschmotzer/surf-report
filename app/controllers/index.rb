get '/' do
  
  @report = Beach.get_data
  # @report = Beach.create()
  # @report = @report.showreport
  # @wave = Beach.create()
  # @wave = @wave.waveheight

  if request.xhr?
    content_type :json
    @report.wave_height.split(' ')[0].split('-').last.to_json
  else
    erb :index
  end
end


#----------- SESSIONS -----------

get '/sessions/new' do
  # render sign-in page
  erb :sign_in
end

post '/sessions' do
  # sign-in
    @user = User.find_by_email(params[:email])

  #if @user.authenticate(params[:password])
  if @user.authenticate(params[:password])
    @users = User.all
    session[:id] = @user.id
    puts session
    erb :index
  else
    redirect '/'
  end
end

get '/sessions/:id' do
  # sign-out -- invoked via AJAX
  session[:id] = nil
  redirect '/'
end

get '/users/new' do
  # render sign-up page
  erb :sign_up
end

post '/users' do
  # sign-up a new user
  p params
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    @users = User.all
    erb :index
  else
    redirect '/'
  end
end
