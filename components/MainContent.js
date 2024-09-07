import YellowBox from './YellowBox';

export default function MainContent() {
  return (
    <div className="CenteredFlex-col mt-36 desktop:flex-row desktop:space-x-4">
      <div className="CenteredFlex space-x-4">
        <YellowBox coinAmount={5} ballSrc="/img/ball.png" ballText="C" />
        <YellowBox coinAmount={10} ballSrc="/img/슈퍼볼.png" ballText="B" />
        <YellowBox coinAmount={20} ballSrc="/img/하이퍼볼.png" ballText="A" />
      </div>

      <div className="space-x-4 CenteredFlex mt-6 desktop:mt-0">
        <YellowBox coinAmount={50} ballSrc="/img/마스터볼.png" ballText="S" />
        <YellowBox coinAmount={30} ballSrc="/img/랜덤볼.png" ballText="R" />
      </div>
    </div>
  );
}