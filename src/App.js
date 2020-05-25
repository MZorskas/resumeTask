import React from 'react';
// import logo from './logo.svg';
import './App.css';

//Components

import Title from './components/Title';
import ContentBlock from './components/ContentBlock';
import SocialLink from './components/SocialLink';
import EducationBlock from './components/EducationBlock';
import Badge from './components/Badge';
import JobBlock from './components/JobBlock';
import ContactBlock from './components/ContactBlock';

// Images

import LinkedIn from './images/linkedin.svg';
import Dev from './images/dev.svg';
import Twitter from './images/twitter.svg';
import Github from './images/github.svg';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-top"></div>
        <div className="Header__content">
          <Title level="1">Sophie Alpert</Title>
          <div className="Black-box">PROGRAMMER</div>
        </div>
      </header>
      <main>
        <div className="Main__container">
          <div className="Main__information">
            <ContentBlock className="Links f1" title="Links">
              <ul>
                <SocialLink
                  src={LinkedIn}
                  alt="LinkedIn logo"
                  href="https://lt.linkedin.com/"
                >
                  LinkedIn
                </SocialLink>
                <SocialLink
                  src={Twitter}
                  alt="Twitter logo"
                  href="https://twitter.com/explore"
                >
                  Twitter
                </SocialLink>
                <SocialLink
                  src={Github}
                  alt="Github logo"
                  href="https://github.com/"
                >
                  Github
                </SocialLink>
                <SocialLink
                  src={Dev}
                  alt="Dev logo"
                  href="https://www.google.com"
                >
                  Blog
                </SocialLink>
              </ul>
            </ContentBlock>
            <ContentBlock className="AboutMe f2" title="About Me">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend
              diam vel tempor lacinia. Suspendisse non augue egestas, dapibus
              justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
              lacinia porttitor erat. Vivamus tempor dictum leo id aliquam.
              Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus
              elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
              libero. Vestibulum vitae mattis diam.
            </ContentBlock>
            <ContentBlock className="Education f1" title="Education">
              <EducationBlock
                schoolName="School name"
                year="2006-2010"
                degree="Degree"
              ></EducationBlock>
              <EducationBlock
                schoolName="School name"
                year="2006-2010"
                degree="Degree"
                noline
              ></EducationBlock>
            </ContentBlock>
            <ContentBlock className="PersonalSkills f1" title="Personal skills">
              <ul>
                <Badge color="Green">Teamwork</Badge>
                <Badge color="Yellow">Communication</Badge>
                <Badge color="Red">Organization</Badge>
              </ul>
            </ContentBlock>
            <ContentBlock
              className="TechnicalSkills f1"
              title="Technical skills"
            >
              <ul>
                <Badge color="Green">HTML</Badge>
                <Badge color="Green">CSS/SCSS</Badge>
                <Badge color="Yellow">JAVASCRIPT</Badge>
                <Badge color="Yellow">REACT.JS</Badge>
              </ul>
            </ContentBlock>
            <ContentBlock className="Work experience f3" title="About Me">
              <div className="JobContainer">
                <JobBlock
                  className="border flexStart"
                  position="JOB POSITION"
                  company="Company"
                  period="2018-present"
                  customPadding="Right"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Consectetur adipiscing elit</li>
                  </ul>
                </JobBlock>
                <JobBlock
                  className="border flexCenter"
                  position="JOB POSITION"
                  company="Company"
                  period="2018-present"
                  customPadding="Center"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Consectetur adipiscing elit</li>
                  </ul>
                </JobBlock>
                <JobBlock
                  className="flexEnd"
                  position="JOB POSITION"
                  company="Company"
                  period="2018-present"
                  customPadding="Left"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Consectetur adipiscing elit</li>
                  </ul>
                </JobBlock>
              </div>
              <hr />
            </ContentBlock>
          </div>
        </div>
      </main>
      <footer>
        <div className="ContactContainer">
          <ContactBlock contactType="ADDRESS">
            <span>Imaginary St. 02</span>
            <span>Vilnius, Narnia</span>
          </ContactBlock>
          <ContactBlock center contactType="CONTACT">
            <span>+370600000333</span>
            <span>email@nest.dev</span>
          </ContactBlock>
          <ContactBlock contactType="SOCIAL">
            <span>Linkedin/username</span>
            <span>Linkedin/username</span>
          </ContactBlock>
        </div>
      </footer>
    </div>
  );
}

export default App;
