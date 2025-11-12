const imageModules = import.meta.glob(
  "../assets/images/gallery/**/*.{jpeg,jpg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, ImageMetadata>;

const sortedPaths = Object.keys(imageModules).sort((a, b) => {
  const fileA = a.split("/").pop()!;
  const fileB = b.split("/").pop()!;
  return fileA.localeCompare(fileB, undefined, {
    numeric: true,
    sensitivity: "base",
  });
});

export const galleryImages = sortedPaths.map((path) => {
  const src = imageModules[path];
  const fileName = path.split("/").pop()!.split(".").shift()!;
  const title = fileName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { src, alt: title, title, path };
});
