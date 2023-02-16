describe('Testing the presence of keywords in the websites', () => {


it("Searching 'Breakthrough' in 'http://wearablesensors.ucsd.edu/news'", () => {
	cy.visit("http://wearablesensors.ucsd.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'http://www.tohoku.ac.jp/en/press/index.html'", () => {
	cy.visit("http://www.tohoku.ac.jp/en/press/index.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'http://www.tohoku.ac.jp/en/press/index.html'", () => {
	cy.visit("http://www.tohoku.ac.jp/en/press/index.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://beta.nsf.gov/news/releases'", () => {
	cy.visit("https://beta.nsf.gov/news/releases");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://beta.nsf.gov/news/releases'", () => {
	cy.visit("https://beta.nsf.gov/news/releases");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://carnegiescience.edu/news'", () => {
	cy.visit("https://carnegiescience.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://carnegiescience.edu/news'", () => {
	cy.visit("https://carnegiescience.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'http://wearablesensors.ucsd.edu/news'", () => {
	cy.visit("http://wearablesensors.ucsd.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://cse.umn.edu/college/news?field_category_target_id=161'", () => {
	cy.visit("https://cse.umn.edu/college/news?field_category_target_id=161");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://cse.umn.edu/college/news?view_query=block_config_key%3D&field_category_target_id=All&page=0'", () => {
	cy.visit("https://cse.umn.edu/college/news?view_query=block_config_key%3D&field_category_target_id=All&page=0");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://cse.umn.edu/college/news?field_category_target_id=151'", () => {
	cy.visit("https://cse.umn.edu/college/news?field_category_target_id=151");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://cse.umn.edu/college/news?view_query=block_config_key%3D&field_category_target_id=All&page=0'", () => {
	cy.visit("https://cse.umn.edu/college/news?view_query=block_config_key%3D&field_category_target_id=All&page=0");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://cse.umn.edu/college/news?field_category_target_id=151'", () => {
	cy.visit("https://cse.umn.edu/college/news?field_category_target_id=151");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://cse.umn.edu/college/news?field_category_target_id=161'", () => {
	cy.visit("https://cse.umn.edu/college/news?field_category_target_id=161");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://csunshinetoday.csun.edu/category/science-and-technology/'", () => {
	cy.visit("https://csunshinetoday.csun.edu/category/science-and-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://discover.lanl.gov/news/all-news/'", () => {
	cy.visit("https://discover.lanl.gov/news/all-news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://csunshinetoday.csun.edu/category/science-and-technology/'", () => {
	cy.visit("https://csunshinetoday.csun.edu/category/science-and-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://earth.stanford.edu/earth-matters#gs.8gv00g'", () => {
	cy.visit("https://earth.stanford.edu/earth-matters#gs.8gv00g");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://engineering.princeton.edu/news'", () => {
	cy.visit("https://engineering.princeton.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://engineering.purdue.edu/Engr/AboutUs/News/all-news'", () => {
	cy.visit("https://engineering.purdue.edu/Engr/AboutUs/News/all-news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://engineering.purdue.edu/Engr/AboutUs/News/all-news'", () => {
	cy.visit("https://engineering.purdue.edu/Engr/AboutUs/News/all-news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://earth.stanford.edu/earth-matters#gs.8gv00g'", () => {
	cy.visit("https://earth.stanford.edu/earth-matters#gs.8gv00g");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://engineering.tamu.edu/news/newsfeed.html'", () => {
	cy.visit("https://engineering.tamu.edu/news/newsfeed.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://engineering.princeton.edu/news'", () => {
	cy.visit("https://engineering.princeton.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://discover.lanl.gov/news/all-news/'", () => {
	cy.visit("https://discover.lanl.gov/news/all-news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://ethz.ch/en/news-and-events/eth-news/further-news.html'", () => {
	cy.visit("https://ethz.ch/en/news-and-events/eth-news/further-news.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://inl.gov/news/news-archive/?y=&type=news_release&areas=&programs=&string='", () => {
	cy.visit("https://inl.gov/news/news-archive/?y=&type=news_release&areas=&programs=&string=");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://ethz.ch/en/news-and-events/eth-news/further-news.html'", () => {
	cy.visit("https://ethz.ch/en/news-and-events/eth-news/further-news.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://inl.gov/news/news-archive/?y=&type=news_release&areas=&programs=&string='", () => {
	cy.visit("https://inl.gov/news/news-archive/?y=&type=news_release&areas=&programs=&string=");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://engineering.tamu.edu/news/newsfeed.html'", () => {
	cy.visit("https://engineering.tamu.edu/news/newsfeed.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://kellercenter.princeton.edu/people/teams-startups'", () => {
	cy.visit("https://kellercenter.princeton.edu/people/teams-startups");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://liu.se/en/news/archive'", () => {
	cy.visit("https://liu.se/en/news/archive");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://kellercenter.princeton.edu/people/teams-startups'", () => {
	cy.visit("https://kellercenter.princeton.edu/people/teams-startups");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://mime.oregonstate.edu/feature-story'", () => {
	cy.visit("https://mime.oregonstate.edu/feature-story");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.berkeley.edu/category/research/'", () => {
	cy.visit("https://news.berkeley.edu/category/research/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.berkeley.edu/category/research/'", () => {
	cy.visit("https://news.berkeley.edu/category/research/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.berkeley.edu/topics/technology-and-engineering/'", () => {
	cy.visit("https://news.berkeley.edu/topics/technology-and-engineering/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://mime.oregonstate.edu/feature-story'", () => {
	cy.visit("https://mime.oregonstate.edu/feature-story");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.chapman.edu/category/science-engineering/'", () => {
	cy.visit("https://news.chapman.edu/category/science-engineering/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.cornell.edu/archive?categories_main%5B14242%5D=14242&categories_main%5B14244%5D=14244&categories_main%5B15621%5D=15621&categories_main%5B15056%5D=15056&categories_main%5B14252%5D=14252'", () => {
	cy.visit("https://news.cornell.edu/archive?categories_main%5B14242%5D=14242&categories_main%5B14244%5D=14244&categories_main%5B15621%5D=15621&categories_main%5B15056%5D=15056&categories_main%5B14252%5D=14252");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://liu.se/en/news/archive'", () => {
	cy.visit("https://liu.se/en/news/archive");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.chapman.edu/category/science-engineering/'", () => {
	cy.visit("https://news.chapman.edu/category/science-engineering/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.cornell.edu/archive?categories_main%5B14242%5D=14242&categories_main%5B14244%5D=14244&categories_main%5B15621%5D=15621&categories_main%5B15056%5D=15056&categories_main%5B14252%5D=14252'", () => {
	cy.visit("https://news.cornell.edu/archive?categories_main%5B14242%5D=14242&categories_main%5B14244%5D=14244&categories_main%5B15621%5D=15621&categories_main%5B15056%5D=15056&categories_main%5B14252%5D=14252");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.gatech.edu/categories/earth-and-environment'", () => {
	cy.visit("https://news.gatech.edu/categories/earth-and-environment");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.berkeley.edu/topics/technology-and-engineering/'", () => {
	cy.visit("https://news.berkeley.edu/topics/technology-and-engineering/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.gatech.edu/categories/science-and-technology'", () => {
	cy.visit("https://news.gatech.edu/categories/science-and-technology");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.gatech.edu/categories/earth-and-environment'", () => {
	cy.visit("https://news.gatech.edu/categories/earth-and-environment");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.gatech.edu/categories/science-and-technology'", () => {
	cy.visit("https://news.gatech.edu/categories/science-and-technology");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.itmo.ru/en/science/new_materials/'", () => {
	cy.visit("https://news.itmo.ru/en/science/new_materials/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.iu.edu/news/'", () => {
	cy.visit("https://news.iu.edu/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.itmo.ru/en/science/new_materials/'", () => {
	cy.visit("https://news.itmo.ru/en/science/new_materials/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.ku.dk/green-solutions/'", () => {
	cy.visit("https://news.ku.dk/green-solutions/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.mit.edu/'", () => {
	cy.visit("https://news.mit.edu/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.ncsu.edu/category/research-and-innovation/'", () => {
	cy.visit("https://news.ncsu.edu/category/research-and-innovation/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.ncsu.edu/category/research-and-innovation/'", () => {
	cy.visit("https://news.ncsu.edu/category/research-and-innovation/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.ku.dk/green-solutions/'", () => {
	cy.visit("https://news.ku.dk/green-solutions/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.nd.edu/news/category/research/'", () => {
	cy.visit("https://news.nd.edu/news/category/research/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.iu.edu/news/'", () => {
	cy.visit("https://news.iu.edu/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.nd.edu/news/category/research/'", () => {
	cy.visit("https://news.nd.edu/news/category/research/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.mit.edu/'", () => {
	cy.visit("https://news.mit.edu/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.northwestern.edu/research-and-innovation/science-and-technology'", () => {
	cy.visit("https://news.northwestern.edu/research-and-innovation/science-and-technology");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.nus.edu.sg/?h=1&t=highlights'", () => {
	cy.visit("https://news.nus.edu.sg/?h=1&t=highlights");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.northwestern.edu/research-and-innovation/science-and-technology'", () => {
	cy.visit("https://news.northwestern.edu/research-and-innovation/science-and-technology");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.rice.edu/news?groupid=28.9937.81433.81536&pid=1186009&startgroup=28.9937.81433.81499&page=136'", () => {
	cy.visit("https://news.rice.edu/news?groupid=28.9937.81433.81536&pid=1186009&startgroup=28.9937.81433.81499&page=136");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.rice.edu/news?groupid=28.9937.81433.81536&pid=1186009&startgroup=28.9937.81433.81499&page=136'", () => {
	cy.visit("https://news.rice.edu/news?groupid=28.9937.81433.81536&pid=1186009&startgroup=28.9937.81433.81499&page=136");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.stanford.edu/section/science-technology/'", () => {
	cy.visit("https://news.stanford.edu/section/science-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.nus.edu.sg/?h=1&t=highlights'", () => {
	cy.visit("https://news.nus.edu.sg/?h=1&t=highlights");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.umich.edu/category/science-technology/'", () => {
	cy.visit("https://news.umich.edu/category/science-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.unt.edu/news-releases?page=1'", () => {
	cy.visit("https://news.unt.edu/news-releases?page=1");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.unt.edu/news-releases?page=1'", () => {
	cy.visit("https://news.unt.edu/news-releases?page=1");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.usc.edu/category/science-technology/'", () => {
	cy.visit("https://news.usc.edu/category/science-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.umich.edu/category/science-technology/'", () => {
	cy.visit("https://news.umich.edu/category/science-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.utexas.edu/science-technology/'", () => {
	cy.visit("https://news.utexas.edu/science-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.utexas.edu/science-technology/'", () => {
	cy.visit("https://news.utexas.edu/science-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.virginia.edu/node?csid=6421455&page=0'", () => {
	cy.visit("https://news.virginia.edu/node?csid=6421455&page=0");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.stanford.edu/section/science-technology/'", () => {
	cy.visit("https://news.stanford.edu/section/science-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.virginia.edu/node?csid=6421455&page=0'", () => {
	cy.visit("https://news.virginia.edu/node?csid=6421455&page=0");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.usc.edu/category/science-technology/'", () => {
	cy.visit("https://news.usc.edu/category/science-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.wfu.edu/'", () => {
	cy.visit("https://news.wfu.edu/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.wsu.edu/category/science-technology/'", () => {
	cy.visit("https://news.wsu.edu/category/science-technology/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://news.wsu.edu/category/science-technology/'", () => {
	cy.visit("https://news.wsu.edu/category/science-technology/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://newsen.pku.edu.cn/news/research.html'", () => {
	cy.visit("https://newsen.pku.edu.cn/news/research.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://newsroom.ucla.edu/topics/environment'", () => {
	cy.visit("https://newsroom.ucla.edu/topics/environment");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://newsen.pku.edu.cn/news/research.html'", () => {
	cy.visit("https://newsen.pku.edu.cn/news/research.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://newsroom.ucla.edu/topics/science'", () => {
	cy.visit("https://newsroom.ucla.edu/topics/science");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://physicalsciences.uchicago.edu/news/'", () => {
	cy.visit("https://physicalsciences.uchicago.edu/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://news.wfu.edu/'", () => {
	cy.visit("https://news.wfu.edu/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://newsroom.ucla.edu/topics/environment'", () => {
	cy.visit("https://newsroom.ucla.edu/topics/environment");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://newsroom.ucla.edu/topics/science'", () => {
	cy.visit("https://newsroom.ucla.edu/topics/science");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://physicalsciences.uchicago.edu/news/'", () => {
	cy.visit("https://physicalsciences.uchicago.edu/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://pressemitteilungen.pr.uni-halle.de/index.php?modus=index&readvar=1&seiteladen=1&suchen=1#artikel'", () => {
	cy.visit("https://pressemitteilungen.pr.uni-halle.de/index.php?modus=index&readvar=1&seiteladen=1&suchen=1#artikel");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://pme.uchicago.edu/news'", () => {
	cy.visit("https://pme.uchicago.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://pme.uchicago.edu/news'", () => {
	cy.visit("https://pme.uchicago.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://research.unt.edu/news/research-showcase'", () => {
	cy.visit("https://research.unt.edu/news/research-showcase");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://pressemitteilungen.pr.uni-halle.de/index.php?modus=index&readvar=1&seiteladen=1&suchen=1#artikel'", () => {
	cy.visit("https://pressemitteilungen.pr.uni-halle.de/index.php?modus=index&readvar=1&seiteladen=1&suchen=1#artikel");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://research.unt.edu/news/research-showcase'", () => {
	cy.visit("https://research.unt.edu/news/research-showcase");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://twitter.com/EPFL_en'", () => {
	cy.visit("https://twitter.com/EPFL_en");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://twitter.com/EPFL_en'", () => {
	cy.visit("https://twitter.com/EPFL_en");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://twitter.com/LosAlamosNatLab'", () => {
	cy.visit("https://twitter.com/LosAlamosNatLab");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://twitter.com/LosAlamosNatLab'", () => {
	cy.visit("https://twitter.com/LosAlamosNatLab");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://tu-dresden.de/tu-dresden/newsportal/news'", () => {
	cy.visit("https://tu-dresden.de/tu-dresden/newsportal/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://tu-dresden.de/tu-dresden/newsportal/news'", () => {
	cy.visit("https://tu-dresden.de/tu-dresden/newsportal/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://vtx.vt.edu/categories/research.html'", () => {
	cy.visit("https://vtx.vt.edu/categories/research.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://vtx.vt.edu/categories/research.html'", () => {
	cy.visit("https://vtx.vt.edu/categories/research.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.aalto.fi/en/news?field_news_category_target_id[1731]=1731'", () => {
	cy.visit("https://www.aalto.fi/en/news?field_news_category_target_id[1731]=1731");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.atkinson.cornell.edu/news-events/'", () => {
	cy.visit("https://www.atkinson.cornell.edu/news-events/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.atkinson.cornell.edu/news-events/'", () => {
	cy.visit("https://www.atkinson.cornell.edu/news-events/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.aalto.fi/en/news?field_news_category_target_id[1731]=1731'", () => {
	cy.visit("https://www.aalto.fi/en/news?field_news_category_target_id[1731]=1731");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.caltech.edu/about/news'", () => {
	cy.visit("https://www.caltech.edu/about/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.caltech.edu/about/news'", () => {
	cy.visit("https://www.caltech.edu/about/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.bristol.ac.uk/news/news-results.html?sort=NewsArticle-datePublished&filter:NewsArticle-sourceOrganization=UoB&filter:NewsArticle-articleSection=Research'", () => {
	cy.visit("https://www.bristol.ac.uk/news/news-results.html?sort=NewsArticle-datePublished&filter:NewsArticle-sourceOrganization=UoB&filter:NewsArticle-articleSection=Research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.cam.ac.uk/news/science'", () => {
	cy.visit("https://www.cam.ac.uk/news/science");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.cam.ac.uk/news/science'", () => {
	cy.visit("https://www.cam.ac.uk/news/science");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.cam.ac.uk/news/technology'", () => {
	cy.visit("https://www.cam.ac.uk/news/technology");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.bristol.ac.uk/news/news-results.html?sort=NewsArticle-datePublished&filter:NewsArticle-sourceOrganization=UoB&filter:NewsArticle-articleSection=Research'", () => {
	cy.visit("https://www.bristol.ac.uk/news/news-results.html?sort=NewsArticle-datePublished&filter:NewsArticle-sourceOrganization=UoB&filter:NewsArticle-articleSection=Research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.csct.ac.uk/'", () => {
	cy.visit("https://www.csct.ac.uk/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.cam.ac.uk/news/technology'", () => {
	cy.visit("https://www.cam.ac.uk/news/technology");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.csct.ac.uk/'", () => {
	cy.visit("https://www.csct.ac.uk/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.deakin.edu.au/about-deakin/news-and-media-releases'", () => {
	cy.visit("https://www.deakin.edu.au/about-deakin/news-and-media-releases");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.deakin.edu.au/about-deakin/news-and-media-releases'", () => {
	cy.visit("https://www.deakin.edu.au/about-deakin/news-and-media-releases");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.engr.ncsu.edu/news/'", () => {
	cy.visit("https://www.engr.ncsu.edu/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.fudan.edu.cn/en/314/list.htm?bq=Research'", () => {
	cy.visit("https://www.fudan.edu.cn/en/314/list.htm?bq=Research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.fudan.edu.cn/en/314/list.htm?bq=Research'", () => {
	cy.visit("https://www.fudan.edu.cn/en/314/list.htm?bq=Research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ece.gatech.edu/news'", () => {
	cy.visit("https://www.ece.gatech.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.gist.ac.kr/en/html/sub06/060201.html'", () => {
	cy.visit("https://www.gist.ac.kr/en/html/sub06/060201.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.huck.psu.edu/news'", () => {
	cy.visit("https://www.huck.psu.edu/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ece.gatech.edu/news'", () => {
	cy.visit("https://www.ece.gatech.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.huck.psu.edu/news'", () => {
	cy.visit("https://www.huck.psu.edu/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.gist.ac.kr/en/html/sub06/060201.html'", () => {
	cy.visit("https://www.gist.ac.kr/en/html/sub06/060201.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.kit.edu/kit/english/news_2022.php'", () => {
	cy.visit("https://www.kit.edu/kit/english/news_2022.php");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.engr.ncsu.edu/news/'", () => {
	cy.visit("https://www.engr.ncsu.edu/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.kit.edu/kit/english/news_2022.php'", () => {
	cy.visit("https://www.kit.edu/kit/english/news_2022.php");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ku.ac.ae/research-news'", () => {
	cy.visit("https://www.ku.ac.ae/research-news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ku.ac.ae/research-news'", () => {
	cy.visit("https://www.ku.ac.ae/research-news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.lanl.gov/projects/feynman-center/'", () => {
	cy.visit("https://www.lanl.gov/projects/feynman-center/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.mtu.edu/news/archives/?category=Science+and+Engineering&year=2022'", () => {
	cy.visit("https://www.mtu.edu/news/archives/?category=Science+and+Engineering&year=2022");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.mtu.edu/news/archives/?category=Science+and+Engineering&year=2022'", () => {
	cy.visit("https://www.mtu.edu/news/archives/?category=Science+and+Engineering&year=2022");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.naefrontiers.org/17058/News'", () => {
	cy.visit("https://www.naefrontiers.org/17058/News");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.news.ucsb.edu/topics/research'", () => {
	cy.visit("https://www.news.ucsb.edu/topics/research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.news.ucsb.edu/topics/research'", () => {
	cy.visit("https://www.news.ucsb.edu/topics/research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.news.ucsb.edu/topics/sustainability'", () => {
	cy.visit("https://www.news.ucsb.edu/topics/sustainability");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.naefrontiers.org/17058/News'", () => {
	cy.visit("https://www.naefrontiers.org/17058/News");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.news.ucsb.edu/topics/sustainability'", () => {
	cy.visit("https://www.news.ucsb.edu/topics/sustainability");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ntu.edu.sg/news?listingKeyword=&sort=latest&categories=8504fdc4-d735-4ffd-ab1a-22d55d458df6%7C53e7dc49-ddef-4458-9e2b-221e1a763670%7C8ba21e89-cf48-4986-bbca-ddbaf345398b%7C60450cc0-e915-4069-9229-aaac635b6235&page=1'", () => {
	cy.visit("https://www.ntu.edu.sg/news?listingKeyword=&sort=latest&categories=8504fdc4-d735-4ffd-ab1a-22d55d458df6%7C53e7dc49-ddef-4458-9e2b-221e1a763670%7C8ba21e89-cf48-4986-bbca-ddbaf345398b%7C60450cc0-e915-4069-9229-aaac635b6235&page=1");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.lanl.gov/projects/feynman-center/'", () => {
	cy.visit("https://www.lanl.gov/projects/feynman-center/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.nyu.edu/about/news-publications/news/search.html?nt=academics:research'", () => {
	cy.visit("https://www.nyu.edu/about/news-publications/news/search.html?nt=academics:research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.nyu.edu/about/news-publications/news/search.html?nt=academics:research'", () => {
	cy.visit("https://www.nyu.edu/about/news-publications/news/search.html?nt=academics:research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.omu.ac.jp/en/info/news/'", () => {
	cy.visit("https://www.omu.ac.jp/en/info/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.omu.ac.jp/en/info/news/'", () => {
	cy.visit("https://www.omu.ac.jp/en/info/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ox.ac.uk/news-listing?category=228'", () => {
	cy.visit("https://www.ox.ac.uk/news-listing?category=228");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.pnnl.gov/'", () => {
	cy.visit("https://www.pnnl.gov/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ox.ac.uk/news-listing?category=228'", () => {
	cy.visit("https://www.ox.ac.uk/news-listing?category=228");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ntu.edu.sg/news?listingKeyword=&sort=latest&categories=8504fdc4-d735-4ffd-ab1a-22d55d458df6%7C53e7dc49-ddef-4458-9e2b-221e1a763670%7C8ba21e89-cf48-4986-bbca-ddbaf345398b%7C60450cc0-e915-4069-9229-aaac635b6235&page=1'", () => {
	cy.visit("https://www.ntu.edu.sg/news?listingKeyword=&sort=latest&categories=8504fdc4-d735-4ffd-ab1a-22d55d458df6%7C53e7dc49-ddef-4458-9e2b-221e1a763670%7C8ba21e89-cf48-4986-bbca-ddbaf345398b%7C60450cc0-e915-4069-9229-aaac635b6235&page=1");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.pnnl.gov/'", () => {
	cy.visit("https://www.pnnl.gov/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.princeton.edu/news?search=&category=971'", () => {
	cy.visit("https://www.princeton.edu/news?search=&category=971");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.psu.edu/news/research'", () => {
	cy.visit("https://www.psu.edu/news/research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.psu.edu/news/research'", () => {
	cy.visit("https://www.psu.edu/news/research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.research.uky.edu/news-archive'", () => {
	cy.visit("https://www.research.uky.edu/news-archive");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.princeton.edu/news?search=&category=971'", () => {
	cy.visit("https://www.princeton.edu/news?search=&category=971");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.research.uky.edu/news-archive'", () => {
	cy.visit("https://www.research.uky.edu/news-archive");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.tilburguniversity.edu/current/news'", () => {
	cy.visit("https://www.tilburguniversity.edu/current/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.tmu.ac.jp/english/index.html'", () => {
	cy.visit("https://www.tmu.ac.jp/english/index.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.tohoku.ac.jp/en/news/research/index.html'", () => {
	cy.visit("https://www.tohoku.ac.jp/en/news/research/index.html");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.tohoku.ac.jp/en/news/research/index.html'", () => {
	cy.visit("https://www.tohoku.ac.jp/en/news/research/index.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.tum.de/en/news-and-events/all-news?tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=285&tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=352&no_cache=1'", () => {
	cy.visit("https://www.tum.de/en/news-and-events/all-news?tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=285&tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=352&no_cache=1");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.tum.de/en/news-and-events/all-news?tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=285&tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=352&no_cache=1'", () => {
	cy.visit("https://www.tum.de/en/news-and-events/all-news?tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=285&tx_news_pi1%5BoverwriteDemand%5D%5BfilteredCategories%5D%5B%5D=352&no_cache=1");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.uab.edu/reporter/campus/itemlist/tag/research?start=100'", () => {
	cy.visit("https://www.uab.edu/reporter/campus/itemlist/tag/research?start=100");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.uab.edu/reporter/campus/itemlist/tag/research?start=100'", () => {
	cy.visit("https://www.uab.edu/reporter/campus/itemlist/tag/research?start=100");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.uaeu.ac.ae/en/dvcrgs/research/patents/research.shtml'", () => {
	cy.visit("https://www.uaeu.ac.ae/en/dvcrgs/research/patents/research.shtml");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.tmu.ac.jp/english/index.html'", () => {
	cy.visit("https://www.tmu.ac.jp/english/index.html");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ucdavis.edu/news/innovation'", () => {
	cy.visit("https://www.ucdavis.edu/news/innovation");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.uaeu.ac.ae/en/dvcrgs/research/patents/research.shtml'", () => {
	cy.visit("https://www.uaeu.ac.ae/en/dvcrgs/research/patents/research.shtml");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ucdavis.edu/news/science-technology'", () => {
	cy.visit("https://www.ucdavis.edu/news/science-technology");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ucdavis.edu/news/innovation'", () => {
	cy.visit("https://www.ucdavis.edu/news/innovation");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.tilburguniversity.edu/current/news'", () => {
	cy.visit("https://www.tilburguniversity.edu/current/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ucdavis.edu/news/science-technology'", () => {
	cy.visit("https://www.ucdavis.edu/news/science-technology");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.umass.edu/news/news-events/news-headlines?viewsreference[data][argument]=11&viewsreference[enabled_settings][argument]=argument&type=All&category=811&page=2'", () => {
	cy.visit("https://www.umass.edu/news/news-events/news-headlines?viewsreference[data][argument]=11&viewsreference[enabled_settings][argument]=argument&type=All&category=811&page=2");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.umu.se/en/news/all-news/?page=2'", () => {
	cy.visit("https://www.umu.se/en/news/all-news/?page=2");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.umu.se/en/news/all-news/?page=2'", () => {
	cy.visit("https://www.umu.se/en/news/all-news/?page=2");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.ufs.ac.za/templates/news-archive'", () => {
	cy.visit("https://www.ufs.ac.za/templates/news-archive");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.utwente.nl/en/research/themes/resilient/news/'", () => {
	cy.visit("https://www.utwente.nl/en/research/themes/resilient/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.umass.edu/news/news-events/news-headlines?viewsreference[data][argument]=11&viewsreference[enabled_settings][argument]=argument&type=All&category=811&page=2'", () => {
	cy.visit("https://www.umass.edu/news/news-events/news-headlines?viewsreference[data][argument]=11&viewsreference[enabled_settings][argument]=argument&type=All&category=811&page=2");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.utwente.nl/en/research/themes/resilient/news/'", () => {
	cy.visit("https://www.utwente.nl/en/research/themes/resilient/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.ufs.ac.za/templates/news-archive'", () => {
	cy.visit("https://www.ufs.ac.za/templates/news-archive");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.uwa.edu.au/news'", () => {
	cy.visit("https://www.uwa.edu.au/news");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.wpi.edu/news/research'", () => {
	cy.visit("https://www.wpi.edu/news/research");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.wpi.edu/news/research'", () => {
	cy.visit("https://www.wpi.edu/news/research");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.zju.edu.cn/english/zju_newsroom/list.htm'", () => {
	cy.visit("https://www.zju.edu.cn/english/zju_newsroom/list.htm");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://www.uwa.edu.au/news'", () => {
	cy.visit("https://www.uwa.edu.au/news");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://www.zju.edu.cn/english/zju_newsroom/list.htm'", () => {
	cy.visit("https://www.zju.edu.cn/english/zju_newsroom/list.htm");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'breakthrough' in 'https://wyss.harvard.edu/news/'", () => {
	cy.visit("https://wyss.harvard.edu/news/");
	cy.contains("breakthrough").parent().first().screenshot();
	})

it("Searching 'Breakthrough' in 'https://wyss.harvard.edu/news/'", () => {
	cy.visit("https://wyss.harvard.edu/news/");
	cy.contains("Breakthrough").parent().first().screenshot();
	})

})