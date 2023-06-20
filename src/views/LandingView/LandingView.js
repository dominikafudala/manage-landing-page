import React from 'react';
import Header from 'components/organisms/Header/Header';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import NumberedItem from 'components/molecules/NumberedItem/NumberedItem';
import Footer from 'components/organisms/Footer/Footer';
import introImg from 'assets/images/illustration-intro.svg';

const LandingView = () => (
  <>
    <Header />
    <main className="container">
      <section className="even-cols">
        <div>
          <Heading headingType="h1">Bring everyone together to build better products.</Heading>
          <Paragraph paddingLimit="padding-limit">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </Paragraph>
          <Button>Get Started</Button>
        </div>
        <div>
          <img src={introImg} alt="" />
        </div>
      </section>
      <section className="even-cols">
        <div>
          <Heading headingType="h2">What&apos;s different about Manage?</Heading>
          <Paragraph paddingLimit="padding-limit">
            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
            the milestone level all the way done to the smallest of details. Never lose sight of the
            bigger picture again.
          </Paragraph>
        </div>
        <div>
          <ul>
            <NumberedItem>
              <Heading headingType="h3">Track company-wide progress</Heading>
              <Paragraph>
                See how your day-to-day tasks fit into the wider vision. Go from tracking progress
                at the milestone level all the way done to the smallest of details. Never lose sight
                of the bigger picture again.
              </Paragraph>
            </NumberedItem>
            <NumberedItem>
              <Heading headingType="h3">Advanced built-in reports</Heading>
              <Paragraph>
                Set internal delivery estimates and track progress toward company goals. Our
                customisable dashboard helps you build out the reports you need to keep key
                stakeholders informed.
              </Paragraph>
            </NumberedItem>
            <NumberedItem>
              <Heading headingType="h3">Everything you need in one place</Heading>
              <Paragraph>
                Stop jumping from one service to another to communicate, store files, track tasks
                and share documents. Manage offers an all-in-one team productivity solution.
              </Paragraph>
            </NumberedItem>
          </ul>
        </div>
      </section>
      <section>
        <Heading headingType="h2">What they&apos;ve said</Heading>
        <Button>Get Started</Button>
      </section>
      <section className="even-cols">
        <Heading headingType="h2">Simplify how your team works today.</Heading>
        <Button secondary>Get Started</Button>
      </section>
    </main>
    <Footer />
  </>
);

export default LandingView;
