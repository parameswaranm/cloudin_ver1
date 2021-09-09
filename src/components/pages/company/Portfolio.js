import React, { Fragment } from 'react';

const Portfolio = () => {
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breatcome_title">
						<div className="breatcome_title_inner pb-2">
							<h2>Portfolio</h2>
						</div>
						<div className="breatcome_content">
							<ul>
								<li><a href="#">Home</a> <i className="fa fa-angle-right"></i> <a href="#"> Pages</a> <i className="fa fa-angle-right"></i> <span>Portfolio</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

  <div className="portfolio_area pt-80 pb-70" id="portfolio">
		<div className="container">
			<div className="row">
				 
				<div className="col-lg-12">
					<div className="section_title text_center mb-50 mt-3">
						
						<div className="section_sub_title uppercase mb-3">
							<h6>PORTFOLIO</h6>
						</div>
						<div className="section_main_title">
							<h1>Our Latest Works For</h1>
							<h1>Your Business</h1>
						</div>
						<div className="em_bar">
							<div className="em_bar_bg"></div>
						</div>
						
					</div>
					
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="portfolio_nav">
						<div className="portfolio_menu">
							<ul className="menu-filtering">
								<li className="current_menu_item" data-filter="*">All Works</li>
								<li data-filter=".physics" >Branding</li>
								<li data-filter=".cemes" >Prototype</li>
								<li data-filter=".math" >UX Research</li>
								<li data-filter=".english">Web Design</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row image_load">
				<div className="col-lg-4 col-md-6 col-sm-12 grid-item physics english">
					<div className="single_portfolio">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p1.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p1.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>Prototype UX Research</span>
								<h2><a href="#">Digital Marketing</a></h2>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 grid-item cemes">
					<div className="single_portfolio">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p2.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p2.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>UX Research</span>
								<h2><a href="#">Awesome Creative</a></h2>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 grid-item cemes">
					<div className="single_portfolio">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p3.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p3.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>Design, Photoshop</span>
								<h2><a href="#">Business Solution</a></h2>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 grid-item cemes math">
					<div className="single_portfolio">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p4.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p4.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>Software Engineer</span>
								<h2><a href="#">Company Project</a></h2>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12 grid-item physics english">
					<div className="single_portfolio admin">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p5.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p5.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>Photoshop</span>
								<h2><a href="#">Mastering Web Design</a></h2>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12 grid-item math">
					<div className="single_portfolio admin">
						<div className="single_portfolio_inner">
							<div className="single_portfolio_thumb">
								<a href="#"><img src="assets/images/portfolio/p6.jpg" alt="" /></a>
							</div>
						</div>
						<div className="single_portfolio_content">
							<div className="single_portfolio_icon">
								<a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/portfolio/p6.jpg"><i className="fa fa-search-plus"></i></a>
							</div>
							<div className="single_portfolio_content_inner">
								<span>Design, Photoshop</span>
								<h2><a href="#">Awesome Logo Design</a></h2>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </Fragment>
  )
}
export default Portfolio;