import service_1 from "../assets/images/service_1.jpeg";
import service_2 from "../assets/images/service_2.jpeg";
import service_3 from "../assets/images/service_3.jpeg";
import service_4 from "../assets/images/service_4.jpeg";
import service_5 from "../assets/images/service_5.jpeg";
import service_6 from "../assets/images/service_6.jpeg";
import service_7 from "../assets/images/service_7.jpeg";
import service_8 from "../assets/images/service_8.jpeg";
import Anchor from "../components/Anchor";

const contentHeader = (label: string) => (
  <div className="mt-8 items-center">
    <h2 className="mr-5 whitespace-nowrap font-bold">{label}</h2>
    <div className="mb-4 w-full border-t border-black" />
  </div>
);

export const serviceList = [
  {
    title: "テント、タープ、家具類のレンタル",
    description: (
      <div>
        アウトドアウェディングでは、ほどんどのお客様が
        <Anchor url="http://campandglamping.com/charge/">
          「イベントセット」
        </Anchor>
        をご利用いただいています。
        <br />
        大きな星形のイベントテント「スターシェード」、１０名程が収容可能なお座敷スタイルのテーブル付の「ベルテント」と、着座で２４名分のチェア又はベンチ、フードエリアに使いやすい大型タープがセットになっています。
        <br />
        足りない家具は追加でオーダーいただいたり、会場のレンタル品も使用して、パーティーの規模に合わせた内容を確保します。
      </div>
    ),
    img: service_1,
  },
  {
    title: "会場設営・撤収",
    description: (
      <div>
        会場のベースとなるテント・タープ類の設営・撤収は私たちで承ります。
        <br />
        何もない空間へ、大きな星形のスターシェードやキャンバス地の優しく上品な風合いのベルテント、コットン性のタープで海外のパーティーをイメージするグラマラスなアウトドアウェディング空間を作り上げ、オリジナリティ溢れるウェディングパーティーを一緒に作り上げます。
        <br />
        撤収時は会場内のお忘れ物の確認までしっかりと行います。
      </div>
    ),
    img: service_6,
  },
  {
    title: "ロケーションのご紹介と会場手配",
    description: (
      <div>
        キャンプ場・ガーデン付きのレンタルスペース・スタジオ等、幅広くご提案させていただきます。
        <br />
        実は開催する場所の確保はアウトドアウェディングのハードルの１つです。特に公営の場所や、トップシーズン（GWや盆、秋の連休）の場合、施設側に貸切利用に難色を示されることもあるのが事実です。しかしながら、一見だと断られる会場でも私たちを通していただくことで希望が通る場合や、一般貸しを行っていない場所を確保できる場合もあります。
        {contentHeader("開催場所が決まっている場合")}
        後日、現地に下見兼打ち合わせにスタッフがお伺いします。失敗が許されないアウトドアウェディングの開催に向けて、私達も細かいところまで確認させていただいております。
        <div>【開催場所の主な確認要項】</div>
        <ul className="ml-6 list-disc">
          <li>パーティーの規模感と合う広さかどうか </li>
          <li>テントの設置場所の地面の状況 </li>
          <li>会場レイアウト案の作成 </li>
          <li>新郎新婦やゲストの入場動線や控室の有無 </li>
          <li>電源の容量と確保の方法 </li>
          <li>現地のレンタル品の有無 </li>
          <li>機材車の進入経路</li>
          <li>現地ご担当者の方のアウトドアウェディングの実施への協力度 </li>
          など
        </ul>
        {contentHeader("開催場所が決まっていない場合")}
        おふたりのお住まいやゲストのアクセス面からエリアを選定したら、コンセプトやゲストの人数に合ったロケーションをご提案させていただきます。
        天候の心配に備え、アウトドアウェディングをテーマとした会場装飾を行ってパーティーができる室内スペースのある会場や、キャンプサイト脇に大きな雨よけのある会場のご紹介も可能です。
      </div>
    ),
    img: service_2,
  },
  {
    title: "パーティーの司会・進行手配",
    description: (
      <div>
        パーティの司会・進行もご入用でしたらお気軽にお申し付けください。
      </div>
    ),
    img: service_8,
  },
  {
    title: "撮影手配",
    description: (
      <div>
        野外撮影の経験豊富なカメラマンによるフォト・ムービー・ドローン撮影
        {contentHeader("ご紹介例")}
        <ul className="ml-6 list-disc">
          <li>
            <Anchor url="https://www.lodefilm.com/">
              LODE Film / ロデ・フィルム
            </Anchor>
            <br />
            （ムービー・スチール・ドローン）
          </li>
          <li>
            Caddis Films <br />
            （ムービー・スチール・ドローン）
          </li>
        </ul>
      </div>
    ),
    img: service_7,
  },
  {
    title: "フードケータリング手配",
    description: (
      <div>
        ウェディングケーキ・フードケータリングを手配いたします。
        {contentHeader("ご紹介例")}
        <ul className="ml-6 list-disc">
          <li>
            <Anchor url="https://www.instagram.com/puertokitchencar/">
              PUERTO / プエルト
            </Anchor>
            <br />
            （キッチンカー・ケータリング・出張シェフ・ロケ弁）
          </li>
          <li>
            <Anchor url="https://www.veggietempo.com/">
              Veggie Tempo / ベジテンポ
            </Anchor>
            <br />
            （ケータリング・出張シェフ・ロケ弁・出張バーテンダー）
          </li>
        </ul>
      </div>
    ),
    img: service_3,
  },

  {
    title: "メイク・ドレス・装飾・その他手配",
    description: (
      <div>
        メイク・ドレス・装飾・ギフト・音響・運営機材等、手配いたします。
        {contentHeader("ご紹介例")}
        <ul className="ml-6 list-disc">
          <li>
            <Anchor url="https://www.fuwariwedding.com/">
              FUWARI WEDDING / フワリ・ウェディング
            </Anchor>
            <br />
            （ポートレートマシーン・フォトブース・装花全般・ペーパーアイテム）
          </li>
          <li>
            <Anchor url="https://berry-studio.net/">ベリースタジオ</Anchor>
            <br />
            （ドレス オーダー/レンタル）
          </li>
        </ul>
      </div>
    ),
    img: service_5,
  },
  {
    title: "アクティビティ手配",
    description: (
      <div>
        似顔絵コンテンツ・キャンドル作り・DIY各種・花火等、ゲストの皆様と一緒に楽しめるアクティビティのご紹介が可能です。
        {contentHeader("ご紹介例")}
        <ul className="ml-6 list-disc">
          <li>
            <Anchor url="https://www.fuwariwedding.com/">
              FUWARI WEDDING / フワリ・ウェディング
            </Anchor>
            <br />
            （ポートレートマシーン・フォトブース・装花全般・ペーパーアイテム）
          </li>
          <li>
            <Anchor url="https://www.instagram.com/photobusjapan/?hl=en">
              PhotoBus JAPAN / フォト・バス・ジャパン
            </Anchor>
            <br />
            （フォトブース・ワーゲンバス劇用車）
          </li>
          <li>
            <Anchor url="https://roomingsystems.com/">
              ROOMING SYSTEMS / ルーミング・システムズ
            </Anchor>
            <br />
            （モーターホーム・モーターホーム劇用車）
          </li>
          <li>
            <Anchor url="https://t-village.co.jp/">
              Trailer Village / トレイラー・ビレッジ
            </Anchor>
            <br />
            （キャンピングトレーラー・劇用車）
          </li>
          <li>
            <Anchor url="https://regressiveevolution.com/">
              REGRESS / リグレス
            </Anchor>
            <br />
            （ルーフトップテント付き劇用車）
          </li>
          <li>
            <Anchor url="https://matsuda-hanabi.jp/">有限会社マツダ</Anchor>
            <br />
            （花火）
          </li>
          <li>
            <Anchor url="https://www.wakamatsuya.tv/">若松屋</Anchor>
            <br />
            （花火）
          </li>
        </ul>
      </div>
    ),
    img: service_4,
  },
];
