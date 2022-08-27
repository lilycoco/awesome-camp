import React from "react";
import back from "../../assets/images/back.jpg";
import hands from "../../assets/images/hands.jpg";
import cake from "../../assets/images/cake.jpeg";
import service_3 from "../../assets/images/service_3.jpeg";
import fes2 from "../../assets/images/fes2.jpeg";
import plan_2 from "../../assets/images/plan_2.jpeg";
import frame from "../../assets/parts/frame.png";
import Title from "../../components/Title";
import ReportCard from "../../components/ReportCard";
import Button from "../../components/Button";
import RecommendContent from "./partials/RecommendContent";
// import ScrollReveal from "scrollreveal";
import { reportList } from "../../lib/report";
import { coverageList } from "../../lib/coverage";
import { recommendList } from "../../lib/recommend";
import PlanContent from "./partials/PlanContent";
import { Link } from "react-router-dom";
import Balloon from "../../components/Balloon";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Anchor from "../../components/Anchor";
import Section from "../../Layouts/Section";

export default function Home() {
  // React.useEffect(() => {
  //   ScrollReveal().reveal(".scroll-reveal", { delay: 500, origin: "down" });
  // });

  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src={plan_2}
              alt="top"
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={back}
              alt="top"
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={cake}
              alt="top"
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={fes2}
              alt="top"
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </>
      <section className="py-24 max-w-screen-lg m-auto">
        <Title
          enLabel="Have an Awesome Outdoor Wedding!"
          className="mb-20 m-auto text-5xl"
        />
        <p className="text-center leading-[3rem]">
          おふたりの好きな場所で
          <br />
          好きなスタイルで
          <br />
          大切な人たちと
          <br />
          "Awesome 最高" な時間を過ごして欲しい。
          <br /> そんな思いを持って
          <br /> オーダーメイドでおふたりらしい空間作りの
          <br />
          お手伝いをさせていただきます。
          <br />
        </p>
      </section>
      <Section sectionClass="relative" wrapperClass="bg-light-brown-gray pb-20">
        <Title enLabel="Concept" />
        <div className="outlines font-['Optima'] text-9xl font-extrabold absolute">
          AWESOME
        </div>
        <div className="m-auto mb-10 scroll-reveal bg-white p-10 w-160 relative z-10 top-20 opacity-90">
          <h2 className="text-xl mb-5 font-bold">Awesome Camp & Glamping は</h2>
          <p className="">
            イベント・撮影等のプランニングからキャンプ、グランピングのレンタル事業、当日の設営、運営、美術監督まで行うアウトドアのスペシャリストです。
            これまでアウトドアウェディングはもちろんのこと、CM・PV、テレビ番組、広告撮影や大型商業施設のイベント等、数多くのアウトドアシーンをプロデュースしてきました。
            そんな私たちが培ってきたノウハウを活かして、フォトウェディングから、少人数でのプチパーティー、野外フェスのテイストを盛り込んだオリジナリティ溢れるアウトドアウェディングまで、ご希望のアウトドア空間作りをプロデュースします。
          </p>
        </div>
        <div className="outlines font-['Optima'] text-7xl font-extrabold absolute right-0 -bottom-6">
          WEDDING
        </div>
      </Section>
      <Section
        wrapperClass="gradient-gray"
        sectionClass="flex flex-col gap-36 items-center w-full"
      >
        {recommendList.map(({ title, description, src }, index) => (
          <RecommendContent
            className={index % 2 ? "flex-row-reverse" : ""}
            key={index}
            title={title}
            description={description}
            src={src}
          />
        ))}
      </Section>
      <Section>
        <Title enLabel="Wedding Report" className="mb-20" />
        <div className="flex gap-5 overflow-scroll mb-10">
          {[...reportList].reverse().map((report, index) => (
            <ReportCard key={index} report={report} />
          ))}
        </div>
        <Link to="/report">
          <Button label="More" />
        </Link>
      </Section>
      <section className="py-24 m-auto px-5 mb-20">
        <div className="m-auto max-w-screen-lg">
          <Title enLabel="Plan & Our Service" className="mb-20" />
        </div>
        <div className="flex gap-5 max-w-screen-2xl m-auto">
          <PlanContent
            title="Plans"
            description="プランのご紹介"
            src={plan_2}
            url="/guide"
          />
          <PlanContent
            title="Our Service"
            description="私たちが出来ること"
            src={hands}
            url="/guide"
          />
        </div>
      </section>
      <Section wrapperClass="gradient-gray">
        <Title enLabel="Schedule" jaLabel="スケジュール" className="mb-20" />
        <div className="max-w-3xl m-auto bg-white p-10 shadow-md">
          <img src={frame} alt="" className="" />
          <div className="mb-10 my-16 mx-10">
            {[
              {
                title: "お問い合わせ",
                description:
                  "まずは、お問合せフォームよりお気軽にご連絡下さい。",
              },
              {
                title: "お打ち合わせ",
                description:
                  "コンセプトやご予算、開催場所など、ご要望をお伺いさせていただきます。必要に応じて開催場所や、お食事、楽しいフォトバスやポートレートマシーンといったゲストと一緒に楽しめるコンテンツなどのご紹介もさせていただいております。（紹介料は頂戴しておりません。）『必要なものだけを手配します』をコンセプトとしておりますので、ご自身で準備されるアイテムの持ち込みも歓迎です。",
              },
              {
                title: "パーティ当日",
                description:
                  "本番は、スタッフによる設営（前日or当日の早朝）とサポートで、オリジナリティ溢れるウェディングパーティーを一緒に作り上げます。",
              },
            ].map(({ title, description }, index) => (
              <div className="mb-10" key={index}>
                <p className="font-bold text-xl mb-4">
                  <span className="mr-4">{`Step ${index + 1}.`}</span>
                  {title}
                </p>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <Link to="/schedule">
            <Button label="More" className="mb-10" />
          </Link>
          <img src={frame} alt="" className="" />
        </div>
      </Section>
      <Section sectionClass="pb-32">
        <Title enLabel="Media Coverage" jaLabel="メディア掲載情報" />
        <div className="border-2 border-black px-10 py-5 rounded-md divide-y-2 > *">
          {[...coverageList]
            .reverse()
            .map(({ date, description, url }, index) => (
              <div className="flex py-4" key={index}>
                <span className="font-bold mr-10">{date}</span>
                <div>
                  <div>{description}</div>
                  {url && <Anchor url={url}>{url}</Anchor>}
                </div>
              </div>
            ))}
        </div>
      </Section>
      <Balloon />
    </div>
  );
}
