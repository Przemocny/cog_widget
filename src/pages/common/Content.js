import React from "react";
import Background from "../../images/think_guy_background.jpeg";

const Content = () => {
  return (
    <main>
      <section>
        <div className="view" style={{ backgroundImage: `url(${Background})` }}>
          <div className="row">
            <div className="col-md-6 with-margin">
            </div>
          <div className="col-md-6 mb-4 with-margin">
          <h3 className="text-left text-attention text-white">
              Data science IS ABOUT using data to create as
              much impact as possible for company, with minimum cost, resources
              and human labor.
              <h5 className="text-right text-white">
              <small>-Value Point Group</small>
            </h5>
            </h3>
            
          </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="mt-5 wow fadeIn">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                className="img-fluid z-depth-1-half"
                alt=""
              ></img>
            </div>

            <div className="col-md-6 mb-4">
              <h3 className="h3 mb-3">
                DSLab - we'll help you to grow faster with your data
              </h3>
              <div className="row">
                <div className="col-1 mr-3">
                  <i class="fas fa-book fa-2x black-text"></i>
                </div>
                <div className="col-10">
                  <p>
                    <strong>
                      Our passion is to help business to better understand their
                      numbers.
                    </strong>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-1 mr-3">
                  <i class="fas fa-level-up-alt fa-2x black-text"></i>
                </div>
                <div className="col-10">
                  <p>
                    <strong>
                      Our mission is to be trusted business partner and help you
                      to grow your business to world-wide size.
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 mr-3">
                  <i class="fas fa-chart-bar fa-2x black-text"></i>
                </div>
                <div className="col-10">
                  <p>
                    <strong>
                      Our vision is to make from a medium-size business an
                      unicorn thanks to our analytic support.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="my-5"></hr>

        <section>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h3 className="h3 mb-3">Story about John and Data Scientist</h3>
              <strong>- Let me to introduce you John</strong> <br />
              - Has 5 pizzerias
              <br />
              <div className="with-padding">
                - Total Sales for one pizzeria - $30.000 monthly
                <br />
                - Total Costs for one pizzeria - $26.000 monthly
                <br />
                - Profit from one pizzeria - $4.000 (with taxes)
                <br />
              </div>
              - He want to be chain of 10 pizzerias in next 5 years
              <br />
              - He know there are databases exist, but don't know where
              <br />
              <p></p>
              <strong>- Let me to introduce you Data Scientist</strong>
              <br />
              <div className="with-padding">
                - has Math/Economics/Financial degree and business experience
                <br />
                - has a big, digital workshop with artificial intelligence in it
                with tables, charts, metrics, etc
                <br />
                - can read knowledge from db and use databases to help John in
                pizzerias
                <br />
              </div>
            </div>
            <hr class="my-5"></hr>

            <div className="col-lg-6 col-md-12">
              <p className="h5 text-center mb-4">
                Watch our "5 min Quick Start" tutorial
              </p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/cXTThxoywNQ"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </div>
          </div>
          <hr class="my-5"></hr>

          <h3 className="h3 mb-3">
            Thats how example chats between John and Data Scientist are looking
            like:
          </h3>
        </section>
      </div>
    </main>
  );
};

export default Content;
