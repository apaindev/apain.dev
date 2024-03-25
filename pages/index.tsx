import React from "react";
import { Emojione } from "react-emoji-render";
import styled from "styled-components";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import ProfilePic from "../components/ProfilePic";
import Link from "../components/Link";
import history from "../data/history";

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366;
  padding: 6rem;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  h1 {
    font-size: 3rem;
  }
  height: 400px;
  font-size: 1.5rem;

  @media only screen and (max-width: 800px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));
    flex-direction: column;
    font-size: 1.3rem;
    height: 630px;
    h1 {
      font-size: 2.5rem;
    }
    padding: 3rem;
  }
`;

const ProfileSubtext = styled.div`
  text-align: center;
  font-size: 1rem;
  padding-bottom: 2rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
`;

const LinkIcon = styled.a`
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in;
  filter: drop-shadow(5px 5px #00000017);
  svg:hover {
    filter: drop-shadow(5px 5px #00000017);
  }
`;

const AboutSection = styled.section`
  margin-top: -5vw;
  padding-top: 5vw;
  padding: 6rem;
  color: black;
  font-size: 1.3rem;

  li {
    margin-bottom: 1rem;
    list-style-type: none;
  }

  @media only screen and (max-width: 800px) {
    padding: 2rem;
  }
`;

const WhiteLink = styled(Link)`
  color: white;
`;

const SagossLink = styled(Link)`
  color: #e4228e;
`;

const HistorySection = styled.section`
  padding: 6rem;
  background-color: #e0e0e0;
  font-size: 1.3rem;
  @media only screen and (max-width: 800px) {
    padding: 2rem;
  }
`;

const Footer = styled.footer`
  padding: 0.5rem;
  padding-right: 1rem;
  background-color: #ececec;
  color: #444444;
  font-size: 0.8rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Home: React.FC = () => (
  <Layout>
    <main>
      <Header>
        <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
        >
          <h1>
            <Emojione svg text="Hi :wave:, I'm Alex" />
          </h1>
          <div>
            I am a Data Analyst at{" "}
            <SagossLink atLink href="https://sagossgroup.com/">
              sagoss
            </SagossLink>
          </div>
        </motion.div>
        <Profile>
          <ProfilePic />
          <HeaderIcons>
            <LinkIcon href="https://www.linkedin.com/in/alex-pain-a08b03169/">
              <FaLinkedin />
            </LinkIcon>
            <LinkIcon href="https://github.com/apaindev">
              <FaGithub />
            </LinkIcon>
          </HeaderIcons>
          <ProfileSubtext>
            Checkout{" "}
            <WhiteLink href="https://github.com/apaindev/CV/blob/main/Alex%20Pain%20CV.pdf">
              my cv
            </WhiteLink>{" "}
            or email me{" "}
            <WhiteLink href="mailto:alex@apain.dev">alex@apain.dev</WhiteLink>
          </ProfileSubtext>
        </Profile>
      </Header>
      <AboutSection>
        <h2>What I do</h2>
        <li>
          <b>-</b> Stuff here
        </li>
        <li>
          <b>-</b> Here
        </li>
        <li>
          <b>-</b> Here
        </li>
        <li>
          <b>-</b> Here
        </li>
        <li>
          <b>-</b> and lastly here
        </li>
      </AboutSection>
      <HistorySection>
        <h2>What I&apos;ve done</h2>
        <Timeline events={history} />
      </HistorySection>
    </main>
    <Footer>
    </Footer>
  </Layout>
);

export default Home;