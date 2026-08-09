"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const isArabic = language === "ar";

  const content = {
    ar: {
      headline: "تسخيرت الحومة، سلتك مضمونة",
      subheadline: "خضرة طازة من كيدّا بتاعك، الساعة اللي بغيتي",
      description:
        "تشري سلتك من الخضرة من فلاح الحومة بتاعك بدون وسيط. خضرة طازة، أثمنة عادلة، توصيل في 24-48 ساعة",
      cta: "شنو التطبيق ديالك",
      watchDemo: "شوف الديمو",
      downloadAPK: "حمّل APK",
      directDownload: "حمّل مباشرة",
      version: "الإصدار 1.0",
      features: [
        "خضرة طازة من كيدّا بتاعك",
        "أثمنة عادلة وشفافة",
        "توصيل سريع وآمن",
        "ضمان الجودة",
      ],
      forGrocers: "أنت فلاح؟",
      grocersText: "طيح بوابة جديدة للكسب. بيع مباشرة للعملاء بتاع الحومة بتاعك",
    },
    en: {
      headline: "Sella",
      subheadline: "Your Neighborhood's Fresh Produce, Guaranteed",
      description:
        "Buy fresh produce directly from your neighborhood grocer. Fresh vegetables, fair prices, delivery in 24-48 hours. No middleman.",
      cta: "Get the App",
      watchDemo: "Watch Demo",
      downloadAPK: "Download APK",
      directDownload: "Download Direct",
      version: "Version 1.0",
      features: [
        "Fresh produce from your neighborhood",
        "Fair & transparent prices",
        "Fast & secure delivery",
        "Quality guaranteed",
      ],
      forGrocers: "Are you a grocer?",
      grocersText:
        "Open a new door to income. Sell directly to your neighborhood customers",
    },
  };

  const t = content[language];

  return (
    <div className={`${styles.container} ${isArabic ? styles.rtl : styles.ltr}`}>
      {/* Language Toggle */}
      <div className={styles.languageToggle}>
        <button
          onClick={() => setLanguage("ar")}
          className={`${styles.toggleBtn} ${isArabic ? styles.active : ""}`}
          aria-label="Switch to Arabic"
        >
          العربية
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`${styles.toggleBtn} ${!isArabic ? styles.active : ""}`}
          aria-label="Switch to English"
        >
          English
        </button>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoCircle}>🥬</div>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>{t.headline}</h1>

          {/* Subheadline */}
          <h2 className={styles.subheadline}>{t.subheadline}</h2>

          {/* Description */}
          <p className={styles.description}>{t.description}</p>

          {/* Features */}
          <div className={styles.features}>
            {t.features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <a href="#download" className={styles.primaryBtn}>
              {t.cta}
            </a>
            <button
              className={styles.secondaryBtn}
              onClick={() => {
                const element = document.getElementById("demo");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.watchDemo}
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => {
                const element = document.getElementById("grocers");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.forGrocers}
            </button>
          </div>
        </div>

        {/* Background decorative element */}
        <div className={styles.backgroundDecor}></div>
      </section>

      {/* Download Section */}
      <section id="download" className={styles.downloadSection}>
        <div className={styles.downloadContent}>
          <h3 className={styles.downloadTitle}>{t.downloadAPK}</h3>
          <p className={styles.downloadVersion}>{t.version}</p>
          <p className={styles.downloadSubtitle}>
            {isArabic
              ? "متاح على Android. سيتم إطلاق iOS قريباً"
              : "Available on Android. iOS coming soon"}
          </p>
          <div className={styles.downloadBtnContainer}>
            <a
              href="/downloads/sella-1.0.apk"
              download="sella-1.0.apk"
              className={styles.downloadBtn}
              title="Direct APK download"
            >
              <span className={styles.downloadIcon}>⬇️</span>
              {t.directDownload}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sella"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.playStoreBtn}
              title="Download from Google Play Store"
            >
              <span className={styles.playStoreIcon}>🏪</span>
              Google Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className={styles.demoSection}>
        <div className={styles.demoContent}>
          <h3 className={styles.demoTitle}>
            {isArabic ? "شوف تطبيقنا في العمل" : "See the App in Action"}
          </h3>
          <p className={styles.demoSubtitle}>
            {isArabic
              ? "اكتشف كيفاش تشتري الخضرة بسهولة"
              : "Discover how easy it is to buy fresh produce"}
          </p>
          <div className={styles.videoContainer}>
            <video
              className={styles.demoVideo}
              controls
              width="100%"
              poster="/demo-poster.jpg"
            >
              <source src="/demo.mp4" type="video/mp4" />
              {isArabic
                ? "المتصفح ديالك ما تدعمش HTML5 video"
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </div>
      </section>

      {/* For Grocers Section */}
      <section id="grocers" className={styles.grocersSection}>
        <div className={styles.grocersContent}>
          <h3 className={styles.grocersTitle}>{t.forGrocers}</h3>
          <p className={styles.grocersText}>{t.grocersText}</p>
          <div className={styles.grocersFeatures}>
            <div className={styles.grocerFeature}>
              <span className={styles.grocerIcon}>📱</span>
              <p>
                {isArabic
                  ? "إدارة سهلة للطلبات والتوصيل"
                  : "Easy order and delivery management"}
              </p>
            </div>
            <div className={styles.grocerFeature}>
              <span className={styles.grocerIcon}>💰</span>
              <p>
                {isArabic
                  ? "زيادة الدخل من المبيعات المباشرة"
                  : "Increase income from direct sales"}
              </p>
            </div>
            <div className={styles.grocerFeature}>
              <span className={styles.grocerIcon}>📊</span>
              <p>
                {isArabic
                  ? "تحليلات تساعدك على النمو"
                  : "Analytics to help you grow"}
              </p>
            </div>
          </div>
          <a
            href="mailto:contact@sella.ma"
            className={styles.contactBtn}
          >
            {isArabic ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {isArabic
            ? "© 2024 Sella. جميع الحقوق محفوظة."
            : "© 2024 Sella. All rights reserved."}
        </p>
      </footer>
    </div>
  );
}
