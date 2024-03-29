import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-8 bg-gradient-to-r from-gray-950 via-red-600 to-red-700">
      <Giscus
        id="comments"
        repo="amankohare0514/portfolio-2024"
        repoId="R_kgDOK-tlZg"
        category="Q&A"
        categoryId="DIC_kwDOK-tlZs4CcFjx"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark_high_contrast"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
