import React from "react";
import { Link } from "react-router-dom";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../../Layouts/Section";
import back from "../../assets/images/back.jpg";
import cake from "../../assets/images/cake.jpeg";
import fes2 from "../../assets/images/fes.jpeg";
import hands from "../../assets/images/hands.jpg";
import plan_2 from "../../assets/images/plan_2.jpeg";
import frame from "../../assets/parts/frame.png";
import Anchor from "../../components/Anchor";
import Balloon from "../../components/Balloon";
import Button from "../../components/Button";
import ReportCard from "../../components/ReportCard";
import Title from "../../components/Title";
import { coverageList } from "../../lib/coverage";
import { recommendList } from "../../lib/recommend";
import { reportList } from "../../lib/report";
import PlanContent from "./partials/PlanContent";
import RecommendContent from "./partials/RecommendContent";

export default function Home() {
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
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={back}
              alt="top"
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={cake}
              alt="top"
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={fes2}
              alt="top"
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </>
      <Section>
        <Title
          enLabel="Have an Awesome Outdoor Wedding!"
          className="m-auto text-center text-[2.8rem] md:text-5xl"
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
      </Section>
      <Section wrapperClass="bg-light-brown-gray pb-20">
        <Title enLabel="Concept" className="mb-0" />
        <div className="relative">
          <div className="outlines absolute top-11 font-['Optima'] text-5xl font-extrabold md:top-0 md:text-9xl">
            AWESOME
          </div>
          <div className="scroll-reveal relative top-20 z-10 m-auto mb-10 bg-white p-10 opacity-90 md:w-160 ">
            <h2 className="mb-5 text-xl font-bold">
              Awesome Camp & Glamping は
            </h2>
            <p className="">
              イベント・撮影等のプランニングからキャンプ、グランピングのレンタル事業、当日の設営、運営、美術監督まで行うアウトドアのスペシャリストです。
              これまでアウトドアウェディングはもちろんのこと、CM・PV、テレビ番組、広告撮影や大型商業施設のイベント等、数多くのアウトドアシーンをプロデュースしてきました。
              そんな私たちが培ってきたノウハウを活かして、フォトウェディングから、少人数でのプチパーティー、野外フェスのテイストを盛り込んだオリジナリティ溢れるアウトドアウェディングまで、ご希望のアウトドア空間作りをプロデュースします。
            </p>
          </div>
          <div className="outlines absolute right-0 -bottom-28 font-['Optima'] text-5xl font-extrabold md:-bottom-40 md:text-9xl">
            WEDDING
          </div>
        </div>
      </Section>
      <Section
        wrapperClass="gradient-gray"
        sectionClass="flex flex-col gap-36 items-center w-full"
      >
        {recommendList.map(({ title, description, src }, index) => (
          <RecommendContent
            className={index % 2 ? "md:flex-row-reverse" : ""}
            key={index}
            title={title}
            description={description}
            src={src}
          />
        ))}
      </Section>
      <Section>
        <Title enLabel="Wedding Report" />
        <div className="mb-10 flex gap-5 overflow-scroll">
          {[...reportList].reverse().map((report, index) => (
            <ReportCard key={index} report={report} />
          ))}
        </div>
        <Link to="/report">
          <Button label="More" />
        </Link>
      </Section>
      <section className="m-auto mb-20 py-24 px-5">
        <div className="m-auto max-w-screen-lg">
          <Title enLabel="Plan & Our Service" />
        </div>
        <div className="m-auto flex max-w-screen-2xl flex-col gap-5 md:flex-row">
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
        <Title enLabel="Schedule" jaLabel="スケジュール" />
        <div className="m-auto max-w-3xl bg-white p-10 shadow-md">
          <img src={frame} alt="" className="" />
          <div className="my-16 mb-10 md:mx-10">
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
                <p className="mb-4 text-2xl font-bold">
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
        <Title enLabel="Media Coverage" />
        <div className="> * divide-y-2 rounded-md border-2 border-black py-1 px-5 md:py-5 md:px-10">
          {[...coverageList]
            .reverse()
            .map(({ date, description, url }, index) => (
              <div className="flex gap-5 py-4 md:gap-10" key={index}>
                <span className="font-bold">{date}</span>
                <div>
                  <div>{description}</div>
                  {url && (
                    <Anchor url={url} className="break-all">
                      {url}
                    </Anchor>
                  )}
                </div>
              </div>
            ))}
        </div>
      </Section>
      <Balloon />
    </div>
  );
}
