import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Globe, Youtube, Instagram } from "lucide-react";

export default function MasonSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white shadow-md rounded-2xl mb-12">
        <h1 className="text-5xl font-bold mb-4">Hi，我是 Mason</h1>
        <p className="text-xl text-gray-700 mb-6">這是我的 AI 創作個人網站 ✨</p>
        <Button className="text-lg px-6 py-3">
          聯絡我 <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-4">關於我</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          我是來自台灣的 Mason，自學 AI 工具與自媒體創作，擅長製作 AI 動畫影片、腳本分鏡與提示詞設計。
          曾為雨韻合唱團建置官方網站，也參與多個短影片製作項目，內容涵蓋烹飪、合唱、動物特技等。
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">服務項目</h2>
        <ul className="space-y-3 text-gray-700 text-lg list-disc pl-6">
          <li>🎯 AI 提示詞設計（支援海螺AI / Pika / Runway）</li>
          <li>🎬 影片腳本與分鏡設計</li>
          <li>🖼️ 由圖片生成影片的創意發想</li>
        </ul>
      </section>

      {/* Showcase Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">作品展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <img src="/work-youtube.jpg" alt="YouTube 精選" className="rounded-lg mb-3" />
              <p className="text-sm text-gray-600">Mason AI短片創作｜YouTube 頻道精選</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <img src="/work-yuyun.jpg" alt="雨韻合唱團" className="rounded-lg mb-3" />
              <p className="text-sm text-gray-600">雨韻合唱團官網製作與演出剪影</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/EtHZxSxz-pM"
                title="AI 影片展示3"
                allowFullScreen
              ></iframe>
              <p className="mt-3 text-sm text-gray-600">村民與機器合作｜AI 故事影片</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section className="max-w-4xl mx-auto py-12 text-center bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold mb-4">我的履歷</h2>
        <img
          src="/resume-banner.jpg"
          alt="履歷封面圖"
          className="rounded-lg mx-auto w-full max-w-xl mb-4"
        />
        <a href="/滿庭宏-2.pdf" download>
          <Button variant="default">下載 PDF 履歷</Button>
        </a>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-12 text-center bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold mb-4">聯絡我</h2>
        <p className="text-gray-600 mb-6 text-lg">歡迎合作洽詢，也可以透過下方平台支持我</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:your@email.com">
            <Button variant="outline">
              <Mail className="mr-2 w-4 h-4" /> Email
            </Button>
          </a>
          <a href="https://buymeacoffee.com/mason7278" target="_blank">
            <Button>Buy Me a Coffee</Button>
          </a>
          <a href="https://yuyun.org.tw" target="_blank">
            <Button variant="ghost">
              <Globe className="mr-2 w-4 h-4" /> 官方網站
            </Button>
          </a>
          <a href="https://youtube.com/@ai_mason" target="_blank">
            <Button variant="ghost">
              <Youtube className="mr-2 w-4 h-4" /> YouTube
            </Button>
          </a>
          <a href="https://www.instagram.com/meta_2046" target="_blank">
            <Button variant="ghost">
              <Instagram className="mr-2 w-4 h-4" /> Instagram
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
