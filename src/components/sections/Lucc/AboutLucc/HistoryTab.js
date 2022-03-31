import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";

import img1 from "../../../../assets/images/history/Hackathon.jpeg";
import img2 from "../../../../assets/images/history/Champion.jpeg";
import img3 from "../../../../assets/images/history/GirlsProgramming.jpeg";
import img4 from "../../../../assets/images/history/ProgrammingContest.jpeg";

class Historytab extends Component {
  render() {
    return (
      <section className="advanced-tab section-gap">
        <div className="container">
          <div className="section-title text-center both-border mb-50">
            <h2 className="title">Our Accomplishment</h2>
          </div>
          {/* Tabs Buttons */}
          <div className="tab-buttons">
            <Tab.Container defaultActiveKey="mission">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="mission">1st Runner Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="history"> Champion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="businessgoals">
                    Girl’s Programming Competition
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="teammember">1st Runner up</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="mission">
                  <div className="tab-text-block left-image ">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                        <div className="block-image">
                          <img src={img1} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title">
                            1st Runner Up in National Hackathon 
                          </h2>
                          <p>
                            Department of CSE, LU is highly reputed in
                            Bangladesh for their continuous success in
                            Programming and Software Development Competitions.
                            Today a team consisted of 7th semester students of
                            CSE, LU participated in NSU Technovation 2018
                            National Hackathon Contest and became 1st runner up.
                            They won 10000 BDT. Prize money in the contest. Team
                            members are: S M Kamal Hussain Shahi, Zawad Tahmeed
                            Anik, Ishtiak Ahmed Fuad and Komol Sarker. Also 4
                            teams from Leading University participated in
                            Banglalion SUB National Programming Contest today
                            and ranked 11th among all Universities in Bangladesh
                            and ranked 4th among all Private Universities in
                            Bangladesh. Both the Hackathon and Programming
                            Contest teams are coached by Md. Tahmid Rahman
                            Laskar. Head of the Department of CSE and Advisor of
                            LU Computer Club Mr. Asaduzzaman Khan congratulated
                            both of the teams for their achievements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="history">
                  <div className="tab-text-block right-image ">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="block-text">
                          <h2 className="title">
                            Champion in Programming Contest
                          </h2>
                          <p>
                            Leading University becomes champion in Notre Dame
                            University Bangladesh Inter University Programming
                            Contest 2017 today. Champion team comprised of –
                            Araf Al Jami, Dipta Paul and Komol Sarkar. They are
                            students from CSE department. The champion team is
                            coached by Md. Tahmid Rahman Laskar. Teams from
                            SUST, MIST, AUST, IUT, Brac University, Jagannath
                            University, Metropolitan University, Islamic
                            University (Kushtia), MBSTU, UIU, Green University
                            etc. participated in the contest. This is for the
                            first time in history that Leading University
                            becomes champion in a national level programming
                            contest.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <div className="block-image">
                          <img src={img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="businessgoals">
                  {/* <div className="tab-text-block left-image with-left-circle"> */}
                  <div className="tab-text-block left-image ">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                        <div className="block-image">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title">
                            Success in Girl’s Programming
                            Competition 
                          </h2>
                          <p>
                            Success in Programming Contest continues for the CSE
                            Department of Leading University. And when it comes
                            to programming, LU female students are also
                            performing exceptionally well just like the male
                            students. Two teams consisted of 6 students from
                            Leading University participated in NSU Inter
                            University Girl’s Programming Competition 2018.
                            Leading University ranked 7th Among all Universities
                            in Bangladesh and ranked 3rd among all Private
                            Universities in Bangladesh. LU_NerdyRhymes consisted
                            of – Anika Tahsin Chowdhury, Mst Ayesha Sultana and
                            Jamia Alom ranked 9th among 64 teams in the contest
                            solving 4 problems. Another team from the 4th
                            semester LU_Girl_Coders consisted of Saima Alam,
                            Tahjiba Bakht and Neelima Amin solved 3 problems in
                            the contest. Mr. Md Tahmid Rahman Laskar was the
                            coach of both teams. Head of the Department of CSE
                            and Advisor of LU Computer Club Mr. Md Asaduzzaman
                            Khan congratulated both of the teams for their great
                            achievements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="teammember">
                  <div className="tab-text-block right-image ">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="block-text">
                          <h2 className="title">
                            1st Runner up in Programming Contest
                          </h2>
                          <p>
                            Leading University CSE Department stood 1st Runner
                            up in Comilla University Programming Contest 2017.
                            LU_SearchingForJuggota comprised of students from
                            CSE Department of LU- Araf Al Jami, Dipta Paul and
                            Komol Sarkar became 1st runner up in Comilla
                            University CSE Fiesta 2017 Programming Contest. The
                            LU team is coached by- Md. Tahmid Rahman Laskar. 37
                            teams from different public and private universities
                            in Bangladesh participated in this contest where
                            SUST became champion. The same team from LU also
                            became champion in Notre Dame University Bangladesh
                            Programming Contest last month.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <div className="block-image">
                          <img src={img4} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    );
  }
}

export default Historytab;
