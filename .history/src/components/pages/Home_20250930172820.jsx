import React from "react";
// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-center font-bold">{t("welcome")}</h2>
    </div>
  );
}

export default Home;
