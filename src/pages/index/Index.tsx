import React from "react";
import family from "../../assets/images/family.jpeg";
import Title from "../../components/Title";
import ReportCard from "../../components/ReportCard";
import Button from "../../components/Button";
import ReccomendContent from "./partials/ReccomendContent";
import ScrollReveal from "scrollreveal";
import { reportList } from "../../lib/Report";
import { reccomendList } from "../../lib/Reccomend";

function App() {
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
          {reccomendList.map((item, index) => (
            <ReccomendContent
              className={index % 2 ? "flex-row-reverse" : ""}
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
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
        <section className="mb-24">
          <Title enLabel="Schedule" jaLabel="スケジュール" />
          <div>
            <p>
              <span>Step 1</span>お問い合わせ
            </p>
            <p>まずは、お問合せフォームよりお気軽にご連絡下さい。</p>
            <p>
              <span>Step 2</span>お打ち合わせ
            </p>
            <p>
              コンセプトやご予算、開催場所など、ご要望をお伺いさせていただきます。
              必要に応じて開催場所や、お食事、楽しいフォトバスやポートレートマシーンといったゲストと一緒に楽しめるコンテンツなどのご紹介もさせていただいております。（紹介料は頂戴しておりません。）
              『必要なものだけを手配します』をコンセプトとしておりますので、ご自身で準備されるアイテムの持ち込みも歓迎です。
            </p>
            <p>
              <span>Step 1</span>パーティ当日
            </p>
            <p>
              本番は、スタッフによる設営（前日or当日の早朝）とサポートで、オリジナリティ溢れるウェディングパーティーを一緒に作り上げます。
            </p>
          </div>
          <Button label="learn More" />
        </section>
        <section className="mb-24">
          <Title enLabel="Media Coverage" jaLabel="メディア掲載情報" />
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
