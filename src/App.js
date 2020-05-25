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

// Language data

import data from './data.json';

function App() {
  const [lang, setLang] = React.useState('en');
  const changeLanguage = (event) => {
    setLang(event.target.value);
  };
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-top">
          <select onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="lt">Lietuviu</option>
          </select>
        </div>
        <div className="Header__content">
          <Title level="1">Marius Zorskas</Title>
          <div className="Black-box">{data[lang].header.title}</div>
        </div>
      </header>
      <main>
        <div className="Main__container">
          <div className="Main__information">
            <ContentBlock className="Links f1" title={data[lang].links.title}>
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
            <ContentBlock
              className="AboutMe f2"
              title={data[lang].aboutMe.title}
            >
              {data[lang].aboutMe.content}
            </ContentBlock>
            <ContentBlock
              className="Education f1"
              title={data[lang].education.title}
            >
              {/* {data[lang].education.schools.map((school) => school.map(el)=> <React.Fragment>{el}<br/></React.Fragment>)} */}
              <EducationBlock
                schoolName={data[lang].education.schools[0].schoolName}
                year="2006-2010"
                degree={data[lang].education.schools[0].degree}
              ></EducationBlock>
              <EducationBlock
                schoolName={data[lang].education.schools[1].schoolName}
                year="2006-2010"
                degree={data[lang].education.schools[1].degree}
                noline
              ></EducationBlock>
            </ContentBlock>
            <ContentBlock
              className="PersonalSkills f1"
              title={data[lang].personalSkills.title}
            >
              <ul>
                <Badge color="Green">
                  {data[lang].personalSkills.skills[0].name}
                </Badge>
                <Badge color="Yellow">
                  {data[lang].personalSkills.skills[1].name}
                </Badge>
                <Badge color="Red">
                  {data[lang].personalSkills.skills[2].name}
                </Badge>
              </ul>
            </ContentBlock>
            <ContentBlock
              className="TechnicalSkills f1"
              title={data[lang].technicalSkills.title}
            >
              <ul>
                <Badge color="Green">HTML</Badge>
                <Badge color="Green">CSS/SCSS</Badge>
                <Badge color="Yellow">JAVASCRIPT</Badge>
                <Badge color="Yellow">REACT.JS</Badge>
              </ul>
            </ContentBlock>
            <ContentBlock
              className="Work experience f3"
              title={data[lang].workExperience.title}
            >
              <div className="JobContainer">
                <JobBlock
                  className="border flexStart"
                  position={data[lang].workExperience.jobs[0].position}
                  company={data[lang].workExperience.jobs[0].company}
                  period={data[lang].workExperience.jobs[0].period}
                >
                  <p>{data[lang].workExperience.jobs[0].content}</p>
                  <ul>
                    <li>{data[lang].workExperience.jobs[0].achievements[0]}</li>
                    <li>{data[lang].workExperience.jobs[0].achievements[1]}</li>
                  </ul>
                </JobBlock>
                <JobBlock
                  className="border flexCenter"
                  position={data[lang].workExperience.jobs[1].position}
                  company={data[lang].workExperience.jobs[1].company}
                  period={data[lang].workExperience.jobs[1].period}
                >
                  <p>{data[lang].workExperience.jobs[1].content}</p>
                  <ul>
                    <li>{data[lang].workExperience.jobs[1].achievements[0]}</li>
                    <li>{data[lang].workExperience.jobs[1].achievements[1]}</li>
                  </ul>
                </JobBlock>
                <JobBlock
                  className="flexEnd"
                  position={data[lang].workExperience.jobs[2].position}
                  company={data[lang].workExperience.jobs[2].company}
                  period={data[lang].workExperience.jobs[2].period}
                >
                  <p>{data[lang].workExperience.jobs[2].content}</p>
                  <ul>
                    <li>{data[lang].workExperience.jobs[2].achievements[0]}</li>
                    <li>{data[lang].workExperience.jobs[2].achievements[1]}</li>
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
          <ContactBlock contactType={data[lang].contactForm[0].address}>
            <span>{data[lang].contactForm[0].street}</span>
            <span>Vilnius, Narnia</span>
          </ContactBlock>
          <ContactBlock center contactType={data[lang].contactForm[1].contact}>
            <span>+370600000333</span>
            <span>email@nest.dev</span>
          </ContactBlock>
          <ContactBlock contactType={data[lang].contactForm[2].social}>
            <span>Linkedin/username1</span>
            <span>Linkedin/username2</span>
          </ContactBlock>
        </div>
      </footer>
    </div>
  );
}

export default App;
