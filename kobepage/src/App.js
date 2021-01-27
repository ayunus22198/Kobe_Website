import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import kobe_birth from './images/kobe_birth.jpg';
import kobe_bryant_hs from './images/kobe_bryant_hs.jpg';
import kobe_1996 from './images/kobe_bryant_1996.jpg';
import kobe_2002 from './images/kobe_bryant_2002.jpg';
import kobe_2006 from './images/kobe_bryant_2006.jpg';
import kobe_2007 from './images/kobe_bryant_2007.jpg';
import kobe_retirement from './images/kobe_retirement.jpg';
import legacy from './images/legacy.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [{
        text: 'Bryant was born in Philadelphia, PA. He was also the youngest of three children and was named after the famous beef of Japan called Kobe. He was raised as a Catholic and he had always practiced his faith. He was even raised in Italy for some time and continued to play Professional basketball there. (8/23/1978)',
        image: kobe_birth
      }, {
        text: 'Bryant earned national recognition during a spectacular high school career at Lower Merion High School. He played on the varsity basketball team as a freshman.During his junior year, he averaged 31.1 points, 10.4 rebounds, 5.2 assists, 3.8 blocks and 2.3 steals and was named Pennsylvania Player of the Year while also earning a fourth team Parade All-American Nomination, attracting attention from college recruiters in the process. (1990s)',
        image: kobe_bryant_hs
      }, {
        text: 'The Lakers wanted to trade their starting center Vlade Divac. Bryant was the first guard drafted directly out of high school. After the draft, the trade was put in jeopardy when Divac threatened to retire rather than be traded from Los Angeles. However, on June 30, Divac relented on his threat and the trade was made final on July 9, 1996. (1996)',
        image: kobe_1996
      }, {
        text: 'In the 2001-2002 season, Bryant played 80 games for the first time in his career. On January 14, 2002, Bryant recorded a then career-high 56 points to go along with five rebounds and four assists in a 120–81 win over the visiting Memphis Grizzlies. He continued his all-round play by averaging 25.2 points, 5.5 rebounds, and 5.5 assists per game.(Early 2000s)',
        image: kobe_2002
      }, {
        text: 'On January 22, 2006, Bryant scored a career-high 81 points in a 122–104 victory against the Toronto Raptors. This was one of the highest point totals in NBA history. (2006)',
        image: kobe_2006
      }, {
        text: 'On December 23, 2007, Bryant became the youngest player (29 years, 122 days) to reach 20,000 points, in a game against the New York Knicks, in Madison Square Garden, after scoring 39 points to go along with 11 rebounds and 8 assists. This record has since been broken by LeBron James. On March 28, Bryant scored a season-high 53 points to go with 10 rebounds in a loss to the Memphis Grizzlies. (2007-2008)',
        image: kobe_2007
      }, {
        text: 'His final years of playing in the NBA was in the 2015-2016 season. He scored a season-high 38 points, securing a 119-115 win over the Minnesota Timberwolves. His final game was on April 13, 2016 where he faced off against the Utah JAzz. He scored 60 points in the game at 37 years of age.',
        image: kobe_retirement
      }],
      legacy: {
        text: 'Kobe Bryant was an insanely gifted player. He showed that diligence pays off, as even Michael JOrdan said that Kobe was the only one to approach his work ethic. He also had high expectations from his teammates and uplifted them in hard times, thus setting and maintaining a high standard of excellence. He also focused on his family, by teaching his kids the art of Basketball and supporting his family through whatever they needed',
        image: legacy
      }
    }
  }
  render() {
    return (
      <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Kobe Website</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        </nav>
      </header>
      <main role="main">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class=""></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src={kobe_birth} alt="First slide " />
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div>
        <div class = "text-center">
          <h1>One more for good measure.</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
      </div>


      <div class="container marketing">



        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: "500px", height: "500px"}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177417f9a83%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177417f9a83%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177417f9a85%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177417f9a85%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{width: "500px", height: "500px;"}} />
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177417f9a86%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177417f9a86%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{width: "500px", height: "500px"}} />
          </div>
        </div>

        <hr class="featurette-divider"></hr>

      </div>

      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
    </main>
    </div>
    );
  }

}
