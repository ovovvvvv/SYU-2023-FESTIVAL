import LineupBox from '../components/ui/lineup/LineupBox';
import LineupText from '../components/ui/lineup/LineupText';

const LineupPage = () => {
  const artistData = [
    {
      title: 'Celebrity A',
      desc: '대표곡 <이 있음면 사람들이> 쉽게 알 수 있을 거 같아요. 대표작이라든가..사람들이 잘 모르는 가수라면 실명을 넣는 게 좋을 거 같아요',
      imgUrl: '/images/cats.png',
      altText: 'Artist 1',
    },
    {
      title: 'Celebrity B',
      desc: '대표곡 <이 있음면 사람들이> 쉽게 알 수 있을 거 같아요. 대표작이라든가..사람들이 잘 모르는 가수라면 실명을 넣는 게 좋을 거 같아요',
      imgUrl: '/images/cats.png',
      altText: 'Artist 2',
    },
    {
      title: 'Celebrity C',
      desc: '대표곡 <이 있음면 사람들이> 쉽게 알 수 있을 거 같아요. 대표작이라든가..사람들이 잘 모르는 가수라면 실명을 넣는 게 좋을 거 같아요',
      imgUrl: '/images/cats.png',
      altText: 'Artist 3',
    },
  ];

  return (
    <div className="h-full-screen flex flex-col justify-center bg-black h-screen ">
      <h1
        className="text-[#fff] text-[25px] flex justify-center my-6 underline underline-offset-8
        decoration-[#0026ff]"
        style={{
          fontFamily: 'Pretendard-Semibold',
          textShadow: '2px 2px #0026ff',
        }}
      >
        LINE-UP
      </h1>
      <div className="flex flex-col items-center space-y-5 mb-10">
        {artistData.map((data, index) => (
          <div key={index} className="flex flex-row items-center space-x-7">
            {index === 1 ? (
              <>
                <LineupText title={data.title} desc={data.desc} />
                <LineupBox imgUrl={data.imgUrl} altText={data.altText} />
              </>
            ) : (
              <>
                <LineupBox imgUrl={data.imgUrl} altText={data.altText} />
                <LineupText title={data.title} desc={data.desc} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineupPage;
