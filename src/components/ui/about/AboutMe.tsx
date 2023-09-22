interface AboutMeProps {
  title: string;
  desc: string;
  link: string;
  logo: any;
}

const AboutMe = ({ title, desc, link, logo }: AboutMeProps) => {
  return (
    <div>
      <div>{logo}</div>
      <div className="flex flex-col">
        <div
          className="underline underline-offset-8"
          style={{ fontFamily: 'Pretdendard-Semibold' }}
        >
          {title}
        </div>
        <div className="timeline-description" style={{ fontFamily: 'Pretendard-Regular' }}>{desc}</div>
        <div>{link}</div>
      </div>
    </div>
  );
};

export default AboutMe;
