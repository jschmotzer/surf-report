class Beach < ActiveRecord::Base

  def self.get_data
    # every 24 hours
    # scrape each location url for conditions and wave range
    #create new record for each beach location
    url = "http://www.surfline.com/surf-report/diamond-head-oahu_4760/"

    data = Nokogiri::HTML(open(url))

    conditions_summary = data.css('div#observed-spot-conditions-summary').text
    waveheight = data.css('h2#observed-wave-range').text
    new_report = Beach.create(location: "Diamond Head", wave_height: waveheight, url: url, lat_long: "21.253, -157.809",
                 conditions_description: conditions_summary)
  end


  def showreport
    url = "http://www.surfline.com/surf-report/diamond-head-oahu_4760/"

    data = Nokogiri::HTML(open(url))

    conditions_summary = data.css('div#observed-spot-conditions-summary')
    

  end

  def waveheight
  	url = "http://www.surfline.com/surf-report/diamond-head-oahu_4760/"
    data = Nokogiri::HTML(open(url))
  	
  	wave_height = data.css('h2#observed-wave-range')
  
  end








end
