import fs from "fs";
import path from "path";
import GalleryGrid from "./GalleryGrid";

function getImagesFrom(dirRel: string): { src: string; alt: string }[] {
  const dir = path.join(process.cwd(), "public", ...dirRel.split("/"));
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
      .sort((a, b) => {
        const ai = parseInt(a, 10);
        const bi = parseInt(b, 10);
        if (!isNaN(ai) && !isNaN(bi)) return ai - bi;
        return a.localeCompare(b);
      });
  } catch {
    files = [];
  }
  return files.map((f) => ({
    src: `/${dirRel}/${f}`,
    alt: `${f}`,
  }));
}

export default function PhotosGalleryPage() {
  const contestImages = getImagesFrom("img/events/contest-nov2024");
  const images = contestImages;
  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] transition-colors">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-6">
          Photo Gallery
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Highlights from our events and activities. Click any image to view full size.
        </p>
        <GalleryGrid images={images} />
      </section>
    </main>
  );
}


