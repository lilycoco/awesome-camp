import React from "react";
import family from "../../assets/images/family.jpeg";
import plan_1 from "../../assets/images/plan_1.jpeg";
import plan_2 from "../../assets/images/plan_2.jpeg";
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
      <img src={family} alt="top" className="w-full h-screen object-cover" />
      <div className="m-auto">
        <section className="py-24 px-52 m-auto">
          <Title
            enLabel="Have an Awesome Outdoor Wedding!"
            className="my-10 m-auto text-5xl"
          />
          <p className="text-center leading-[3rem]">
            おふたりの好きな場所で
            <br />
            好きなスタイルで
            <br />
            大切な人たちと
            <br />
            最高な時間を過ごして欲しい。
            <br /> そんな思いを持って
            <br /> オーダーメイドでおふたりらしい空間作りの
            <br />
            お手伝いをさせていただきます。
            <br />
          </p>
        </section>
        <section className="py-24 px-52 bg-light-brown-gray">
          <Title enLabel="Concept" />
          <div className="m-auto mb-10 scroll-reveal bg-white p-10 w-160">
            <h2 className="text-xl mb-5 font-bold">
              Awesome Camp & Glamping は
            </h2>
            <p className="">
              イベント・撮影等のプランニングからキャンプ、グランピングのレンタル事業、当日の設営、運営、美術監督まで行うアウトドアのスペシャリストです。
              これまでアウトドアウェディングはもちろんのこと、CM・PV、テレビ番組、広告撮影や大型商業施設のイベント等、数多くのアウトドアシーンをプロデュースしてきました。
              そんな私たちが培ってきたノウハウを活かして、フォトウェディングから、少人数でのプチパーティー、野外フェスのテイストを盛り込んだオリジナリティ溢れるアウトドアウェディングまで、ご希望のアウトドア空間作りをプロデュースします。
            </p>
          </div>
        </section>
        <section className="py-24 px-52">
          <Title enLabel="Wedding Report" className="mb-20" />
          <div className="flex gap-5 overflow-scroll mb-10">
            {reportList.map((report, index) => (
              <ReportCard key={index} report={report} />
            ))}
          </div>
          <Button label="view all" />
        </section>
        <section className="py-24 px-52 flex flex-col gap-32 items-center w-full bg-light-brown-gray">
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
        <section className="py-24">
          <Title
            enLabel="Plan & Our Service"
            jaLabel="選べるプラン"
            className="ml-52"
          />
          <div className="flex p-10 gap-5">
            <div className="w-1/2 relative ">
              <div className="after:content-[''] after:absolute after:bg-gradient-to-r after:from-black after:top-0 after:left-0 after:w-1/2 after:h-full">
                <img src={plan_1} alt="top" className="w-auto" />
              </div>
              <div className="absolute top-5 left-5 text-white">
                <p className="mb-4">イベントセットのレンタル・設営のみ</p>
                <p className="text-3xl">シンプルプラン</p>
              </div>
            </div>
            <div className="w-1/2 relative ">
              <div className="before:content-[''] before:absolute before:bg-gradient-to-r before:from-black before:top-0 before:left-0 before:w-1/2 before:h-full">
                <img src={plan_2} alt="top" className="w-auto" />
              </div>
              <div className="absolute top-5 left-5 text-white">
                <p className="mb-4">会場設営＋フード・音響・進行まで</p>
                <p className="text-3xl">フルサポートプラン</p>
              </div>
            </div>
          </div>
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
