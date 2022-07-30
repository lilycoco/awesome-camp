import React from "react";
import ocean from "../../assets/images/ocean.jpeg";
import family from "../../assets/images/family.jpeg";
import meeting from "../../assets/images/meeting.jpeg";
import sweets from "../../assets/images/sweets.jpeg";
import report_1 from "../../assets/images/report_1.webp";
import report_2 from "../../assets/images/report_2.jpeg";
import report_3 from "../../assets/images/report_3.jpeg";
import report_4 from "../../assets/images/report_4.jpeg";
import report_5 from "../../assets/images/report_5.jpeg";
import report_6 from "../../assets/images/report_6.jpeg";
import Title from "../../components/Title";
import ReportCard from "../../components/ReportCard";
import Button from "../../components/Button";
import ReccomendContent from "./partials/ReccomendContent";
import ScrollReveal from "scrollreveal";

function App() {
  const reportList = [
    {
      imageUrl: report_1,
      location: "埼玉 長瀞町",
      spaceName: "桃沢野外活動センター",
    },
    {
      imageUrl: report_2,
      location: "栃木 那須町",
      spaceName: "アビルキャンプリゾート那須",
    },
    {
      imageUrl: report_3,
      location: "山梨 富士河口湖町",
      spaceName: "パセオリゾート富士ヶ嶺",
    },
    {
      imageUrl: report_4,
      location: "埼玉 長瀞町",
      spaceName: "フォレストサンズ長瀞",
    },
    {
      imageUrl: report_5,
      location: "埼玉 長瀞町",
      spaceName: "チルアウトベースウェエストタマ",
    },
    {
      imageUrl: report_6,
      location: "埼玉 長瀞町",
      spaceName: "チルアウトベースウェエストタマ",
    },
  ];

  React.useEffect(() => {
    ScrollReveal().reveal(".scroll-reveal", { delay: 500, origin: "down" });
  });

  return (
    <div>
      <img src={family} alt="top" className="w-full" />
      <div className="m-auto">
        <section className="mb-24 m-auto">
          <Title enLabel="Awesome Outdoor Wedding" className="my-10" />
          <p className="text-center mb-20 leading-[3rem]">
            おふたりの好きな場所で
            <br />
            好きなスタイルで
            <br />
            好きな人達と
            <br />
            大切な時間を過ごして欲しい。
            <br /> オーダーメイドでおふたりらしい空間作りの
            <br />
            お手伝いをさせていただきます。
            <br />
          </p>
          <div className="w-96 m-auto">
            <div className="mb-10 scroll-reveal">
              <h2 className="text-xl mb-3">Awesome Camp & Glamping は</h2>
              <p className="">
                イベント・撮影等のプランニングからキャンプ、グランピングのレンタル事業、当日の設営、運営、美術監督まで行うアウトドアのスペシャリストです。
                これまでアウトドアウェディングはもちろんのこと、CM・PV、テレビ番組、広告撮影や大型商業施設のイベント等、数多くのアウトドアシーンをプロデュースしてきました。
                そんな私たちが培ってきたノウハウを活かして、フォトウェディングから、少人数でのプチパーティー、野外フェスのテイストを盛り込んだオリジナリティ溢れるアウトドアウェディングまで、ご希望のアウトドア空間作りをプロデュースします。
              </p>
            </div>
            <Button label="learn More" />
          </div>
        </section>
        <section className="mb-24 flex flex-col gap-32 items-center w-full bg-light-brown-gray py-24">
          <ReccomendContent
            className="scroll-reveal"
            title="お好きな場所で"
            description="東京を拠点として全国出張対応しています。アクセスの良い場所やおふたりの思い出の場所など、ご希望の場所をご相談ください。開催場所の心当たりが無い場合もアウトドアウェディングにぴったりなキャンプ場やガーデン付きのレンタルスペースなど、幅広くご提案させていただきます。"
            src={ocean}
          />
          <ReccomendContent
            className="flex-row-reverse scroll-reveal"
            title="アウトドアのスペシャリストだからできること"
            description="テントやグランピング家具は国内外でセレクトした良質なものを使用。実は歴史が古いグランピングや本格的な海外風アウトドアウェディングの再現にも特化しています。
            現場経験が豊富なスタッフが対応しますので、急な天候の変化やトラブルも安心してお任せください。"
            src={meeting}
          />
          <ReccomendContent
            className="scroll-reveal"
            title="コストを抑えられる"
            description="大体の機材をこちらで用意することが可能なので、一般的な「プロデュース代＋外部レンタル代」という料金形態よりも大幅に費用を抑えることができます。
            持ち込み自由、無駄を省いて「必要なものだけご用意します」をコンセプトとしていますので、他社のアウトドアウェディングの見積が予算に合わず諦めていた方もぜひ一度ご相談下さい。"
            src={sweets}
          />
        </section>
        <section className="mb-24">
          <Title enLabel="Wedding Report" jaLabel="ウェディングレポート" />
          <div className="flex gap-5 overflow-scroll ml-24 mb-10">
            {reportList.map((report, index) => (
              <ReportCard
                key={index}
                imgUrl={report.imageUrl}
                location={report.location}
                spaceName={report.spaceName}
              />
            ))}
          </div>
          <Button label="view all" />
        </section>
        <section className="mb-24">
          <Title enLabel="Plan" jaLabel="プラン" />
          <Button label="learn More" />
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
