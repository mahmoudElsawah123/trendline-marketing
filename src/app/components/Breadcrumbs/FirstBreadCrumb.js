import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FirstBreadCrumb = () => {
    const t = useTranslations("FirstBreadCrumb");

  return (
    <div className="container my-5">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href={'/'}>{t('Home')}</Link>
          </li>
          <li>
            <Link href={'/'}>{t('All_Categories')}</Link>
          </li>
          <li className="text-secondary">{t('Bags')}</li>
        </ul>
      </div>
    </div>
  );
};

export default FirstBreadCrumb;
